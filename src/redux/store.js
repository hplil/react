import {applyMiddleware,createStore} from 'redux'
import rootReducer from './reducers/postReducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

const initState = {};

export const store = createStore(
    rootReducer,
    // initState,
    applyMiddleware(...middleware)
);