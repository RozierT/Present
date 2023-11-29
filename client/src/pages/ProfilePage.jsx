import Header from "../components/Headers";
// import React from "react";
// import { useState } from "react";
import Footer from "../components/Footer";
import Feed from "../components/PostedContent/Feed";
// ~~~~~~~~~~~Test Data~~~~~~~~~~~~~~
import { GET_PROFILE_BY_ID } from '../utils/queries';
import BioSection from "../components/profile/BioSection";
import { useEffect } from "react";

import { useParams } from "react-router-dom";

// i will handle how to pass this in very soon
const ProfilePage = () => {
  const { proptopass }  = useParams()

  const [userFromStorage, setUserFromStorage] = useState(null)

  // retrieve locally stored profile data
  const profileFromStorage = JSON.parse(localStorage.getItem('profile'))

  // console.log('user from stor: ', userFromStorage)
  // console.log('prof from stor: ', profileFromStorage)

  // on render, queries the database for profile by passing in locally stored user._id as variable
  const [getProfile, { loading: profileLoading, data: profileData, error: profileError }] = useLazyQuery(GET_PROFILE_BY_ID)

  useEffect(() => {
    // retrieves locally stored user data
    const user = JSON.parse(localStorage.getItem('user'));
      if (user) {
        console.log('props: ', proptopass)
        setUserFromStorage(user);
        getProfile({ variables: { userId: proptopass ? proptopass : user._id } });
      }
  }, []);



  return (
    <div className="bg-bkg-1 text-content">
      <Header />
      {!profileData ?(
        <div>Loading...</div>
      ): (
        <div>
          {console.log('porf data: ', profileData)}
          { profileError ? (<p>Error! {profileError.message}</p>): (<div></div>) }
          <BioSection profile={profileData.getOthersProfile} />
          {profileData.getOthersProfile.posts.length > 0 ? (
          <Feed dataArray={profileData.getOthersProfile.posts} type={"post"} feedToUse={"profile"} />
      ) : (
        <h1 className="text-2xl font-bold text-center">
          {profileData.getOthersProfile.username} has no posts yet
        </h1>
      )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProfilePage;

