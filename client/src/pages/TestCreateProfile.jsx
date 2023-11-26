import { useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import InputField from '../components/FormStuffs/InputField';
import FormContainer from '../components/FormStuffs/FormContainer';
import { useMutation } from '@apollo/client';
import { CREATE_PROFILE, UPDATE_USER_PREFS } from '../utils/mutations'
import MyButton from '../components/profile/MyButton';
import FormTitle from '../components/FormStuffs/FormTitle';
import TextField from '../components/FormStuffs/TextField';
import GridOfStuff from '../components/FormStuffs/GridOfStuff';
import { addPoints } from '../utils/algorithms/createUserPref';
// creating a profile requirements:
// - username (optional: as user types, check value against existing usernames)
// - 1 to 5 flairs to prefer
// - userid (from context)
const MakeProfile = () => {
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [selectedTags, setSelectedTags] = useState([
        { tag: "food", score: 100, selected: false },
        { tag: "sports", score: 100, selected: false },
        { tag: "lifestyle", score: 100, selected: false },
        { tag: "news", score: 100, selected: false },
        { tag: "music", score: 100, selected: false },
        { tag: "movies", score: 100, selected: false },
        { tag: "gaming", score: 100, selected: false },
        { tag: "funny", score: 100, selected: false },
        { tag: "animals", score: 100, selected: false },
        { tag: "science", score: 100, selected: false },
        { tag: "technology", score: 100, selected: false },
        { tag: "art", score: 100, selected: false },
        { tag: "books", score: 100, selected: false },
        { tag: "travel", score: 100, selected: false },
        { tag: "photography", score: 100, selected: false }
    ]);

    const navigate = useNavigate();

    const [createProfile] = useMutation(CREATE_PROFILE);
    const [updateUserPrefs] = useMutation(UPDATE_USER_PREFS);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    
    const handleTagChange = (tagName) => {
        setSelectedTags((prevTags) =>
            prevTags.map((tag) =>
            tag.tag === tagName
                ? { ...tag, selected: !tag.selected, score: tag.selected ? 100 : 300 }
                : tag
            )
            );
    };
    
    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!username || !bio || selectedTags.length === 0) {
            return alert('Missing values!')
        }

        const flairsToUpdate = selectedTags.map(flair => {
            return {
                tag: flair.tag,
                score: flair.score
            }
        })

        try {
            const { data: profileData } = await createProfile({
                variables: { username, bio },
            });
    
            if (profileData) {
                try {
                    const { data: userData } = await updateUserPrefs({
                        variables: { 
                            input: flairsToUpdate 
                        },
                    });

                    if (userData) {
                        navigate('/feed')
                    }
                } catch (error) {
                    console.error('updating user error: ', error)
                }
            }
            
        } catch (error) {
            console.error('creating profile error: ', error)
        }
    };

    return (
        <FormContainer>
          
                <FormTitle title={"Create Profile"} />

                <div className='flex justify-center'>
                <div className='bkg-white
                h-40 w-40 border rounded-full flex justify-center'>
                    <p className='self-center p-4'>
          placeholder for where the add image will go for profile pic</p>
                </div>
                </div>
               
                <p>Username</p>
                 <InputField
                  placeholder={"what will you go by?"}
                  name={"username"}
                  type={"text"}
                  value={username}
                  onChange={handleUsernameChange}
                  size={"w-full mb-2 "}
                />
                <p>What interests you? (pick up to 5)</p>
                
                <GridOfStuff columns={"3"} content={<>    <div>01</div>
    <div>02</div>
    <div>03</div>
    <div>04</div>
    <div>05</div>
    <div>06</div>
    <div>07</div>
    <div>08</div>
    <div>09</div></>} />
                <div className='tag-choices flex'>
                {selectedTags.map((tag) => (
                    <div key={tag.tag}>
                        <label>
                            <input
                            type="checkbox"
                            checked={tag.selected}
                            onChange={() => handleTagChange(tag.tag)}
                            />
                            {tag.tag}
                        </label>
                    </div>
                    ))}
                </div>
                <p>All about you</p>
                <TextField 
                    value={bio}
                    name={'bio'}
                    onChange={handleBioChange} 
                    placeholder={'Share a bit about yourself...'}
                />
                    <MyButton
                        size={"large"}
                        action={handleSubmit}
                        content={<>Submit</>}
                      />
        </FormContainer>
    )
}

export default MakeProfile;