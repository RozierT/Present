//import mongoose from 'mongoose';
const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    profilePicture: String,
    dateCreated: Date,
    textContent: String,
   });
   
   const Comment = model('Comment', commentSchema);

module.exports = Comment;