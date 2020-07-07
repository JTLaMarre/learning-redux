import React, { Component } from 'react';
import store from '../Store'

class Decrement extends Component{


handleDecrement(){
    store.dispatch({
        type:"DECREMENT"
    })
    console.log(store.getState().Counter)
}

    render(){
        return(
            <button onClick={this.handleDecrement}>minus</button>
        )
    }

}

export default Decrement;