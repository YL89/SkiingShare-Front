import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../css/Signup.css';

export default class Signup extends React.Component {

    

    render() {
        return (
            <Container>

                <Form>
                    <Form.Group>
                        <Form.Label>Username<span class="required">*</span></Form.Label>
                        <Form.Control name='username' type='text' placeholder='User account' required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email<span class="required">*</span></Form.Label>
                        <Form.Control name='email' type='email' placeholder='email' required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type='password' placeholder='Password' required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name='password2' type='password' placeholder='Password' required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address<span class="required">*</span></Form.Label>
                        <Form.Control name='address' type='text' placeholder='Address' required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Postal Code<span class="required">*</span></Form.Label>
                        <Form.Control name='postalCode' type='text' placeholder='Postal code' required></Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone &#40;Optional&#41;</Form.Label>
                        <Form.Control name='phone' type='text' placeholder='Phone'></Form.Control>
                    </Form.Group>
                    <Form.Group className='text-center'>
                        <Button className='signin-btn' variant='primary' type='submit' >Sign Up</Button>{' '}
                        <Button className='signin-btn' variant='primary' type='clear' >Clear</Button>
                    </Form.Group>

                </Form>

            </Container>
        )
    }
}