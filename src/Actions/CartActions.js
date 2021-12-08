import axios from 'axios'

import  { CART_ADD_ITEM } from '../Constants/CartConstants'

export const addToCart = () => async (dispatch, getState){
    const { data } = await axios.get(`/api/vehicle/{id}`)

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


        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
