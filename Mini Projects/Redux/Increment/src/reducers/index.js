import { combineReducers } from "redux";
import counters from './counter'

const red = combineReducers({
    counter:counters
})

export default red
