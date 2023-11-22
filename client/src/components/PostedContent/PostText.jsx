import React, { useState } from 'react';
import MyButton from '../profile/MyButton';
import { PaperPlaneTilt, CaretUp } from '@phosphor-icons/react';
import ImageIcon from '../profile/ImageIcon';
import CommentPage from './CommentPage';

const PostText = ({ textContent, comments, type, postId, profilePicture }) => {
 const [inputValue, setInputValue] = useState('');
 const [showComments, setShowComments] = useState(false);

 const handleInputChange = (event) => {
   setInputValue(event.target.value);
 };

 const handleLog = () => {
   console.log(inputValue);
 };

 const toggleComments = () => {
   setShowComments(!showComments);
 };

 const commentAction = () => {
   console.log('comment page will open and display comments based on the postId, these will be displayed using a query in the feed component');
 };

 const CommentSection = () => (
   <>
     <div className='bg-bkg-2 w-full flex justify-center pt-4'>
       <div className='w-[100%] p-2 border-t border-accent-2 mb-2'>
         <div className='flex justify-start'>
           <div className='pl-4' onClick={toggleComments}>
             <h1>Comments</h1>
           </div>
           <div>
             <p className="font-thin pl-2">
               {comments.length}
             </p>
           </div>
         </div>
         <div>
           <div className='flex justify-center m-2'>
             <div>
               <ImageIcon content={profilePicture} shape={"circle"} size={"xSmall"} bordered={true}/>
             </div>
             <input 
               className="border-2 border-accent-2 rounded-md outline-none focus:border-content bg-bkg-2 ml-2
               mr-2 w-full" 
               type="text" 
               placeholder=" Add a comment..." 
               value={inputValue}
               onChange={handleInputChange}
             />
             <PaperPlaneTilt onClick={handleLog} size={36} color="#e6e6e6" weight="light" />
           </div>
         </div>
       </div>
     </div>
     {showComments && (
       <div className="mt-">
         <MyButton type={""} content={<CaretUp size={28} color="#e6e6e6" weight="fill" />} action={toggleComments}/>
         <CommentPage postId={postId} tempPostDataArray={comments} />
       </div>
     )}
   </>
 );

 return (
   <>
     <div className="text-base flex justify-between pl-4 pt-2 pr-4 pb-4 bg-bkg-2 ">
       {textContent}
     </div>
     {type === 'post' && <CommentSection />}
   </>
 );
}

export default PostText;
