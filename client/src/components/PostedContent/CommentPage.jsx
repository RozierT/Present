import Feed from "./Feed";
import Post from "./PostBody";
import { useQuery } from '@apollo/client';
// import { GET_POSTS } from "../../utils/queries";
import { useParams } from "react-router-dom";
import { useState } from "react";
import alterUserArray from "../../utils/algorithms/alterUserPref";


const CommentPage = ({ postId, tempPostDataArray }) => {
    // this is it, this is where we will query the database for the comments that are associated with the post id!!!!!!!!!!!!!
    // that data array will go into the feed component
    // the feed component will render the post component for each comment in the array
    // the post component will render the post text component for each comment in the array





const { loading, data: userFlairs , error } = useQuery(GET_FLAIR_SCORES)
let action
  
    //getting child comments has not yet been solved and will need some work but remember that is NOT MVP only work on if comment MVP is done and nothing else is in need of work (meaning the comments are displayed on the post page)
    
const handleAction = async (action) => {
    console.log('data to be sent: ',selectedTags)
  let userChoices =[]
    selectedTags.forEach(tag => {
        userChoices.push({tag: tag})
    })
  let variableTags = [...userFlairs.userPrefs]
  for (let i = 0; i < tags.length; i++) {
    variableTags = alterUserArray( variableTags, action, tags[i])
    console.log('new userPrefsArray: ', variableTags)
  }
  let newUserFlairs =
  {
  userPrefs: variableTags
  }
  
  const flairsToUpdate = newUserFlairs.userPrefs.map(flair => {
  return {
    tag: flair.tag,
    score: flair.score
  }
  })
  console.log('newUserFlairs: ', newUserFlairs)
    try {
        const { data: userData } = await updateUserPrefs({
            variables: { input: flairsToUpdate },
        });
    } catch (error) {
        console.error('updating flairs error: ', error)
    }
  
  };
  


  const comment = () => {
    console.log('share');
    action = "comment"
    handleAction(action)
  };

    return (
        <div className="" onclick={comment}>
            <Feed feedToUse="comment" type={"comment"} dataArray={tempPostDataArray} extraStyles={" border-t-4 border-b-4 border-black"}/>
        </div>
    );
    }
export default CommentPage;