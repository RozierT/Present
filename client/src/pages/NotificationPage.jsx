import Header from "../components/Headers";
import Footer from "../components/Footer";
import Feed from "../components/PostedContent/Feed";
import NotifyHeader from "../components/notifications/NotifyHeader";
import MyButton from "../components/profile/MyButton";
import { useEffect } from "react";

const NotificationPage = () => {
    //logic to get feed of users profile
    
    // every time this page is loaded it needs a profile to display

    //every time the user clicks on another profile it will load the profile page with the profile of the user that was clicked on
  
    // nothing will change from user profile to user profile except the data that is passed in as a prop and the follow button will not be present if the user is viewing their own profile
  
    //any changes a user wants to make to their own profile will be handled in the settings page
    
    //i need sample data to test this page with
    // this will be an array of notifications that wil each have a userOfOrigin, textContent, date, ProfilePicture, and unique id
console.log(window.user)
    const notificationArray = [
        {
            userOfOrigin: "User",
            textContent: "liked your post",
            date: "2021-08-2",
            profilePicture: "https://i.imgur.com/0LKZQYM.jpg",
            id: "1"
        },
        {
            userOfOrigin: "User",
            textContent: "liked your post",
            date: "2021-08-2",
            profilePicture: "https://i.imgur.com/0LKZQYM.jpg",
            id: "2"
        },
        {
            userOfOrigin: "User",
            textContent: "liked your post",
            date: "2021-08-2",
            profilePicture: "https://i.imgur.com/0LKZQYM.jpg",
            id: "3"
        },
        {
            userOfOrigin: "User",
            textContent: "liked your post",
            date: "2021-08-2",
            profilePicture: "https://i.imgur.com/0LKZQYM.jpg",
            id: "4"
        },
        {
            userOfOrigin: "User",
            textContent: "liked your post",
            date: "2021-08-2",
            profilePicture: "https://i.imgur.com/0LKZQYM.jpg",
            id: "5"
        },
        {
            userOfOrigin: "User",
            userOfOriginId: "1234",
            textContent: "liked your post",
            date: "2021-08-2",
            profilePicture: "https://i.imgur.com/0LKZQYM.jpg",
            id: "6"
        },
        {
            userOfOrigin: "User",
            textContent: "liked your post",
            date: "2021-08-2",
            profilePicture: "https://i.imgur.com/0LKZQYM.jpg",
            id: "7"
        }
    ]
  
    //query the database for the users profile data using user props 
    //this will be the users profile data
let notificationData 

 useEffect(() => {
    console.log(window.user)
    // query the database for the users profile data using user props
    },[]);

const dismissAll = () => {
    console.log("dismiss all")
    // this will dismiss all notifications
}


    return (
      <div className="bg-bkg-1 text-content">
        <Header />
         <div style={{marginTop:'55px'}}>
            <NotifyHeader />
        </div>
        <Feed dataArray={notificationArray} type={"notification"} feedToUse={"notification"} /> 
         <div className="flex-1 p-0 pb-4">
        <MyButton type={"bordered"} content={"dismiss all"} shape={"square"} size={"full"} action={null} />
        </div>
        <Footer />
      </div>
    );
  };
  
  export default NotificationPage
;
  //loggedInUser={loggedInUser}
  // i need to pass in as props throughout application