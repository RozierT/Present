import React from "react";
import ImageIcon from "../profile/ImageIcon";  

const PostHeader = ({ data }) => {
    return (
        <div className="flex items-center justify-between px-4 py-3 bg-bkg-2 ">
        <div className="text-md font-bold flex">
            <ImageIcon
            size={"xSmall"}
            imageSrc={data.profilePicture}
            shape={"circle"}
            bordered={true}
            linked={false}
            />
            <h1 className="pl-2">{data.poster}</h1>
        </div>
        <div className="">{data.date}</div>
        </div>
    );
    }

export default PostHeader;