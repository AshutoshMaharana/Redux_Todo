import {combineReducers} from 'redux'
import filterReducer from './todo/filtereducer'
import todoReducer from './todo/todoreducer'

export default combineReducers({todoReducer,filterReducer})