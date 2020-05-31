import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


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

class ButtonGroupTemplate extends Component{
    render(props){
        const { classes} = this.props;
        return (
        <div className={classes.buttonpad}>
        <Paper elevation={3}>
          <Button variant="contained" color="secondary" className={classes.buttons}
                  onClick={this.props.buttonFunctions.mergeSort}
          >Merge Sort</Button>
          <Button variant="contained" color="secondary" className={classes.buttons}
                  onClick={this.props.buttonFunctions.bubbleSort}
          >Bubble Sort</Button>
          <Button variant="contained" color="secondary" className={classes.buttons}
                  onClick={this.props.buttonFunctions.quickSort}
          >Quick Sort</Button>
          <Button variant="contained" color="secondary" className={classes.buttons}>Heap Sort</Button>
          <Button variant="contained" color="secondary" className={classes.buttons} onClick={this.props.buttonFunctions.generateNewArray}>Randomize Array</Button>
          <Button variant="contained" color="secondary" className={classes.buttons}>Change size</Button>
        </Paper>
        </div>
        );
    }
    
}

export default withStyles(useStyles)(ButtonGroupTemplate);