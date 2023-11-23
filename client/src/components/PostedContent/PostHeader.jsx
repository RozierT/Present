import React from "react";
import ImageIcon from "../profile/ImageIcon";  

const PostHeader = ({ userOfOrigin, date, profilePicture, type}) => {
    return (
        <>
        <div   className={`flex items-center justify-between px-4 py-3 border-accent-2  ${
             type === 'notification' ? 'border-t-2' : 'border-b-2'
           }`}>
        <div className="text-md font-bold flex">
            <ImageIcon
            size={"xSmall"}
            imageSrc={profilePicture}
            shape={"circle"}
            bordered={true}
            linked={false}
            />
            <h1 className="pl-2">{userOfOrigin}</h1>
        </div>
        <div className="">{date}</div>
        </div>
        </>
    );
    }

export default PostHeader;