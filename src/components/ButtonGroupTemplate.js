import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


const useStyles = (theme) => ({
    buttonpad: {
      display: 'inline-block',
      // flexWrap: 'wrap',
      // '& > *': {
        margin: theme.spacing(2),
        width: "200px",
        height: "400px",
      // },
    },
    buttons: {
      margin: theme.spacing(1),
      display: "block",
    }
  });

class ButtonGroupTemplate extends Component{
    render(props){
        const { classes} = this.props;
        return (
        <div className={classes.buttonpad}>
        <Paper elevation={3}>
          <Button  disabled = {this.props.buttonState} togglable={true} variant="contained" color="secondary" id="mergeSort" className={classes.buttons}
                  onClick={this.props.buttonFunctions.mergeSort}
          >Merge Sort</Button>
          <Button disabled = {this.props.buttonState} variant="contained" color="secondary" id="bubbleSort" className={classes.buttons}
                  onClick={this.props.buttonFunctions.bubbleSort}
          >Bubble Sort</Button>
          <Button disabled = {this.props.buttonState} variant="contained" color="secondary" id="quickSort" className={classes.buttons}
                  onClick={this.props.buttonFunctions.quickSort}
          >Quick Sort</Button>
          <Button disabled = {this.props.buttonState} variant="contained" color="secondary" id="insertionSort" className={classes.buttons}
                  onClick={this.props.buttonFunctions.insertionSort}
          >Insertion Sort</Button>
          <Button disabled = {this.props.buttonState} variant="contained" color="secondary" id="generateNewArray" className={classes.buttons} 
                  onClick={this.props.buttonFunctions.randomizeArray}
          >Randomize Array</Button>
          <Button disabled = {this.props.buttonState} variant="contained" color="secondary" className={classes.buttons}
                  onClick={this.props.buttonFunctions.changeArraySize}
          >Change size</Button>
        </Paper>
        </div>
        );
    }
}

export default withStyles(useStyles)(ButtonGroupTemplate);