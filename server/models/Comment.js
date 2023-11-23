const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    text: {
        type: String,
        maxlength: 280
    },
    commentable: {
        type: Boolean
    },
    parentId: {
        type: Schema.Types.ObjectId,
        ref: 'comment',
        default: null, // Sets the default value to null for rootComment functionality
    }
})

const Comment = model('comment', commentSchema)

module.exports = Comment