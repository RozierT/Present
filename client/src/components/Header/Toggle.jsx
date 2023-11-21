import React from 'react';

function ToggleSwitch({ isToggled, onToggle, labelLeft, labelRight }) {
 return (
   <label className="switch">
     <span className="label-left">{labelLeft}</span>
     <input type="checkbox" checked={isToggled} onChange={onToggle} />
     <span className="slider round"></span>
     <span className="label-right">{labelRight}</span>
   </label>
 );
}

export default ToggleSwitch;