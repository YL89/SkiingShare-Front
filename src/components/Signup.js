import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../css/Signup.css';
import authService from '../services/auth-services';

export default function Signup(props) {

    const [newUser, setNewUser] = useState({});

    const handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setNewUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        console.log(newUser);
        e.preventDefault();
        authService.signup(newUser);
    }


    return (
        <Container>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username<span className="required">*</span></Form.Label>
                    <Form.Control name='username' type='text' placeholder='User account' required onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email<span className="required">*</span></Form.Label>
                    <Form.Control name='email' type='email' placeholder='email' required onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password<span className="required">*</span></Form.Label>
                    <Form.Control name='password' type='password' placeholder='Password' required onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password<span className="required">*</span></Form.Label>
                    <Form.Control name='password2' type='password' placeholder='Password' required onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address<span className="required">*</span></Form.Label>
                    <Form.Control name='address' type='text' placeholder='Address' required onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code<span className="required">*</span></Form.Label>
                    <Form.Control name='postalCode' type='text' placeholder='Postal code' required onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone &#40;Optional&#41;</Form.Label>
                    <Form.Control name='phone' type='text' placeholder='Phone' onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className='text-center'>
                    <Button className='signin-btn' variant='primary' type='submit' >Sign Up</Button>{' '}
                    <Button className='signin-btn' variant='primary' type='clear' >Clear</Button>
                </Form.Group>

            </Form>

        </Container>
    )

}