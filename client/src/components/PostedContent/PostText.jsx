import React, { useState } from 'react';
import MyButton from '../profile/MyButton';
import { PaperPlaneTilt, CaretUp, XCircle } from '@phosphor-icons/react';
import ImageIcon from '../profile/ImageIcon';
import CommentPage from './CommentPage';
import { useQuery } from '@apollo/client';
import alterUserArray from "../../utils/algorithms/alterUserPref";
import { GET_FLAIR_SCORES } from "../../utils/queries";
import { UPDATE_USER_PREFS } from "../../utils/mutations";
import { useMutation } from '@apollo/client'
import { CREATE_COMMENT } from '../../utils/mutations';


const PostText = ({ textContent, comments, type, postId, profilePicture, tags}) => {
 const [commentValue, setCommentValue] = useState('');
 const [showComments, setShowComments] = useState(false);

 const handleCommentValueChange = (event) => {
  event.preventDefault();
  setCommentValue(event.target.value);
 };


   

    const [createComment] = useMutation(CREATE_COMMENT, {
      onCompleted: (data) => {
          console.log(data);
          // navigate('/profile');
      },
  
  });
  
  
  const profileFromStorage = JSON.parse(localStorage.getItem('profile'));
  
      const handleSubmit = async (event) => {
          event.preventDefault();
          if (!commentValue ) {
              return alert('Missing values!')
          }
  
           try {
           const { data: userData } = await createComment({
               variables: { username: profileFromStorage.username, textContent: commentValue, profilePicture: profileFromStorage.profilePicture, postId: postId },
           });
           setCommentValue('')
           } catch (error) {
               console.error('creating post error: ', error)
           }
           
      }
  
  
    
    



    const { loading, data: userFlairs , error } = useQuery(GET_FLAIR_SCORES)
    let action
    
    const [updateUserPrefs] = useMutation(UPDATE_USER_PREFS,
      {
    refetchQueries: [{ query: GET_FLAIR_SCORES }],
      }
      );
        //getting child comments has not yet been solved and will need some work but remember that is NOT MVP only work on if comment MVP is done and nothing else is in need of work (meaning the comments are displayed on the post page)
        let selectedTags
      if (tags) {
         selectedTags = [...tags ]
      }
        
    const handleAction = async (action) => {
        console.log('data to be sent: ', selectedTags)
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
      
    






 const toggleComments = () => {
   setShowComments(!showComments);
   action = "comment"
    handleAction(action)
 };

 const commentAction = () => {
   console.log('comment page will open and display comments based on the postId, these will be displayed using a query in the feed component');
 };

 const dismissNotification = () => {
  console.log('dismissed notification');
  // this will be the mutation to dismiss a notification
  // this will use the postId to find the notification and then remove it from the database
};






 return (
  <>
    {type === 'comment' ? (
      <div className="text-base flex justify-between pl-4 pt-2 pr-4 pb-4 bg-bkg-2 ">
        {textContent}
      </div>
    ) : type === 'notification' ? (
      <div className="text-base flex justify-between pl-4  pr-4 pb-2 bg-bkg-2 ">
        <div>
        {textContent}
        </div>
        <div className="flex justify-end">
          <MyButton shape={"circle"} type={"empty"} content={<XCircle size={28}  />} action={dismissNotification}/>
          </div>
      </div>
    ) : (
      <div className="text-base flex justify-between pl-4 pt-2 pr-4 pb-4 bg-bkg-2 ">
        {textContent}
      </div>
    )}
    {type === 'post' &&    <>
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
               <ImageIcon 
               imageSrc={profileFromStorage.profilePicture} 
               shape={"circle"} 
               size={"xSmall"} 
               bordered={true}/>
             </div>
             <input 
               className="border-2 border-accent-2 rounded-md outline-none focus:border-content bg-bkg-2 ml-2
               mr-2 w-60" 
               type="text" 
               placeholder=" Add a comment..." 
               value={commentValue}
               onChange={handleCommentValueChange}
             />
             <PaperPlaneTilt onClick={handleSubmit} size={36}  weight="light" />
           </div>
         </div>
       </div>
     </div>
     {showComments && (
      <>
       <MyButton type={"circle"} content={<CaretUp size={28}  weight="fill" />} action={toggleComments}/>
       <div className="bg-black border-r-4 border-l-4 pr-2 pl-2 pt-4 border-b-4 border-black">
        
         <CommentPage postId={postId} tempPostDataArray={comments} />
       </div>
       </>
     )}
   </>}
  </>
)
    };


export default PostText;
