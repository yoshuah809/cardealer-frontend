import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { vehicleListReducer, vehicleDetailsReducer } from '../Components/reducers/VehicleReducer'
import { CartReducer } from '../Components/reducers/CartReducer'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer } from '../Components/reducers/UserReducer'

const reducer = combineReducers({
    vehicleList: vehicleListReducer,
    vehicleDetails: vehicleDetailsReducer,
    cart: CartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile :userUpdateProfileReducer,
})

const cartItemFromStorage = localStorage.getItem('cartItems') ?
JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    cart: { cartItems: cartItemFromStorage },
    userInfo: {userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store