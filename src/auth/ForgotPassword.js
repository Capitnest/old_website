import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Navbarr from "../components/Navbar/Navbarr";
import Footer from "../components/Footer/Footer";

export default function ForgotPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <Navbarr />

      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card>
          <>
            <h2 className="text-center mb-4">
              <Title>Password Reset</Title>
            </h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
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
                <ButtonDesign>Reset Password</ButtonDesign>
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/login">
                <Login>Login</Login>
              </Link>
            </div>
          </>
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

const Login = styled.div`
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
