import React, { Component } from 'react'

export const vehicleListReducer = (state ={ vehicles: [] }, action) => {
    switch(action.type){
        case 'VEHICLE_LIST_REQUEST':
            return {loading: true, vehicles: []}

        case 'VEHICLE_LIST_SUCCESS':
            return {loading: false, vehicles: action.payload}

        case 'VEHICLE_LIST_FAIL':
            return {loading: false, error: action.payloa}

        default:
            return state    
    }
}