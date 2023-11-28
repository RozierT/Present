//TODO make a profile picture component that takes in props for image, size, linked boolean and link url
const ImageIcon = ({ imageSrc, size, linked, linkUrl, shape, bordered, actionable, action}) => {
    let imageSize = 
    size === "xSmall"
      ?  "w-8 h-8"
      : size === "small"
      ?  "w-10 h-10"
      : size === "medium"
      ?  "w-24 h-24"
      : size === "large"
      ?  "w-40 h-40"
      : "100%"; // Full width = "w-48 h-48");

    let imageShape = 
    shape === "circle" 
      ? "rounded-full" 
      : null;
    
    let border =
    bordered === true
      ? "border-2 border-accent-2 bg-bkg-2"
      : null;
    
  // console.log(imageSize)
    return (
      <div className="flex justify-center " >
        {linked ? (
          <a href={linkUrl}>
            <img
              src={imageSrc}
              className={`${imageSize} ${imageShape} ${border}`}
              alt="Profile"
            />
          </a>
        ) : 
        actionable ?  (
          <img 
            onClick={action}
            src={imageSrc}
            className={`${imageSize} ${imageShape} ${border}`}
            alt="Profile"
          />
        )
        :
        (
          <img 
            src={imageSrc}
            className={`${imageSize} ${imageShape} ${border}`}
            alt="Profile"
          />
        )
      }
      </div>
    );
  };
  
  export default ImageIcon;
  