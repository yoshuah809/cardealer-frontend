import { useDispatch } from 'react-redux'

import  { VEHICLE_LIST_REQUEST,
    VEHICLE_LIST_SUCCESS,
    VEHICLE_LIST_FAIL,
    VEHICLE_DETAILS_REQUEST,
    VEHICLE_DETAILS_SUCCESS,
    VEHICLE_DETAILS_FAIL, 

    VEHICLE_DELETE_REQUEST,
    VEHICLE_DELETE_SUCCESS,
    VEHICLE_DELETE_FAIL,

    VEHICLE_CREATE_REQUEST,
    VEHICLE_CREATE_SUCCESS,
    VEHICLE_CREATE_FAIL,
} from '../Constants/VehicleConstants'

import axios from 'axios'


export const listVehicles = () => async (dispatch) => {
   try {
       dispatch({ type:VEHICLE_LIST_REQUEST })
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


export const listVehicleDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: VEHICLE_DETAILS_REQUEST })
        const { data }  = await axios.get(`/api/vehicles/${id}`)   
 
        dispatch( {
            type:VEHICLE_DETAILS_SUCCESS,
             payload: data
         })
 
    } catch (error) {
     dispatch( {
         type:VEHICLE_DETAILS_FAIL,
         payload: error.response && error.response.data.detail
         ? error.response.data.detail
         : error.message
      })
    }
 }


 export const deleteVehicle = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: VEHICLE_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.delete(
            `/api/vehicles/delete/${id}/`,
            config
        )

        dispatch({
            type: VEHICLE_DELETE_SUCCESS,
        })


    } catch (error) {
        dispatch({
            type: VEHICLE_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const createVehicle = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: VEHICLE_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/vehicles/create/`,
            {},
            config
        )
        dispatch({
            type: VEHICLE_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: VEHICLE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}