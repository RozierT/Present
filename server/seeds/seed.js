const db = require('../config/connection');
const User = require('../models/User')
const Profile = require('../models/Profile')
const Post = require('../models/Post')
const Comment = require('../models/Comment')
const cleanDB = require('./cleanDB')
const mongoose = require('mongoose')

// this is commenter joes data
// this is gonna be the guy who comments on all the posts in the seed data



const commenterJoeData = {
  _id: new mongoose.Types.ObjectId(),
  firstName: 'commenter',
  lastName: 'joe',
  email: 'john.doe@example.com',
  password: 'password123'
 };
 
 const commenterJoeProfileData = {
  _id: new mongoose.Types.ObjectId(),
  username: 'iCommentOnThings',
  bio: 'I comment on things, all the time. lol',
  profilePicture: 'http://example.com/profilePicture.jpg',
  userId: commenterJoeData._id,
  flairPref: [
    {tag: 'flair1', score: 100},
    {tag: 'flair2', score: 100}
  ],
 };


// ok how do we start. lets start with the users
// we need to create a user with a profile, i think it should be at least 250 users

// i think we do this in a loop with arrays of data that we can pull from,
// we can use faker to generate random data for each user
// lets make an array of 100 names and we can randomly pull from that array
// we will use these names to get first and last and then use that to create the email, password, and username
// each email will have a increasing number thrown in there so that we can ensure we have unique emails
// we will also have an array of random words that we can use to be part of the username

const names = [ "Omar", "Hamza", "Sier", "Taylor", "Colton", "Jenny", "Jesse", "Emily", "Ethan", "Olivia", "Liam", "Sophia", "Noah", "Ava", "William", "Isabella", "James", "Mia", "Benjamin", "Charlotte", "Jacob", "Amelia", "Samuel", "Harper", "Matthew", "Evelyn", "Daniel", "Abigail", "David", "Emily", "Joseph", "Elizabeth", "Michael", "Sofia", "Alexander", "Avery", "Henry", "Ella", "Andrew", "Scarlett", "Oliver", "Grace", "Gabriel", "Chloe", "Samuel", "Victoria", "Christopher", "Madison", "Isaac", "Lily", "Anthony", "Hannah", "Joshua", "Layla", "William", "Zoey", "Daniel", "Penelope", "Matthew", "Riley", "Ryan", "Nora", "Nathan", "Eleanor", "Elijah", "Hazel", "James", "Aurora", "Benjamin", "Stella", "Alexander", "Maya", "David", "Lucy", "Ethan", "Lillian", "Joseph", "Violet", "Daniel", "Aria", "Samuel", "Audrey", "Christopher", "Bella", "Matthew", "Caroline", "Andrew", "Leah", "William", "Samantha", "Michael", "Ellie", "Joshua", "Claire", "Benjamin", "Skylar", "David", "Paisley", "Noah", "Savannah"
];
const flairNames = [
 "food", 
 "sports", 
 "lifestyle", 
 "news", 
 "music", 
 "movies", 
 "gaming", 
 "funny", 
 "animals", 
 "science", 
 "technology", 
 "art", 
 "books", 
 "travel", 
 "photography", 
]

const tags = [
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

// // generate a random number between 10 and 750
function getRandomScore() {
  return Math.round(Math.random() * 740) + 10; 
}
 // takes in a user with default flair scores and returns user with randomized scores
function generateTagScores(user) {
  let totalScore = 0;
  let scores = [];
 
  // Generate initial scores for all tags
  for (let tag of tags) {
    let score = getRandomScore();
    totalScore += score;
    scores.push(score);
  }
 
  // Adjust scores to ensure total equals 2000
  while (totalScore !== 2000) {
    let index = Math.floor(Math.random() * scores.length);
    let adjustment = 2000 - totalScore;
    if (scores[index] + adjustment > 700) {
      scores[index] = 700;
    } else if (scores[index] + adjustment < 100) {
      scores[index] = 100;
    } else {
      scores[index] += adjustment;
    }
    totalScore = scores.reduce((a, b) => a + b, 0);
  }
 
  // Update user's flair scores
  for (let i = 0; i < tags.length; i++) {
    user.flairScores.find(flair => flair.tag === tags[i].tag).score = scores[i];
  }
 
  return user;
}

const pickFromArray = (array) => {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



let userArray = []; 
let profileArray = [];
let postArray = [];
let commentArray = [];
let likeArray = [];



const generateRandomUser = () => {

  let first = pickFromArray(names);
  let last = pickFromArray(names);
  let username = `${first}${last}${Math.floor(Math.random() * 1000)}`;
  let isUniqueUsername = false;
  
  while (!isUniqueUsername) {
    if (profileArray.some((u) => u.userName === username)) {
      username = `${first}${last}${Math.floor(Math.random() * 1000)}`;
      
    } else {
      isUniqueUsername = true;
    }
  }

  // create a randomly generated User
  let user = {
    _id: new mongoose.Types.ObjectId(),
    firstName: first,
    lastName: last,
    email: `${username}@example.com`,
    password: 'password123',
    lifeTimePosts: [],
    flairScores: [
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
  };

  let finalUser = generateTagScores(user)

  userArray.push(finalUser);
  
  // we create a Profile for the user
  let profile = {
      _id: new mongoose.Types.ObjectId(),
      username: username,
      bio: `This is a test bio about ${username}`,
      profilePicture: 'https://cataas.com/cat',
      userId: user._id ,
      posts: [],
    }
  profileArray.push(profile);
  
  // Now we autogenerate Posts for the user
  for (let i = 1; i < 8; i++) {
    let post = {
      _id: new mongoose.Types.ObjectId(),
      dateCreated: new Date(),
      userId: user._id,
      profilePicture: profile.profilePicture,
      username: profile.username,
      content: 'https://cataas.com/cat',
      textContent: `This is a test post from ${username}`,
      likes: [],
      flairs: [],
      comments: [],
      recencyScore: i,
    };
    for (let j = 0; j < 3; j++) {
      post.flairs.push(pickFromArray(flairNames));
    }

    postArray.push(post);
    
    // for each Post, create comments
    let numberOfComments = getRndInteger(1, 10);
      for (let k = 0; k < numberOfComments; k++) {
          let comment = {
          _id: new mongoose.Types.ObjectId(),
          userId: commenterJoeData._id,
          profilePicture: 'https://cataas.com/cat',
          username: commenterJoeProfileData.username,
          dateCreated: new Date(),
          textContent: `This is a test comment from commenterjoe on ${username}'s post${i} `,
          };
          post.comments.push(comment._id);
          commentArray.push(comment);
      }

      let numberOflikes = getRndInteger(1, 50);
      for (let k = 0; k < numberOflikes; k++) {
          let like = {
          _id: new mongoose.Types.ObjectId(),
          userId: commenterJoeData._id,
          };
          post.likes.push(like._id);
          likeArray.push(like);
      }
      user.lifeTimePosts.push(post._id);
      profile.posts.push(post._id);
  }

};


for (i = 0; i < 1000; i++ ){
generateRandomUser();
// console.log("one user done")
}

// profileArray
// .forEach(element => {
//   console.log(element.userName);
  
// });

// console.log(profileArray)
// console.log(commentArray)


console.log('# of users: ', userArray.length);
console.log('# of profiles: ', profileArray.length);
console.log('# of posts: ', postArray.length);
console.log('# of comments: ', commentArray.length);
console.log('# of likes: ', likeArray.length);
// i need to break out this array into 5 arrays so that i can easily do bulk create with them
// the first array will be the users
// the second array will be the profiles
// the third array will be the posts
// the fourth array will be the comments
// the fifth array will be the likes

// i need to create a function that makes the ser array then for each user makes a profile and adds it to the profile array
// then for each user makes 7 posts and adds it to the post array
// then for each post makes a random number of comments and adds it to the comment array
// then for each post makes a random number of likes and adds it to the like array

db.once('open', async () => {
  await cleanDB('User', 'users');
  await cleanDB('Profile', 'profiles');
  await cleanDB('Post', 'posts');
  await cleanDB('Comment', 'comments');

  const users = await User.insertMany(userArray)
  const profiles = await Profile.insertMany(profileArray)
  const posts = await Post.insertMany(postArray)
  const comments = await Comment.insertMany(commentArray)

  console.log('all done!');
  process.exit(0);
})