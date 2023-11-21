//first i need to set up a testing environment that simulates a users preferences and interactions with posts on the application

//lets start with the user preference array that will be used in the initial set up of an account and build from there
// ~~~~~~~~~~~~~~~~~~~~~~  TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~

// this represents the users preferences for the tags that they want to see on their feed

let user = {
    tags: [
        {tag: "food", score: 100},
        {tag: "sports", score: 100},
        {tag: "lifestyle", score: 100},
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
// this initial array will be used to set up the users account and will be used to generate the users feed
// next we need to set up the choices being made by the user on set up to alter their preferences

// this array will be used to store the users choices and will be used to alter the users preferences
let userArray = [...user.tags]
// ~~~~~~~~~~~~~~~~~~~~~~  END TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~

let userChoices = [];

// ~~~~~~~~~~~~~~~~~~~~~~  TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~
// this will simulate registering user input from the account set up menu
//for testing purposes i am going to randomly select a random number 1-5 of tags from the user tags array and assign them to the user choices array
randomNumber = Math.floor(Math.random() * 5) + 1;

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
// ~~~~~~~~~~~~~~~~~~~~~~  END TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~

// now that we have the users choices we need to alter the users preferences based on those choices
// this will be done by adding points to the users choices
// the points will be determined by the number of choices the user made
// the total points will always be 2000



// this is the number of selections the user made
console.log(`the user selected ${userChoices.length} choices`)
userChoices.forEach((choice, index) => {
    console.log(` ${index + 1}: ${choice.tag}`);
   });

// now we need to take the users choices and determine the weight we need to add to each of those categories
// the total weight will always be 2000
// the weight will be determined by the number of choices the user made

// set up function to add points to the users choices
const addPoints = (userArray, userChoices) => {

    let numberOfSelections = userChoices.length;
    let tempArray = [...userArray]
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
    tempArray = tempArray.map(item => {
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

} else {for (let i = 0; i < numberOfSelections; i++) {
    tempArray = tempArray.map(item => {
        if (item.tag === userChoices[i].tag) {
            return {...item, score: item.score + pointsToAdd};
        } else {
            return item;
        }
        });
}}
return tempArray
}

//this copies the users tags array and adds points to the users choices
 userArray = addPoints( userArray, userChoices)
//  console.log(userArray)  
// this alters the original users tags array with the new preferenced array




// ~~~~~~~~~~~~~~~~~~~~~~  TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~
//here we will print the users preferences to the console, this will only be in the testing phase
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
   printUserTagScores(userArray);
// ~~~~~~~~~~~~~~~~~~~~~~  END TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~





// ~~~~~~~~~~~~~~~~~~~~~~  TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~
// now that we have user preferences we can set up test interactions using an algorithm that will feed the user posts types based on their preferences

//this will be essentially the same as how we will get preferences for the actual application
// but it will not factor in other filters such as dates and recency scores

function selectRandomTag(userArray) {
    //sort array by score
    let primarySortedArray = userArray
       .map(item => {
           return {...item};
       });
  
    let firstProbabilityArray = userArray.flatMap((item, index) => {
        return Array(primarySortedArray.index).fill(index);
    });
  
    let results = [];

    //select 5 random tags from the first probability array and push them to the results array
    for (let i = 0; i < 5; i++) {
       let randomTag = firstProbabilityArray[Math.floor(Math.random() * firstProbabilityArray.length)];
       results.push(randomTag);
    }
   //select a random tag from the results array (this is done to give a higher degree of randomness)
    let randomTagNumber = results[Math.floor(Math.random() * results.length)];
    return randomTagNumber;
  }
// ~~~~~~~~~~~~~~~~~~~~~~  END TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~  TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~
// now we need a function that will choose a random type of interaction with the post
// this will be used to simulate the users interactions with the posts
// there will be a bias towards scrolling past to simulate actual user behavior on the application
// i would like to roll the dice on whether or not i should have the user be served a post they dont like 



let potentialActions = ["like", "comment", "share","like", "comment", "share", "dislike", 'scrolled by', 'scrolled by', 'scrolled by', 'scrolled by', 'scrolled by'];



function getRandomTestAction(actions) {
    return actions[Math.floor(Math.random() * actions.length)];
  }
// ~~~~~~~~~~~~~~~~~~~~~~  END TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~



// now we need a function that will look at the type of interaction and determine the points to add to the users preferences and the interaction type
function determineInteractionPoints(action) {
    let typeOfInteraction = "positive";
    let pointsToAlter;
 
    if (action === "like") {
        pointsToAlter = 1;
    } else if (action === "comment") {
        pointsToAlter = 5;
    } else if (action === "share") {
        pointsToAlter = 10;
    } else if (action === "scrolled by") {
        typeOfInteraction = "neutral";
        pointsToAlter = 0;
    } else if (action === "dislike") {
        typeOfInteraction = "negative";
        pointsToAlter = 10;
    }
 
    return {pointsToAlter, typeOfInteraction};
 }


// now that we know what to alter and how we need to write a function that will check to see if the users scores have hit either the preference max or min

function checkIfTagScoreMaxed(array, tagName) {
    let tag = array.find(item => item.tag === tagName);
    if (tag) {
      let tagScore = tag.score;
      let tagPreferenceMaxed = tagScore >= 800;
      return tagPreferenceMaxed;
    }
  }
  

// run function to check if the tag score is maxed out   
// check to see if the tag score is at the minimum


function checkIfTagScoreMin(array, tagName) {
    let tag = array.find(item => item.tag === tagName);
    if (tag) {
    let tagScore = tag.score;
    let tagPreferenceMin = tagScore <= 20;
    return tagPreferenceMin;
    }
}

// run function to check if the tag score is at the minimum


// now that we know what to alter and how we need a way to change the users preferences based on the type of interaction without altering the total points or ruining the weight any one of the users preferences
function updateScore(array, tagName, pointsToAlter, typeOfInteraction) {
    let updatedUserArray;
    if (typeOfInteraction === "positive") {
         updatedUserArray = array.map(item => {
            if (item.tag === tagName) {
              return { ...item, score: item.score + pointsToAlter };
            } else {
              return item;
            }
          });
    } else if (typeOfInteraction === "negative") {
         updatedUserArray = array.map(item => {
            if (item.tag === tagName) {
              return { ...item, score: item.score - pointsToAlter };
            } else {
              return item;
            }
          });
    } else if (typeOfInteraction === "neutral") {
            updatedUserArray = array.map(item => {
                if (item.tag === tagName) {
                return { ...item, score: item.score };
                } else {
                return item;
                }
            });
        }
    
 
    return updatedUserArray;
 }
 

// now we need a function that will sort and filter the users preferences
// the filter will remove any tags that have a score of less than 20 from consideration from having their score lowered
 function sortAndFilterTags(array) {
    let sortedArray = array
      .filter(item => item.score > 20)
      .map(item => {
          return {...item};
      });
   
    sortedArray = sortedArray.sort((a, b) => b.score - a.score);
    return sortedArray;
 }
 
// now we have an array of tags that are eligible for change of points
// now we need to determine which tag will have its points altered
// this will be done in two ways, for lowering the score we will use the inverce of the score to determine the probability of the tag being selected

// this is to give a higher probability of the tag with the lowest score being selected
// for increasing the score we will use the score to determine the probability of the tag being selected

//lets start with lowering the score
// we will use the inverse of the score to determine the probability of the tag being selected
function getInverseSortedArray(filteredArray) {
    let inverseFilteredArray = filteredArray.map(item => {
      return {...item};
    });
   
    // swap the scores in the inverse sorted array so that the highest score is on the least liked tag
    for (let i = 0; i < inverseFilteredArray.length / 2; i++) {
      let temp = inverseFilteredArray[i].score;
      inverseFilteredArray[i].score = inverseFilteredArray[inverseFilteredArray.length - 1 - i].score;
      inverseFilteredArray[inverseFilteredArray.length - 1 - i].score = temp;
    }
   
    return inverseFilteredArray;
   }

// now we need to determine the probability of the tag being selected
// this will be almost the same as what we did to determine the tag type to serve to the user
function createProbabilityMap(array) {
    let probabilityArray = array.flatMap((item, index) => {
     return Array(item.score).fill(index);
    });
   
    return probabilityArray;
   }

// now we need to select a random tag from the probability array

const getRandomIndex = (array) => {

    // this will pick 5 random tags from the probability array and add them to the results array
    let results = [];
    for (let i = 0; i < 5; i++) {
        randomItem = array[Math.floor(Math.random() * array.length)];
       results.push(randomItem);
    }
    
   let randomIndex = results[Math.floor(Math.random() * results.length)];
    return randomIndex
}
// now we need to alter the users preferences based on the random index, we will do this one point at a time to give the altered points a more dispersed effect on the users preferences
function adjustTagScore(array, tagToAlter, interactionType) {
    if (interactionType === "negative") {
        try {
            newArray = array.map(item => {
                if (item.tag === tagToAlter) {
                    return {...item, score: item.score + 1 };
                } else {
                    return item;
                }
            });
        } catch (err) {
            console.error('An error occurred:', err);
        }
        return newArray;
    } else if (interactionType === "positive") {
        try {
            newArray = array.map(item => {
                if (item.tag === tagToAlter) {
                    return {...item, score: item.score - 1 };
                } else {
                    return item;
                }
            });
        } catch (err) {
            console.error('An error occurred:', err);
        }
        return newArray;
    }
   
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////~~~~~~~~~~~   THIS IS IT , THE THING, THE THING WE NEED TO UPDATE PREFERENCES   ~~~~~~~~/////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// this function is every procces put together that determines the users preferences based on the type of interaction and the tag interacted with
function alterUserArray(userArray, action, tagToAlter) {
    let tempArray = [...userArray];
//run function to get points to add to the users preferences and the type of interaction
let {pointsToAlter, typeOfInteraction} = determineInteractionPoints(action);
// console.log(`the points to alter are ${pointsToAlter} and the type of interaction is ${typeOfInteraction}`);

// run function to check if the tag score is maxed out or at minimum
const tagPreferenceMin = checkIfTagScoreMin(tempArray, tagToAlter);
const tagPreferenceMaxed = checkIfTagScoreMaxed(tempArray, tagToAlter);

// console.log(`the tag preference is maxed: ${tagPreferenceMaxed}`);
// console.log(`the tag preference is min: ${tagPreferenceMin}`);


// now we need a conditional statement that will check to see if the tag score is maxed out or at minimum and if it is it will change the type of interaction to neutral
if (typeOfInteraction === "negative" && tagPreferenceMin) {
    typeOfInteraction = "neutral";
} else if (typeOfInteraction === "positive" && tagPreferenceMaxed) {
    typeOfInteraction = "neutral";
}

// now we need a function that will alter the users preferences based on the type of interaction
tempArray = updateScore(tempArray, tagToAlter, pointsToAlter, typeOfInteraction);
// now that we have the increased score updated we need to sort and filter the users preferences and then return the new array of valid considerations for change of points to return the users preferences to the original score total
const filteredArray = sortAndFilterTags(tempArray);
//console.log(filteredArray);

// this is a conditional statement that will see if the interaction is neutral and if so it will return a statement saying that the tag preference is maxed or min or the type of interaction is neutral
if (typeOfInteraction === "neutral") {
    let maxMinNeutralStatement = "the tag preference is maxed or min or the type of interaction is neutral";  
    // console.log(maxMinNeutralStatement);
       //now we need a split to see if the action is positive or negative


} else if (typeOfInteraction === "negative") {
    const probabilityArray = createProbabilityMap(filteredArray);
    for (let i = 0; i < pointsToAlter; i++) {
        // now we need to select a random tag from the probability array
            const randomIndex = getRandomIndex(probabilityArray);
            /// console.log(`the random index is ${randomIndex}`);
            // the random index will be used to select the tag to alter
            const tagToAlter = filteredArray[randomIndex].tag;
            // console.log(`the tag to alter is ${tagToAlter}`);
            // now we need to run the function to alter the users preferences
            tempArray = adjustTagScore(tempArray, tagToAlter, typeOfInteraction);
    }



} else if (typeOfInteraction === "positive") {
//now for the negative interactions we need to select a random tag from the inverse filtered array

    const inverseFilteredArray = getInverseSortedArray(filteredArray);
// now we need to determine the probability of the tag being selected
    const inverseProbabilityArray = createProbabilityMap(inverseFilteredArray);
    //console.log(inverseFilteredArray);
    for (let i = 0; i < pointsToAlter; i++) {
    // now we need to select a random tag from the probability array
        const randomIndex = getRandomIndex(inverseProbabilityArray);
        /// console.log(`the random index is ${randomIndex}`);
        // the random index will be used to select the tag to alter
        const tagToAlterNegative = inverseFilteredArray[randomIndex].tag;
        // console.log(`the tag to alter is ${tagToAlterNegative}`);
        // now we need to run the function to alter the users preferences
        tempArray = adjustTagScore(tempArray, tagToAlterNegative, typeOfInteraction);
}
}
return tempArray
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//now we need to build a general algorithm that will be used to make the combing factors for the users preferences
// this will be used to determine the users feed
// this will take in the users preferences and choose a tag
// this will choose a date range
// this will choose a recency score
// this will be combined to make a combing factor 
// this will be used to determine the users feed
// we will use this to get the id's of the post to serve to the user
// we will use that array of id's to randomly select a post to serve to the user

// now we need to build a function that will take in the users preferences and choose a tag


const selectPreferenceParameter = (array) => {
let probabilityArray = createProbabilityMap(array);
let randomIndex = getRandomIndex(probabilityArray);


let parameter = array[randomIndex].tag;
return parameter
}

function createArrayWithPreviousDays(currentDay, numberOfDays) {
    var datesArray = [];
    var currentDate = new Date(currentDay); // Create a Date object with the current day
    
    // Iterate over the desired number of days
    for (var i = 0; i < numberOfDays; i++) {
        datesArray.push(new Date(currentDate)); // Add the current date to the array
        currentDate.setDate(currentDate.getDate() - 1); // Decrement the date by 1 day
    }
    
    return datesArray;
    }


const selectDateRange = (currentDay) => {
    let dateRange = [
        {timeFrame: "1", score: 200},
        {timeFrame: "2", score: 150},
        {timeFrame: "3", score: 125},
        {timeFrame: "5", score: 100},
        {timeFrame: "7", score: 30},
        {timeFrame: "14", score: 12},
        {timeFrame: "21", score: 5},
        {timeFrame: "28", score: 1},
    ];

  


    let probabilityArray = createProbabilityMap(dateRange);
let randomIndex = getRandomIndex(probabilityArray);
    let parameter = dateRange[randomIndex].timeFrame;
return parameter

}

const selectRecencyScore = () => {
    let recencyScores = [
        {recencyScore: "7", score: 200},
        {recencyScore: "6", score: 150},
        {recencyScore: "5", score: 125},
        {recencyScore: "4", score: 80},
        {recencyScore: "3", score: 30},
        {recencyScore: "2", score: 12},
        {recencyScore: "1", score: 5},
        {recencyScore: "0", score: 0},
    ];

    let probabilityArray = createProbabilityMap(recencyScores);
let randomIndex = getRandomIndex(probabilityArray);
    let parameter = recencyScores[randomIndex].recencyScore;
return parameter

}

let dateRangeParameter = selectDateRange();
let preferenceParameter = selectPreferenceParameter(userArray);
let recencyScoreParameter = selectRecencyScore();
let dateRangeArray = createArrayWithPreviousDays(new Date(), dateRangeParameter);
console.log(`the date range parameter is ${dateRangeParameter}`);
//print all of the dates in the date range array
dateRangeArray.forEach((date, index) => {
     console.log(` ${index + 1}: ${date}\n`);
    });
console.log(`the preference parameter is ${preferenceParameter}`);
console.log(`the recency score parameter is ${recencyScoreParameter}`);

// ~~~~~~~~~~~~~~~~~~~~~~  TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~
//THIS IS WHERE THE TEST CODE WILL GO THAT WILL RUN THE TESTS ON THE USERS INTERACTIONS WITH THE POSTS      
function runTests(userArray, action) {
    const testsToRun = 1000;
    let iterations;
    console.log(`\n\n\n`);
    console.log(`the test will run ${testsToRun} times...`);
    
    
    //TEST CODE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //run established user interactions with posts
    for (let i = 0; i < testsToRun; i++) {
    let tempArray = [...userArray];

      iterations = i ++;
    //    console.log(iterations);

    
    // run function to select a random tag from the users preferences
    let randomTagNumber = selectRandomTag(tempArray);
    let tagToAlter = tempArray[randomTagNumber].tag;
    // console.log(`the random tag is ${tagToAlter}`);
    //run function to select a random action
    let testAction = getRandomTestAction(potentialActions);
    // console.log(`the random action is ${testAction}`);
    action = testAction;
    //END TEST CODE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 

  userArray = alterUserArray(userArray, action, tagToAlter);
}

    //now for the negative interactions we need to select a random tag from the filtered array
    //first we need the inverse of the filtered array
  
    
    // now we need to tun this in a loop for the amount of points to alter because we want to let the altered points have a more disperesed effect on the users preferences
   
    

    return userArray
  }
  
  // Call the function to execute the code
userArray = runTests(userArray);

printUserTagScores(userArray);
// ~~~~~~~~~~~~~~~~~~~~~~  END TEST CODE BLOCK ~~~~~~~~~~~~~~~~~~~~~~~~
