import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Car({vehicle}) {
    return (
        <Card className="my-3 p-3 rounded" bg="success" >
            <Link to={`/car${vehicle.id}`}>
                <Card.Img src={vehicle.main_image} />
            </Link>
            <Card.Body>
                <Link to={`/car${vehicle.id}`}>
                    <Card.Title as="div">
                        Make: <strong>{vehicle.make}</strong>
                    </Card.Title>

                    <Card.Title as="div">
                        Model: <strong>{vehicle.model}</strong>
                    </Card.Title>

                    <Card.Title as="div">
                        Year: <strong>{vehicle.mfr}</strong>
                    </Card.Title>

                    <Card.Title as="div">
                        Color: <strong>{vehicle.color}</strong>
                    </Card.Title>

                    <Card.Title as="div">
                        Transmission: <strong>{vehicle.transmission}</strong>
                    </Card.Title>

                    <Card.Title as="div">
                        Doors: <strong>{vehicle.number_of_doors}</strong>
                    </Card.Title>
                    
                    <Card.Text as="div">
                        Type: {vehicle.vehicle_type}
                    </Card.Text> 

                    <Card.Title as="h3" color='red'>
                        Price: <strong>{vehicle.price}</strong>
                    </Card.Title>
                </Link>
                <Link to='/contactme' font-color='red'><stront>Please Contact Me</stront></Link>
                   
            </Card.Body>
        </Card>
    )
}


export default Car
