const { Schema, model } = require('mongoose')


const commentSchema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
        username: {
            type: String
        },
        profilePicture: {
            type: String
        }, 
        dateCreated: {
            type: Date,
            default: Date.now,
        },
        textContent: {
            type: String,
            maxlength: 280
        },
        commentable: {
            type: Boolean
        },
        parentId: {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
            default: null, // Sets the default value to null for rootComment functionality
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

// // Virtual: Associated User's Profile pic
// commentSchema.virtual('profilePicture').get(function() {
//     return this.userId.profilePicture;
// });

const Comment = model('comment', commentSchema)

module.exports = Comment