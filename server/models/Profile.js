const { Schema, model } = require('mongoose')

const profileSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    bio: {
        type: String,
        maxLength: 280,
    },
    profilePicture: {
        type: String,
        default: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg'
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
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    latestPosts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'post'
        }
    ]
})

const Profile = model('profile', profileSchema)

module.exports = Profile