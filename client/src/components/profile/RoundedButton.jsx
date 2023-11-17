// TODO make a rounded button component that will have different sizezs and typs (empty or solid ) and will take in a function to be called on click and content to be displayed
import classes from "./RoundedButton.module.css";

const RoundedButton = ({ size, type, content, action, shape }) => {
    let buttonSize =
    size === "xSmall"
      ? "25px " // Square button
      : size === "small"
      ? "75px" // 1/3 width
      : size === "medium"
      ? "100px" // 1/2 width
      : "100%"; // Full width
  
      let buttonShape =
      shape === "circle"
      ? "rounded-full" :
      null;
    
    let buttonType 
    type === "empty"
        ? (buttonType = `${classes.empty}`)
        : (buttonType = `${classes.filled}`);
    
    return (
        <a className={`flex justify-center ${buttonSize} ${buttonShape} ${buttonType}`} style={{width:`${buttonSize}`}} onClick={action}>
        {content}
        </a>
    );
    }

export default RoundedButton;