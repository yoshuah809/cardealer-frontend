import React,{useState, useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Car from '../Car/Car'
import Loader from '../Loader/Loader'
import Message from '../Loader/Message'
import { listVehicles } from '../../Actions/VehicleActions'



function HomeScreen ({ history }) {
   
    const dispatch = useDispatch()
    const vehicleList = useSelector(state => state.vehicleList)
    const { error, loading, vehicles } = vehicleList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listVehicles(keyword))        
    }, [dispatch, keyword])

    return (
        <div>
            <h1>Laterst Cars</h1>

            {
                loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
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
