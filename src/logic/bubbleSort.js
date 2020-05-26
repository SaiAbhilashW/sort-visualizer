const bubbleSort = (appArray) => {
    let globalArray = appArray;
    console.log("inside bubble sort logic");
    console.log(globalArray);
    for(let passIndex = 0; passIndex < globalArray.length - 1; passIndex++){
        setTimeout(() => {
            for(let compareIndex = 0; compareIndex < globalArray.length - passIndex - 1; compareIndex++){
                setTimeout(()=> {   
                        if(compareIndex > 0){
                            document.getElementsByClassName("SortTemplate-bar-96")[compareIndex-1].style.backgroundColor = "pink";
                        }
                        document.getElementsByClassName("SortTemplate-bar-96")[compareIndex].style.backgroundColor = "green";
                        if(compareIndex < globalArray.length - passIndex - 1){
                            document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.backgroundColor = "green";                        
                        }
                        if(globalArray[compareIndex] > globalArray[compareIndex+1]){
                        let temp =  globalArray[compareIndex];
                        globalArray[compareIndex] = globalArray[compareIndex+1];
                        globalArray[compareIndex+1] = temp;
                            let tempHeight = document.getElementsByClassName("SortTemplate-bar-96")[compareIndex].style.height;
                            console.log(tempHeight);
                            document.getElementsByClassName("SortTemplate-bar-96")[compareIndex].style.height = document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.height;
                            // document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.height;
                            document.getElementsByClassName("SortTemplate-bar-96")[compareIndex+1].style.height = tempHeight;
                        }
                        //fix first element not changing color + turquoise sometimes showing in unsorted elements 
                        if(compareIndex === globalArray.length - passIndex - 2){
                            document.getElementsByClassName("SortTemplate-bar-96")[globalArray.length - passIndex - 1].style.backgroundColor = "turquoise";        
                        }
                },compareIndex*5);
            }
        },passIndex*50)
    }
    console.log(globalArray);
    return globalArray;
}

// const swap = (numOne, numTwo) => {
//     if(numOne > numTwo){
//         let temp = numOne;
//         numOne = numTwo;
//         numTwo = temp;
//     }
// }

export default bubbleSort;