const { User, Post, Comment, Profile, Link } = require("../models");
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
    comments: async () => {
      return Comment.find();
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    },
    profiles: async () => {
      return Profile.find();
    },
    profile: async (parent, { profileId }) => {
      return Profile.findOne({ _id: profileId });
    },
    links: async () => {
      return Link.find();
    },
    link: async (parent, { linkId }) => {
      return Link.findOne({ _id: linkId });
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
  addComment: async (parent, args) => {
    const comment = await Comment.create(args);
    return comment;
  },
  updateComment: async (parent, args) => {
    return Comment.findOneAndUpdate(
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
  addLink: async (parent, args) => {
    const link = await Link.create(args);
    return link;
  },
  updateLink: async (parent, args) => {
    return Link.findOneAndUpdate(
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
  deleteComment: async (parent, { commentId }) => {
    return Comment.findOneAndDelete({ _id: commentId });
  },
  deleteProfile: async (parent, { profileId }) => {
    return Profile.findOneAndDelete({ _id: profileId });
  },
  deleteLink: async (parent, { linkId }) => {
    return Link.findOneAndDelete({ _id: linkId });
  },
};

module.exports = resolvers;
