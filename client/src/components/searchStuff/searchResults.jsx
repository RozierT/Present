import React from "react";
import ImageIcon from "../profile/ImageIcon";
import MyButton from "../profile/MyButton";


const SearchResults = ({ resultsArray }) => {
    const sayHi = () => {
      console.log("hi");
    };
  
    const goToProfile = (userId) => {
      console.log("go to profile" + userId);
      let userToGet = userId

      //i need this to send the user to the profile page of the user they clicked on
      // i need to pass the userId to the profile page

    };
  
    return (
      <>
        {resultsArray.map((item, index) => (
          <div
            onClick={() => goToProfile(item.id)} // Pass the userId as an argument
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
  