import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import '../css/Signup.css';
import authService from '../services/auth-services';

export default function Signup() {

    const { register, handleSubmit, errors } = useForm();
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

    const onSubmit = () => {
        authService.signup(newUser);
    }


    return (
        <Container>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Username<span className="required">*</span></Form.Label>
                    <Form.Control name='username' type='text' placeholder='User account' onChange={handleChange}
                        ref={register({
                            required: true,
                            minLength: 6
                        })}></Form.Control>
                </Form.Group>
                {errors.username && errors.username.type === "required" && (<Alert variant="danger">Username cannot be empty</Alert>)}
                {errors.username && errors.username.type === "minLength" && (<Alert variant="danger">Username should be at least 6 characters</Alert>)}
                <Form.Group>
                    <Form.Label>Email<span className="required">*</span></Form.Label>
                    <Form.Control name='email' type='text' placeholder='email' onChange={handleChange}
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: (<Alert variant="danger">Invalid email address</Alert>)
                            }
                        })}>
                    </Form.Control>
                </Form.Group>
                {errors.email && errors.email.type === "required" && (<Alert variant="danger">Email cannot be empty</Alert>)}
                {errors.email && errors.email.message}

                <Form.Group>
                    <Form.Label>Password<span className="required">*</span></Form.Label>
                    <Form.Control name='password' type='password' placeholder='Password' onChange={handleChange}
                        ref={register({
                            required: true,
                            minLength: 8,
                            pattern: {
                                value: /^[A-Z0-9._%+-]/i,
                                message: (<Alert variant="danger">Invalid email address</Alert>)
                            }
                        })}>
                    </Form.Control>
                </Form.Group>
                {errors.password && errors.password.type === "required" && (<Alert variant="danger">Password cannot be empty</Alert>)}
                {errors.password && errors.password.type === "minLength" && (<Alert variant="danger">Password must be at least 8 characters</Alert>)}
                {errors.password && errors.password.type === "pattern" && (<Alert variant="danger">Password contains at least 1 uppercase character</Alert>)}

                <Form.Group>
                    <Form.Label>Confirm Password<span className="required">*</span></Form.Label>
                    <Form.Control name='password2' type='password' placeholder='Password' onChange={handleChange}
                        ref={register({
                            required: true,
                            validate: value => value === newUser.password
                        })}>
                    </Form.Control>
                </Form.Group>
                {errors.password2 && errors.password2.type === "validate" && (<Alert variant="danger">Password does not match</Alert>)}

                <Form.Group>
                    <Form.Label>Address<span className="required">*</span></Form.Label>
                    <Form.Control name='address' type='text' placeholder='Address' onChange={handleChange}
                        ref={register({ required: true })}>
                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Postal Code<span className="required">*</span></Form.Label>
                    <Form.Control name='postalCode' maxLength="7" type='text' placeholder='Postal code' onChange={handleChange}
                        ref={register({
                            required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]{2,}/i,
                                message: (<Alert variant="danger">Invalid postal code format &#40;sample: A1A2A2&#41;</Alert>)
                            }
                        })}>
                    </Form.Control>
                </Form.Group>
                {errors.postalCode && errors.postalCode.type === "required" && (<Alert variant="danger">Postal code cannot be empty</Alert>)}
                {errors.postalCode && errors.postalCode.message}

                <Form.Group>
                    <Form.Label>Phone &#40;Optional&#41;</Form.Label>
                    <Form.Control name='phone' type='text' placeholder='Phone' onChange={handleChange}
                        ref={register}>
                    </Form.Control>
                </Form.Group>

                <Form.Group className='text-center'>
                    <Button className='signin-btn' variant='primary' type='submit' >Sign Up</Button>{' '}
                    <Button className='signin-btn' variant='primary' type='clear' >Clear</Button>
                </Form.Group>

            </Form>

        </Container>
    )

}