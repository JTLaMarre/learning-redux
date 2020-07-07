import React, { Component } from 'react'
import store from '../Store'




class Increment extends Component{
    
    
    handlePlus=()=>{
        store.dispatch({
            type:"INCREMENT"
        })
        console.log(store.getState().Counter)
    
}

    render(){
        return(
            <button onClick={this.handlePlus}>plus</button>
        )
    }

}

export default Increment;