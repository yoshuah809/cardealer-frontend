import { CART_ADD_ITEM } from '../../Constants/CartConstants'
import { CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from '../../Constants/CartConstants'

export const CartReducer = (state= { cartItems: [], shippingAddress: [] }, action) => {
    
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            const existItem = state.cartItems.find(x => x.vehicle === item.vehicle)
            
            if (existItem)
            {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => 
                    x.vehicle === existItem.vehicle ? item :  x
                    )
                }
            }else{
                return{
                    ...state,
                    cartItems:[...state.cartItems, item]
                }
            }
        default:
            return state    
        
    case CART_REMOVE_ITEM:
        return {
            ...state,
            cartItems: state.cartItems.filter(x => x.vehicle !== action.payload)
        }    
    
    case CART_SAVE_SHIPPING_ADDRESS:
        return {
        ...state,
        shippingAddress: action.payload
        }
    }

}