import { createStore, applyMiddleware, combineReducers } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';

import notesReducer from './reducers/noteReducer'


const bindMiddleware = (middlware) => {
    if (process.env.NODE_ENV !== 'production'){
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middlware))
    }
    return applyMiddleware(...middlware)
}

const combinedReducers = combineReducers({
    notesReducer
})

const reducer = (state, action) => {
    if (action.type === HYDRATE){
        const nextState = {
            ...state,
            ...action.payload,
        }
        return nextState
    }
    else {
        return combinedReducers(state, action)
    }
}  

const initStore = () => {
    return createStore(reducer, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
