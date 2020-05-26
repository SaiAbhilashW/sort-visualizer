const generateNewArray = () => {
    let newArray = [];
    for(let index = 0; index < 100; index++){
        newArray[index] = Math.floor((Math.random() * 100) + 1);
    }
    return newArray;
}

export default generateNewArray;