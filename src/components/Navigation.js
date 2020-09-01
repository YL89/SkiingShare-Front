import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Login from './Login.js';
import Modal from 'react-modal';
import Signup from './Signup.js';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root')

  
function Navigation(){
    //Modals
    const [signInOpen,setInOpen] = React.useState(false);
    const [signUpOpen,setUpOpen] = React.useState(false);

    function openInModal() {
        setInOpen(true);
    }
    function closeInModal(){
        setInOpen(false);
    }
    function openUpModal() {
        setUpOpen(true);
    }
    function closeUpModal(){
        setUpOpen(false);
    }
    return (
        <Navbar bg="white" expand='lg'>
            <Navbar.Brand>Skiing Share</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Button variant='light' onClick={openInModal}>Sign In</Button>
                <Modal
                    isOpen={signInOpen}
                    onRequestClose={closeInModal}
                    style={customStyles}
                    contentLabel="Sign Up Modal"
                >
                    <Login />
                </Modal>
                <Button variant='light' onClick={openUpModal}>Sign Up</Button>
                <Modal
                    isOpen={signUpOpen}
                    onRequestClose={closeUpModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Signup />
                </Modal>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation

