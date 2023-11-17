const { User, Post, Album, Profile } = require("../models");
const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    posts: async () => {
      return Post.find();
    },
    post: async (parent, { postId }) => {
      return Post.findOne({ _id: postId });
    },
    albums: async () => {
      return Album.find();
    },
    album: async (parent, { albumId }) => {
      return Album.findOne({ _id: albumId });
    },
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    updateUser: async (parent, args) => {
      return User.findOneAndUpdate(
        { _id: args._id },
        { $set: args },
        { new: true }
      );
    },
    addPost: async (parent, args) => {
      const post = await Post.create(args);
      return post;
    },
  },
  addAlbum: async (parent, args) => {
    const album = await Album.create(args);
    return album;
  },
  updateAlbum: async (parent, args) => {
    return Album.findOneAndUpdate(
      { _id: args._id },
      { $set: args },
      { new: true }
    );
  },
  addProfile: async (parent, args) => {
    const profile = await Profile.create(args);
    return profile;
  },
  updateProfile: async (parent, args) => {
    return Profile.findOneAndUpdate(
      { _id: args._id },
      { $set: args },
      { new: true }
    );
  },
  deleteUser: async (parent, { userId }) => {
    return User.findOneAndDelete({ _id: userId });
  },
  deletePost: async (parent, { postId }) => {
    return Post.findOneAndDelete({ _id: postId });
  },
  deleteAlbum: async (parent, { albumId }) => {
    return Album.findOneAndDelete({ _id: albumId });
  },
  deleteProfile: async (parent, { profileId }) => {
    return Profile.findOneAndDelete({ _id: profileId });
  },
};

module.exports = resolvers;
