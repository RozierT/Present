const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  userName: String,
  bio: String,
  profilePicture: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  flairPref: {
    tag: String,
    score: Number
  },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const Profile = model('Profile', profileSchema);

module.exports = Profile;
