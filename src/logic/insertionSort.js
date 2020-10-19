import sleep from './sleeper';
import BarClassName from '../constants/barClassName';

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
        document.getElementsByClassName(BarClassName)[passIndex].style.backgroundColor = "blue";
        while(compareIndex > -1 && globalArray[compareIndex] > elementToInsert){
            document.getElementsByClassName(BarClassName)[compareIndex+1].style.height = (globalArray[compareIndex]*3).toString().concat("px");
            await sleep(waitTime[arraySize]);
            globalArray[compareIndex+1] = globalArray[compareIndex];
            compareIndex--;
        }
        globalArray[compareIndex+1] = elementToInsert;
        document.getElementsByClassName(BarClassName)[passIndex].style.backgroundColor = "pink";
        document.getElementsByClassName(BarClassName)[compareIndex+1].style.backgroundColor = "blue";
        document.getElementsByClassName(BarClassName)[compareIndex+1].style.height = (elementToInsert*3).toString().concat("px");
        await sleep(waitTime[arraySize]+10);
        document.getElementsByClassName(BarClassName)[compareIndex+1].style.backgroundColor = "pink";
    }

    for(let index = 0; index < length; index++){
        document.getElementsByClassName(BarClassName)[index].style.backgroundColor = "silver";    
    }
}

export default insertionSort;