const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    pictureURL: {
        type: String,
    },
    caption: {
        type: String,
        maxlength: 280
    },
    createdBy: {
        type: String,
        required: true,
        trim: true,
    },
    likes: {
        type: Number
    },
    tags: [
        {
            type: String,
            trim: true,
        }
    ],
    comments: [
        {
            commentText: {
                type: String,
                required: true,
                minlength: 1,
                maxlength: 280,
            },
            commentAuthor: {
                type: String,
                required: true,
                trim: true,
            },
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp),
            },
        }
    ]
});

const Post = model('post', postSchema)

module.exports = Post