import React, {useState, Component} from 'react';
import { Paper, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import ArrayComponentList from './ArrayComponentList'; 
import logic from '../algorithms/logic.js'; 
import Context from '../contexts/AppContext';


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
  buttonpad: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(170),
      height: theme.spacing(20),
    },
  },
  buttons: {
    margin: theme.spacing(1),
  }
});

class SortTemplate extends Component{
  
  state = {arraySize: "small"};
  static contextType = Context;

  setArraySize = (size) => {
    this.setState({arraySize : size});
  }
  
  toggleArraySize = () => {
    if(this.state.arraySize === "small") {
      this.setArraySize("large")
    }
    else if(this.state.arraySize === "large") this.setArraySize("small");
  }
  render(){
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.chart}>
        <Paper elevation={3} >
          <ArrayComponentList arraySize={this.state.arraySize} selectedForComparison={[38,57]}/>
        </Paper>
        </div>
        <div className={classes.buttonpad}>
        <Paper elevation={3}>
          <Button variant="contained" color="secondary" className={classes.buttons}>Merge Sort</Button>
          <Button variant="contained" color="secondary" className={classes.buttons}
                  onClick={logic.bubbleSort(this.context)}
          >Bubble Sort</Button>
          <Button variant="contained" color="secondary" className={classes.buttons}>Quick Sort</Button>
          <Button variant="contained" color="secondary" className={classes.buttons}>Heap Sort</Button>
          <Button variant="contained" color="secondary" className={classes.buttons}>Randomize Array</Button>
          <Button variant="contained" color="secondary" className={classes.buttons} 
                  onClick={this.toggleArraySize}
          >Change size</Button>
        </Paper>
        </div>
      </div>
  );
    }
}

export default withStyles(useStyles)(SortTemplate);
