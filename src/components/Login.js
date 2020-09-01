import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

import AuthService from '../services/auth-services';
import { useHistory } from 'react-router-dom';

export default function Login() {

    const [user, setUser] = useState({});
    let history = useHistory();

    const handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        setUser(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        AuthService.signin(user);
        history.push('/');
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Account</Form.Label>
                    <Form.Control name='email' type='email' placeholder='Account email' onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type='password' placeholder='Password' onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className='text-center'>
                    <Button className='signin-btn' variant='primary' type='submit' >Sign In</Button>{' '}
                    <Button className='signin-btn' variant='primary' type='clear' >Clear</Button>
                </Form.Group>
            </Form>
        </Container>
    )
}