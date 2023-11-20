import React, { useRef } from 'react';
import { useState } from 'react';
//TODO import profile image and display in header
//TODO import notification component and display in header
// import { ImageIcon } from '../profile/ImageIcon';
import ToggleSwitch from './toggle';

function proHeader() {
 const [isToggled, setToggle] = useState(false);

 const handleToggle = () => {
   setToggle(isToggled => !isToggled);
 };

 return (
   <header className="fixed top-0 w-full bg-purple-500 flex justify-around items-center p-3">
     {/* <ImageIcon
                size="fill"
                bordered={true}
                shape="circle"
                imageSrc={item.imageSrc}
                alt=""
                linked={false}
                actionable={true}
                action={() => handleClick(index)}
              />  */}
     <ToggleSwitch
       isToggled={isToggled}
       onToggle={handleToggle}
       labelLeft="Album"
       labelRight="Scrapbook"
     />
     {/* TODO Add notification component to insert here */}
   </header>
 );
}

export default proHeader;

