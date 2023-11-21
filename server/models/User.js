const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

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
      minlength: 8,
      // At least 8 chars w/ at least 1 uppper/lower/num/special character
      match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Must match all password criteria!']
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
    scrapbook: [
      {
        type: Schema.Types.ObjectId,
        ref: 'post',
      }
    ],
    tags: [
      
    ]
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
