import React from "react";
import ImageIcon from "../profile/ImageIcon";  

const PostHeader = ({ poster, date, profilePicture }) => {
    return (
        <div className="flex items-center justify-between px-4 py-3 ">
        <div className="text-md font-bold flex">
            <ImageIcon
            size={"xSmall"}
            imageSrc={profilePicture}
            shape={"circle"}
            bordered={true}
            linked={false}
            />
            <h1 className="pl-2">{poster}</h1>
        </div>
        <div className="">{date}</div>
        </div>
    );
    }

export default PostHeader;