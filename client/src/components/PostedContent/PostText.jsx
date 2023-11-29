import React, { useState } from 'react';
import MyButton from '../profile/MyButton';
import { PaperPlaneTilt, CaretUp, XCircle } from '@phosphor-icons/react';
import ImageIcon from '../profile/ImageIcon';
import CommentPage from './CommentPage';
import { useQuery } from '@apollo/client';
import { useParams } from "react-router-dom";
import alterUserArray from "../../utils/algorithms/alterUserPref";
import { GET_FLAIR_SCORES } from "../../utils/queries";
import { UPDATE_USER_PREFS } from "../../utils/mutations";
import { useMutation } from '@apollo/client'


const PostText = ({ textContent, comments, type, postId, profilePicture, tags}) => {
 const [inputValue, setInputValue] = useState('');
 const [showComments, setShowComments] = useState(false);

 const handleInputChange = (event) => {
   setInputValue(event.target.value);
 };


   const buildCommentAndNotify = (commentText, postId ) => {
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
    



    const { loading, data: userFlairs , error } = useQuery(GET_FLAIR_SCORES)
    let action
    
    const [updateUserPrefs] = useMutation(UPDATE_USER_PREFS,
      {
    refetchQueries: [{ query: GET_FLAIR_SCORES }],
      }
      );
        //getting child comments has not yet been solved and will need some work but remember that is NOT MVP only work on if comment MVP is done and nothing else is in need of work (meaning the comments are displayed on the post page)
       let selectedTags = [...tags ]
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
      
    





 const createComment = () => {
   console.log(inputValue);
    buildCommentAndNotify(inputValue, postId)
   // this will be the mutation to create a comment
  // this will use the postId to find the post and then add the comment to the database
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

const profileFromStorage = JSON.parse(localStorage.getItem('profile'));


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
               value={inputValue}
               onChange={handleInputChange}
             />
             <PaperPlaneTilt onClick={createComment} size={36}  weight="light" />
           </div>
         </div>
       </div>
     </div>
     {showComments && (
       <div className="mt-">
         <MyButton type={"circle"} content={<CaretUp size={28}  weight="fill" />} action={toggleComments}/>
         <CommentPage postId={postId} tempPostDataArray={comments} />
       </div>
     )}
   </>
 );

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
    {type === 'post' && <CommentSection />}
  </>
)
    };


export default PostText;
