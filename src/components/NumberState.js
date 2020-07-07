import React, { Component } from 'react';
import store from '../Store';






let x = store.getState().Counter

class Number extends Component{
  
  display =()=>{
    
        console.log(x)
        console.log(store.getState().Counter)
    }
    

    render(){
        return(
          <>
          <button onClick={this.display}>Console Current Number</button>
          </>
        )
}
}
export default Number