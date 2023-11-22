const RoundedButton = ({ size, type, content, action, shape }) => {
    let buttonSize =
      size === "xSmall"
        ? "50px " // Square button
        : size === "small"
        ? "75px" // 1/3 width
        : size === "medium"
        ? "100px" // 1/2 width
        : "100%"; // Full width
  
    let buttonShape = shape === "circle" ? "rounded-full" : null;
  
    let buttonType = "";
  
    type === "empty"
      ? 
      (buttonType = `bg-emptyBtn-1 active:bg-emptyBtn-2 border-transparent border-2`)
      : 
      type === "bordered" 
      ? 
      (buttonType = `bg-emptyBtn-1 active:bg-emptyBtn-2 border-accent-2 border-2`) 
      :
      (buttonType = `bg-accent-1 active:bg-bkg-1 border-accent-2 border-t-2 border-b-2`);
  
    return (
      <a
        className={`flex justify-center ${buttonSize} ${buttonShape} ${buttonType}`}
        style={{ width: `${buttonSize}` }}
        onClick={action}
      >
        {content}
      </a>
    );
  };
  
  export default RoundedButton;
  