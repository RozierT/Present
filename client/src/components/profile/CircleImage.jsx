//TODO make a profile picture component that takes in props for image, size, linked boolean and link url
const CircleImage = ({ imageSrc, size, linked, linkUrl }) => {
    let imageSize = "w-48 h-48";
    size === "xSmall"
      ? (imageSize = "w-6 h-6")
      : size === "small"
      ? (imageSize = "w-10 h-10")
      : size === "medium"
      ? (imageSize = "w-24 h-24")
      : (imageSize = "w-40 h-40");
  console.log(imageSize)
    return (
      <div className="flex justify-center " >
        {linked ? (
          <a href={linkUrl}>
            <img
              src={imageSrc}
              className={`${imageSize}`}
              style={{ borderRadius: "50%", backgroundColor:'white', border:'1px solid pink ' }}
              alt="Profile"
            />
          </a>
        ) : (
          <img 
            src={imageSrc}
            className={`${imageSize}`}
            style={{ borderRadius: "50%", backgroundColor:'white', border:'1px solid pink ' }}
            alt="Profile"
          />
        )}
      </div>
    );
  };
  
  export default CircleImage;
  