const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
        dateCreated: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        },
        imageSrc: {
            type: String,
        },
        title: {
            type: String,
            maxlength: 280
        },
        description: {
            type: String,
            maxlength: 280
        },
        likes: {
            type: Number
        },
        flairs: [
            {
                type: String,
                trim: true,
            }
        ],
        commentable: {
            type: Boolean,
            default: true
        },
        comments: {
            type: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Comment',
                }
            ]
        },
        shouldRendering: {
            type: Boolean,
            default: true
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    },
);

postSchema.virtual('commentCount').get(function () {
    return this.comments.length
})



const Post = model('post', postSchema)

module.exports = Post