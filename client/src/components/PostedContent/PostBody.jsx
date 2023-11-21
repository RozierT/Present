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
    <div className="max-w-screen-95 mx-auto bg-accent-1 shadow-md rounded-md overflow-hidden">
        <PostHeader data={data}/>
      <div className="flex-1 p-0">

        {/* this shows the image and is only show if the showcontent boolean it true */}
        {showContent &&<PostContent data={data}/>}

        {/* this shows the interactions (like, dislike, share) and is only show if the showcontent boolean it true */}
        {showContent && <InteractionBar userId={'test'} postId={data.postId} data={data}/>}

        {/* this shows the text data of the post and will appear on every post type */}
        <PostText data={data} type={type}/>
        
       
      </div>
    </div>
  );
};

export default Post;