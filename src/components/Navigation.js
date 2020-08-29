import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import SignButton from './small-widges/buttons';
import  SignContext  from '../contexts/funtional-context';

export default function Navigation() {

    const [button, setButton] = useState("signin");
    const value = { button, setButton };

    return (
        <Navbar bg="white" expand='lg'>
            <Navbar.Brand>Skiing Share</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <SignContext.Provider value={value}>
                    <SignButton></SignButton>
                </SignContext.Provider>
            </Navbar.Collapse>
        </Navbar>
    )

}