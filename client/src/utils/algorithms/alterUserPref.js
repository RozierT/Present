
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
export const getRandomIndex = (array) => {

    let results = [];
    for (let i = 0; i < 5; i++) {
        let randomItem = array[Math.floor(Math.random() * array.length)];
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
   
  //  userArray = alterUserArray(userArray, action, tagToAlter)
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

export default alterUserArray;


