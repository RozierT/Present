const { User, Post, Comment, Profile } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    getUsernames: async (parent, { username }, context) => {
      if (!context.user) {
        throw new Error("Authentication required");
      }

      // console.log('incoming username', username)

      const listOfUsers = await Profile.find({
        username: { $regex: username, $options: 'i' }
      }).select('username userId profilePicture')
      .limit(10)

      // console.log('returned user list: ', listOfUsers)
      
      return listOfUsers
    },
    // Find (logged in) user by id (context) and return their Flair Score Array
    userPrefs: async (parent, args, context) => {
      if (!context.user) {
        throw new Error("Authentication required");
      }

      const userPrefs = await User.findById(context.user._id).select(
        "flairScores"
      );

      // console.log('userPrefs: ', userPrefs)

      return userPrefs.flairScores;
    },
    // Find posts in db that match passed in params and return the ids (array)
    getWeightedPosts: async (
      parent,
      { flair, recencyScore, dateRange },
      context
    ) => {
      if (!context.user) {
        throw new Error("Authentication required");
      }

      let startDate, endDate;

      if (dateRange.length > 1) {
        startDate = new Date(dateRange[1]);
        endDate = new Date(dateRange[0]);
      } else {
        startDate = new Date(dateRange[0]);
        startDate.setHours(0, 0, 0, 0); // set to the start of the day
        endDate = new Date(dateRange[0]);
      }

      const weightedPosts = await Post.find({
        flairs: { $in: [flair] },
        recencyScore: recencyScore,
        dateCreated: {
          $gte: startDate,
          $lte: endDate,
        },
      }).select("_id");

      return weightedPosts;
    },
    // find post by id that is passed in thru args
    getPostById: async (parent, args, context) => {

      if (!context.user) {
        throw new Error('Authentication required');
      }

      const queriedPost = await Post.findById(args._id);

      return queriedPost;
    },
    getPostsById: async (parent, args, context) => {
      // console.log("args: ", args);

      if (!context.user) {
        throw new Error("Authentication required");
      }

      const queriedPosts = await Post.find({
        _id: { $in: args.ids },
      });

      // console.log('queried Posts: ', queriedPosts)

      return queriedPosts;
    },
    me: async (parent, args, context) => {
      if (!context.user) {
        throw new Error("Authentication required");
      }

      // console.log('user id: ', context.user._id)

      const thisUserProfile = await Profile.findOne({ userId: context.user._id }).populate('posts')

      // console.log('user profile: ', thisUserProfile)

      return thisUserProfile
    },
    getOthersProfile: async (parent, args, context) => {
      if (!context.user) {
        throw new Error("Authentication required");
      }


      const othersProfile = await Profile.findOne({
        userId: args.userId
      })
      .populate('posts')

      // console.log('profile data: ', othersProfile)

      return othersProfile
    },
    getUser: async (parent, args, context) => {

      if (!context.user) {
        throw new Error('Authentication required');
      }

      const thisUser = await User.findById(context.user._id).select('-password')

      return thisUser
    },
    getComments: async (parents, args, context) => {

      // console.log('comment args: ', args)

      if (!context.user) {
        throw new Error('Authentication required');
      }

      const queriedComments = await Comment.find({
        _id: { $in: args.ids },
      })

      // console.log('queried comments: ', queriedComments)

      return queriedComments
    }
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
    addProfile: async (parent, { username, bio, profilePicture }, context) => {
      if (!context.user) {
        throw new Error("Authentication required");
      }

      const profile = await Profile.create({
        username,
        bio,
        profilePicture,
        userId: context.user._id,
      });

      return profile;
    },
    // Used to update a user's flairScores array after Profile creation
    updateUserPrefs: async (parent, args, context) => {
      const { input } = args;

      if (!context.user) {
        throw new Error("Authentication required");
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $set: { flairScores: input } },
        { new: true }
      );

      if (!updatedUser) {
        throw new Error("User not found");
      }

      return updatedUser;
    },
    // creates post based on passed in data then updates profile with new post id
    createPost: async (parent, { content, textContent, flairs, username, profilePicture}, context) => {

      if (!context.user) {
        throw new Error("Authentication required");
      }

      const createdPost = await Post.create({
        content,
        textContent,
        flairs,
        username,
        profilePicture
      })

      if (createdPost) {
        console.log('created post id: ', createdPost._id)

        // updates users profile with new post id making it the first in posts array
        const updatedProfile = await Profile.findOneAndUpdate(
          { userId: context.user._id },
          { $push: { posts: {
            $each: [createdPost._id],
            $position: 0
          }} },
          { new: true }
        );

        return updatedProfile;
      }
    },
    createComment: async (parent, { textContent, username, profilePicture, userId, postId }, context) => {

      if (!context.user) {
        throw new Error("Authentication required");
      }

      const createdComment = await Comment.create({
        textContent,
        username,
        profilePicture,
        userId: context.user._id,
      })

      if (createdComment) {
        console.log('created comment id: ', createdComment._id)

        const updatedPost = await Post.findOneAndUpdate(
          { _id: postId },
          { $push: { comments: createdComment._id }},
          { new: true }
        )

        return updatedPost
      }
    },
    // Following a user
    followUser: async (parent, { followUserId }, context) => {
      
      if (!context.user) {
        throw new AuthenticationError("You must be logged in!");
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { following: followUserId } },
        { new: true }
      ).select('following')

      console.log('updated follow user: ', updatedUser)

      return updatedUser;
    },
    // Un-following a user
    unFollowUser: async (parent, { unFollowUserId }, context) => {
      
      if (!context.user) {
        throw new AuthenticationError("You must be logged in!");
      }

      const updatedUser = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { following: unFollowUserId } },
        { new: true }
      ).select('following')

      console.log('updated unfollow user: ', updatedUser)

      return updatedUser;
    },
  },
};

module.exports = resolvers;
