import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import auth from './Reducer/auth'

const reducer = combineReducers({
  auth
})

// 1 reducer 2 middleware
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
