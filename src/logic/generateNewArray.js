const generateNewArray = (arraySize) => {
    let newArray = [];
    let arrayLength = ((arraySize == undefined || arraySize == "large") ? 200 : 50);
    for(let index = 0; index < arrayLength; index++){
        newArray[index] = Math.floor((Math.random() * 100) + 1);
    }
    return newArray;
    // [10,20,59,16,80,33];
}

export default generateNewArray;