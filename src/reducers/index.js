import Counter from './Counter'
import Logged from './Logged'
import {combineReducers} from 'redux'

const allReducer = combineReducers({
    Counter,
    Logged
})

export default allReducer