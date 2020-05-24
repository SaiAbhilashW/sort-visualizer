import React, { Component } from 'react';
// import { Container } from '@material-ui/core';
import numberArray from '../data/numberArray.js';
import ArrayComponent from './ArrayComponent';  
import Context from '../contexts/AppContext';


class ArrayComponentList extends Component{
  static contextType = Context;
  // componentDidUpdate(){
  //   this.context.setHasRendered(true);
  // }
 render(){
  //  this.context.setHasRendered(false);
   console.log("____in render___");
  //  console.log(this.context);
  //  console.log(this.props);
        let timeOut = 0;
        while(timeOut < 1000000000){
            timeOut++;
        }
    let componentList = this.context.numberArray[this.props.arraySize].map((number,index) => {
        return <ArrayComponent number={number} isSelectedForComparison={this.context.selectedIndexes.includes(index)}/>;
      });
    // console.log(componentList);    
    return  <ul>{ componentList }</ul>;
  }
}

export default ArrayComponentList;