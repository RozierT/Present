import placeholdIcon from "../../assets/images/placeholdIcon.png";
import BioSection from "./BioSection";
import IconBand from "./IconBand";


const testProfile = {
    userId: "1234",
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
    userId: "1234",
    latestPosts: [
         {
        imageSrc: placeholdIcon,
        title: "This is a test post",
        description: "This is a test description",
        date: "11/11/11",
        likes: "11",
        comments: "11",
        postId: "1234",
        },
         {
        imageSrc: placeholdIcon,
        title: "This is a test post",
        description: "This is a test description",
        date: "11/11/11",
        likes: "11",
        postId: "1234",
        comments: "11",
            },  
         {
        imageSrc: placeholdIcon,
        title: "This is a test post",
        description: "This is a test description",
        date: "11/11/11",
        likes: "11",
        postId: "1234",
        comments: "11",
            },  
         {
            imageSrc: placeholdIcon,
            title: "This is a test post",
            description: "This is a test description",
            date: "11/11/11",
            likes: "11",
            comments: "11",
            },  
         {
            imageSrc: placeholdIcon,
            title: "This is a test post",
            description: "This is a test description",
            date: "11/11/11",
            likes: "11",
        postId: "1234",
        comments: "11",
            },  
         {
            imageSrc: placeholdIcon,
            title: "This is a test post",
            description: "This is a test description",
            date: "11/11/11",
            likes: "11",
        postId: "1234",
        comments: "11",
            },  
         {
            imageSrc: placeholdIcon,
            title: "This is a test post",
            description: "This is a test description",
            date: "11/11/11",
            likes: "11",
        postId: "1234",
        comments: "11",
            }

        ]
    }


const ProfileHeader = () => {
   
   


    return (
        <div className="border-black border-t-4 border-b-4">
        <BioSection profile={testProfile}/>
        <IconBand data={testProfile.latestPosts} amount={7} />
        </div>
    )
    }


export default ProfileHeader;