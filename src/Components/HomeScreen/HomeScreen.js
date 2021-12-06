import React from 'react'
import {Col, Row} from 'react-bootstrap'
import cars from '..//../cars'
import Car from '../Car/Car'


function HomeScreen() {
    return (
        <div>
            <h1>Laters Cars</h1>
            <Row>
                {cars.map(car=> (
                    <Col key ={cars._id} sm={12} md={6} lg={4} xl={3}>
                        <Car car ={car} />
                    </Col>

                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
