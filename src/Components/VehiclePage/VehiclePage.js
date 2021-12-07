import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { Link, useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'


const VehiclePage = () => {
    const { id } = useParams();

    const [vehicle, setVehicle] = useState([])
    // eslint-disable-next-line eqeqeq
    
    useEffect(() => {
        async function getVehicle(){
            //const car = cars.find((p) => p.id === id)
            const { data }  = await axios.get(`/api/vehicles/${id}`)     
            setVehicle(data)
            
        }
        getVehicle();   
    }, [id])
    
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                   <Image src ={vehicle.main_image} alt={vehicle.make} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="Flush">
                        <ListGroup.Item>
                            <h3> Make:  {vehicle.model} </h3>
                            <h3> Model: {vehicle.model} </h3>
                            <h3> Miles: {vehicle.miles} </h3>
                            <h3> {vehicle.vehicle_type} </h3>
                            <h6> VIN: {vehicle.VIN} </h6>
                        </ListGroup.Item>

                        <ListGroup.Item>
                        </ListGroup.Item>

                        <ListGroup.Item>
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
                                <Col>  <h1> Price: <strong>${vehicle.price}</strong> </h1></Col>
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
                            <Button type='button' className btn btn-danger disabled={vehicle.isSold}>Buy Car</Button>
                        </ListGroup.Item>
                    </ListGroup>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default VehiclePage
