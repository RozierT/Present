const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp)
    },
    pictureURL: {
        type: String,
    },
    text: {
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
    flairs: [
        {
            type: String,
            trim: true,
        }
    ],
    // add 'commentable' bool somewhere
    comments: {
        type: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            }
        ]
    }

});

const Post = model('post', postSchema)

module.exports = Post