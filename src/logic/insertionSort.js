import sleep from './sleeper';

const waitTime = {
    "small": 100,
    "large": 5,
}

const insertionSort = async (globalArray, arraySize) => {
    let length = globalArray.length;
    for(let passIndex = 1; passIndex < length; passIndex++){
        let compareIndex = passIndex-1;
        let elementToInsert = globalArray[passIndex];
        console.log("elementToInsert", elementToInsert);
        document.getElementsByClassName("SortTemplate-bar-96")[passIndex].style.backgroundColor = "blue";
        while(compareIndex > -1 && globalArray[compareIndex] > elementToInsert){
            document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.height = (globalArray[compareIndex]*3).toString().concat("px");
            await sleep(waitTime[arraySize]);
            globalArray[compareIndex+1] = globalArray[compareIndex];
            compareIndex--;
        }
        globalArray[compareIndex+1] = elementToInsert;
        document.getElementsByClassName("SortTemplate-bar-96")[passIndex].style.backgroundColor = "pink";
        document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.backgroundColor = "blue";
        document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.height = (elementToInsert*3).toString().concat("px");
        await sleep(waitTime[arraySize]+10);
        document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.backgroundColor = "pink";
    }

    for(let index = 0; index < length; index++){
        document.getElementsByClassName("SortTemplate-bar-96")[index].style.backgroundColor = "silver";    
    }
}

export default insertionSort;