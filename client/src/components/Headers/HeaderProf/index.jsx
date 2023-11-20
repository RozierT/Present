import React, { useRef } from 'react';
import { useState } from 'react';
import { IconContext, House, Bell } from "@phosphor-icons/react";
//TODO import notification component and display in header
import ToggleSwitch from './toggle';

function Header() {
 const [isToggled, setToggle] = useState(false);

 const handleToggle = () => {
   setToggle(isToggled => !isToggled);
 };

 return (
   <header className="fixed top-0 w-full bg-purple-500 flex justify-around items-center p-2">
    <IconContext.Provider
              value={{
                color: "black",
                size: 32,
                weight: "bold",
                mirrored: false,
              }}
            ><a href='/'><House /></a>
     <ToggleSwitch
       isToggled={isToggled}
       onToggle={handleToggle}
       labelLeft="Album"
       labelRight="Scrapbook"
     />
     {/* TODO Add notification component to insert here */}
     <a href='/notifications'><Bell /></a></IconContext.Provider>
   </header>
 );
}

export default Header;

