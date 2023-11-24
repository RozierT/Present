const { User, Post, Comment, Profile } = require("../models");
const { signToken, AuthenticationError } = require('../utils/auth')

const resolvers = {
  Query: {
    userPrefs: async ( parent, args, context) => {

      if (!context.user) {
        throw new Error('Authentication required');
      }

      const userPrefs = await User.findById(context.user._id)

      return userPrefs
    },
    // user: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId });
    // },
    // posts: async () => {
    //   return Post.find();
    // },
    // post: async (parent, { postId }) => {
    //   return Post.findOne({ _id: postId });
    // },
    // comments: async () => {
    //   return Comment.find();
    // },
    // comment: async (parent, { commentId }) => {
    //   return Comment.findOne({ _id: commentId });
    // },
    // profiles: async () => {
    //   return Profile.find();
    // },
    profile: async (parent, { userId }) => {
      return Profile.findOne({ userId: userId });
    },
    // links: async () => {
    //   return Link.find();
    // },
    // link: async (parent, { linkId }) => {
    //   return Link.findOne({ _id: linkId });
    // },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, { firstName, lastName, email, password }) => {
      
      const user = await User.create({ firstName, lastName, email, password });
      
      const token = signToken(user);

      return { token, user };
    },
    addProfile: async (parent, args, context) => {

      console.log('args', args)

      if (!context.user) {
        throw new Error('Authentication required');
      }

      const profile = await Profile.create(args);
      
      return profile;
    },
    updateUserPrefs: async (parent, args, context) => {

      if (!context.user) {
        throw new Error('Authentication required');
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { }
      )
    },
    // addLink: async (parent, args) => {
    //   const link = await Link.create(args);
    //   return link;
    // },
    // updateLink: async (parent, args) => {
    //   return Link.findOneAndUpdate(
    //     { _id: args._id },
    //     { $set: args },
    //     { new: true }
    //   );
    // },
    // deleteUser: async (parent, { userId }) => {
    //   return User.findOneAndDelete({ _id: userId });
    // },
    // deletePost: async (parent, { postId }) => {
    //   return Post.findOneAndDelete({ _id: postId });
    // },
    // deleteComment: async (parent, { commentId }) => {
    //   return Comment.findOneAndDelete({ _id: commentId });
    // },
    // deleteProfile: async (parent, { profileId }) => {
    //   return Profile.findOneAndDelete({ _id: profileId });
    // },
    // deleteLink: async (parent, { linkId }) => {
    //   return Link.findOneAndDelete({ _id: linkId });
    // },
  },
};

module.exports = resolvers;
