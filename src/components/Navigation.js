import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import SignButton from './small-widges/buttons';
import SignContext from '../contexts/SignContext';
import UserAuthContext from '../contexts/UserAuthContext'
import AuthService from '../services/auth-services';

export default function Navigation() {

    const [button, setButton] = useState("signin");
    const {authStatus, setAuthStatus} = useContext(UserAuthContext);
    const value = { button, setButton, setAuthStatus };

    let history = useHistory();

    return (
        <Navbar bg="white" expand='lg'>
            <Navbar.Brand>Skiing Share</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href='/'>Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {authStatus
                    ? <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={() => {
                            AuthService.signout();
                            setAuthStatus(false);
                            setButton("signin")
                            history.push('/');
                        }}>
                            Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    :
                    <SignContext.Provider value={value}>
                        <SignButton></SignButton>
                    </SignContext.Provider>
                }

            </Navbar.Collapse>
        </Navbar>
    )

}