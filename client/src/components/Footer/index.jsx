import React from "react";
// import { buttons, buttons2 } from "./bottomNav";
import { IconContext, House, Camera, Gear, User } from "@phosphor-icons/react";

const buttons = [
  { id: 1, label: "Profile", icon: <User />, path: "/profile" },
  { id: 2, label: "Camera", icon: <Camera />, path: "/camera" },
  { id: 3, label: "Settings", icon: <Gear />, path: "/settings" },
];

const buttons2 = [
  { id: 1, label: "Feed", icon: <House />, path: "/" },
  { id: 2, label: "Camera", icon: <Camera />, path: "/camera" },
  { id: 3, label: "Settings", icon: <Gear />, path: "/settings" },
];

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-purple-500 flex justify-around items-center p-2">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="flex flex-col items-center text-white"
        >
          <a href={button.path}>
            <IconContext.Provider
              value={{
                color: "black",
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
};

export default Footer;
