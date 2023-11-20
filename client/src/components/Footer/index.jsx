import React from "react";
import { buttons, buttons2 } from "./bottomNav";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-black-500 flex justify-around items-center p-4">
      {buttons.map((button) => (
        <button
          key={button.id}
          className="flex flex-col items-center text-white"
        >
          <a href={button.path}>
            {button.icon}
            <span>{button.label}</span>
          </a>
        </button>
      ))}
    </footer>
  );
};

export default Footer;
