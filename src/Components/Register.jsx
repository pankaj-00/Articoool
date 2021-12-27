import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./register.css";

import { useAuth } from "./../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const fnRef = useRef();
  const lnRef = useRef();
  const pwdRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.prevenDefault();
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, pwdRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div className="RegisterSection">
      <Form className="RegisterSection2" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 EmailAddress" controlId="Email">
          <Form.Label>First Name</Form.Label>

          <Form.Control
            type="text"
            ref={fnRef}
            required
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group className="mb-3 EmailAddress" controlId="formBasicEmail">
          <Form.Label>Last Name</Form.Label>

          <Form.Control
            type="text"
            ref={lnRef}
            required
            placeholder="Last name"
          />
        </Form.Group>

        <Form.Group className="mb-3 EmailAddress" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>

          <Form.Control
            type="email"
            ref={emailRef}
            required
            placeholder="Email Address"
          />
        </Form.Group>

        <Form.Group className="mb-3 Password" controlId="formBasicPassword">
          <Form.Label>Set Password</Form.Label>
          <Form.Control
            type="password"
            ref={pwdRef}
            required
            placeholder="Password"
          />
        </Form.Group>
        <hr></hr>
        <div className="SubmitContainer">
          <Button
            className="btn btn-info SubmitButton "
            variant="primary"
            type="submit"
            disabled={loading}

            // style={{ fontWeight: "bold" }}
          >
            Sign up
          </Button>
        </div>
        <Link to="/Login" className="Link">
          <button className="SignUpButton">Already Registered?</button>
        </Link>
      </Form>
    </div>
  );
};

export default Login;
