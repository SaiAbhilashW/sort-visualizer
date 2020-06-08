import React, { Component} from 'react';
import { Paper } from '@material-ui/core';
import ButtonGroupTemplate from './ButtonGroupTemplate';
import { withStyles } from '@material-ui/core/styles';
import generateNewArray from '../logic/generateNewArray'; 
import bubbleSort from '../logic/bubbleSort';
import quickSort from '../logic/quickSort';
import mergeSort from '../logic/mergeSort';
import insertionSort from '../logic/insertionSort';

const useStyles = (theme) => ({
  chart: {
    display: 'inline-block',
    // flexWrap: 'wrap',
    // '& > *': {
      margin: theme.spacing(2),
      width: "870px",
      height: theme.spacing(50),
      minWidth: "500px",
      // backgroundColor: "black",
    // },
  },
  bar: {
    backgroundColor: "pink",
    border: "1px solid silver",
    display: "inline-block",
    width: "2px",
  }
});

class SortTemplate extends Component{

  constructor(props) {
    super(props)
    this.state = {
      globalArray: [],
      buttonState: false,
      arraySize: "large",
    };
  }

  randomizeArray = () => {
    this.generateNewArray(this.state.arraySize);
  }

  generateNewArray = (arraySize) => {
    console.log("arraySize : " + arraySize);
    let arrayList = document.getElementsByClassName("SortTemplate-bar-96");
    if(arrayList[0] !== undefined){
      for(let index = 0; index < arrayList.length; index++){
        arrayList[index].style.backgroundColor = "pink";
      }
    }
    this.setState({globalArray: generateNewArray(arraySize), arraySize: arraySize});
  }

  changeArraySize = () => {
    let currentArraySize = this.state.arraySize;
    console.log(currentArraySize);
    !currentArraySize || currentArraySize == "large"?  this.generateNewArray("small") : this.generateNewArray("large");
  }

  bubbleSortFn = async () => {
    this.setState({buttonState: true});
    let sortedArray =  await bubbleSort(this.state.globalArray, this.state.arraySize);
    this.setState({buttonState: false});
  }

  quickSortFn = async () => {
    this.setState({buttonState: true});
    let globalArrayTemp = this.state.globalArray;
    // globalArrayTemp.push(101);  
    await quickSort(globalArrayTemp, 0, globalArrayTemp.length-1, this.state.arraySize);
    console.log("outside quick sort");
    console.log(globalArrayTemp);
    this.setState({buttonState: false});
  }

  mergeSortFn = async () => {
    this.setState({buttonState: true});
    let globalArrayTemp = this.state.globalArray;
    await mergeSort(globalArrayTemp,0,globalArrayTemp.length - 1, this.state.arraySize);
    console.log(globalArrayTemp);
    this.setState({buttonState: false});
  }

  insertionSortFn = async () => {
    this.setState({buttonState: true});
    let globalArrayTemp = this.state.globalArray;
    await insertionSort(globalArrayTemp, this.state.arraySize);
    console.log(globalArrayTemp);
    this.setState({buttonState: false});
  }

  buttonFunctions = {
    randomizeArray: this.randomizeArray,
    bubbleSort: this.bubbleSortFn,
    quickSort: this.quickSortFn,
    mergeSort: this.mergeSortFn,
    insertionSort: this.insertionSortFn,
    changeArraySize: this.changeArraySize,
  }

  componentDidMount(){
    this.generateNewArray();
  }
  render(){
    const { classes } = this.props;
    // t classes.bar.width = "5px" : classes.bar.width = "2px";
    let arrayList = this.state.globalArray.map((value,index) => {
      let barHeight = (value*3).toString().concat("px");
      let barWidth = this.state.arraySize == "small" ? "10px" : "2px";
      return <div className={classes.bar} style={{height:barHeight, width: barWidth, backgroundColor:"pink"}}></div>
    });
    return (
      <div style={{display:"inline-block"}}>
        <div className={classes.chart}>
        <Paper elevation={3} >
          <div style={{margin:"30px", display:"inline-block"}}>
          {arrayList}
          </div>
          {/* <div style={{display:"inline-block", width: "400px", height: "400px", margin:"25px"}}>
          {/* <div className={classes.bar} style={{height:(50*3).toString().concat("px"),backgroundColor:"pink"}}></div> */}
          {/* <Paper elevation={3}> */}
            {/* mergeSort(array, low, high) {"{"}
            <br></br>
                mid = (low + high)/2;<br></br>
                  mergeSort(array,low,mid);<br></br>
              mergeSort(array,mid+1,high);<br></br>
              merge(array,low,mid,high);<br></br>
            } */}
            {/* <iframe width="420" height="315"
            src="https://www.youtube.com/embed/ywWBy6J5gz8">
            </iframe> */}

          {/* /</Paper> 
          </div> */}
        </Paper>
        </div>
        <ButtonGroupTemplate buttonFunctions = {this.buttonFunctions} buttonState= {this.state.buttonState}/>
      </div>
    );
  }
}

export default withStyles(useStyles)(SortTemplate);
