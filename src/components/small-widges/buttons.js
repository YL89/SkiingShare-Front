import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignContext from '../../contexts/funtional-context';

export default function SignButton() {

    const { button, setButton } = useContext(SignContext);
    console.log(button)
    if (button === "signin") {
        return (
            <Form inline>
                <Link to='/signin'><Button variant='light' onClick={()=>{setButton("signup")}}>Sign In</Button></Link>
            </Form>
        )
    } else {
        return (
            <Form inline>
                <Link to='/signup'><Button variant='light' onClick={()=>{setButton("signin")}} >Sign Up</Button></Link>
            </Form>
        )
    }
}

