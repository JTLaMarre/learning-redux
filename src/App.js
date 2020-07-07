import React from 'react';
import './App.css';
import Increment from './components/Increment.js'
import Decrement from './components/Decrement.js'
import Number from './components/NumberState'
import {Provider} from 'react-redux'
import store from './Store'
import DisplayNum from './containers/DisplayNumber'



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>A Number</h1>
      <DisplayNum />
      <Number />
      <Increment />
      <Decrement />
    </div>
    </Provider>
  );
}

export default App;
