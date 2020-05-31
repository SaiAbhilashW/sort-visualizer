import React, { Component} from 'react';
import { Paper } from '@material-ui/core';
import ButtonGroupTemplate from './ButtonGroupTemplate';
import { withStyles } from '@material-ui/core/styles';
import generateNewArray from '../logic/generateNewArray'; 
import bubbleSort from '../logic/bubbleSort';
import quickSort from '../logic/quickSort';
import mergeSort from '../logic/mergeSort';

const useStyles = (theme) => ({
  chart: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(170),
      height: theme.spacing(50),
      minWidth: "500px",
    },
  },
  bar: {
    backgroundColor: "pink",
    border: "1px solid grey",
    display: "inline-block",
    width: "8px",
  }
});

class SortTemplate extends Component{

  constructor(props) {
    super(props)
    this.state = {globalArray: []};
  }

  generateNewArray = () => {
    let arrayList = document.getElementsByClassName("SortTemplate-bar-96");
    if(arrayList[0] !== undefined){
      for(let index = 0; index < arrayList.length; index++){
        arrayList[index].style.backgroundColor = "pink";
      }
    }
    this.setState({globalArray: generateNewArray()});
  }

  bubbleSortFn = () => {
    console.log('in bubble sort');
    let sortedArray = bubbleSort(this.state.globalArray);
    console.log(sortedArray);
    console.log("global array");
    console.log(this.state.globalArray);
  }

  quickSortFn = () => {
    let globalArrayTemp = this.state.globalArray;
    globalArrayTemp.push(100000);
    // [10,20,59,16,80,33,100000];
    // [10,20,30,40,50,60,10000];
    // 
    //let compareWith = globalArrayTemp.sort();
     quickSort(globalArrayTemp, 0, globalArrayTemp.length-1, 1000);
    console.log("outside quick sort");
    console.log(globalArrayTemp);
  }

  mergeSortFn = async () => {
    let globalArrayTemp = this.state.globalArray;
    await mergeSort(globalArrayTemp,0,globalArrayTemp.length - 1);
    console.log(globalArrayTemp);
  }

  buttonFunctions = {
    generateNewArray: this.generateNewArray,
    bubbleSort: this.bubbleSortFn,
    quickSort: this.quickSortFn,
    mergeSort: this.mergeSortFn,
  }

  componentDidMount(){
    this.generateNewArray();
  }
  render(){
    const { classes } = this.props;
    let arrayList = this.state.globalArray.map((value,index) => {
      let barHeight = (value*3).toString().concat("px");
      return <div className={classes.bar} style={{height:barHeight,backgroundColor:"pink"}}></div>
    });
    return (
      <div>
        <div className={classes.chart}>
        <Paper elevation={3} >
          <div style={{margin:"20px"}}>
          {arrayList}
          </div>
        </Paper>
        </div>
        <ButtonGroupTemplate buttonFunctions = {this.buttonFunctions}/>
      </div>
    );
  }
}

export default withStyles(useStyles)(SortTemplate);
