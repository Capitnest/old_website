import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navbarr from "../components/Navbar/Navbarr";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
      <Navbarr />

      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card>
          <Title>Log In</Title>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
              <ButtonDesign>Log In</ButtonDesign>
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">
              <ForgotPassword>Forgot Password?</ForgotPassword>
            </Link>
          </div>
        </Card>
      </div>
      <div className="w-100 text-center mt-2">
        <SignUp>
          Need an account? <Link to="/signup/plans">Sign Up</Link>
        </SignUp>
      </div>

      <br />
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}

const Title = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  font-family: "Inter", sans-serif;
  color: rgb(160, 174, 192);
`;

const Card = styled.div`
  border-radius: 5px;
  padding: 20px 20px 20px;
  border-color: gray;

  margin-top: 0;
  width: 400px;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 20%;
  margin-left: 20%;
`;

const Label = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: rgb(73, 84, 90);
`;

const ButtonDesign = styled.div`
  &:hover {
    color: black;
  }
`;

const ForgotPassword = styled.div`
  font-size: 16px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  margin-top: 10px;
  color: rgb(86, 97, 179);
`;

const SignUp = styled.div`
  color: rgb(160, 174, 192);
  font-size: 16px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  margin-top: 10px;

  a {
    color: rgb(86, 97, 179);
  }
`;
