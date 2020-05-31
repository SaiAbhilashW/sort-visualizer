const generateNewArray = () => {
    let newArray = [];
    for(let index = 0; index < 100; index++){
        newArray[index] = Math.floor((Math.random() * 100) + 1);
    }
    return newArray;
    // [10,20,59,16,80,33];
}

export default generateNewArray;