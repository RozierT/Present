import Header from "../components/Headers";
// import React from "react";
// import { useState } from "react";
import Footer from "../components/Footer";
import Feed from "../components/PostedContent/Feed";
// ~~~~~~~~~~~Test Data~~~~~~~~~~~~~~

import BioSection from "../components/profile/BioSection";


const ProfilePage = () => {
  //logic to get feed of users profile

  // every time this page is loaded it needs a profile to display

  // the profile will be passed in as a prop

  //this will be the profile of the user that is logged in when the user clicks on their profile

  //every time the user clicks on another profile it will load the profile page with the profile of the user that was clicked on

  // nothing will change from user profile to user profile except the data that is passed in as a prop and the follow button will not be present if the user is viewing their own profile

  //any changes a user wants to make to their own profile will be handled in the settings page

  return (
    <div className="bg-bkg-1 text-content">
      <Header />
      <BioSection profile={testProfile} />
      <Feed dataArray={testProfile.posts} type={"post"} feedToUse={"profile"} />
      <Footer />
    </div>
  );
};

export default ProfilePage;
