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
export const addPoints = (userArray, userChoices) => {

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


