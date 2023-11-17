// import instagram icon
import placeholdIcon from "../../assets/images/placeholdIcon.png";
import CircleImage from "./CircleImage";
import StrictTxtContainer from "./StrictTxtContainer";

const testProfile = {
    userName: "JohnIsCool",
    bio: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus id distinctio odit hic! Repellendus saepe pariatur laudantium ipsum nemo officiis eos quae sit, suscipit, nostrum, id rem accusantium modi iure iusto hic?',
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


    function BioSection({ profile = testProfile }) {
        return (
          <div className="container ">
           
            <div className="flex columns-2 space-x-2 bg-gray-100 rounded px-4">
              {/* left column */}
              <div className=" w-2/6 space-y-3"> {/* Set the left column to take 2/3 of the width */}
                {/* profile picture */}
                <CircleImage size={"medium"} imageSrc={profile.profilePicture} linked={false}/>
                {/* links */}
                <div className="flex margin-0 space-x-1 justify-center">
                  {profile.links.map((link, index) => (
          <CircleImage size={"xSmall"} imageSrc={link.imageSrc} linked={true} linkUrl={link.url}/>
                  ))}
                </div>
              </div>
              {/* right column */}
              <div className="flex flex-col w-4/6 pl-3 pt-3 justify-between h-42 max-h-full" > {/* Set the right column to take 1/3 of the width */}
              {/* card housing username an profile description */}
              <div>
                {/* title */}
                <h2 className="text-xl font-bold">{profile.userName}</h2>
                {/* description */}
                <p className="text-gray-700 text-sm  ">
                    
                    
                    <StrictTxtContainer maxHeight={'40px'} maxWidth={'300px'} textSrc={profile.bio} />
                    
                </p>
                </div>
                {/* follow button */}  

{/* TODO make a button component with sizes small medium and large and make the one on this page be medium and make it so the button takes in an action and content */}
                <div className="flex justify-start pb-1">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full w-[10rem]">
                    Follow
                  </button>
              </div>



              </div>
            </div>
          </div>
        );
      }
      
      export default BioSection;
      

  