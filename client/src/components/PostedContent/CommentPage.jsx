import Feed from "./Feed";
import Post from "./PostBody";
import { useQuery } from '@apollo/client';
// import { GET_POSTS } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useState } from "react";
import alterUserArray from "../../utils/algorithms/alterUserPref";
import { GET_FLAIR_SCORES } from "../../utils/queries";
import { UPDATE_USER_PREFS } from "../../utils/mutations";
import { useMutation } from '@apollo/client'

const CommentPage = ({ postId, tempPostDataArray }) => {
    // this is it, this is where we will query the database for the comments that are associated with the post id!!!!!!!!!!!!!
    // that data array will go into the feed component
    // the feed component will render the post component for each comment in the array
    // the post component will render the post text component for each comment in the array






  const comment = () => {
    console.log('share');
    
  };
    return (
        <div className="" onClick={comment}>
            {/* temp comment showing based on id for demo purposes */}
            
            
            {tempPostDataArray.map((item, i) => {
                 return( 
                  <div key={i}>
                    <p>{tempPostDataArray[i]._id}</p>
                  </div>)
                  }
                )}
            
            
            {/* END temp comment showing  */}
            
            
            {/* <Feed feedToUse="comment" type={"comment"} dataArray={tempPostDataArray} extraStyles={" border-t-4 border-b-4 border-black"}/> */}
        </div>
    );
    }
export default CommentPage;