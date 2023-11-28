import React, { useState, useEffect } from 'react';
import MyButton from '../profile/MyButton';
import { HeartStraight, ArrowDown, Export, Target } from '@phosphor-icons/react';
import { UPDATE_USER_PREFS } from '../../utils/mutations'
import { useQuery } from '@apollo/client'
import { GET_FLAIR_SCORES } from "../../utils/queries";
import alterUserArray from "../../utils/algorithms/alterUserPref"

const InteractionBar = ({ userId, postId, likes, tags }) => {

  const { loading, data: userFlairs , error } = useQuery(GET_FLAIR_SCORES)
  let action


  // this is the logic for the like buttons appearance and functionality
  // const likedByViewer = likes.find((like) => like.user.id === viewerId) !== undefined;
// this will be the proper way of calling this in final version
//!!!!!!!!!!!
//state for if the post is liked by the viewer
const [likedByViewer, setLikedByViewer] = useState(false);

const toggleLikedByViewer = () => {
setLikedByViewer(!likedByViewer)
}


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

const buildNotificationAndUpdatePost = (action, postId) => {
//   let notification = {
//     action: action,
//     userToNotifyId: userId
//   }

  // try {
  //     const { data: userData } = await buildNotification({
  //         variables: { notification },
  //     });
  // } catch (error) {
  //     console.error('updating post stats error: ', error)
  // }
  // try {
  //     const { data: userData } = await updatePostStats({
  //         variables: { notification },
  //     });
  // } catch (error) {
  //     console.error('updating post stats error: ', error)
  // }
};
 

const buildCommentAndNotify = (commentText, postId) => {
  //   let comment = {
  //     commentText: action,
  //     postId: postId
  //   }
  //let notification = {
    //     action: action,
    //     userToNotifyId: userId
    //   }

    // try {
    //     const { data: userData } = await buildNotification({
    //         variables: { notification },
    //     });
    // } catch (error) {
    //     console.error('updating post stats error: ', error)
    // }
    // try {
    //     const { data: userData } = await updatePostComments({
    //         variables: { comment },
    //     });
    // } catch (error) {
    //     console.error('updating post Comments error: ', error)
    // }
  
  };
  



const like = () => {
  console.log('like');
  action = "like"
  handleAction(action)
  buildNotification(action, postId)
};
const dislike = () => {
  console.log('dislike');
  action = "dislike"
  handleAction(action)
  buildNotification(action, postId)

};
const share = () => {
  console.log('share');
  action = "share"
  handleAction(action)
  buildNotification(action, postId)

};
  return (
    <div className='flex justify-between bg-bkg-2 border-t-2 border-b-2 border-accent-2'>
       <div className='flex'>
        <div onClick={like}>
     {likedByViewer ? (
        <MyButton
          size='xSmall'
          type='empty'
          content={<HeartStraight size={32}  weight='fill' />}
          action={toggleLikedByViewer}
          shape='circle'
        />
      ) : (
        <MyButton
          size='xSmall'
          type='empty'
          content={<HeartStraight size={32}  />}
          action={toggleLikedByViewer}
          shape='circle'
        />
      )}
     </div>
    
        
        <div className='likeCount'>{likes}</div>
        {/*  this will be the proper way of calling this in final version */}
        {/* <div className='likeCount'>{likes.length}</div> */}


        <MyButton
          size='xSmall'
          type='empty'
          content={<ArrowDown size={32} color='#999999' />}
          action={dislike}
          shape='circle'
        />
      </div>

      <MyButton
        size='medium'
        type='empty'
        content={<Export size={32} color='#999999' />}
        action={share}
        shape='circle'
      />
    </div>
  );
};

export default InteractionBar;
