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
          VEHICLE_CREATE_RESET,
        } from './../../Constants/VehicleConstants'

export const vehicleListReducer = (state ={ vehicles: [] }, action) => {
    switch (action.type) {
        case VEHICLE_LIST_REQUEST:
            return {loading: true, vehicles: []}

        case VEHICLE_LIST_SUCCESS:
            return {loading: false, vehicles: action.payload}

        case VEHICLE_LIST_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state    
    }
}

export const vehicleDetailsReducer = (state={vehicle:{}}, action) => {
    switch(action.type) {
        case VEHICLE_DETAILS_REQUEST:
            return {loading: true, ...state}

        case VEHICLE_DETAILS_SUCCESS:
            return {loading: false, vehicle: action.payload}

        case VEHICLE_DETAILS_FAIL:
            return {loading: false, error: action.payload}

        default:
            return state    
    }
}

export const vehicleDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case VEHICLE_DELETE_REQUEST:
            return { loading: true }

        case VEHICLE_DELETE_SUCCESS:
            return { loading: false, success: true }

        case VEHICLE_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const vehicleCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case VEHICLE_CREATE_REQUEST:
            return { loading: true }

        case VEHICLE_CREATE_SUCCESS:
            return { loading: false, success: true, vehicle: action.payload }

        case VEHICLE_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case VEHICLE_CREATE_RESET:
            return {}

        default:
            return state
    }
}