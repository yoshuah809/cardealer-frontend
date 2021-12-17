import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className="text-center py-3">Copyright &copy; Downtown AutoPlex</Col>
                    <Col className="text-center py-3"> 2525 Story Ln Dallas, TX</Col>
                    <Col className="text-center py-3"> 972-255-7895X</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
