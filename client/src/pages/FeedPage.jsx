import Header from "../components/Headers";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from '@apollo/client'
import { GET_FLAIR_SCORES, GET_WEIGHTED_POSTS, GET_POSTS_BY_ID } from "../utils/queries";
import { generateRequestParameters, getChosenPostId } from "../utils/algorithms/genRequestParams";
import Feed from "../components/PostedContent/Feed";



const FeedPage = () => {
        const { loading: flairsLoading, data: userFlairs, error: flairsError } = useQuery(GET_FLAIR_SCORES);
        const [getWeightedPosts, { loading: weightedPostsLoading, data: weightedPostsData, error: weightedPostsError }] = useLazyQuery(GET_WEIGHTED_POSTS);
        const [weightedPostParams, setWeightedPostParams] = useState(null);
        const [randomPostIdArray, setRandomPostIdArray] = useState([]);

        // waits until first query is finished before running second query
        useEffect(() => {
                if (!flairsLoading && userFlairs) {
                        const params = generateRequestParameters(userFlairs.userPrefs);
                        setWeightedPostParams(params)
                }
        }, [flairsLoading, userFlairs]);

        useEffect(() => {
                if (weightedPostParams) {
                        getWeightedPosts({ variables: {
                                flair: weightedPostParams.tag,
                                recencyScore: parseInt(weightedPostParams.recencyScore),
                                dateRange: weightedPostParams.dateRange
                        } });
                }
        }, [weightedPostParams, getWeightedPosts])

// once array of weighted post ids comeback, format results to be passed into getChosenPostId and generate an array of random ids
        useEffect(() => {
                if (weightedPostsData) {
                        const formattedPostIds = weightedPostsData.getWeightedPosts.map((postResult) => postResult._id)
                        let randomPostIDSet = new Set();
        
                        for (let i = 0; i < 7; i++) {
                                let id = getChosenPostId(formattedPostIds);
                                
                                while (randomPostIDSet.has(id)) {
                                        id = getChosenPostId(formattedPostIds);
                                }
                                randomPostIDSet.add(id);
                        }
                        
                        setRandomPostIdArray(Array.from(randomPostIDSet));
                }
        }, [weightedPostsData]);


// then we make a call to the api to get the post data
        const [getQueriedPosts, { loading: queriedPostsLoading, data: queriedPostsData, error: queriedPostsError }] = useLazyQuery(GET_POSTS_BY_ID);

        useEffect(() => {
                if (randomPostIdArray.length > 0) {

                        getQueriedPosts({
                                variables: { ids: randomPostIdArray }
                        })
                }
        }, [randomPostIdArray])


        // THIS IS THE POST DATA TO BE PASSED INTO DISPLAYING COMPONENT
        console.log('queried posts: ', queriedPostsData)

//then we need to display the post data in a feedCompononent
        //this will be done by using the 'PostdataArray' to populate the feedComponent
        //this will be in the return statement for this component

// we will need to store the results of the api call in state
// we will need a solution for adding more posts to the feed when the user clicks the 'load more' button


        return (
                <>
                <Header />
                <div className="bg-bkg-1 text-content">
                        {!queriedPostsData ? (
                        <div>Loading...</div>
                        ) : (
                        <div>
                                <Feed dataArray={queriedPostsData.getPostsById} type={"post"} feedToUse={"posts"} />
                                { queriedPostsError ? (<p>Error! {queriedPostsError.message}</p>): (<h2>Some data should have been sent back!</h2>) }
                        </div>
                        )}
                </div>
                <Footer />
                </>
        );
};

export default FeedPage;
