import sleep from './sleeper';
import BarClassName from '../constants/barClassName';

const waitTime = {
    "small": 50,
    "large": 30,
}

const quickSort = async (globalArray, minIndex, maxIndex,arraySize) => {
    let j; 
    if(minIndex <  maxIndex){
        j = await partition(globalArray,minIndex,maxIndex,arraySize);
        await quickSort(globalArray, minIndex, j-1,arraySize);
        await quickSort(globalArray, j+1, maxIndex,arraySize);
        // await Promise.all([quickSort(globalArray, minIndex, j,interval), quickSort(globalArray, j+1, maxIndex,interval)]); 
    }
} 

const partition =  async (globalArray, minIndex, maxIndex, arraySize) => {
    // console.log("hello");
    for(let itr = minIndex; itr < maxIndex;itr++){
        document.getElementsByClassName(BarClassName)[itr].style.backgroundColor = "yellow";
    }
    document.getElementsByClassName(BarClassName)[minIndex].style.backgroundColor = "blue";
    document.getElementsByClassName(BarClassName)[maxIndex].style.backgroundColor = "blue";
    let pivotIndex = minIndex;
    let pivotValue = globalArray[maxIndex];
    for(let i = minIndex; i < maxIndex;i++){
        if(globalArray[i] < pivotValue){
            await swap(globalArray, i, pivotIndex,arraySize);
            pivotIndex++;
        }
        // console.log(pivotIndex);
    }
    await swap(globalArray,pivotIndex,maxIndex,arraySize);  
    // document.getElementsByClassName("SortTemplate-bar-96")[pivotIndex].style.backgroundColor = "grey";
    for(let itr = minIndex; itr <= maxIndex;itr++){
        document.getElementsByClassName(BarClassName)[itr].style.backgroundColor = "pink";
    }
    return pivotIndex;
}

async function swap(array, indexOne, indexTwo,arraySize){
    // document.getElementsByClassName("SortTemplate-bar-96")[indexOne].style.backgroundColor = "green";
    // document.getElementsByClassName("SortTemplate-bar-96")[indexTwo].style.backgroundColor = "green";
    await sleep(waitTime[arraySize]);
    let temp = array[indexOne];
    array[indexOne] = array[indexTwo];
    array[indexTwo] = temp;
    let tempHeight = document.getElementsByClassName(BarClassName)[indexOne].style.height;
    document.getElementsByClassName(BarClassName)[indexOne].style.height = document.getElementsByClassName("SortTemplate-bar-96")[indexTwo].style.height;
    document.getElementsByClassName(BarClassName)[indexTwo].style.height = tempHeight;
    // document.getElementsByClassName("SortTemplate-bar-96")[indexOne].style.backgroundColor = "pink";
    // document.getElementsByClassName("SortTemplate-bar-96")[indexTwo].style.backgroundColor = "pink";
}

export default quickSort;