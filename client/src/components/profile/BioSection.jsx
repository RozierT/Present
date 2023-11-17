const testProfile = {
    userName: "JohnIsCool",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    links: [
        {
            name: "Insta",
            url: "https://www.google.com/",
        },
        {
            name: "Whatsapp",
            url: "https://www.google.com/",
        },
        {
            name: "X",
            url: "https://www.google.com/",
        },
        ],
    profilePicture: "https://www.google.com/",
    };


    function BioSection({ profile = testProfile }) {
        return (
          <div className="container mx-auto">
            <div className="flex columns-2 space-x-16 bg-gray-100 rounded px-4">
              {/* left column */}
              <div className="text-xs/6">
                {/* image */}
                <img className="w-full" src={profile.profilePicture} alt="Card Image" />
                {/* links */}
                <div className="flex flex-col mt-2 space-y-2 margin-0">
                  {profile.links.map((link, index) => (
                    <a key={index} href={`https://www.instagram.com/${profile.userName}/`} className="text-blue-500">
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              {/* right column */}
              <div className="flex flex-col">
                {/* title */}
                <h2 className="text-xl font-bold">{profile.userName}</h2>
                {/* description */}
                <p className="text-gray-700">{profile.bio}</p>
              </div>
            </div>
          </div>
        );
      }
      
      export default BioSection;
      

  