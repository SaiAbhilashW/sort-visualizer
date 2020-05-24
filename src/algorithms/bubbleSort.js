//import numberArray from '../data/numberArray';
// import React, { Component } from 'react';
// import Context from '../contexts/AppContext';

const bubbleSort = (context) => () => {
    console.log("_____in bubb init_____");
    console.log(context);
    // context.setHasRendered(false);
    for(let index = 0; index < 2;index++){
        console.log("hi");
        // window.setTimeout(()=>{console.log("hello")},3000);
        context.swapElementsInArray(context.numberArray, index, index+1);
        context.enterSelectedIndexes(index,index+1);
        // while(context.hasRendered){
        //     //wait
        //     console.log('waiting in bubble');
        // }
        console.log(context);
        console.log('done');
    }
    
    // var temp = numberArray["small"][0];
    // numberArray["small"][0] = numberArray["small"][1];
    // numberArray["small"][1] = temp;
    // console.log("____in bubb after______");
    // console.log(numberArray);
    // <Context.Consumer>
    //     {(value) => console.log(value)}
    // </Context.Consumer>
    //operate on number 
    //on every swap in array -> ui components should rerender
    // - make numberArray globally accessible  - create an async request to change color etc in ui component
}

// class DummyComponent extends Component{
//     render(){
        
//     }
// }

const swap = (a,b)=>{
    const temp = a;
    a = b;
    b = a;
    //some time out 
}

export default bubbleSort;