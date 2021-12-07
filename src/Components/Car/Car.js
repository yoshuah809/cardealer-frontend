import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Car({vehicle}) {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/car${vehicle.id}`}>
                <Card.Img src={vehicle.main_image} />
            </Link>
            <Card.Body>
                <Link to={`/car${vehicle.id}`}>
                    <Card.Title as="div">
                        <strong>{vehicle.make}</strong>
                        
                    </Card.Title>12
                    <Card.Title as="div">
                       
                        <strong>{vehicle.model}</strong>
                    </Card.Title>
                </Link>
                   
                <Card.Text as="h3">
                    ${vehicle.type}
                </Card.Text> 
            </Card.Body>
        </Card>
    )
}


export default Car
