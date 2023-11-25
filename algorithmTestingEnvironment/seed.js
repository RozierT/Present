
// this is commenter joes data
// this is gonna be the guy who comments on all the posts in the seed data



const commenterJoeData = {
    _id: 'commenterjoesID',
    firstName: 'commenter',
    lastName: 'joe',
    email: 'john.doe@example.com',
    password: 'password123'
   };
   
   const commenterJoeProfileData = {
    _id: 'customProfileID',
    userName: 'iCommentOnThings',
    bio: 'I comment on things, all the time. lol',
    profilePicture: 'http://example.com/profilePicture.jpg',
    userId: 'commenterjoesID',
    flairPref: [
      {tag: 'flair1', score: 100},
      {tag: 'flair2', score: 100}
    ],
   };
   
  
  // i need a f*ck ton of posts
  // i need a f*ck ton of comments
  // i need a f*ck ton of users
  // i need a f*ck ton of profiles
  // i need a f*ck ton of notifications
  
  // ok how do we start. lets start with the users
  // we need to create a user with a profile, i think it should be at least 250 users
  
  // i think we do this in a loop with arrays of data that we can pull from,
  // we can use faker to generate random data for each user
  // lets make an array of 100 names and we can randomly pull from that array
  // we will use these names to get first and last and then use that to create the email, password, and username
  // each email will have a increasing number thrown in there so that we can ensure we have unique emails
  // we will also have an array of random words that we can use to be part of the username
  
  const names = [ "John", "Joe", "Jane", "Jill", "Jack", "Jenny", "Jesse", "Emily", "Ethan", "Olivia", "Liam", "Sophia", "Noah", "Ava", "William", "Isabella", "James", "Mia", "Benjamin", "Charlotte", "Jacob", "Amelia", "Samuel", "Harper", "Matthew", "Evelyn", "Daniel", "Abigail", "David", "Emily", "Joseph", "Elizabeth", "Michael", "Sofia", "Alexander", "Avery", "Henry", "Ella", "Andrew", "Scarlett", "Oliver", "Grace", "Gabriel", "Chloe", "Samuel", "Victoria", "Christopher", "Madison", "Isaac", "Lily", "Anthony", "Hannah", "Joshua", "Layla", "William", "Zoey", "Daniel", "Penelope", "Matthew", "Riley", "Ryan", "Nora", "Nathan", "Eleanor", "Elijah", "Hazel", "James", "Aurora", "Benjamin", "Stella", "Alexander", "Maya", "David", "Lucy", "Ethan", "Lillian", "Joseph", "Violet", "Daniel", "Aria", "Samuel", "Audrey", "Christopher", "Bella", "Matthew", "Caroline", "Andrew", "Leah", "William", "Samantha", "Michael", "Ellie", "Joshua", "Claire", "Benjamin", "Skylar", "David", "Paisley", "Noah", "Savannah"
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

  const pickFromArray = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

 let userArray = []; 

 const generateRandomUser = () => {
    let first = pickFromArray(names);
    let last = pickFromArray(names);
    let username = `${first}${last}${Math.floor(Math.random() * 1000)}`;
  
    let user = {
      _id: `${username}ID`,
      firstName: first,
      lastName: last,
      email: `${username}@example.com`,
      password: 'password123',
      lifeTimePosts: [],
      profile: {
        _id: `${username}ProfileID`,
        userName: username,
        bio: `This is a test bio about ${username}`,
        profilePicture: 'https://cataas.com/cat',
        userId: `${username}ID`,
        posts: [],
        flairPref: [
          { tag: "food", score: 100 },
          { tag: "sports", score: 100 },
          // ...rest of the flairPref array
        ],
      },
    };
  
    let isUniqueUsername = false;
    while (!isUniqueUsername) {
      if (userArray.some((u) => u.profile.userName === username)) {
        username = `${first}${last}${Math.floor(Math.random() * 1000)}`;
        user._id = `${username}ID`;
        user.profile.userName = username;
        user.profile.userId = `${username}ID`;
      } else {
        isUniqueUsername = true;
      }
    }
  
    let postArray = [];
    for (let i = 1; i < 8; i++) {
      let post = {
        _id: `${username}Post${i}ID`,
        dateCreated: new Date(),
        userId: `${username}ID`,
        profilePicture: 'https://cataas.com/cat',
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
      let numberOfComments = getRndInteger(1, 10);
        for (let k = 0; k < numberOfComments; k++) {
            let comment = {
            _id: `${username}Post${i}Comment${k}ID`,
            userId: `commenterjoesID`,
            profilePicture: 'https://cataas.com/cat',
            dateCreated: new Date(),
            textContent: `This is a test comment from commenterjoe on ${username}'s post${i} `,
            };
            post.comments.push(comment);
        }
        let numberOflikes = getRndInteger(1, 50);
        for (let k = 0; k < numberOflikes; k++) {
            let like = {
            _id: `${username}Post${i}like${k}ID`,
            userId: `commenterjoesID`,
            };
            post.likes.push(like);
        }
    }
  
    user.profile.posts = postArray;
  
    
      userArray.push(user);
    
  };


for (i = 0; i < 1000; i++ ){
generateRandomUser();
console.log(userArray[i].profile.userName);
}
