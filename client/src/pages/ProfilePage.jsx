import Header from "../components/Headers/HeaderProf";
// import React from "react";
// import { useState } from "react";
import Footer from "../components/Footer";
import Feed from "../components/PostedContent/Feed";
// ~~~~~~~~~~~Test Data~~~~~~~~~~~~~~
import placeholdIcon from "../assets/images/placeholdIcon.png";
import BioSection from "../components/profile/BioSection";
const testProfile = {
  userId: "1234",
  userName: "JohnIsCool",
  bio: " Lorem ipsum dolor sit amet consectetur adipisicing elitwww. Minus id distinctio odit hic! Repellendus saepe pariatur laudantium ipsum nemo officiis eos quae sit, suscipit, nostrum, id rem accusantium modi iure iusto hic?",
  links: [
    {
      name: "Instagram",
      url: "https://www.google.com/",
      content: placeholdIcon,
    },
    {
      name: "Whatsapp",
      url: "https://www.google.com/",
      content: placeholdIcon,
    },
    {
      name: "X",
      url: "https://www.google.com/",
      content: placeholdIcon,
    },
  ],
  profilePicture: placeholdIcon,
  userId: "1234",
  latestPosts: [
    {
      poster: "JohnIsCool",  
      profilePicture: placeholdIcon,
      content: placeholdIcon,
      textContent: "im the description",
      date: "1/1/11",
      likes: 4,
      tags: ["tag1"],
      postId: "1234",
      comments: [
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im a comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        }

      ],
      postId: "1234",
      tags: ["tag1", "tag2"],
      shouldRenderImg: true,
    },
    {
      poster: "JohnIsCool",  
      profilePicture: placeholdIcon,
      content: placeholdIcon,
      textContent: "no no no im the description",
      date: "21/2/11",
      likes: 34,
      postId: "1234",
      comments: [
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im a comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        }

      ],
      tags: ["tag1"],
      shouldRenderImg: true,
    },
    {
      poster: "JohnIsCool",  
      profilePicture: placeholdIcon,
      content: placeholdIcon,
      textContent: "what, are you stupid? im the description",
      date: "2/3/11",
      likes: "11",
      postId: "1234",
      comments: [
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im a comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        }

      ],
      tags: ["tag1", "tag2", "tag3"],
      shouldRenderImg: true,
    },
    {
      poster: "JohnIsCool",  
      profilePicture: placeholdIcon,
      content: placeholdIcon,
      textContent: "you guys are all crazy im the real description",
      date: "4/11/4",
      likes: 2342,
      comments: [
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im a comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        }

      ],
      tags: ["tag1", "tag2", "tag3"],
      shouldRenderImg: true,
    },
    {
      poster: "JohnIsCool",  
      profilePicture: placeholdIcon,
      content: placeholdIcon,
      textContent: "ok this is getting out of hand, are you guys stupid? im the real description",
      date: "2/5/11",
      likes: 23,
      postId: "1234",
      comments: [
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im a comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        }

      ],
      tags: ["tag1", "tag2", "tag3"],
      shouldRenderImg: true,
    },
    {
      poster: "JohnIsCool",  
      profilePicture: placeholdIcon,
      content: placeholdIcon,
      textContent: "none of you are the real description, im the real description",
      date: "23/6/2",
      likes: 231,
      postId: "1234",
      comments: [
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im a comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        }

      ],
      tags: ["tag1",  "tag3"],
      shouldRenderImg: true,
    },
    {
      poster: "JohnIsCool",  
      profilePicture: placeholdIcon,
      content: placeholdIcon,
      textContent: "no non non nononononono I'M the real description",
      date: "11/3/211",
      likes: 12,
      postId: "1234",
      comments: [
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im a comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        }

      ],
      tags: ["tag1", "tag2", "tag3"],
      shouldRenderImg: true,
    },
    {
      poster: "JohnIsCool",  
      profilePicture: placeholdIcon,
      content: placeholdIcon,
      textContent: "This is a test description",
      date: "11/11/11",
      likes: 56,
      postId: "1234",
      comments: [
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im a comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        },
        {
          poster: "JohnIsCool",  
          profilePicture: placeholdIcon,
          textContent: "im another comment",
          date: "1/1/11",
          likes: 4,
          postId: "1234",
          shouldRenderImg: true,
        }

      ],
      tags: ["tag1", "tag2", "tag3"],
      shouldRenderImg: true,
    },
  ],
};
// ~~~~~~~~~END Test Data~~~~~~~~~~~~~

const ProfilePage = () => {
  //logic to get feed of users profile
  
  // every time this page is loaded it needs a profile to display
  
  // the profile will be passed in as a prop
  
  //this will be the profile of the user that is logged in when the user clicks on their profile
  
  //every time the user clicks on another profile it will load the profile page with the profile of the user that was clicked on

  // nothing will change from user profile to user profile except the data that is passed in as a prop and the follow button will not be present if the user is viewing their own profile

  //any changes a user wants to make to their own profile will be handled in the settings page



  return (
    <div className="bg-black text-content">
      <Header />
      <BioSection profile={testProfile} />
      <Feed dataArray={testProfile.latestPosts } type={"post"} feedToUse={"profile"} />
      <Footer />
    </div>
  );
};

export default ProfilePage;
