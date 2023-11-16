import React from "react";
import ReactDOM from "react-dom";
import { House, Camera, Gear } from "@phosphor-icons/react";

const buttons = [
  { id: 1, label: "Feed", icon: {House}, path: "/" },
  { id: 2, label: "Camera", icon: {Camera}, path: "/camera" },
  { id: 3, label: "Settings", icon: {Gear}, path: "/settings" },
];


const BottomNavbar = () => {
    return (
      <div className="fixed bottom-0 w-full bg-blue-500 flex justify-around items-center p-4">
      {buttons.map((button) => (
        <button key={button.id} className="flex flex-col items-center text-white">
          {button.icon}
          <span>{button.label}</span>
        </button>
      ))}
    </div>
    );
}

export default BottomNavbar;
