import { createStore, combineReducers, applyMiddleware } from 'redux'

import loginReducer from './Ducks/auth'

const middlewares = []

if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
}

const Reducer = combineReducers({loginReducer})

const Store = createStore(Reducer, applyMiddleware(...middlewares))

export default Store