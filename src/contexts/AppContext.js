import React, { Component } from 'react';
import numberArray from '../data/numberArray';

const Context = React.createContext({numberArray});

export class AppStore extends Component{
    state = {
        numberArray : numberArray,
        selectedIndexes : [-1,-1],
        // hasRendered : true,
    }

    swapElementsInArray = (numberArray, indexOne, indexTwo) => {
        let tempNumberArray = numberArray;
        const temp = tempNumberArray["small"][indexTwo];
        tempNumberArray["small"][indexTwo] = tempNumberArray["small"][indexOne];
        tempNumberArray["small"][indexOne] = temp;
        this.setState({numberArray: tempNumberArray});
    }

    enterSelectedIndexes = (indexOne, indexTwo) => {
        let tempSelectedIndexes = [indexOne, indexTwo];
        this.setState({selectedIndexes: tempSelectedIndexes});
    }

    // setHasRendered = (boolval) => {
    //     this.setState({hasRendered: boolval});
    // }

    render(){
        return (
            <Context.Provider value={{...this.state, swapElementsInArray: this.swapElementsInArray, enterSelectedIndexes: this.enterSelectedIndexes, setHasRendered: this.setHasRendered}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context;