import React,{useState, useEffect} from 'react'
import {Col, Row} from 'react-bootstrap'
//import cars from '..//../cars'
import Car from '../Car/Car'
import axios from 'axios'


function HomeScreen () {
    const [vehicles, setVehicles] = useState([])

    useEffect(() => {
        async function getVehicles(){
            const { data }  = await axios.get('/api/vehicles/')     
            setVehicles(data)
            
        }
        getVehicles();
    }, [])
    return (
        <div>
            <h1>Laterst Cars</h1>
            <Row>
                {vehicles.map(vehicle => (
                    <Col key ={vehicle.id} sm={12} md={6} lg={4} xl={3}>
                          
                        <Car vehicle = {vehicle} />
                    </Col>

                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
