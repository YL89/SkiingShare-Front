import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Image, Row, Col, Button, Container} from 'react-bootstrap';

  
function SidePanel(){

    return (
       // <>
       <Container>
        <Row className="justify-content-center text-center" xs={1} noGutters>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Col xs={6}>
            <Image src="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"  fluid roundedCircle/>
            John Doe
        </Col>
        <Col>
        <Button>a</Button>
        <Button>a</Button>
        <Button>a</Button>
        </Col>
        </Row>
        <Row className="justify-content-center text-center" xs={3} noGutters>
            <Col>
                <Button block>s</Button>
            </Col>
            <Col>
                <Button block>s</Button>
            </Col>
            <Col>
                <Button block>s</Button>
            </Col>
            <Col>
                <Button block>s</Button>
            </Col>
            <Col>
                <Button block>s</Button>
            </Col>
            <Col>
                <Button block>s</Button>
            </Col>
        </Row>
        </Container>
       // </>
    )
}

export default SidePanel

