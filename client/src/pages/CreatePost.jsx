import { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import FormContainer from '../components/FormStuffs/FormContainer';
import animals from '../assets/images/animals.png';
import art from '../assets/images/art.png';
import books from '../assets/images/books.png';
import food from '../assets/images/food.png';
import funny from '../assets/images/funny.png';
import gaming from '../assets/images/gaming.png';
import lifestyle from '../assets/images/lifestyle.png';
import movies from '../assets/images/movies.png';
import music from '../assets/images/music.png';
import news from '../assets/images/news.png';
import photography from '../assets/images/photography.png';
import science from '../assets/images/science.png';
import sports from '../assets/images/sports.png';
import technology from '../assets/images/tech.png';
import travel from '../assets/images/travel.png';
import MyButton from '../components/profile/MyButton';
import FormTitle from '../components/FormStuffs/FormTitle';
import TextField from '../components/FormStuffs/TextField';
import GridOfStuff from '../components/FormStuffs/GridOfStuff';
import ImageIcon from '../components/profile/ImageIcon';
import { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client'
import ImageUpload from '../components/ImageComponents/ImageUpload';
import {CREATE_POST} from '../utils/mutations'
// creating a profile requirements:
// - username (optional: as user types, check value against existing usernames)
// - 1 to 5 flairs to prefer
// - userid (from context)
const CreatePost = () => {
    const [description, setDescription] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [image, setImage] = useState('https://cataas.com/cat')

// console.log('userFlairs: ', userFlairs)
const visualTags = [
    { tag: "food", image: food},
    { tag: "sports", image: sports},
    { tag: "lifestyle", image: lifestyle},
    { tag: "news", image: news},
    { tag: "music", image: music},
    { tag: "movies", image: movies},
    { tag: "gaming", image: gaming},
    { tag: "funny", image: funny},
    { tag: "animals", image: animals},
    { tag: "science", image: science},
    { tag: "technology", image: technology},
    { tag: "art", image: art},
    { tag: "books", image: books},
    { tag: "travel", image: travel},
    { tag: "photography", image: photography}
]


    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
        setSelectedTags(selectedTags.filter((t) => t !== tag));
        } else {
        setSelectedTags([...selectedTags, tag]);
        }
        
    };

    useEffect(() => {
        if (selectedTags.length > 3) {
            setSelectedTags(selectedTags.slice(1, 4));
        }
        // console.log(selectedTags);
    }, [selectedTags]);


const tagElements = visualTags.map((tag, index) => (
    <div className='m-3' key={index} onClick={() => handleTagClick(tag.tag)}>
        {selectedTags.includes(tag.tag)? 
        <div className='border bg-accent-1 rounded-full p-2 ' >
        <ImageIcon imageSrc={tag.image} size={"small"} shape={"circle"} selected={true}/>
        </div>
        : 
        <div className='border rounded-full p-2 ' >
         <ImageIcon imageSrc={tag.image} size={"small"} shape={"circle"}/>
         </div>
        }

        </div>
    ));

    const handleImageUpload = (url) => {
        setProfilePic(url);
    };

const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
};


const [createPost, { error }] = useMutation(CREATE_POST, {
    onCompleted: (data) => {
        console.log(data);
        // navigate('/profile');
        //change to profile page
        window.location.assign('/feed')
    },
    onError: (error) => {
        console.log(error);
    }
    
});


const profileFromStorage  = localStorage.getItem('profile')
console.log(profileFromStorage)
const profile = JSON.parse(profileFromStorage)

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!description || selectedTags.length === 0) {
            return alert('Missing values!')
        }
        console.log(description, selectedTags, image)

         try {
         const { data: userData } = await createPost({
             variables: { username: profile.username, textContent: description, profilePicture: profile.profilePicture, flairs: selectedTags, content: image },
         });
         } catch (error) {
             console.error('creating post error: ', error)
         }
    }




    return (
        
        <FormContainer>
          
                <FormTitle title={"Create Post"} />


                    <ImageUpload tags={selectedTags} onImageUpload={handleImageUpload} shape={"round"}/>
               
       <div className='flex justify-center'>
                <p> what represents this moment</p>
         </div>       
     
           

                <GridOfStuff columns={"3"} arrayOfHtml={tagElements} />
                <p>All about this moment</p>
                <TextField 
                    value={description}
                    name={'description'}
                    onChange={handleDescriptionChange} 
                    placeholder={'describe the moment...'}
                />
                    <MyButton
                        size={"large"}
                        action={handleSubmit}
                        content={<>Submit</>}
                      />
        </FormContainer>
       
    )
}

export default CreatePost