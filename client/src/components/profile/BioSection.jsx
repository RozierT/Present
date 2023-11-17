// Import necessary components and images
import placeholdIcon from "../../assets/images/placeholdIcon.png";
import CircleImage from "./CircleImage";
import StrictTxtContainer from "./StrictTxtContainer";
import RoundedButton from "./RoundedButton";

// Define a test profile object
const testProfile = {
  userName: "JohnIsCool",
  bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elitwww. Minus id distinctio odit hic! Repellendus saepe pariatur laudantium ipsum nemo officiis eos quae sit, suscipit, nostrum, id rem accusantium modi iure iusto hic?',
  links: [
    {
      name: "Instagram",
      url: "https://www.google.com/",
      imageSrc: placeholdIcon,
    },
    {
      name: "Whatsapp",
      url: "https://www.google.com/",
      imageSrc: placeholdIcon,
    },
    {
      name: "X",
      url: "https://www.google.com/",
      imageSrc: placeholdIcon,
    },
  ],
  profilePicture: placeholdIcon,
};

// Define the BioSection component
function BioSection({ profile = testProfile }) {

  // Define a function for testing purposes
  const sayHi = () => {
    console.log('hi')
  }

  return (
    <div className="container ">
      <div className="flex columns-2 space-x-2  rounded px-4">
        {/* Left column */}
        <div className="w-2/6 space-y-3"> {/* Set the left column to take 2/3 of the width */}
          {/* Profile picture */}
          <CircleImage size={"medium"} imageSrc={profile.profilePicture} linked={false} />
          {/* Links */}
          <div className="flex margin-0 space-x-1 justify-center">

{/* TODO add logic that will make the link go to the correct social site. also when making profile limit input to 3 and have users choos the site they want to link to and input only username */}

            {profile.links.map((link, index) => (
              <CircleImage size={"xSmall"} imageSrc={link.imageSrc} linked={true} linkUrl={link.url} />
            ))}
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col w-4/6 pl-3 pt-3 justify-between h-42 max-h-full"> {/* Set the right column to take 1/3 of the width */}
          {/* Card housing username and profile description */}
          <div>
            {/* Username */}
            <h2 className="text-xl font-bold">{profile.userName}</h2>
            {/* Profile description */}
            <div className="text-sm">
              <StrictTxtContainer maxHeight={'40px'} maxWidth={'300px'} textSrc={profile.bio} />
            </div>
          </div>
          {/* Follow button */}
          <div className="flex justify-start p-1">
            <RoundedButton size={"full"} shape={"circle"} content={"Follow"} action={sayHi} type={"empty"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioSection;
