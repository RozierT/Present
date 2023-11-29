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
        const [postsToShow, setPostsToShow] = useState([]);

        const [amountToShow, setAmountToShow] = useState(1);

        const addToAmountToShow = () => {       
           setAmountToShow(amountToShow + 1);
           }     

           window.addEventListener('scroll', () => {
                const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
                
                let scrollPosition = scrollTop + clientHeight;
                scrollPosition = parseInt(scrollPosition);
                let variableScrollHeight = parseInt(scrollHeight);
                if (scrollPosition + 500 > variableScrollHeight || scrollPosition===variableScrollHeight ) {
                        addToAmountToShow()
                      
                        
                }
              });


        // waits until first query is finished before running second query
        useEffect(() => {
               
                if (!flairsLoading && userFlairs) {
                        const params = generateRequestParameters(userFlairs.userPrefs);
                        setWeightedPostParams(params)
                }
        }, [flairsLoading, userFlairs, amountToShow]);

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
        
                        for (let i = 0; i < 1; i++) {
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

        useEffect(() => {
                if (queriedPostsData) {  
                        setPostsToShow([...postsToShow, ...queriedPostsData.getPostsById])
                }
        }, [queriedPostsData])
        // THIS IS THE POST DATA TO BE PASSED INTO DISPLAYING COMPONENT
        
        
//then we need to display the post data in a feedCompononent
        //this will be done by using the 'PostdataArray' to populate the feedComponent
        //this will be in the return statement for this component

// we will need to store the results of the api call in state
// we will need a solution for adding more posts to the feed when the user clicks the 'load more' button


        return (
                <>
                <Header />
                <div className="bg-bkg-1 text-content">
                        {!postsToShow ? (
                        <div>Loading...</div>
                        ) : (
                        <div>
                                <Feed dataArray={postsToShow} type={"post"} feedToUse={"posts"} />
                                { queriedPostsError ? (<p>Error! {queriedPostsError.message}</p>): (<div className='h-60 bg-bkg-1'></div>) }
                        </div>
                        )}
                </div>
                
                <Footer />
                </>
        );
};

export default FeedPage;
