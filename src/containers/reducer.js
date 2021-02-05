import {combineReducers} from 'redux'

import actionReducer from './action-reducer'
import filterReducer from './filter-reducer'

const reducers = combineReducers({ actions: actionReducer, filters: filterReducer })

export default reducers