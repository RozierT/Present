//TODO make a row that spans the screen and has 7 columns that are even in size and hous an image that is used to correspond to an action when clicked
import React, { useRef } from 'react';
import ImageIcon from './ImageIcon';
import Post from '../PostedContent/PostBody';

const IconBand = ({ dataArray, refsArray }) => {



  const handleClick = (index) => {
    console.log(index);
    const element = refsArray[index];
    console.log(element.current); // Check if the correct element is logged to the console
    if (element && element.current) {
      element.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="border-bkg-1 border-b-4 border-t-4">
        <div className="flex">
          {dataArray.slice(0, 7).map((item, index) => (
            item.shouldRenderImg ?
            <div key={index} className="flex-1 p-0">
                
              <ImageIcon
                size="fill"
                bordered={true}
                shape="square"
                imageSrc={item.content}
                alt=""
                linked={false}
                actionable={true}
                action={() => handleClick(index)}
              /> 

            </div>:  <div key={index} className="flex-1 p-0"> </div>
          ))}
        </div>
      </div>
      
    </>
  );
};

export default IconBand;
