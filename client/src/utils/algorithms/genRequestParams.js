

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function createProbabilityMap(array) {
    let probabilityArray = array.flatMap((item, index) => {
        return Array(item.score).fill(index);
    });

    return probabilityArray;
}

export const getRandomIndex = (array) => {

    let results = [];
    for (let i = 0; i < 5; i++) {
        let randomItem = array[Math.floor(Math.random() * array.length)];
        results.push(randomItem);
    }
    
   let randomIndex = results[Math.floor(Math.random() * results.length)];
    return randomIndex
}

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
    export const generateRequestParameters = (userArray) => {
        let requestParameters = {
            tag: null,
            dateRange: [],
            recencyScore: null,
        }

        let dateRangeParameter = selectDateRange();

        requestParameters.tag = selectPreferenceParameter(userArray);

        requestParameters.recencyScore = selectRecencyScore();

        let fullDateRange = createArrayWithPreviousDays(new Date(), dateRangeParameter);

        requestParameters.dateRange = []

        requestParameters.dateRange.push(fullDateRange[0])
        
        if (fullDateRange.length > 1) {
            requestParameters.dateRange.push(fullDateRange[fullDateRange.length - 1])
        }

    
        return requestParameters
    }
    
    
    
    // this takes the returned posts from the server and returns the postId of a random post
    export const getChosenPostId = (postIds) => {
        let randomIndex = Math.floor(Math.random() * postIds.length);
        let postId = postIds[randomIndex];
        return postId
    }