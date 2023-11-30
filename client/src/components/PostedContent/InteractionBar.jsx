import React, { useState, useEffect } from 'react';
import MyButton from '../profile/MyButton';
import { HeartStraight, ArrowDown, Export, Target, CodeSimple } from '@phosphor-icons/react';
import { UPDATE_USER_PREFS } from '../../utils/mutations'
import { useQuery, useMutation } from '@apollo/client'
import { GET_FLAIR_SCORES } from "../../utils/queries";
import alterUserArray from "../../utils/algorithms/alterUserPref"

const InteractionBar = ({ userId, postId, likes, tags }) => {

  const copyContent = async () => {
    const text = window.location.href;
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
  
  const { loading, data: userFlairs , error } = useQuery(GET_FLAIR_SCORES)
  let action
  let tagsToReference = []
  if (userFlairs) {
  tagsToReference = [...userFlairs.userPrefs]
  }
  const [updateUserPrefs] = useMutation(UPDATE_USER_PREFS,
    {
refetchQueries: [{ query: GET_FLAIR_SCORES }],
    }
    );
  // this is the logic for the like buttons appearance and functionality
  // const likedByViewer = likes.find((like) => like.user.id === viewerId) !== undefined;
// this will be the proper way of calling this in final version
//!!!!!!!!!!!
//state for if the post is liked by the viewer
const [likedByViewer, setLikedByViewer] = useState(false);
let likeCount = likes.length


const toggleLikedByViewer = () => {
setLikedByViewer(!likedByViewer)
if (likedByViewer) {
  likeCount = likes.length
} else {
  likeCount+= 1
}
console.log('likeCount: ', likeCount)
}


const handleAction = async (action) => {
  console.log('tagsToReference: ', tagsToReference)
  console.log('data to be sent: ',tags)
let userChoices =[]
tags.forEach(tag => {
      userChoices.push({tag})
  })
  console.log('userChoices: ', userChoices)
let variableTags = [...tagsToReference]
console.log('variableTags: ', variableTags)
for (let i = 0; i < tags.length; i++) {
  variableTags = alterUserArray( variableTags, action, tags[i])
  console.log('new userPrefsArray: ', variableTags)
}
tagsToReference = [...variableTags]
console.log('tagsToReference: ', tagsToReference)
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

console.log('newUserFlairs: ', flairsToUpdate)
  try {
      const { data: userData } = await updateUserPrefs({
          variables: { input: flairsToUpdate },
      });
      console.log('userData: ', userData)
  } catch (error) {
      console.error('updating flairs error: ', error)
  }

};

const buildNotificationAndUpdatePost = (action, postId) => {
//   let notification = {
//     action: action,
//     userToNotifyId: userId
//   }
// if (likedByViewer) {
//   action = "unlike"
//  } else {
//   action = "like"

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
 




const like = () => {
  console.log('like');
  action = "like"
  handleAction(action)
  buildNotificationAndUpdatePost(action, postId)
};
const dislike = () => {
  console.log('dislike');
  action = "dislike"
  handleAction(action)
  buildNotificationAndUpdatePost(action, postId)

};
const share = () => {
  console.log('share');
  action = "share"
  handleAction(action)
  copyContent()

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
    
        
        <div className='likeCount'>{likeCount}</div>
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
