//TODO make a row that spans the screen and has 7 columns that are even in size and hous an image that is used to correspond to an action when clicked
import ImageIcon from "./ImageIcon"

const IconBand = ({data, amount}) => {
   

   
    return (
        <>
        <div className="border-accent-1 border-b-4 border-t-4">
        <div className="flex">
          {data.map((item, index) => (
            <div key={index} className="flex-1 p-0">
              <ImageIcon
                size={"fill"}
                bordered={true}
                shape={"square"}
                imageSrc={item.imageSrc}
                alt=""
                linked={true}
                // linkUrl={ TODO need to have this link to its corresponding item on the page in the other set of displayed images}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
          {data.map((item, index) => (
            <div key={index} className="flex-1 p-0">
              <ImageIcon
                size={"fill"}
                bordered={true}
                shape={"square"}
                imageSrc={item.imageSrc}
                alt=""
                linked={true}
                linkUrl={item.url}
              />
            </div>
          ))}
        </div>
</>
    )
    }


    export default IconBand;