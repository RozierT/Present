// this will be the main feed component that will be rendered on the home page
// this will also be the component that will be rendered on the profile page
// this will also display comments, and notifications
// styling will just change sligthly for each, and deeper comments will have a drop down to be displayed on
import Post from "./PostBody";
import React, { useRef } from 'react';
import IconBand from "../profile/IconBand";

const Feed = ({ feedToUse, data, type }) => {

    const refzero = useRef(null);
    const refOne = useRef(null);
    const refTwo = useRef(null);
    const refThree = useRef(null);
    const refFour = useRef(null);
    const refFive = useRef(null);
    const refSix = useRef(null);
    
    const refsArray = [refzero, refOne, refTwo, refThree, refFour, refFive, refSix];

    return (
        <>
{feedToUse === "profile" ? <IconBand data={data} refsArray={refsArray} /> : null}

    <div>
        {data.slice(0, 7).map((item, index) => (
          <div key={index} ref={refsArray[index]} className="flex-1 p-0 pb-4">
            <Post data={item} type={type}/>
          </div> 
        ))}
    </div>
</>
    )
}

export default Feed