import Header from "../components/Headers";
import Footer from "../components/Footer";

import { useQuery } from '@apollo/client'
import { GET_FLAIR_SCORES, GET_WEIGHTED_POSTS } from "../utils/queries";
import { generateRequestParameters, getChosenPostId } from "../utils/algorithms/genRequestParams";



const FeedPage = () => {
        // k so we need stuff...
        // we need to bring in the user preferences from the database
        const { loading, data: userFlairs , error } = useQuery(GET_FLAIR_SCORES)
        // this will de the 'userPrefArray'
        // then we need to use those preferences to make a query to the api
        // this will be done by rolling these 'dice'

        console.log('userFlairs: ', userFlairs)
        if (!loading) {

                const weightedPostParams =  generateRequestParameters(userFlairs.userPrefs)

                console.log('weightPostParams: ', weightedPostParams)
        }
        
// then we need to make the api call
// this will be done by using the 'requestParameters' to make the api call 
// this is an array that contains the 'tag', 'dateRange', and 'recencyScore'
// these will be our filters for the api call

        // const makeApiCall = (requestParameters) => {
        //   // this will be the api call 
        //} 


// then we need to choose the reults from the api call to display
        // const getChosenPostId = (postIds) => {
        //   let randomIndex = Math.floor(Math.random() * postIds.length);
        //   let postId = postIds[randomIndex];
        //   return postId
        // }


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
                        {loading ? (
                        <div>Loading...</div>
                        ) : (
                        <div>
                                { error ? (<p>Error! {error.message}</p>): (<h2>Some data should have been sent back!</h2>) }
                        </div>
                        )}
                </div>
                <Footer />
                </>
        );
};

export default FeedPage;
