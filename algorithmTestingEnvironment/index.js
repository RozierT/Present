// Description: This file is used to test the algorithm for the like button
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this is a test section of a user profile with 15 tags and 100 points each, 
//at the end of establishing a profile the user will have 2000 points
//these points correspond with a users base interest in a tag
//the user will establish preferences by selecting 1-5 tags from the 15 tags
// this will be the users starting preferences
// the user will then like or dislike posts and the algorithm will adjust the users preferences based on the posts tags
let user = {
    tags: [
        {tag: "food", score: 100},
        {tag: "sports", score: 100},
        {tag: "politics", score: 100},
        {tag: "news", score: 100},
        {tag: "music", score: 100},
        {tag: "movies", score: 100},
        {tag: "gaming", score: 100},
        {tag: "funny", score: 100},
        {tag: "animals", score: 100},
        {tag: "science", score: 100},
        {tag: "technology", score: 100},
        {tag: "art", score: 100},
        {tag: "books", score: 100},
        {tag: "travel", score: 100},
        {tag: "photography", score: 100}
    ],
    
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~







// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this represents the choices the user made when they first set up their profile
userChoices = [];

//for testing purposes i am going to randomly select a random number 1-5 of tags from the user tags array and assign them to the user choices array
randomNumber = Math.floor(Math.random() * 5) + 1;

// for testing purposes i am going to randomly select the user choices and add them to the user preference array 
let userPreferenceArray = user.tags
.map(item => {
return {...item};
});
for (let i = 0; i < randomNumber; i++) {
let randomTag = userPreferenceArray[Math.floor(Math.random() * userPreferenceArray.length)];
// remove the random tag from the user preference array
userPreferenceArray = userPreferenceArray.filter(item => item.tag !== randomTag.tag);
userChoices.push(randomTag);
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this will be in final algorithm and will add weight to the users choices without removing any weight from the other tags
// this will be done by adding points to the users choices
// the points will be determined by the number of choices the user made
// the total points will always be 2000

let numberOfSelections = userChoices.length;

// this is the number of selections the user made
console.log(`the user selected ${numberOfSelections} choices`)
userChoices.forEach((choice, index) => {
console.log(` ${index + 1}: ${choice.tag}`);
});





//determine how many points to add to each selection

// set up function to add points to the users choices
const addPoints = (numberOfSelections) => {

let pointsToAdd 

if (numberOfSelections === 1) {
    pointsToAdd = 500;
} else if (numberOfSelections === 2) {
    pointsToAdd = 250;
} else if (numberOfSelections === 4) {
    pointsToAdd = 125;
} else if (numberOfSelections === 5) {
    pointsToAdd = 100;
}


if (numberOfSelections === 3) {
user.tags = user.tags.map(item => {
    if (item.tag === userChoices[0].tag) {
        return {...item, score: item.score + 166};
    } else if (item.tag === userChoices[1].tag) {
        return {...item, score: item.score + 167};
    } else if (item.tag === userChoices[2].tag) {
        return {...item, score: item.score + 167};
    } else {
        return item;
    }
});
return

} else {for (let i = 0; i < numberOfSelections; i++) {
user.tags = user.tags.map(item => {
    if (item.tag === userChoices[i].tag) {
        return {...item, score: item.score + pointsToAdd};
    } else {
        return item;
    }
    });
}}
}

// run function to add points to the users choices
addPoints(numberOfSelections)

function printUserTagScores(userTags) {
let output = "the new user tag scores are: \n\n";
for (let i = 0; i < userTags.length; i++) {
    output += `  ${i}: ${userTags[i].tag} with ${userTags[i].score} points \n`;
}
console.log(output);

const totalPoints = userTags.reduce((total, tag) => total + tag.score, 0);
console.log("total points = "+ totalPoints);

return output;
}

// Call the function
printUserTagScores(user.tags);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// define the number of tests to run
testsToRun = 1000;
let iterations ;
console.log(`\n\n\n`)
console.log(`the test will run ${testsToRun} times...`)
// run test on likeing a post 1000 times
    for (let i = 0; i < testsToRun; i++){

iterations = i + 1;
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^







//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// i need to define the action the user is taking and change the points to add based on the action
//likes, comments, shares, and disliked will be taken into acount


// set up array of actions
let actions = ["like", "comment", "share", "dislike"];

// randomly select an action from the actions array
let action = actions[Math.floor(Math.random() * actions.length)];

function determineInteractionPoints(action) {
let typeOfInteraction = "positive";
let pointsToAdd;

if (action === "like") {
    pointsToAdd = 1;
} else if (action === "comment") {
    pointsToAdd = 5;
} else if (action === "share") {
    pointsToAdd = 10;
} else if (action === "dislike") {
    typeOfInteraction = "negative";
    pointsToAdd = 10;
}

return {pointsToAdd, typeOfInteraction};
}

// run function to determine the points to add
let {pointsToAdd, typeOfInteraction} = determineInteractionPoints(action);

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^







//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// this section of code is taking the place of deciding which post category to like, in reality the user would like a post and the algorithm would run
// also in reality the user would be shown posts based on a number of factors, but for this test the user will be shown a random post based only on the amount of points a tag has in the probability array

// create a probability array based on the users tag scores
// this will be done by creating an array of the users tags and then creating an array of the tags based on the number of points the tag has
function selectRandomTag(array) {
let primarySortedArray = array
   .map(item => {
       return {...item};
   });

let firstProbabilityArray = array.flatMap((item, index) => {
    return Array(primarySortedArray.index).fill(index);
});

let results = [];
for (let i = 0; i < 5; i++) {
   let randomTag = firstProbabilityArray[Math.floor(Math.random() * firstProbabilityArray.length)];
   results.push(randomTag);
}

let randomTagNumber = results[Math.floor(Math.random() * results.length)];

return randomTagNumber;
}

// run function to select a random tag
let randomTagNumber = selectRandomTag(user.tags);
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^





//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// this section of code is being used in the main algorithm to determine which tag to add points to and which tag to remove points from
// this will be done by adding points to tag that was liked and removing points from a at random
// the removing points from a tag will be done by creating a probability array based on the users tag scores
// this will be based on the inverse of the users tag scores which will mean that a tag that is not favored by the user will have a higher probability of being selected to have a point removed from it

// before you ask, yes it is possible to have the points added to and removed from the same tag, this is intentional, it will allow the users choices to be less impactful on the algorithm on tags that are not specifically liked or disliked by the user


// check to see if the tag score is maxed out
function checkIfTagScoreMaxed(array, tag) {
let tagScore = array[tag].score;
let tagPreferenceMaxed = tagScore >= 800;
return tagPreferenceMaxed;
}

// run function to check if the tag score is maxed out   
// check to see if the tag score is at the minimum


function checkIfTagScoreMin(array, tag) {
let tagScore = array[tag].score;
let tagPreferenceMin = tagScore <= 0;
return tagPreferenceMin;
}

// run function to check if the tag score is at the minimum


// update the tag score based on the type of interaction
const runUpdateTags = (starterTagArray, selectedTag, action) => {
let {pointsToAdd, typeOfInteraction} = determineInteractionPoints(action);

//check to see if the tag score is maxed out
const tagPreferenceMin = checkIfTagScoreMin(starterTagArray, selectedTag);
const tagPreferenceMaxed = checkIfTagScoreMaxed(starterTagArray, selectedTag);


if (typeOfInteraction === "positive") {
if (tagPreferenceMaxed === true) {
console.log(`the tag ${starterTagArray[selectedTag].tag} is maxed out`)
return
} else { 
let updatedArray = updateScore(starterTagArray, selectedTag, pointsToAdd);
let sortedArray = sortAndFilterTags(updatedArray);
let inverseSortedArray = getInverseSortedArray(sortedArray);
let probabilityArray = createProbabilityMap(inverseSortedArray); 
for (let i = 0; i < pointsToAdd; i++) {
let randomIndex = getRandomIndex(probabilityArray);
let tagToAlter = inverseSortedArray[randomIndex]
adjustTagScore(user, tagToAlter)
}
return

} 

} else if (typeOfInteraction === "negative") {
console.log('negative')
if (tagPreferenceMin === true) {
    console.log(`the tag ${starterTagArray[randomTagNumber].tag} is maxed out`)
    return
} else {
console.log('negative')
}
}
}

// runUpdateTags(user.tags, randomTagNumber, action)



function updateScore(tagsArray, randomTagNumber, pointsToAdd) {
let updatedUserArray = tagsArray.map(item => {
  if (item.tag === tagsArray[randomTagNumber].tag) {
      return {...item, score: item.score + pointsToAdd};
  } else {
      return item;
  }
});

user.tags = updatedUserArray;
return updatedUserArray;
}

function sortAndFilterTags(tagsArray) {
let sortedArray = tagsArray
  .filter(item => item.score > 20)
  .map(item => {
      return {...item};
  });

sortedArray = sortedArray.sort((a, b) => b.score - a.score);
return sortedArray;
}


let updatedArray = updateScore(user.tags, randomTagNumber, pointsToAdd);
let sortedArray = sortAndFilterTags(updatedArray);

// console.log(output);
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^





//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// create the starter array for the inverse sorted array
function getInverseSortedArray(sortedArray) {
let inverseSortedArray = sortedArray.map(item => {
  return {...item};
});

// swap the scores in the inverse sorted array so that the highest score is on the least liked tag
for (let i = 0; i < inverseSortedArray.length / 2; i++) {
  let temp = inverseSortedArray[i].score;
  inverseSortedArray[i].score = inverseSortedArray[inverseSortedArray.length - 1 - i].score;
  inverseSortedArray[inverseSortedArray.length - 1 - i].score = temp;
}

return inverseSortedArray;
}

// run function to create the starter array for the inverse sorted array
let inverseSortedArray = getInverseSortedArray(sortedArray);


// create the probability array of the inverse sorted array
function createProbabilityMap(array) {
let probabilityArray = array.flatMap((item, index) => {
 return Array(item.score).fill(index);
});

return probabilityArray;
}

// run function to create the probability array of the inverse sorted array
let probabilityArray = createProbabilityMap(inverseSortedArray); 
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// remove points from a random tag in the probability array based on the number of points to remove, this means that the points to removed will be distributed across the tags based on the inverse of the users tag scores   

for (let i = 0; i < pointsToAdd; i++) {
// this will pick 5 random tags from the probability array and add them to the results array

const getRandomIndex = (Array) => {

    // this will pick 5 random tags from the probability array and add them to the results array
    results = [];
    for (let i = 0; i < 5; i++) {
        randomItem = Array[Math.floor(Math.random() * Array.length)];
       results.push(randomItem);
    }
    
   let randomIndex = results[Math.floor(Math.random() * results.length)];
    return randomIndex
}

// run function to get a random index
let randomIndex = getRandomIndex(probabilityArray);
// this will pick from those five at random and serve that tag to be decreased by 1 point
// the reason for giving the 5 chosen tags a random number is to give the tags with the highest probability of being selected a chance to not be selected

let tagToAlter = inverseSortedArray[randomIndex]

// remove points from the random tag
function adjustTagScore(user, tagToAlter) {
try {
    user.tags = user.tags.map(item => {
        if (item.tag === tagToAlter.tag) {
            return {...item, score: item.score - 1};
        } else {
            return item;
        }
    });
} catch (err) {
    console.error('An error occurred:', err);
}
}


adjustTagScore(user, tagToAlter)
}

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^




//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~






// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// print the results of the test user interactions
console.log(`\n\n\n`)
console.log(`the test has run ${iterations} times`)
printUserTagScores(user.tags);
