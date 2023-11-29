import React from "react";
// import { buttons, buttons2 } from "./bottomNav";
import { IconContext, House, Camera, Gear, User } from "@phosphor-icons/react";
import { useLocation } from "react";

const user = JSON.parse(localStorage.getItem('user'));
console.log(user)
const buttons = [
  { id: 1, label: "Profile", icon: <User />, path: `/profile/:` },
  { id: 2, label: "Camera", icon: <Camera />, path: "/camera" },
  { id: 3, label: "Settings", icon: <Gear />, path: "/settings" },
];

const buttons2 = [
  { id: 1, label: "Feed", icon: <House />, path: "/feed" },
  { id: 2, label: "Camera", icon: <Camera />, path: "/camera" },
  { id: 3, label: "Settings", icon: <Gear />, path: "/settings" },
];

const Footer = () => {
  if (window.location.pathname === "/profile") {
    return (
      <footer className="fixed sticky bottom-0 w-full bg-bkg-1 flex justify-around items-center p-2"  style={{zIndex:'999'}}>
        {buttons2.map((button) => (
          <button
            key={button.id}
            className="flex flex-col items-center text-white"
          >
            <a href={button.path}>
              <IconContext.Provider
                value={{
                  color: "silver",
                  size: 32,
                  weight: "bold",
                  mirrored: false,
                }}
              >
                {" "}
                {button.icon}
              </IconContext.Provider>
              {/* <span>{button.label}</span> */}
            </a>
          </button>
        ))}
      </footer>
    );
  }
  return (
    <footer className="fixed sticky bottom-0 w-full bg-bkg-1 flex justify-around items-center p-2">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="flex flex-col items-center text-white"
        >
          <a href={button.path}>
            <IconContext.Provider
              value={{
                color: "silver",
                size: 32,
                weight: "bold",
                mirrored: false,
              }}
            >
              {" "}
              {button.icon}
            </IconContext.Provider>
            <span>{button.path}</span> 
          </a>
        </button>
      ))}
    </footer>
  );
};

export default Footer;
