import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import Message from '../Loader/Message'
//import Paginate from '../components/Paginate'
import { listVehicles  } from '../../Actions/VehicleActions'
//deletevehicle, createvehicle
import { VEHICLE_CREATE_RESET } from '../../Constants/VehicleConstants'

function VehicleListPage({ history, match }) {

    const dispatch = useDispatch()

    const listVehicles = useSelector(state => state.vehicleList)
    const { loading, error, vehicles, pages, page } = listVehicles

    // const vehicleDelete = useSelector(state => state.vehicleDelete)
    // const { loading: loadingDelete, error: errorDelete, success: successDelete } = vehicleDelete

    // const vehicleCreate = useSelector(state => state.vehicleCreate)
    // const { loading: loadingCreate, error: errorCreate, success: successCreate, vehicle: createdvehicle } = vehicleCreate


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    let keyword = history.location.search
    // useEffect(() => {
    //     dispatch({ type: VEHICLE_CREATE_RESET })

    //     if (!userInfo.isAdmin) {
    //         history.push('/login')
    //     }

    //     if (successCreate) {
    //         history.push(`/admin/vehicle/${createdvehicle.id}/edit`)
    //     } else {
    //         dispatch(listvehicles(keyword))
    //     }

    // }, [dispatch, history, userInfo, successDelete, successCreate, createdvehicle, keyword])


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this Vehicle?')) {
            //dispatch(deleteVehicle(id))
        }
    }

    const createVehicleHandler = () => {
        //dispatch(createvehicle())
    }

    return (
        <div>
            <Row className='align-items-center'>
                <Col>
                    <h1>Vehicles</h1>
                </Col>

                <Col className='text-right'>
                    <Button className='my-3' onClick={createVehicleHandler}>
                        <i className='fas fa-plus'></i> Create Vehicle
                    </Button>
                </Col>
            </Row>

            {/* {loadingDelete && <Loader />}
            {errorDelete && <Message variant='danger'>{errorDelete}</Message>}


            {loadingCreate && <Loader />}
            {errorCreate && <Message variant='danger'>{errorCreate}</Message>} */}

            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <div>
                            <Table striped bordered hover responsive className='table-sm'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>MAKE</th>
                                        <th>MODEL</th>
                                        <th>COLOR</th>
                                        <th>VIN</th>
                                        <th>DOORS</th>
                                        <th>FUEL TYPE</th>
                                        <th>PURCHASED DATE</th>
                                        <th>SOLD DATE</th>
                                        <th>TRANSMISSION</th>
                                        <th>PRICE</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {vehicles.map(vehicle => (
                                        <tr key={vehicle.id}>
                                            <td>{vehicle.id}</td>
                                            <td>{vehicle.make}</td>
                                            <td>{vehicle.model}</td>
                                            <td>{vehicle.color}</td>
                                            <td>{vehicle.VIN}</td>
                                            <td>{vehicle.number_of_doors}</td>
                                            <td>{vehicle.fuel_type}</td>
                                            <td>{vehicle.purchased_date}</td>
                                            <td>{vehicle.date_sold}</td>
                                            <td>{vehicle.transmission}</td>
                                            <td>{vehicle.price}</td>

                                            <td>
                                                <LinkContainer to={`/admin/vehicle/${vehicle.id}/edit`}>
                                                    <Button variant='light' className='btn-sm'>
                                                        <i className='fas fa-edit'></i>
                                                    </Button>
                                                </LinkContainer>

                                                <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(vehicle.id)}>
                                                    <i className='fas fa-trash'></i>
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
                        </div>
                    )}
        </div>
    )
}

export default VehicleListPage