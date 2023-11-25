import React from "react";
//import { useState, useLocation } from "react";
import { IconContext, House, Bell, ArrowLeft } from "@phosphor-icons/react";
//TODO import notification component and display in header
//import ToggleSwitch from "./Toggle";

function Header() {
  // const [isToggled, setToggle] = useState(false);

  // const handleToggle = () => {
  //   setToggle((isToggled) => !isToggled);
  // };
 
  return (
    <header className="fixed sticky top-0 w-full bg-bkg-1 flex justify-around items-center p-2">
      <IconContext.Provider
        value={{
          color: "silver",
          size: 32,
          weight: "bold",
          mirrored: false,
        }}
      >
        <a href="/">
          <ArrowLeft />
        </a>
        <h1 className="text-content font-bold"> [Our Logo Here] </h1>
        {/* <ToggleSwitch
          isToggled={isToggled}
          onToggle={handleToggle}
          labelLeft="Album"
          labelRight="Scrapbook"
        /> */}
        {/* TODO Add notification component to insert here */}
        <a href="/notifications">
          <Bell />
        </a>
      </IconContext.Provider>
    </header>
  );
}

{/* Admin Header Below
<header className="fixed sticky top-0 w-full bg-accent-2 flex justify-around items-center p-2">
    <IconContext.Provider
              value={{
                color: "black",
                size: 32,
                weight: "bold",
                mirrored: false,
              }}
            ><a href='/'><House /></a>
     <span className='font-bold text-black'>Admin</span>
     
     <a href='/notifications'><Bell /></a></IconContext.Provider>
   </header> */}

export default Header;
