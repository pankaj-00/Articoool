import React, { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { Button, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useAuth } from "./../contexts/AuthContext";

const Login = () => {
  const emailRef = useRef();
  const pwdRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, pwdRef.current.value);
      history("/");
    } catch {
      setError("Failed to Log In");
      setLoading(false);
    }
  };

  return (
    <>
      {error ? (
        <Alert key="err" variant="danger" className="text-center">
          <strong>{error}</strong>
        </Alert>
      ) : null}
      <div className="LoginSection">
        <Form className="LoginSection2" onSubmit={handleSubmit}>
          <div className="EmailSignupRegister">
            <Form.Group
              className="mb-3 EmailAddress"
              controlId="formBasicEmail"
            >
              <Form.Label className="EmailTag">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                ref={emailRef}
              />
            </Form.Group>
          </div>
          <Form.Group className="mb-3 Password" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              ref={pwdRef}
            />
          </Form.Group>
          <button className="ForgotPassword">Forgot Password?</button>
          <hr></hr>

          <div className="SubmitContainer">
            <Button
              className="btn btn-info SubmitButton"
              variant="primary"
              type="submit"
              disabled={loading}
            >
              <b>Log In</b>
            </Button>
          </div>

          <Link to="/Register" className="Link">
            <button className="SignUpButton">Sign Up</button>
          </Link>
        </Form>
      </div>
    </>
  );
};

export default Login;
