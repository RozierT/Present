import React from 'react';
import MyButton from '../profile/MyButton';
import ImageIcon from '../profile/ImageIcon';
import InteractionBar from './InteractionBar';
import { useState } from 'react';
import Feed from './Feed';
import PostText from './PostText';
import PostContent from './PostContent';
import PostHeader from './PostHeader';

const Post = ({showContent, type, data}) => {

type === 'post'?
 showContent = true :
 showContent = false;

  return (
    <div className="max-w-screen-95 mx-auto bg-bkg-2 shadow-md overflow-hidden ">
        <div className='bg-bkg-2'>
        <PostHeader userOfOrigin={data.userOfOrigin} profilePicture={data.profilePicture} date={data.date} type={type}/>
        </div>
      <div className="flex-1 p-1">

        {/* this shows the image and is only show if the showcontent boolean it true */}
        
        {type==="post" && <PostContent tags={data.tags} content={data.content}/>}

        {/* this shows the interactions (like, dislike, share) and is only show if the showcontent boolean it true */}
        {type==="post" && <InteractionBar userId={'test'} postId={data.postId} likes={data.likes} tags={data.tags}/>}

        {/* this shows the text data of the post and will appear on every post type */}
        <PostText textContent={data.textContent} type={type} comments={data.comments} postId={data.postId} profilePicture={data.profilePicture}/>

      </div>
    </div>
  );
};

export default Post;