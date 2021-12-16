import React, { useState, useEffect } from 'react'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import StripeCheckoutButton from '../Stripe-Button/Stripe-Button'
import Message from '../Loader/Message'
import Loader from '../Loader/Loader'
import { getOrderDetails, payOrder } from '../../Actions/OrderActions'
import { ORDER_PAY_RESET, ORDER_DELIVER_RESET } from '../../Constants/OrderConstants'
import moment from "moment";

function OrderScreen({ match, history }) {
    const orderId = match.params.id
    const dispatch = useDispatch()


    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const orderDeliver = useSelector(state => state.orderDeliver)
    //const { loading: loadingDeliver, success: successDeliver } = orderDeliver

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    if (!loading && !error) {
        order.itemsPrice =order.orderItems.reduce((acc, item) => acc + item.priceSold * 1, 0).toFixed(2)
       
    }


    const successPaymentHandler = (paymentResult) => {
      dispatch(payOrder(orderId, paymentResult))
    }
    
    useEffect(() => {

        if (!userInfo) {
            history.push('/login')
        }
        //if (!order || successPay || order.id !== Number(orderId) || successDeliver) {
        if (!order || order.id !== Number(orderId) || successPay) {
            dispatch({ type: ORDER_PAY_RESET })
            //dispatch({ type: ORDER_DELIVER_RESET })

            dispatch(getOrderDetails(orderId))
        } else if (!order.isPaid) {
            // <StripeCheckoutButton price={order.totalPrice} paymentHandler={successPaymentHandler}/>
            //successPaymentHandler(order.id, 'success' )
        }
    }, [dispatch, order, orderId, history, userInfo, successPay])



    const deliverHandler = () => {
        //dispatch(deliverOrder(order))
    }

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
                <div>
                    <h1>Order: {order.id}</h1>
                    <Row>
                        <Col md={8}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h2>Shipping</h2>
                                    <p><strong>Name: </strong> {order.user.name}</p>
                                    <p><strong>Dealer: </strong> {order.shippingAddress.dealername}</p>

                                    <p><strong>Email: </strong><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
                                    <p>
                                        <strong>Shipping: </strong>
                                        {order.shippingAddress.dealerName}
                                        {'  '}
                                        {order.shippingAddress.address},  {order.shippingAddress.city} {'  '} {order.shippingAddress.state}
                                        {'  '}
                                        {order.shippingAddress.postalCode},
                                {'  '}
                                        {order.shippingAddress.country}
                                    </p>

                                    {order.isDelivered ? (
                                        <Message variant='success'>Delivered on {order.deliveredAt}</Message>
                                    ) : (
                                            <Message variant='warning'>Not Delivered</Message>
                                        )}
                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <h2>Payment Method</h2>
                                    <p>
                                        <strong>Method: </strong>
                                        {order.paymentMethod}
                                    </p>
                                    {order.isPaid ? (
                                        <Message variant='success'>Paid on {moment(order.paidAt).format('MM/DD/YYYY')}</Message>
                                    ) : (
                                            <Message variant='warning'>Not Paid</Message>
                                        )}

                                </ListGroup.Item>

                                <ListGroup.Item>
                                    <h2>Order Items</h2>
                                    {order.orderItems.length === 0 ? <Message variant='info'>
                                        Order is empty
                            </Message> : (
                                            <ListGroup variant='flush'>
                                                {order.orderItems.map((item, index) => (
                                                    <ListGroup.Item key={index}>
                                                        <Row>
                                                            <Col md={1}>
                                                                <Image src={item.main_image} alt={item.make} fluid rounded />
                                                            </Col>

                                                            <Col>
                                                                <Link to={`/vehicle/${item.vehicle}`}>{item.make}</Link>
                                                                <Col md={4}>Make:{item.make} </Col>
                                                                <Col md={4}>Model: {item.model}</Col>
                                                                <Col md={4}>VIN: {item.VIN}</Col>
                                                                </Col>

                                                            <Col md={4}>
                                                            Price: ${(1 * item.priceSold).toFixed(2)}
                                                            
                                                            </Col>
                                                        </Row>
                                                    </ListGroup.Item>
                                                ))}
                                            </ListGroup>
                                        )}
                                </ListGroup.Item>

                            </ListGroup>

                        </Col>

                        <Col md={4}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <h2>Order Summary</h2>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Items:</Col>
                                            <Col>${order.itemsPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Shipping:</Col>
                                            <Col>${order.shippingPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Dealer Fees:</Col>
                                            <Col>${order.dealerFees}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Total:</Col>
                                            <Col>${order.totalPrice}</Col>
                                        </Row>
                                    </ListGroup.Item>


                                    {!order.isPaid && (
                                        <div>
                                            {/* {loadingPay && <Loader />} */}
                                                
                                                <StripeCheckoutButton 
                                                    price={order.totalPrice} 
                                                    paymentHandler={successPaymentHandler}/>
                                        </div>
                                    )}
                                </ListGroup>
                                {/* {loadingDeliver && <Loader />} */}
                                {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                                    <ListGroup.Item>
                                        <Button
                                            type='button'
                                            className='btn btn-block'
                                            onClick={deliverHandler}
                                        >
                                            Mark As Delivered
                                        </Button>
                                    </ListGroup.Item>
                                )}
                            </Card>
                        </Col>
                    </Row>
                </div>
            )
}


export default OrderScreen