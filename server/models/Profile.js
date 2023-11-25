const { Schema, model } = require('mongoose')

const profileSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
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
    links: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'link'
            }
        ],
        maxlength: 3
    },
    profilePicture: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

const Profile = model('profile', profileSchema)

module.exports = Profile