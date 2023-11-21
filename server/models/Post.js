const { Schema, Model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const postSchema = new Schema(
  {
    dateCreated: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
    imageSrc: {
      type: String,
    },
    title: {
      type: String,
      maxLength: 280,
    },
    description: {
      type: String,
      maxLength: 280,
    },
    tags: [String],
    likes: {
      type: Number,
    },
    flairs: [
      {
        type: String,
        trim: true,
      },
    ],
    commentAble: {
      type: Boolean,
      default: true,
    },
    comments: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
    },
    score: {
      type: Number,
      default: 0,
    },
    shouldRendering: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: {
      virtual: true,
      getters: true,
    },
    id: false,
  }
);

postSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

postSchema.statics.getScoredPosts = async function () {
  const posts = await this.find();
  posts.forEach((post) => {
    let score = 0;
    post.tags.forEach((tag) => {
      const match = userPreferences.find((pref) => pref.tag === tag);
      if (match) {
        score += match.score;
      }
    });
    score += post.likes * 10;
    score += post.comments.length * 5;
    post.score = score;
    post.save();
  });
  posts.sort((a, b) => b.score - a.score);
  return posts;
};
