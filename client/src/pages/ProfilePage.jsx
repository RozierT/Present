// this need to be a ProfilePage.jsx

import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";


const ProfilePage = () => {
    return (
        <div className="bg-bkg-1 text-content">
        <ProfileHeader />
        </div>
    );
    }

export default ProfilePage;