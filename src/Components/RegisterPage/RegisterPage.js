import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Loader/Loader'
import Message from '../Loader/Message'
import FormContainer from '../FormCointainer/FormContainer'
import { register } from '../../Actions/UserAction'

function RegisterScreen({ location, history }) {

    const [username, setUserName] = useState('')
    const [middle_name, setMiddle_name] = useState('')
    const [first_name, setFirst_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(username, first_name, last_name, middle_name, email, password))
        }

    }


    return (
        <FormContainer>
            <h1>Sign In</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='username'>
                    <Form.Label>username</Form.Label>
                    <Form.Control
                        required
                        type='username'
                        placeholder='Enter Username'
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='first_name'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        required
                        type='first_name'
                        placeholder='Enter First Name'
                        value={first_name}
                        onChange={(e) => setFirst_name(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='middle_name'>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                        required
                        type='middle_name'
                        placeholder='Enter Middle Name'
                        value={middle_name}
                        onChange={(e) => setMiddle_name(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='last_name'>
                    <Form.Label>last_name</Form.Label>
                    <Form.Control
                        required
                        type='last_name'
                        placeholder='Enter Last name'
                        value={last_name}
                        onChange={(e) => setLast_name(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>

                    Register
                </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Have an Account? <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Sign In
                        </Link>
                </Col>
            </Row>
        </FormContainer >
    )
}

export default RegisterScreen