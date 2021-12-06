import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import cars from '..//../cars'


const VehiclePage = () => {
    const { _id } = useParams();
    // eslint-disable-next-line eqeqeq
    const car = cars.find((p) => p._id === _id)
    
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                   <Image src ={car.image} alt={car.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="Flush">
                        <ListGroup.Item>
                             <h3> {car.name} </h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h3> {car.description} </h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h3> {car.categoty} </h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h1> Price: <strong>${car.price}</strong> </h1>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                    <ListGroup variant="Flush">
                        <ListGroup.Item>
                            <Row>
                                <Col>  <h1> Price: <strong>${car.price}</strong> </h1></Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup variant="Flush">
                        <ListGroup.Item>
                            <Row>
                                <Col><h1> Status: {car.countInStock > 0 ?'Available' : 'Not Available'} </h1></Col>
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup variant="Flush"> 
                        <ListGroup.Item>
                            <button type='button' className btn btn-danger disabled={car.countInStock === 0}>Buy Car</button>
                        </ListGroup.Item>
                    </ListGroup>

                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default VehiclePage
