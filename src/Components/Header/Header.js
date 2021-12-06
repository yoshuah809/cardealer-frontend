import React from 'react'
import {Navbar, Nav, Container, Row} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
        <header >
            <Navbar bg="dark" variant="dark" expand="lg collapseOnSelect">
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>DownTown AutoPlex</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls ="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav ClassName ="ml-auto">
                    <LinkContainer to='/Cart'>
                          <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/Login'>
                          <Nav.Link> <i className="fas fa-user"></i>Login</Nav.Link>
                    </LinkContainer> 

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
