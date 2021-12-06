import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Car({car}) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/car${car._id}`}>
                <Card.Img src={car.image} />
            </Link>
            <Card.Body>
                <Link to={`/car${car._id}`}>
                    <Card.Title as="div">
                        <strong>{car.name}</strong>
                    </Card.Title>
                </Link>
                   
                <Card.Text as="h3">
                    ${car.price}
                </Card.Text> 
            </Card.Body>
        </Card>
    )
}


export default Car
