import sleep from './sleeper';

const waitTime = {
    "small": 30,
    "large": 1,
}

const bubbleSort = async (appArray, arraySize) => {
    let globalArray = appArray;
    for(let passIndex = 0; passIndex < globalArray.length - 1; passIndex++){
        for(let compareIndex = 0; compareIndex < globalArray.length - passIndex - 1; compareIndex++){
            if(compareIndex > 0){
                document.getElementsByClassName("SortTemplate-bar-96")[compareIndex-1].style.backgroundColor = "pink";
            }
            document.getElementsByClassName("SortTemplate-bar-96")[compareIndex].style.backgroundColor = "green";
            if(compareIndex < globalArray.length - passIndex - 1){
                document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.backgroundColor = "green";                        
            }
            if(globalArray[compareIndex] > globalArray[compareIndex+1]){
                await swap(globalArray, compareIndex, arraySize);
            }
            //fix first element not changing color + turquoise sometimes showing in unsorted elements 
            if(compareIndex === globalArray.length - passIndex - 2){
                document.getElementsByClassName("SortTemplate-bar-96")[globalArray.length - passIndex - 1].style.backgroundColor = "silver";   
                document.getElementsByClassName("SortTemplate-bar-96")[globalArray.length - passIndex - 2].style.backgroundColor = "pink";        
            }
        }
    }
    // console.log(globalArray);
    return globalArray;
}

const swap =  async (globalArray, compareIndex, arraySize) => {
    await sleep(waitTime[arraySize]);
    let temp =  globalArray[compareIndex];
    globalArray[compareIndex] = globalArray[compareIndex+1];
    globalArray[compareIndex+1] = temp;
    let tempHeight = document.getElementsByClassName("SortTemplate-bar-96")[compareIndex].style.height;
    document.getElementsByClassName("SortTemplate-bar-96")[compareIndex].style.height = document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.height;
    document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.height = tempHeight;
}

export default bubbleSort;