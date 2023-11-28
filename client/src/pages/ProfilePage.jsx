import Header from "../components/Headers";
// import React from "react";
// import { useState } from "react";
import Footer from "../components/Footer";
import Feed from "../components/PostedContent/Feed";
// ~~~~~~~~~~~Test Data~~~~~~~~~~~~~~
// import {GET_PROFILE} from "../utils/queries/";
import BioSection from "../components/profile/BioSection";
import { useEffect } from "react";

// i will handle how to pass this in very soon
const ProfilePage = ({userToGet}) => {
  console.log(userToGet)
  // let profile
  // useEffect(() => {
  //   console.log(userToGet)
  //   if(userToGet){
  //     { loading, data: profile , error } = useQuery(GET_PROFILE)
  //   } else{
  //   { loading, data: profile , error } = useQuery(GET_PROFILE)
  // }
  // },[]);

  return (
    <div className="bg-bkg-1 text-content">
      <Header />
      <BioSection profile={profile} />
      {profile.posts.length > 0 ? (
         <Feed dataArray={profile.posts} type={"post"} feedToUse={"profile"} />
      ) : (
        <h1 className="text-2xl font-bold text-center">
          {profile.username} has no posts yet
        </h1>
      )}
     
      <Footer />
    </div>
  );
};

export default ProfilePage;
