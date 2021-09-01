import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import favouritesReducer from './reducers'

const rootReducer = combineReducers({ favouritesReducer })

export const store = createStore(rootReducer, applyMiddleware(thunk))