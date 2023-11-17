//TODO make a container that takes in props for max height and max width and restricts the height of the content inside of it to the max height and adds a onclick event to the container that toggles the the state of the container to expand the height to the full height of the content inside of it
import MyModal from "./MyModal";
import { useRef, useEffect } from "react";
import React, { useState } from "react";

const StrictTxtContainer = ({ maxHeight, maxWidth, textSrc, }) => {
    const [isOverflowing, setIsOverflowing] = useState(false);
    
  
       
  
    
    const outerRef = useRef(null);
    const innerRef = useRef(null);
 
    useEffect(() => {
        const outerHeight = outerRef.current.offsetHeight;
        const innerHeight = innerRef.current.offsetHeight;
      
        if (innerHeight > outerHeight) {
            setIsOverflowing(true);
          // Inner div is taller than the outer div
          // Perform your logic here
        } else {
            setIsOverflowing(false);
          // Inner div is not taller than the outer div
          // Perform your logic here
        }
      }, []);
      
console.log(isOverflowing)
    return (
       <> <div
        className="overflow-hidden"
        style={{ maxHeight: maxHeight, maxWidth: maxWidth }}
        ref={outerRef}
      >
        <div ref={innerRef}>{textSrc}</div>
        
      
      </div>
{isOverflowing ? (
           <MyModal modalOpener={
           <div>
              <p>...</p>
          </div>
          }
          modalContent={
            <div>
              {textSrc}
            </div>
          } 
          closeModalButton={false}/> 
        ) :  null}
    </>
    );
    }

export default StrictTxtContainer;