const { Schema, model } = require('mongoose');



const postSchema = new Schema({
    dateCreated: Date,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    profilePicture: String,
    content: String,
    textContent: String,
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    flairs: [String],
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
    recencyScore: Number,
   });
   
const Post = model('Post', postSchema);

module.exports = Post;