import { resolve } from "dns";

const quickSort = async (globalArray, minIndex, maxIndex,interval) => {
    let j; 
    if(minIndex <  maxIndex){
        // const wait = interval => new Promise(resolve => setTimeout(resolve,interval))
        // j = await wait(interval)
        //     .then(()=>{
                // return 
        j = await partition(globalArray,minIndex,maxIndex);
            // });
        // j = partition(globalArray,minIndex,maxIndex);
        console.log(j);
        // partition(globalArray, minIndex, maxIndex,interval);
        // let passesForPartition = Math.ceil(Math.log(maxIndex-minIndex) / Math.log(2));
        // let passesForFirstSubarray = Math.ceil(Math.log(j-minIndex) / Math.log(2));
        // console.log("executing smaller part for j = "+j);
        // .then(() =>{
            // console.log("executing bigger part for j = "+j)
            // quickSort(globalArray, j+1, maxIndex,100); 
        // }) 
        ;
        await Promise.all([quickSort(globalArray, minIndex, j,interval), quickSort(globalArray, j+1, maxIndex,interval)])
        // quickSort(globalArray, minIndex, j,interval);
        // quickSort(globalArray, j+1, maxIndex,interval); 
         
    }
} 

const partition =  async (globalArray, minIndex, maxIndex) => {
    for(let itr = minIndex; itr < maxIndex;itr++){
        document.getElementsByClassName("SortTemplate-bar-96")[itr].style.backgroundColor = "silver";
    }
        document.getElementsByClassName("SortTemplate-bar-96")[minIndex].style.backgroundColor = "brown";
        console.log("i'm here");
        let pivot = globalArray[minIndex];
        let i = minIndex;
        let j = maxIndex;
        // await wait(10).then
        do
        {
                do{i++} while(globalArray[i] < pivot);
                do{j--} while(globalArray[j] > pivot);
                if (i < j){
                await swap(globalArray, i, j);
                // let temp =  globalArray[i];
                // globalArray[i] = globalArray[j];
                // globalArray[j] = temp;
                
                // document.getElementsByClassName("SortTemplate-bar-96")[j].style.backgroundColor = "brown";
                // document.getElementsByClassName("SortTemplate-bar-96")[i].style.backgroundColor = "brown";
                
                // setTimeout( () => {
                    // document.getElementsByClassName("SortTemplate-bar-96")[j].style.backgroundColor = "green";
                    // document.getElementsByClassName("SortTemplate-bar-96")[i].style.backgroundColor = "green";
                    // let height = document.getElementsByClassName("SortTemplate-bar-96")[j].style.height;
                    // document.getElementsByClassName("SortTemplate-bar-96")[j].style.height = document.getElementsByClassName("SortTemplate-bar-96")[i].style.height;
                    // document.getElementsByClassName("SortTemplate-bar-96")[i].style.height = height;
                // },10*i);
            }       
        }while(i < j);

        //swap
        await swap(globalArray, minIndex,j);
        // let temp = globalArray[minIndex];
        // globalArray[minIndex] = globalArray[j];
        // globalArray[j] = temp;
        // setTimeout( () => {
            console.log("hello");
            // document.getElementsByClassName("SortTemplate-bar-96")[minIndex].style.backgroundColor = "yellow";
            // document.getElementsByClassName("SortTemplate-bar-96")[j].style.backgroundColor = "yellow";
            // let tempHeight = document.getElementsByClassName("SortTemplate-bar-96")[minIndex].style.height;
            // document.getElementsByClassName("SortTemplate-bar-96")[minIndex].style.height = document.getElementsByClassName("SortTemplate-bar-96")[j].style.height;
            // document.getElementsByClassName("SortTemplate-bar-96")[j].style.height = tempHeight;
        // }
        // ,10)
        // setTimeout(()=>{
            // for(let itr = minIndex; itr < maxIndex;itr++){
            //     document.getElementsByClassName("SortTemplate-bar-96")[itr].style.backgroundColor = "pink";
            // }
        // },90);
        for(let itr = minIndex; itr < maxIndex;itr++){
            document.getElementsByClassName("SortTemplate-bar-96")[itr].style.backgroundColor = "pink";
        }
        return j;
}

async function swap(array, indexOne, indexTwo){
    // document.getElementsByClassName("SortTemplate-bar-96")[indexOne].style.backgroundColor = "yellow";
    // document.getElementsByClassName("SortTemplate-bar-96")[indexTwo].style.backgroundColor = "yellow";
    await sleep(100);
    let temp = array[indexOne];
        array[indexOne] = array[indexTwo];
        array[indexTwo] = temp;
        // document.getElementsByClassName("SortTemplate-bar-96")[indexOne].style.backgroundColor = "green";
        // document.getElementsByClassName("SortTemplate-bar-96")[indexTwo].style.backgroundColor = "green";
        let tempHeight = document.getElementsByClassName("SortTemplate-bar-96")[indexOne].style.height;
        document.getElementsByClassName("SortTemplate-bar-96")[indexOne].style.height = document.getElementsByClassName("SortTemplate-bar-96")[indexTwo].style.height;
        document.getElementsByClassName("SortTemplate-bar-96")[indexTwo].style.height = tempHeight;
}

const sleep = interval => new Promise(resolve => setTimeout(resolve,interval));


export default quickSort;