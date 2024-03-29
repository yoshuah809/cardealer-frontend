import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { vehicleUpdateReducer, vehicleListReducer, vehicleDetailsReducer,vehicleDeleteReducer, vehicleCreateReducer } from '../Components/reducers/VehicleReducer'
import { CartReducer } from '../Components/reducers/CartReducer'
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer } from '../Components/reducers/UserReducer'
import { orderCreateReducer, orderDetailsReducer, orderPayReducer, orderListMyReducer, orderListReducer } from '../Components/reducers/OrderReducers'

const reducer = combineReducers({
    vehicleList: vehicleListReducer,
    vehicleDetails: vehicleDetailsReducer,
    vehicleDelete: vehicleDeleteReducer,
    cart: CartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userList: userListReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile :userUpdateProfileReducer,
    userDelete: userDeleteReducer,
    userUpdate :userUpdateReducer,
    orderCreate: orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay :orderPayReducer,
    orderListMy: orderListMyReducer,
    vehicleCreate: vehicleCreateReducer,
    vehicleUpdate: vehicleUpdateReducer,
    orderList: orderListReducer,
})


const cartItemFromStorage = localStorage.getItem('cartItems') ?
JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
JSON.parse(localStorage.getItem('shippingAddress')) : {}    

const initialState = {
    cart: { 
        cartItems: cartItemFromStorage,
        shippingAddress: shippingAddressFromStorage, 
    },
    userInfo: {userInfo: userInfoFromStorage}
}
const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))


export default store