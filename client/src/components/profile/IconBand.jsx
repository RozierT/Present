//TODO make a row that spans the screen and has 7 columns that are even in size and hous an image that is used to correspond to an action when clicked
import React, { useRef } from 'react';
import ImageIcon from './ImageIcon';

const IconBand = ({ data }) => {

const refzero = useRef(null);
const refOne = useRef(null);
const refTwo = useRef(null);
const refThree = useRef(null);
const refFour = useRef(null);
const refFive = useRef(null);
const refSix = useRef(null);

const refsArray = [refzero, refOne, refTwo, refThree, refFour, refFive, refSix];

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
          {data.map((item, index) => (
            <div key={index} className="flex-1 p-0">
              <ImageIcon
                size="fill"
                bordered={true}
                shape="square"
                imageSrc={item.imageSrc}
                alt=""
                linked={false}
                actionable={true}
                action={() => handleClick(index)}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        {data.map((item, index) => (
          <div key={index} ref={refsArray[index]} className="flex-1 p-0 pb-4">
            <ImageIcon
              size="fill"
              bordered={true}
              shape="square"
              imageSrc={item.imageSrc}
              alt=""
              linked={false}
              actionable={false}
            />
            <div className="border-content border-l-2 border-r-2 border-b-2">
              <div>
                <p className="text-xl">{item.title}</p>
              </div>
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default IconBand;
