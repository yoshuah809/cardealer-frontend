import { createStore, combineReducers, ApplyMiddleware, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import VehicleReducer from './Components/reducers/VehicleReducer'

const reducer = combineReducers({})

const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store