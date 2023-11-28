// this will be a page that allows a user to search for other users and follow them

import Header from "../components/Headers";
import Footer from "../components/Footer";
import InputField from "../components/FormStuffs/InputField";
import { useState } from "react";
import MyButton from "../components/profile/MyButton";
import SearchResults from "../components/searchStuff/searchResults";

let data = [
    {
        id: "1",
        username: "user1",
        profilePicture: "https://picsum.photos/200",
        type: "user"
    },
    {
        id: "2",
        username: "user2",
        profilePicture: "https://picsum.photos/200",
        type: "user"
    },
    {
        id: "3",
        username: "user3",
        profilePicture: "https://picsum.photos/200",
        type: "user"
    },
]


const ExplorePage = () => {
    const [formState, setFormState] = useState({ search: ""});
    const [searchResults, setSearchResults] = useState("none");

   // update state based on form input changes
   const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
        ...formState,
        [name]: value,
    });
    };
 const handleFormSubmit = () => {
     console.log(formState)
     setSearchResults("results")
    }

    return (
        <div className="bg-bkg-1 text-content h-100">
            <Header />   
            <div className="flex p-4 "> 
            <InputField 
                  name={"search"}
                  value={formState.search}
                  onChange={handleChange}
                  type={"search"}
                  placeholder={" search..."}
                  size={"w-80 rounded-md mr-4 "}
                 />
                 <MyButton content={"search"} type={"bordered"} shape={"circle"} size={"small"} action={handleFormSubmit}/></div>

                 <div className="h-screen  bg-bkg-2">
                 {searchResults === "none" ? <p>no results</p> :   
            <SearchResults resultsArray={data} /> 
            }
            </div>
            <Footer />
        </div>
    )
}

export default ExplorePage;