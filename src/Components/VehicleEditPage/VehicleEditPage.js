import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Loader/Message'
import Loader from '../Loader/Loader'
import FormContainer from '../FormCointainer/FormContainer'
import { listVehicleDetails, updateProduct } from '../../Actions/VehicleActions'
import { VEHICLE_UPDATE_RESET } from '../../Constants/VehicleConstants'

import axios from 'axios'

function VehicletEditPage({ match, history }) {

    const vehicleId = match.params.id

    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [mfr, setMfr] = useState(0)
    const [VIN, setVIN] = useState('')
    const [color, setColor] = useState('')
    const [number_of_doors, setDoors] = useState('')
    const [millage, setMillage] = useState()
    const [features, setFeatures] = useState('')
    const [transmission, setTransmission] = useState('')
    const [vehicle_type, setType] = useState('')
    const [main_image, setImage] = useState('')
    const [purchased_date, setPurchase_date] = useState('')
    const [date_sold, setSold] = useState('')
    const [fuel_type, setFuel] = useState('')
    const [isSold, setIsSold] = useState()
    const [rowseat, setRowseat] = useState()
    const [price, setPrice] = useState(0)
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const vehicleDetails = useSelector(state => state.vehicleDetails)
    const { error, loading, vehicle } = vehicleDetails

   
    const vehicleUpdate = useSelector(state => state.vehicleUpdate)
    const { error: errorUpdate, loading:loadingUpdate, success: successUpdate } = vehicleUpdate

    useEffect(() => {

            if(successUpdate) {
                dispatch({type: VEHICLE_UPDATE_RESET})
                history.push('/admin/vehiclelist')
            } else{

                if (!vehicle.make || vehicle.id !== Number(vehicleId)) {
                    dispatch(listVehicleDetails(vehicleId))
                } else {
                    setMake(vehicle.make)
                    setModel(vehicle.model)
                    setVIN(vehicle.VIN)
                    setColor(vehicle.color)
                    setDoors(vehicle.number_of_doors)
                    setMillage(vehicle.millage)
                    setFeatures(vehicle.features)
                    setTransmission(vehicle.transmission)
                    setType(vehicle.vehicle_type)
                    setImage(vehicle.main_image)
                    setPurchase_date(vehicle.purchased_date)
                    setSold(vehicle.date_sold)
                    setRowseat(vehicle.rowseat)
                    setPrice(vehicle.price)
                    setIsSold(vehicle.isSold)
                    setMfr(vehicle.mfr)
                    setFuel(vehicle.fuel_type)
                }
            }
        

    }, [vehicle, vehicleId, history, dispatch, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
         dispatch(updateProduct({
            id:vehicleId, make, model, VIN, color, number_of_doors,
            millage, features, transmission, vehicle_type, main_image,
            purchased_date, date_sold, rowseat, price, isSold, mfr, fuel_type
         }))
    }

    const uploadFileHandler = async (e) => {
        
        console.log('Uploading')
        const file = e.target.files[0]
        const formData = new FormData()

        formData.append('main_image', file)
        formData.append('vehicleid', vehicleId)

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }

            const { data } = await axios.post('/api/vehicles/upload/', formData, config)
            setImage(data)
            setUploading(false)

        } catch (error) {
            alert.Message('Failed')
            setUploading(false)
        }
    }

    return (
        <div>
            <Link to='/admin/vehiclelist'>
                Go Back
            </Link>

            <FormContainer>
                <h1>Edit Vehicle</h1>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler}>

                            <Form.Group controlId='make'>
                                <Form.Label>Make</Form.Label>
                                <Form.Control

                                    type='text'
                                    placeholder='Enter Make'
                                    value={make}
                                    onChange={(e) => setMake(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='model'>
                                <Form.Label>Model</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Model'
                                    value={model}
                                    onChange={(e) => setModel(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='VIN'>
                                <Form.Label> VIN</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter VIN'
                                    value={VIN}
                                    onChange={(e) => setVIN(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='mfr'>
                                <Form.Label> MFR</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter MFR'
                                    value={mfr}
                                    onChange={(e) => setMfr(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='color'>
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Color'
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='number_of_doors'>
                                <Form.Label>Doors</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter Number of Doors'
                                    value={number_of_doors}
                                    onChange={(e) => setDoors(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <p></p>
                            <Form.Group controlId='isSold'>
                                <Form.Check
                                    type='checkbox'
                                    label='Is Sold'
                                    checked={isSold}
                                    onChange={(e) => setIsSold(e.target.checked)}
                                >
                                </Form.Check>
                            </Form.Group>

                            <Form.Group controlId='millage'>
                                <Form.Label>Miles</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter Miles'
                                    value={millage}
                                    onChange={(e) => setMillage(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='features'>
                                <Form.Label>Features</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Features'
                                    value={features}
                                    onChange={(e) => setFeatures(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>


                            <Form.Group controlId='transmission'>
                                <Form.Label>Transmission</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Transmission Type'
                                    value={transmission}
                                    onChange={(e) => setTransmission(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='vehicle_type'>
                                <Form.Label>Vehicle Type</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Type'
                                    value={vehicle_type}
                                    onChange={(e) => setType(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='main_image'>
                                <Form.Label>Vehicle Image</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Image'
                                    value={main_image}
                                    onChange={(e) => setImage(e.target.value)}
                                >
                                </Form.Control>
                              
                                <Form.Group  class="form-group">
                                    <label for="formFile" class="form-label mt-4">Default file input example</label>
                                    <input 
                                        placeholder='Upload image'
                                        onChange={uploadFileHandler} 
                                        class="form-control" type="file" 
                                        id="formFile"/>
                                </Form.Group>
 
                               
                                {uploading && <Loader />}
                            </Form.Group>

                            <Form.Group controlId='purchase_date'>
                                <Form.Label>Purchased Date</Form.Label>
                                <Form.Control
                                    type='date'
                                    placeholder='Enter Purchased Date'
                                    value={purchased_date}
                                    onChange={(e) => setPurchase_date(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='date_sold'>
                                <Form.Label> Date Sold</Form.Label>
                                <Form.Control
                                    type='date'
                                    placeholder='Enter Sold Date'
                                    value={date_sold}
                                    onChange={(e) => setSold(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='fuel_type'>
                                <Form.Label> Fuel Type</Form.Label>
                                <Form.Control
                                    type='text'
                                    placeholder='Enter Fuel Type'
                                    value={fuel_type}
                                    onChange={(e) => setFuel(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='rowseat'>
                                <Form.Label> Row Seat(s)</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter Row Seat(s)'
                                    value={rowseat}
                                    onChange={(e) => setRowseat(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId='price'>
                                <Form.Label> Price</Form.Label>
                                <Form.Control
                                    type='number'
                                    placeholder='Enter Price'
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>

                            <Button type='submit' variant='primary'>
                                Update
                        </Button>

                        </Form>
                    )}

            </FormContainer >
        </div>

    )
}

export default VehicletEditPage


