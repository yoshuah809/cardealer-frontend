import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { vehicleListReducer, vehicleDetailsReducer } from './Components/reducers/VehicleReducer'

const reducer = combineReducers({
    vehicleList: vehicleListReducer,
    vehicleDetails: vehicleDetailsReducer,
})

const initialState = {}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store