const { Schema, model } = require('mongoose');

const userSchema = new Schema({
 firstName: String,
 lastName: String,
 email: String,
 password: String,
 following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
 followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
 lifetimePosts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

const User = model('User', userSchema);

module.exports = User;