// this need to be a ProfilePage.jsx

import React, { Component } from "react";
import { Link } from "react-router-dom";
import BioSection from "../components/profile/BioSection";


const ProfilePage = () => {
    return (
        <div className="bg-bkg-1 text-content">
        <BioSection />
        </div>
    );
    }

export default ProfilePage;