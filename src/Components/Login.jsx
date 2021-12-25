import React from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {
    return ( 
    <div className='LoginSection'>
      
      <Form className='LoginSection2'>
      <div className='EmailSignupRegister'>  
        <Form.Group className="mb-3 EmailAddress" controlId="formBasicEmail">
          <Form.Label className='EmailTag'>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
                  
        </Form.Group>
      </div>
        <Form.Group className="mb-3 Password" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          
        </Form.Group>
        <button className='ForgotPassword'>
            Forgot Password?
        </button>
        <hr></hr>

        <div className='SubmitContainer'>
          
          <Button className='btn btn-info SubmitButton' variant="primary" type="submit">
            <b>Log in</b>
          </Button>
          
        </div>
        
        <Link to="/Register" className='Link'>
        <button className='SignUpButton'>Sign up</button>
        </Link>
      </Form>
    </div>
     );
}
 
export default Login;