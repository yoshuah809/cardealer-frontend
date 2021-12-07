import React,{useState, useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Car from '../Car/Car'
import Loader from '../Loader/Loader'
import { listVehicles } from '../../Actions/VehicleActions'



function HomeScreen () {
   
    const dispatch = useDispatch()
    const vehicleList = useSelector(state => state.vehicleList)
    const {error, loading, vehicles} = vehicleList

    useEffect(() => {
        dispatch(listVehicles())        
    }, [dispatch])

    //const vehicles=[];
    return (
        <div>
            <h1>Laterst Cars</h1>

            {
                loading ? <Loader />
                : error ? <h3>{error}</h3>
                :
                    <Row>
                        {vehicles.map(vehicle => (
                            <Col key ={vehicle.id} sm={12} md={6} lg={4} xl={3}>
                                
                                <Car vehicle = {vehicle} />
                            </Col>

                        ))}
                    </Row>
            
            
            }
        </div>
    )
}

export default HomeScreen
