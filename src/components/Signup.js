import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Alert, InputGroup, FormControl } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { database, auth } from "../firebase";
import styled from "styled-components";
import Navbarr from "./Navbar/Navbarr";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const captcha = useRef("");

  async function handleSubmit(e) {
    e.preventDefault();

    //checks if the captcha is correct
    if (validateCaptcha(captcha.current.value) === true) {
      loadCaptchaEnginge(6);
      setError("");
    } else {
      return setError("Incorrect Captcha!");
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    } else if (passwordRef.current.value.length < 8) {
      return setError("Password must be longer than 8 characters");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);

      database.ref("users/" + auth.currentUser.uid).set({
        username: usernameRef.current.value,
        email: emailRef.current.value,
        balance: 0,
      });

      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  useEffect(() => {
    loadCaptchaEnginge(6);
  });

  return (
    <>
      <Navbarr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                ref={usernameRef}
                required
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Form.Group>
              <Form.Label>Captcha</Form.Label>
              <div className="form-group">
                <div className="col mt-3">
                  <LoadCanvasTemplate />
                </div>

                <Form.Control ref={captcha} required />
              </div>
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>

          <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/login">Log In</Link>
          </div>
        </Card>
      </div>
    </>
  );
}

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 20px 20px;
  border-color: gray;
  background-color: rgba(26, 26, 94);
  color: white;
  margin-top: 10%;
  margin-right: 10%;
  margin-left: 10%;
  width: 400px;
`;
