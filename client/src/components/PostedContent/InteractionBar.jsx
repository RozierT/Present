import React, { useState, useEffect } from 'react';
import MyButton from '../profile/MyButton';
import { HeartStraight, ArrowDown, Export } from '@phosphor-icons/react';

const InteractionBar = ({ userId, postId, data }) => {
  const like = () => {
    console.log('like');
  };
  const dislike = () => {
    console.log('dislike');
  };
  const share = () => {
    console.log('share');
  };

  return (
    <div className='flex justify-between bg-bkg-2 border-t-2 border-b-2 border-accent-2'>
      <div className='flex'>
        <MyButton
          size='xSmall'
          type='empty'
          content={<HeartStraight size={32} color='#999999' weight='fill' />}
          action={like}
          shape='circle'
        />
        <div className='likeCount'>{data.likes}</div>

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
