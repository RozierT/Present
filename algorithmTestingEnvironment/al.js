//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let userPrefArray = {
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


let userArray = [...userPrefArray.tags]


//this is for adding points to the userArray when they select a tag that they like on creating profile
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

 userArray = addPoints( userArray, userChoices)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~











//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this is for when the user interacts with a post, it will determine the points to add or subtract from the userArray
function determineInteractionPoints(action) {
    let typeOfInteraction = "positive";
    let pointsToAlter;
 
    if (action === "like") {
        pointsToAlter = 10;
    } else if (action === "comment") {
        pointsToAlter = 15;
    } else if (action === "share") {
        pointsToAlter = 15;
    } else if (action === "scrolled by") {
        typeOfInteraction = "neutral";
        pointsToAlter = 0;
    } else if (action === "dislike") {
        typeOfInteraction = "negative";
        pointsToAlter = 10;
    }
 
    return {pointsToAlter, typeOfInteraction};
 }



// this checks if the tag score is maxed out
function checkIfTagScoreMaxed(array, tagName) {
    let tag = array.find(item => item.tag === tagName);
    if (tag) {
      let tagScore = tag.score;
      let tagPreferenceMaxed = tagScore >= 800;
      return tagPreferenceMaxed;
    }
  }
  


// this checks if the tag score is at the minimum
function checkIfTagScoreMin(array, tagName) {
    let tag = array.find(item => item.tag === tagName);
    if (tag) {
    let tagScore = tag.score;
    let tagPreferenceMin = tagScore <= 20;
    return tagPreferenceMin;
    }
}

// this updates the score of the tag that the user interacted with
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
 

// this sorts and filters the userArray so that only tags with a score of 20 or higher are included
 function sortAndFilterTags(array) {
    let sortedArray = array
      .filter(item => item.score > 20)
      .map(item => {
          return {...item};
      });
   
    sortedArray = sortedArray.sort((a, b) => b.score - a.score);
    return sortedArray;
 }
 


// this swaps the scores in the inverse sorted array so that the highest score is on the least liked tag
//this gives a higher probability of selecting the least liked tag
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

// this creates a probability array based on the score of each tag
function createProbabilityMap(array) {
    let probabilityArray = array.flatMap((item, index) => {
     return Array(item.score).fill(index);
    });
   
    return probabilityArray;
   }

// this selects a random tag from the probability array with a bit of randomness thrown in
const getRandomIndex = (array) => {

    let results = [];
    for (let i = 0; i < 5; i++) {
        randomItem = array[Math.floor(Math.random() * array.length)];
       results.push(randomItem);
    }
    
   let randomIndex = results[Math.floor(Math.random() * results.length)];
    return randomIndex
}

// this selects a random tag from the probability array and alters the user's preferences
const getRandomIndexForPreference = (array) => {
    let results = [];
    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.floor(Math.random() * array.length);
        results.push(array[randomIndex]);
        array = array.filter(item => item !== results[i]); // remove all occurrences of the chosen tag
    }
    let randomIndex = results[Math.floor(Math.random() * results.length)];
    return randomIndex
  }
  
// this adjusts the score of the tag that was selected to be either reduced or increased by one point
// the reason for this is to give a bit of randomness to the algorithm so the changes are more distributed
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
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~











//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// this is the big one, it takes in the userArray, the action that the user took, and the tag that the user interacted with
// it then determines the points to add or subtract from the userArray, checks if the tag score is maxed out or at the minimum
// then updates the score of the tag that the user interacted with
// then sorts and filters the userArray so that only tags with a score of 20 or higher are included
// then swaps the scores in the inverse sorted array so that the highest score is on the least liked tag
// then creates a probability array based on the score of each tag
// then selects a random tag from the probability array with a bit of randomness thrown in
// then that tag is altered in the userArray 
// then the userArray is returned


function alterUserArray(userArray, action, tagToAlter) {
    let tempArray = [...userArray];
   
    // Determine interaction points
    let {pointsToAlter, typeOfInteraction} = determineInteractionPoints(action);
   
    // Check if tag score is at min or max
    const tagPreferenceMin = checkIfTagScoreMin(tempArray, tagToAlter);
    const tagPreferenceMaxed = checkIfTagScoreMaxed(tempArray, tagToAlter);
   
    // If interaction is negative and score is at min, or if interaction is positive and score is at max, set interaction to neutral
    if ((typeOfInteraction === "negative" && tagPreferenceMin) || (typeOfInteraction === "positive" && tagPreferenceMaxed)) {
      typeOfInteraction = "neutral";
    }
   
    // Update user's score based on interaction type
    tempArray = updateScore(tempArray, tagToAlter, pointsToAlter, typeOfInteraction);
   
    // Sort and filter user's preferences
    const filteredArray = sortAndFilterTags(tempArray);
   
    // If interaction is neutral, return a statement
    if (typeOfInteraction === "neutral") {
      // Return statement
    }
   
    // If interaction is negative, select a random tag from the probability array and alter user's preferences
    else if (typeOfInteraction === "negative") {
      const probabilityArray = createProbabilityMap(filteredArray);
      for (let i = 0; i < pointsToAlter; i++) {
        const randomIndex = getRandomIndex(probabilityArray);
        const tagToAlter = filteredArray[randomIndex].tag;
        tempArray = adjustTagScore(tempArray, tagToAlter, typeOfInteraction);
      }
    }
   
    // If interaction is positive, select a random tag from the inverse filtered array and alter user's preferences
    else if (typeOfInteraction === "positive") {
      const inverseFilteredArray = getInverseSortedArray(filteredArray);
      const inverseProbabilityArray = createProbabilityMap(inverseFilteredArray);
      for (let i = 0; i < pointsToAlter; i++) {
        const randomIndex = getRandomIndex(inverseProbabilityArray);
        const tagToAlterNegative = inverseFilteredArray[randomIndex].tag;
        tempArray = adjustTagScore(tempArray, tagToAlterNegative, typeOfInteraction);
      }
    }
   
    return tempArray;
   }
   
   userArray = alterUserArray(userArray, action, tagToAlter)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
















//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// this uses the user array to select a random tag based on the score of each tag
const selectPreferenceParameter = (array) => {
let probabilityArray = createProbabilityMap(array);
let randomIndex = getRandomIndexForPreference(probabilityArray);


let parameter = array[randomIndex].tag;
return parameter
}



// this selects a random date range based on the score of each date range
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


// this creates an array of dates based on the current day and the number of days to go back
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

// this selects a random recency score based on the score of each recency score
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
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~















//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// builds the request parameters for the server query
const generateRequestParameters = (userArray) => {
    let requestParameters = {
        tag: null,
        dateRange: [],
        recencyScore: null,
    }
     dateRangeParameter = selectDateRange();
     requestParameters.tag = selectPreferenceParameter(userArray);
     requestParameters.recencyScore = selectRecencyScore();
     requestParameters.dateRange = createArrayWithPreviousDays(new Date(), dateRangeParameter);

    return requestParameters
}



// this takes the returned posts from the server and returns the postId of a random post
const getChosenPostId = (postIds) => {
    let randomIndex = Math.floor(Math.random() * postIds.length);
    let postId = postIds[randomIndex];
    return postId
}


