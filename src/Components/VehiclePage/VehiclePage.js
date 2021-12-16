import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { listVehicleDetails } from '../../Actions/VehicleActions'
import Loader from '../Loader/Loader'
import Message from '../Loader/Message'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'

const VehiclePage = ({ match, history}) => {

    const dispatch = useDispatch()
    const vehicleDetails = useSelector(state => state.vehicleDetails)
    const { error, loading, vehicle } = vehicleDetails

  
    useEffect(() => {
          dispatch(listVehicleDetails(match.params.id))
    }, [dispatch, match.params.id]);
    
    const addtoCartHandler = () =>{
        history.push(`/cart${match.params.id}`)
    }

    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {

                loading? 
                    <Loader />
                    : error
                    ? <Message variant='danger'>{error}</Message> 
                    :
                    (

                        <Row>
                            <Col md={6}>
                            <Image src ={vehicle.main_image} alt={vehicle.make} fluid />
                            {console.log(vehicle.main_image)}
                            </Col>
                            <Col md={3}>
                                <ListGroup variant="Flush">
                                    <ListGroup.Item>
                                        <h3> Make:  {vehicle.make} </h3>
                                        <h3> Model: {vehicle.model} </h3>
                                        <h3> Miles: {vehicle.miles} </h3>
                                        <h3> {vehicle.vehicle_type} </h3>
                                        <h6> VIN: {vehicle.VIN} </h6>
                                        <h6> Color: {vehicle.color} </h6>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <h1> Price: <strong>${vehicle.price}</strong> </h1>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            <Col md={3}>
                                <Card>
                                <ListGroup variant="Flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col> <h1>  <strong> Price: ${vehicle.price}</strong> </h1></Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                                <ListGroup variant="Flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col><h1> Status: {!vehicle.isSold ?'Available' : 'Not Available'} </h1></Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>

                                <ListGroup variant="Flush"> 
                                    <ListGroup.Item>
                                        <Button type='button' 
                                        onClick={addtoCartHandler}
                                        className btn btn-success variant='success' disabled={vehicle.isSold}>Buy Car</Button>
                                    </ListGroup.Item>
                                </ListGroup>

                                </Card>
                            </Col>
                        </Row>

                    )
            }
        </div>
    )
}

export default VehiclePage
