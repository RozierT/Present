import React from 'react';
import { useState } from 'react';
import { ImageIcon } from '../profile/ImageIcon';

function Header() {
 const [isToggled, setToggle] = useState(false);

 const handleToggle = () => {
   setToggle(isToggled => !isToggled);
 };

 return (
   <div className="header">
     <ImageIcon
       style={{ width: '70px' }}
       className="img-fluid rounded-circle border border-dark border-3"
       alt='User profile image'
     />
     <ToggleSwitch
       isToggled={isToggled}
       onToggle={handleToggle}
       labelLeft="Friends"
       labelRight="Public"
     />
     {/* TODO Add notification component to insert here */}
   </div>
 );
}

export default Header;

