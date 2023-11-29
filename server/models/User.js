const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const flairSchema = require('./Flair')

const userSchema = new Schema({
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      // minlength: 8,
      // At least 8 chars w/ at least 1 upper/lower/num/special character
      // match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Must match all password criteria!']
    },
    following: {
      type: [Schema.Types.ObjectId],
      ref: 'user',
      default: []
    },
    scrapbook: {
      type: [Schema.Types.ObjectId],
      ref: 'post',
      default: []
    },
    flairScores: {
      type: [flairSchema],
      default: function() {
        return [
          { tag: "food", score: 100 },
          { tag: "sports", score: 100 },
          { tag: "lifestyle", score: 100 },
          { tag: "news", score: 100 },
          { tag: "music", score: 100 },
          { tag: "movies", score: 100 },
          { tag: "gaming", score: 100 },
          { tag: "funny", score: 100 },
          { tag: "animals", score: 100 },
          { tag: "science", score: 100 },
          { tag: "technology", score: 100 },
          { tag: "art", score: 100 },
          { tag: "books", score: 100 },
          { tag: "travel", score: 100 },
          { tag: "photography", score: 100 }
        ]
      }
    }
  },
  {
    toJSON: {
        virtuals: true,
    },
    id: false
  }
);

// auth/login middleware

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// virtuals

// return # of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

// reture # of lifetime posts
userSchema.virtual('lifetimePosts').get(function () {
  return this.scrapbook.length
})

const User = model('user', userSchema);

module.exports = User;
