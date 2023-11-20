import ProfileHeader from "../components/profile/ProfileHeader";
import Header from "../components/Headers/HeaderProf";
// import React from "react";
// import { useState } from "react";
import Footer from "../components/Footer";

// ~~~~~~~~~~~Test Data~~~~~~~~~~~~~~
import placeholdIcon from "../assets/images/placeholdIcon.png";
const testProfile = {
  userId: "1234",
  userName: "JohnIsCool",
  bio: " Lorem ipsum dolor sit amet consectetur adipisicing elitwww. Minus id distinctio odit hic! Repellendus saepe pariatur laudantium ipsum nemo officiis eos quae sit, suscipit, nostrum, id rem accusantium modi iure iusto hic?",
  links: [
    {
      name: "Instagram",
      url: "https://www.google.com/",
      imageSrc: placeholdIcon,
    },
    {
      name: "Whatsapp",
      url: "https://www.google.com/",
      imageSrc: placeholdIcon,
    },
    {
      name: "X",
      url: "https://www.google.com/",
      imageSrc: placeholdIcon,
    },
  ],
  profilePicture: placeholdIcon,
  userId: "1234",
  latestPosts: [
    {
      imageSrc: placeholdIcon,
      title: "This is a test post 0",
      description: "This is a test description",
      date: "11/11/11",
      likes: "11",
      comments: "11",
      postId: "1234",
      shouldRenderImg: true,
    },
    {
      imageSrc: placeholdIcon,
      title: "This is a test post 1",
      description: "This is a test description",
      date: "11/11/11",
      likes: "11",
      postId: "1234",
      comments: "11",
      shouldRenderImg: true,
    },
    {
      imageSrc: placeholdIcon,
      title: "This is a test post 2",
      description: "This is a test description",
      date: "11/11/11",
      likes: "11",
      postId: "1234",
      comments: "11",
      shouldRenderImg: true,
    },
    {
      imageSrc: placeholdIcon,
      title: "This is a test post 3",
      description: "This is a test description",
      date: "11/11/11",
      likes: "11",
      comments: "11",
      shouldRenderImg: true,
    },
    {
      imageSrc: placeholdIcon,
      title: "This is a test post 4",
      description: "This is a test description",
      date: "11/11/11",
      likes: "11",
      postId: "1234",
      comments: "11",
      shouldRenderImg: false,
    },
    {
      imageSrc: placeholdIcon,
      title: "This is a test post 5",
      description: "This is a test description",
      date: "11/11/11",
      likes: "11",
      postId: "1234",
      comments: "11",
      shouldRenderImg: true,
    },
    {
      imageSrc: placeholdIcon,
      title: "This is a test post 6",
      description: "This is a test description",
      date: "11/11/11",
      likes: "11",
      postId: "1234",
      comments: "11",
      shouldRenderImg: true,
    },
    {
      imageSrc: placeholdIcon,
      title: "This is a test post 7?",
      description: "This is a test description",
      date: "11/11/11",
      likes: "11",
      postId: "1234",
      comments: "11",
      shouldRenderImg: true,
    },
  ],
};
// ~~~~~~~~~END Test Data~~~~~~~~~~~~~

const ProfilePage = () => {
  //logic to get feed of users profile
  return (
    <div className="bg-bkg-1 text-content">
      <Header />
      <br></br>
      <br></br>
      <ProfileHeader profile={testProfile} />
      <br></br>
      <Footer />
    </div>
  );
};

export default ProfilePage;
