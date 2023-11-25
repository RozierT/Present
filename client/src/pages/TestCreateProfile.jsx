import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { CREATE_PROFILE, UPDATE_USER_PREFS } from '../utils/mutations'
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

        console.log('data to be sent: ', username, bio, selectedTags)

        try {
            // TODO: ADD USER ID
            const { data: profileData } = await createProfile({
                variables: { username, bio },
            });

            console.log('Profile data: ', profileData)
    
            // if (profileData) {
            //     try {
            //         const { data: userData } = await updateUserPrefs({
            //             variables: { userId: context.userId, flairScores: selectedTags },
            //         });
    
            //         console.log('updated User: ', userData)

            //         if (userData) {
            //             // Redirect to '/'
                        
            //         }
            //     } catch (error) {
            //         console.error('updating user error: ', error)
            //     }
            // }
            
        } catch (error) {
            console.error('creating profile error: ', error)
        }
    };

    return (
        <main className=''>
            <form onSubmit={handleSubmit} className='bg-purple-400 m-4 flex-wrap '>
                <input
                    className=''
                    type='text' 
                    value={username}
                    name='username'
                    onChange={handleUsernameChange}
                    placeholder='what should people call you online?'
                />
                

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

                <textarea 
                    value={bio}
                    name='bio'
                    onChange={handleBioChange} 
                    placeholder='Tell me a bit about yourself...'
                />

                <button
                    className="m-3"
                    style={{ cursor: 'pointer' }}
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </main>
    )
}

export default MakeProfile;