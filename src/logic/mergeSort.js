const mergeSort = async (globalArray, low, high) => {
    let mid = Math.floor((low + high)/2);
    if(low < high){
        await mergeSort(globalArray, low, mid);
        await mergeSort(globalArray, mid+1,high);
        for(let index = low; index <= high; index++){
            document.getElementsByClassName("SortTemplate-bar-96")[index].style.backgroundColor = "green";
        }
        await merge(globalArray, low, mid, high);
    }
}

const merge = async (globalArray, low, mid, high) => {
    let i = low;
    let j = mid+1;
    let tempArray = [];
    while(i <= mid && j <= high){
        if(globalArray[i] < globalArray[j]){
        //    await updateArrayAndMakeUiChanges(globalArray, tempArray, i) 
        tempArray.push(globalArray[i]);
        i++;
        } else {
            tempArray.push(globalArray[j]);
            j++;
        }
    }

    for(;i<=mid;i++){
        tempArray.push(globalArray[i]);
    }
    for(;j<=high;j++){
        tempArray.push(globalArray[j]);
    }

    i = low;
    for(let k = 0; k < tempArray.length;k++){
        await sleep(20);
        document.getElementsByClassName("SortTemplate-bar-96")[i].style.height = (tempArray[k]*3).toString().concat("px");;
        globalArray[i] = tempArray[k];
        i++;
    }
    for(let index = low; index <= high; index++){
        document.getElementsByClassName("SortTemplate-bar-96")[index].style.backgroundColor = "silver";
    }
}

const updateArrayAndMakeUiChanges =  async (globalArray, tempArray, index) => {
    // await sleep(500);
    // tempArray.push(globalArray[index]);
    // document.getElementsByClassName("SortTemplate-bar-96")[index].style.height = tempHeight;
}


const sleep = interval => new Promise(resolve => setTimeout(resolve,interval));

export default mergeSort;

// after making tempArray sorted, update the global array 

//what do you choose to swap

//you pick an element from index p and q in old array and place one of them in position r
//how to show in animation
// make a function passing it the element and index where it is supposed to go
// change the div height in that function and make it wait for a second

// how to show which subarray you are targetting
// color the divs after the mergesort has happened on the subarrays
// so that root array as a whole gets colored the last