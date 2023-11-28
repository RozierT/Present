import React from "react";
import ImageIcon from "../profile/ImageIcon";
import MyButton from "../profile/MyButton";

const SearchResults = ({ resultsArray }) => {
    const sayHi = () => {
        console.log("hi");
    };
  return (
    <>
      {resultsArray.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between px-4 py-3 border-accent-2  ${
            item.type === 'notification' ? 'border-t-2' : 'border-b-2'
          }`}
        >
          <div className="text-md font-bold flex">
            <ImageIcon
              size={"xSmall"}
              imageSrc={item.profilePicture}
              shape={"circle"}
              bordered={true}
              linked={false}
            />
            <h1 className="pl-2">{item.username}</h1>
          </div>
          <div className="flex justify-start p-1">
            <MyButton
              size={"small"}
              shape={"circle"}
              content={"follow"}
              action={sayHi}
              type={"bordered"}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchResults;
