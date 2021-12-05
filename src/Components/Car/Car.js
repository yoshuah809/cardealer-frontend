import React from 'react'
import {Card} from 'react-bootstrap'

function Car({car}) {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/car${car._id}`}>
                <Card.Img src={car.image} />
            </a>
            <Card.Body>
                <a href={`/car${car._id}`}>
                    <Card.Title as="div">
                        <strong>{car.name}</strong>
                    </Card.Title>
                </a>
                   
                <Card.Text as="h3">
                    ${car.price}
                </Card.Text> 
            </Card.Body>
        </Card>
    )
}


export default Car
