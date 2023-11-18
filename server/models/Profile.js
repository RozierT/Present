const { Schema, model } = require('mongoose')

const profileSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    bio: {
        type: String,
        maxLength: 280,
    },
    profileImage: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    links: {
        type: [{
            type: String
        }],
        maxlength: 3
    }
})

const Profile = model('profile', profileSchema)

module.exports = Profile