import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Alert, InputGroup, FormControl } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { database, auth } from "../firebase";
import styled from "styled-components";
import Navbarr from "../components/Navbar/Navbarr";
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

      <br />

      <div
        style={{
          marginRight: "20%",
          marginLeft: "20%",
          display: "flex",
          justifyContent: "center",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <Nav variant="tabs" defaultActiveKey="/signup/monthly/create-account">
          <Nav.Item>
            <Nav.Link href="/signup/plans">Choose Your Plan</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/signup/monthly/create-account">
              Create a Account
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card>
          <h2 className="text-center mb-4">
            <Title>
              Sign up for <Name>Capitnest</Name>
            </Title>
          </h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>
                <Label>Username</Label>
              </Form.Label>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <FormControl
                  ref={usernameRef}
                  required
                  placeholder="Username"
                  aria-describedby="basic-addon1"
                  style={{
                    backgroundColor: "rgb(240, 244, 248)",
                    color: "rgb(110, 125, 135)",
                    fontSize: "16px",
                    borderLeftWidth: "1px",
                    borderRightWidth: "1px",
                    borderTopWidth: "1px",
                    borderBottomWidth: "1px",
                    borderColor: "rgb(218, 221, 236)",
                    borderStyle: "solid",
                    height: "38px",
                    cursor: "text",
                  }}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group id="email">
              <Form.Label>
                <Label>Email</Label>
              </Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                style={{
                  backgroundColor: "rgb(240, 244, 248)",
                  color: "rgb(110, 125, 135)",
                  fontSize: "16px",
                  borderLeftWidth: "1px",
                  borderRightWidth: "1px",
                  borderTopWidth: "1px",
                  borderBottomWidth: "1px",
                  borderColor: "rgb(218, 221, 236)",
                  borderStyle: "solid",
                  height: "38px",
                  cursor: "text",
                }}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>
                <Label>Password</Label>
              </Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
                style={{
                  backgroundColor: "rgb(240, 244, 248)",
                  color: "rgb(110, 125, 135)",
                  fontSize: "16px",
                  borderLeftWidth: "1px",
                  borderRightWidth: "1px",
                  borderTopWidth: "1px",
                  borderBottomWidth: "1px",
                  borderColor: "rgb(218, 221, 236)",
                  borderStyle: "solid",
                  height: "38px",
                  cursor: "text",
                }}
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>
                <Label>Password Confirmation</Label>
              </Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                required
                style={{
                  backgroundColor: "rgb(240, 244, 248)",
                  color: "rgb(110, 125, 135)",
                  fontSize: "16px",
                  borderLeftWidth: "1px",
                  borderRightWidth: "1px",
                  borderTopWidth: "1px",
                  borderBottomWidth: "1px",
                  borderColor: "rgb(218, 221, 236)",
                  borderStyle: "solid",
                  height: "38px",
                  cursor: "text",
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>
                <Label>Captcha</Label>
              </Form.Label>
              <div className="form-group">
                <div className="col mt-3">
                  <LoadCanvasTemplate />
                </div>

                <Form.Control
                  ref={captcha}
                  required
                  style={{
                    backgroundColor: "rgb(240, 244, 248)",
                    color: "rgb(110, 125, 135)",
                    fontSize: "16px",
                    borderLeftWidth: "1px",
                    borderRightWidth: "1px",
                    borderTopWidth: "1px",
                    borderBottomWidth: "1px",
                    borderColor: "rgb(218, 221, 236)",
                    borderStyle: "solid",
                    height: "38px",
                    cursor: "text",
                  }}
                />
              </div>
            </Form.Group>

            <Button
              disabled={loading}
              className="w-100"
              type="submit"
              style={{
                backgroundColor: "#04d192",
                borderColor: "#04d192",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Let's get started
            </Button>
          </Form>

          <Terms>
            By signing up, you agree to our{" "}
            <a href="/terms-of-service">terms of service</a>.
          </Terms>

          <Line />

          <Login>
            Already have an account? <Link to="/login">Log In</Link>
          </Login>
        </Card>
      </div>
    </>
  );
}

const Card = styled.div`
  border-radius: 5px;
  padding: 20px 20px 20px;
  border-color: gray;

  margin-top: 0;
  margin-right: 10%;
  margin-left: 10%;
  width: 400px;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: rgb(160, 174, 192);
`;

const Label = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgb(73, 84, 90);
`;

const Line = styled.hr`
  color: rgb(73, 84, 90);
`;

const Terms = styled.div`
  color: rgb(160, 174, 192);
  font-size: 16px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  margin-top: 10px;

  a {
    color: rgb(86, 97, 179);
  }
`;

const Login = styled.div`
  text-align: center;
  color: rgb(74, 85, 104);
  font-size: 16px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  margin-top: 10px;

  a {
    color: rgb(86, 97, 179);
  }
`;

const Name = styled.div`
  color: #04d192;
`;
