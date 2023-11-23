import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { CREATE_PROFILE } from '../utils/mutations'

// creating a profile requirements:
// - username (optional: as user types, check value against existing usernames)
// - 1 to 5 flairs to prefer
// - userid (from context)
const MakeProfile = () => {
    const [formState, setFormState] = useState({
        username: '',
        flairPrefs: [],
    });

    const [createProfile, { error, data }] = useMutation(CREATE_PROFILE);

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState)
    };

    return (
        <main>
            
        </main>
    )
}

export default MakeProfile;