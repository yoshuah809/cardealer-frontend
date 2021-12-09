import React, { useEffect } from 'react'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap' 
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import  Message  from '../Loader/Message'
import { AddToCart } from '../../Actions/CartActions'


function CartPage({ match, history}) {
    const vehicleId = match.params.id
        
    const dispatch = useDispatch()
        
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    
    useEffect(() => {
        if (vehicleId) {
            dispatch(AddToCart(vehicleId))
            //console.log(cart)
        }
    }, [dispatch, vehicleId])

    const removeFromCartHandler = (vehicleId) => {
        //dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message variant='info'>
                        Your cart is empty <Link to='/'>Go Back</Link>
                    </Message>
                ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map(item => (
                                <ListGroup.Item key={item.product}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/vehicle/${item.vehicle}`}>{item.make} {item.model} {item.mfr} {item.VIN} {item.color}</Link>
                                        </Col>

                                        <Col md={2}>
                                            ${item.price}
                                        </Col>

                                        <Col md={3}>
                                            <Form.Control
                                                as="select"
                                                value={item.qty}
                                                onChange={(e) => dispatch(AddToCart(item.vehicle))}
                                            >                                               
                                            </Form.Control>
                                        </Col>

                                        <Col md={1}>
                                            <Button
                                                type='button'
                                                variant='light'
                                                onClick={() => removeFromCartHandler(item.product)}
                                            >
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
            </Col>

            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                    </ListGroup>

                    <ListGroup.Item>
                        <Button
                            type='button'
                            className='btn-block'
                            disabled={cartItems.length === 0}
                            onClick={checkoutHandler}
                        >
                            Proceed To Checkout
                        </Button>
                    </ListGroup.Item>


                </Card>
            </Col>
        </Row>
    )
}


export default CartPage


