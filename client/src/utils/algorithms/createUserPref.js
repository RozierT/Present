

//this is for adding points to the userArray when they select a tag that they like on creating profile
 const addPoints = (userArray, userChoices) => {
console.log(userArray)
console.log(userChoices)
    let numberOfSelections = userChoices.length;
console.log(numberOfSelections)
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
console.log(pointsToAdd)  

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

for (let i = 0; i < tempArray.length; i++) {
    console.log(`tempArray is: ${tempArray[i].tag} ${tempArray[i].score}`)
}

return tempArray
}

 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


export default addPoints;