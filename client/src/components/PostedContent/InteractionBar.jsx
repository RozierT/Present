import React, { useState, useEffect } from 'react';
import MyButton from '../profile/MyButton';
import { HeartStraight, ArrowDown, Export } from '@phosphor-icons/react';

const InteractionBar = ({ userId, postId, likes, tags }) => {
  let action
  const like = () => {
    console.log('like');
    action = "like"
  };
  const dislike = () => {
    console.log('dislike');
  };
  const share = () => {
    console.log('share');
  };

  // get user preferences from database

  // for as many tags as a are on post run alterPreferences function

  // send back to database as mutated array

//!!!!!!!!!!!
  // this is the logic for the like buttons appearance and functionality
  // const likedByViewer = likes.find((like) => like.user.id === viewerId) !== undefined;
// this will be the proper way of calling this in final version
//!!!!!!!!!!!
//state for if the post is liked by the viewer
const [likedByViewer, setLikedByViewer] = useState(false);

const toggleLikedByViewer = () => {
setLikedByViewer(!likedByViewer)
}

  return (
    <div className='flex justify-between bg-bkg-2 border-t-2 border-b-2 border-accent-2'>
       <div className='flex'>
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
