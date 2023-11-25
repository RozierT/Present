const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
  {
    dateCreated: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    imageSrc: {
      type: String,
    },
    title: {
      type: String,
      maxlength: 280,
    },
    description: {
      type: String,
      maxlength: 280,
    },
    likes: {
      type: Number,
      min: 0,
    },
    flairs: {
      type: [
        {
          type: String,
          trim: true,
        },
      ],
      maxlength: 3,
    },
    commentable: {
      type: Boolean,
      default: true,
    },
    comments: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Comment',
        },
      ],
    },
    shouldRendering: {
      type: Boolean,
      default: true,
    },
    recencyScore: {
      type: Number,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Virtual property: commentCount
postSchema.virtual('commentCount').get(function () {
  return this.comments.length;
});

const Post = model('post', postSchema);

module.exports = Post;
