import React, { useState } from 'react';
import MyButton from '../profile/MyButton';
import { ChatText } from '@phosphor-icons/react';
import PostHeader from './PostHeader';
import ImageIcon from '../profile/ImageIcon';
import placeHoldImage from "../../assets/images/placeholdIcon.png";
import CommentPage from './CommentPage';
import Post from './PostBody';
import { PaperPlaneTilt } from '@phosphor-icons/react';
import { CaretUp } from '@phosphor-icons/react';




const PostText = ({ textContent, comments, type, postId, profilePicture }) => {


    
        const [inputValue, setInputValue] = useState('');
       
        const handleInputChange = (event) => {
          setInputValue(event.target.value);
        };
       
        const handleLog = () => {
          console.log(inputValue);
        };



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
                <div className='w-[100%] p-2 border-t border-accent-2 mb-2' >
                    <div className='flex justify-start'>
                    <div className='pl-4' onClick={toggleComments}><h1>Comments</h1></div>  
                    <div><p className="font-thin pl-2">
                        {comments.length}</p></div>
                    </div>
                    <div>

                        
                        <div className='flex justify-center m-2'>
                <div className='' >
                            <ImageIcon content={profilePicture} shape={"circle"} size={"xSmall"} bordered={true}/>
                        </div>
                        <input 
       className="border-2 border-accent-2 rounded-md  outline-none focus:border-content bg-bkg-2 ml-2
       mr-2 w-full" 
       type="text" 
       placeholder="  Add a comment..." 
       value={inputValue}
       onChange={handleInputChange}
     />
     <PaperPlaneTilt onClick={handleLog} size={36} color="#e6e6e6" weight="light" />
   </div>

                        
                    </div>
                </div>  
                
                </div>
               


{showComments && <div>
    <div className="mt-">
       <MyButton type={""} content={<CaretUp size={28} color="#e6e6e6" weight="fill" />} action={toggleComments}/>
       </div>
            <CommentPage postId={postId} tempPostDataArray={comments} />
        </div>}
        
         </>  : null}
      </>
  )
}

export default PostText;
