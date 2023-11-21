import React from 'react';
import MyButton from '../profile/MyButton';
import ImageIcon from '../profile/ImageIcon';
import placeholdIcon from '../../assets/images/placeholdIcon.png';
import { HeartStraight, ArrowDown, Export } from '@phosphor-icons/react';

const Post = ({showContent, type, data}) => {
    
//test code stuff
 type = '';

    const like = () => {
        console.log('liking');
    }
    const dislike = () => {
        console.log('disliking');
    }
    const markAsRead = () => {   
        console.log('marking as read');
 
    }
    const comment = () => {
        console.log('commenting');
    }
    const share = () => {
        console.log('sharing');
    }
    const goToProfile = () => {
        console.log('going to profile');
    }   

let lowerButtonAction;
type === 'post'? 
lowerButtonAction = comment :
type === 'comment'?
lowerButtonAction = comment:
lowerButtonAction = markAsRead;

let lowerButtonDescription;
type === 'post'? 
lowerButtonDescription = "add a comment" :
type === 'comment'?
lowerButtonDescription = "reply in thread":
lowerButtonDescription = "dismiss";

type === 'post'?
 showContent = true :
 showContent = false;


  return (
    <div className="max-w-screen-95 mx-auto bg-accent-1 shadow-md rounded-md overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 bg-bkg-2 ">
        <div className="text-md font-bold flex"><ImageIcon size={"xSmall"} imageSrc={placeholdIcon} shape={"circle"} bordered={true} linked={false}/><h1 className='pl-2'>Im a user </h1>
        </div>
        <div className="">2/2/2</div>
      </div>
      <div className="flex-1 p-0">
        {showContent ? 
         
         <>
         <ImageIcon
              size="fill"
              bordered={false}
              shape="square"
              imageSrc={placeholdIcon}
              alt=""
              linked={false}
              actionable={false}
            />  <div className='flex justify-end bg-transparent'>
            <div className='flex items-right '>
                <div className='p-1'>
                <ImageIcon size={"small"} imageSrc={placeholdIcon} shape={"circle"} bordered={false} linked={false}/>
                </div>
                <div className='p-1'>
                <ImageIcon size={"small"} imageSrc={placeholdIcon} shape={"circle"} bordered={false} linked={false}/>
                </div>
                <div className='p-1'>
                <ImageIcon size={"small"} imageSrc={placeholdIcon} shape={"circle"} bordered={false} linked={false}/>
                </div>
             
    
            </div>
            </div>
            </>
            :
            null  
           
        }

     
   {showContent ? 



   <div className='flex justify-between bg-bkg-2 border-t-2 border-b-2 border-accent-2'> 
           <div className='flex'>
    <MyButton  size={"xSmall"} type={"empty"} content={
    <HeartStraight size={32} color="#999999" weight="fill"/>
    } action={like} shape={"circle"} /> 

    <MyButton  size={"xSmall"} type={"empty"} content={
    <ArrowDown size={32} color="#999999" />
    } action={dislike} shape={"circle"} />
    </div>

    <MyButton  size={"medium"} type={"empty"} content={
    <Export size={32} color="#999999" />
    } action={share} shape={"circle"} />
    </div >
          :
            null  
        }
  

        <div className="text-base pl-4 pt-2 pr-4 pb-4 bg-bkg-2"> User liked your post! </div>
        
        <MyButton  size={"full"} type={"bordered"} content={lowerButtonDescription} action={lowerButtonAction} shape={"square"} />
      </div>
    </div>
  );
};

export default Post;