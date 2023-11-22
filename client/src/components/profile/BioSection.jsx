// Import necessary components and images

import ImageIcon from "./ImageIcon";
import StrictTxtContainer from "./StrictTxtContainer";
import MyButton from "./MyButton";

// Define a test profile object


// Define the BioSection component
function BioSection({ profile }) {

  // Define a function for testing purposes
  const sayHi = () => {
    console.log('hi')
  }

  return (
    <div className="container bg-bkg-2">
      <div className="flex columns-2 space-x-2  rounded pt-2 pb-2">
        {/* Left column */}
        <div className="w-2/6 space-y-3"> {/* Set the left column to take 2/3 of the width */}
          {/* Profile picture */}
          <ImageIcon size={"medium"} imageSrc={profile.profilePicture} shape={"circle"} bordered={true} linked={false}/>
          {/* Links */}
          <div className="flex margin-0 space-x-1 justify-center">

{/* TODO add logic that will make the link go to the correct social site. also when making profile limit input to 3 and have users choos the site they want to link to and input only username */}

            {profile.links.map((link, index) => (
              <ImageIcon size={"xSmall"} imageSrc={link.imageSrc} linked={true} linkUrl={link.url} shape={"circle"} bordered={true}/>
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
            <MyButton size={"small"} shape={"circle"} content={"follow"} action={sayHi} type={"empty"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BioSection;
