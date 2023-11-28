import Header from "../components/Headers";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useQuery, useLazyQuery } from '@apollo/client'
import { GET_FLAIR_SCORES, GET_WEIGHTED_POSTS } from "../utils/queries";
import { generateRequestParameters, getChosenPostId } from "../utils/algorithms/genRequestParams";



const FeedPage = () => {
        // k so we need stuff...
        // we need to bring in the user preferences from the database
        const { loading: flairsLoading, data: userFlairs, error: flairsError } = useQuery(GET_FLAIR_SCORES);
        // this will de the 'userPrefArray'
        // then we need to use those preferences to make a query to the api
        // this will be done by rolling these 'dice'


// then we need to make the api call
// this will be done by using the 'requestParameters' to make the api call 
// this is an array that contains the 'tag', 'dateRange', and 'recencyScore'
// these will be our filters for the api call
        const [getWeightedPosts, { loading: weightedPostsLoading, data: weightedPostsData, error: weightedPostsError }] = useLazyQuery(GET_WEIGHTED_POSTS);

        useEffect(() => {
                if (!flairsLoading && userFlairs) {
                        const weightedPostParams = generateRequestParameters(userFlairs.userPrefs);

                        // console.log('weighted params: ', weightedPostParams)

                        getWeightedPosts({ variables: {
                                flair: weightedPostParams.tag,
                                recencyScore: parseInt(weightedPostParams.recencyScore),
                                dateRange: weightedPostParams.dateRange
                        } });


                }
        }, [flairsLoading, userFlairs, getWeightedPosts]);

        let chosenPostId
// once array of weighted post ids comeback, format results to be passed into getChosenPostId

        useEffect(() => {
                if (weightedPostsData) {
                        const formattedPostIds = weightedPostsData.getWeightedPosts.map((postResult) => postResult._id)

                        console.log('# of posts: ', formattedPostIds.length)
                        
                        chosenPostId = getChosenPostId(formattedPostIds)

                        console.log("chosen post id inside: ", chosenPostId)
                }
        }, [weightedPostsData])

// then we make a call to the api to get the post data
        // const getPostData = (postId) => {
        //   // this will be the api call 
        // return postData
        // }


        // let PostdataArray = [];
// then we need to stick the post data into an array
        // const addPostDataToArray = (postData) => {
        //   // this pushes the post data into an array 
        // }


// we need to run all of this on page load 7 times
// this will be done by using a 'useEffect' hook

//then we need to display the post data in a feedCompononent
        //this will be done by using the 'PostdataArray' to populate the feedComponent
        //this will be in the return statement for this component

// we will need to store the results of the api call in state
// we will need a solution for adding more posts to the feed when the user clicks the 'load more' button


        return (
                <>
                <Header />
                <div className="bg-bkg-1 text-content">
                        {weightedPostsLoading ? (
                        <div>Loading...</div>
                        ) : (
                        <div>
                                { weightedPostsError ? (<p>Error! {weightedPostsError.message}</p>): (<h2>Some data should have been sent back!</h2>) }
                        </div>
                        )}
                </div>
                <Footer />
                </>
        );
};

export default FeedPage;
