import React from "react";
import ImageIcon from "../profile/ImageIcon";  
import { Link } from 'react-router-dom';



const PostHeader = ({ userOfOrigin, userId, date, profilePicture, type}) => {
    let path = `/profile/:${userId}`
    const navigateToProfile = () => {
        console.log("navigate to profile")

    }
    return (
        <>
        <div   className={`flex items-center justify-between px-4 py-3 border-accent-2  ${
             type === 'notification' ? 'border-t-2' : 'border-b-2'
           }`}>
               <Link to={path}>
        <div className="text-md font-bold flex" onClick={navigateToProfile}>
            <ImageIcon
            size={"xSmall"}
            imageSrc={profilePicture}
            shape={"circle"}
            bordered={true}
            linked={false}
            />
            <h1 className="pl-2">{userOfOrigin}</h1>
        </div>
        </Link>
        <div className="">{date}</div>
        </div>
        </>
    );
    }

export default PostHeader;