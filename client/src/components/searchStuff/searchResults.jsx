import React from "react";
import ImageIcon from "../profile/ImageIcon";
import MyButton from "../profile/MyButton";
import {Link }from "react-router-dom";

const SearchResults = ({ resultsArray }) => {


    return (
      <>
        {resultsArray.map((item, index) => (
          <div
             // Pass the userId as an argument
            key={index}
            className={`flex items-center justify-between px-4 py-3 border-accent-2  ${
              item.type === 'notification' ? 'border-t-2' : 'border-b-2'
            }`}
          >
                    <Link to={`/profile/:${item.id}`}>
                     <div className="text-md font-bold flex">
            <ImageIcon
              size={"xSmall"}
              imageSrc={item.profilePicture}
              shape={"circle"}
              bordered={true}
              linked={false}
            />
            <h1 className="pl-2">{item.username}</h1>
          </div></Link>
          <div className="flex justify-start p-1">
            <MyButton
              size={"small"}
              shape={"circle"}
              content={"follow"}
              action={null}
              type={"bordered"}
            />
          </div>
          
          </div>
        ))}
      </>
    );
  };
  
  export default SearchResults;
  