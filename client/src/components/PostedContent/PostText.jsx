import React, { useState } from 'react';
import MyButton from '../profile/MyButton';
import { ChatText } from '@phosphor-icons/react';
import PostHeader from './PostHeader';
import ImageIcon from '../profile/ImageIcon';
import placeHoldImage from "../../assets/images/placeholdIcon.png";
import CommentPage from './CommentPage';
import Post from './PostBody';






const PostText = ({ textContent, comments, type, postId, profilePicture }) => {
console.log(type)
const commentAction = () => {
    console.log('comment page will open and display comments based the te postId, these will be displayed using a query in the feed component');
    }
const [showComments, setShowComments] = useState(false);

const toggleComments = () => {
    setShowComments(!showComments);
    }

  return (
      <>   
      <div className="text-base flex justify-between pl-4 pt-2 pr-4 pb-4 bg-bkg-2 ">
            {textContent}
      </div>
          
       { type === 'post'? <>
          <div className='bg-bkg-2  w-full flex justify-center pt-4' >
                <div className='w-[90%] p-2 border border-accent-2 mb-4 active:bg-bkg-1' style={{borderRadius:"32px"}} onClick={toggleComments}>
                    <div className='flex justify-start'>
                    <div className='pl-4'><h1>Comments</h1></div>  
                    <div><p className="font-thin pl-2">
                        {comments.length}</p></div>
                    </div>
                    <div className='flex justify-start mt-2 pt-1 pb-1' >

                        <div className='pl-4' >
                            <ImageIcon content={profilePicture} shape={"circle"} size={"xSmall"} bordered={true}/>
                        </div>
                        <div className='w-full pl-6 pr-4'>
                            <MyButton shape={"circle"} type={"bordered"} content={"leave a comment"} size={"full"} action={commentAction}/>
                        </div>
                    </div>
                </div>  
                </div>
{showComments && <div>
       
            <CommentPage postId={postId} tempPostDataArray={comments} />
        </div>}
        
         </>  : null}
      </>
  )
}

export default PostText;
