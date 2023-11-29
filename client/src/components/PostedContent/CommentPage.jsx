import Feed from "./Feed";
import Post from "./PostBody";
import { useLazyQuery } from '@apollo/client';
import {  useEffect } from "react";
import { GET_POST_COMMENTS } from "../../utils/queries";

const CommentPage = ({ postId, tempPostDataArray }) => {
    // this is it, this is where we will query the database for the comments that are associated with the post id!!!!!!!!!!!!!
    // that data array will go into the feed component
    // the feed component will render the post component for each comment in the array
    // the post component will render the post text component for each comment in the array

const [getComments, { loading: commentLoading, data: commentData , error: commentError }] = useLazyQuery(GET_POST_COMMENTS)

    useEffect(() => {
      if (tempPostDataArray) {
        // console.log('temp array: ', tempPostDataArray)
        const formattedCommentIds = tempPostDataArray.map((id) => id._id)
        // console.log('formatted array: ', formattedCommentIds)
        getComments({
          variables: { ids: formattedCommentIds }
        })
      }
    }, [])
  
    //getting child comments has not yet been solved and will need some work but remember that is NOT MVP only work on if comment MVP is done and nothing else is in need of work (meaning the comments are displayed on the post page)

  const comment = () => {
    console.log('share');
    
  };

    return (
        <div className="" onClick={comment}>
          {!commentData ? (<div>Loading...</div>) : (
            <Feed feedToUse="comment" type={"comment"} dataArray={commentData.getComments} extraStyles={" border-t-4 border-b-4 border-black"}/>
          )}
        </div>
    );
    }
export default CommentPage;