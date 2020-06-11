import { createStore, combineReducers } from 'redux'

import loginReducer from './Ducks/auth'

const Reducer = combineReducers({loginReducer})

const Store = createStore(Reducer)

export default Store