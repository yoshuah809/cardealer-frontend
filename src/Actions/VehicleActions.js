import { useDispatch } from 'react-redux'

import  { VEHICLE_LIST_REQUEST,
    VEHICLE_LIST_SUCCESS,
    VEHICLE_LIST_FAIL } from '../Constants/VehicleConstants'

import axios from 'axios'


export const listVehicles= () => async (dispatch) => {
   try {
       dispatch( {type:VEHICLE_LIST_REQUEST} )
       const { data }  = await axios.get('/api/vehicles/')   

       dispatch( {
           type:VEHICLE_LIST_SUCCESS,
            payload: data
        } )

   } catch (error) {
    dispatch( {
        type:VEHICLE_LIST_FAIL,
        payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message
     } )
   }
}


