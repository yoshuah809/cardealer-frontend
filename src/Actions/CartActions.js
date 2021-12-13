import axios from 'axios'
import { useDispatch } from 'react-redux'

import  { 
        CART_ADD_ITEM, 
        CART_REMOVE_ITEM,
        CART_SAVE_SHIPPING_ADDRESS,
        CART_SAVE_PAYMENT_METHOD } from '../Constants/CartConstants'

export const AddToCart = (id) => async (dispatch, getState) => {
    
   
    const { data } = await axios.get(`/api/vehicles/${id}`)
    console.log(data.id)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            vehicle: data.id,
            make: data.make,
            model: data.model,
            VIN: data.VIN,
            mfr: data.mfr,
            color: data.color,
            fuel_type: data.fuel_type,
            doors: data.number_of_doors,
            transmission: data.transmission_type,
            price: data.price,
            quantity: 1,
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id,
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_SHIPPING_ADDRESS,
        payload: data,
    })

    localStorage.setItem('shippingAddress', JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch) => {
    dispatch({
        type: CART_SAVE_PAYMENT_METHOD,
        payload: data,
    })

    localStorage.setItem('paymentMethod', JSON.stringify(data))
}