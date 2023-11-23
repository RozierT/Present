
const AlgorithmBaseCode = (type) => {

    
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

    

}