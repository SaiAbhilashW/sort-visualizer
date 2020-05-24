import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    wrapper : {
      display: "inline-block",
    },
    component: {
      // height: "150px",
      width: "15px",
      border: "1px solid pink",
    },
    transperentFiller: {
      width: "15px",
    },
    value: {
        fontSize: "10px",
        textAlign:"center",
    }
  }));

const ArrayComponent = (props) => {
    const classes = useStyles();
    const modifiedHeight = (3* props.number).toString().concat("px");
    const remainingHeight = (350 - 3*props.number).toString().concat("px");
    let backgroundColor;
    props.isSelectedForComparison? backgroundColor = "yellow" : backgroundColor = "brown"; 
    return (
        <div className={classes.wrapper}>
        <div className={classes.transperentFiller} style={{height:remainingHeight}}></div>
        <div className={classes.component} style={{height:modifiedHeight, backgroundColor: backgroundColor}}></div>
        <div className={classes.value}>{props.number}</div>
        </div>
    );
}

export default ArrayComponent;