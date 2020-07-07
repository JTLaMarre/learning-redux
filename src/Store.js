import {createStore} from 'redux';
import allReducer from './reducers/index.js';


const store = createStore(allReducer)

export default store