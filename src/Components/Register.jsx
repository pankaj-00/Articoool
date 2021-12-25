import React from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./register.css"

const Login = () => {
    return ( 
    <div className='RegisterSection'>
      <Form className='RegisterSection2'>
          <Form.Group className="mb-3 EmailAddress" controlId="formBasicEmail">
          <Form.Label>First Name</Form.Label>
          
          
          <Form.Control type="email" placeholder="First Name" />
                  
        </Form.Group>
        <Form.Group className="mb-3 EmailAddress" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>

          <Form.Control type="email" placeholder="Last name" />
                  
        </Form.Group>

        
        <Form.Group className="mb-3 EmailAddress" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control type="email" placeholder="Email Address" />
                  
        </Form.Group>

        <Form.Group className="mb-3 Password" controlId="formBasicPassword">
          <Form.Label>Set Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          
        </Form.Group>
        <hr></hr>
        <div className='SubmitContainer'>
        <Button className='btn btn-info SubmitButton' variant="primary" type="submit">
          <b>Sign up</b>
        </Button>
        </div>
        <Link to="/Login" className='Link'>
          <button className='SignUpButton'>Already Registered?</button>
        </Link>
      </Form>
      
    </div>
     );
}
 
export default Login;