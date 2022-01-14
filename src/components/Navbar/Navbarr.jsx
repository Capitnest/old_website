import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Dropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { auth, database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import styled from "styled-components";

export default function Navbarr() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const [username, setUsername] = useState("loading...");

  useEffect(() => {
    if (auth.currentUser !== null) {
      database
        .ref("users/" + auth.currentUser.uid + "/username")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setUsername(data);
        });
    }
  }, []);

  async function handleLogout() {
    setError("");

    try {
      await logout();
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Content>
      <Navbar background="white" variant="white" expand="md">
        <Navbar.Brand href="/">
          <div style={{ display: "flex" }}>
            <img
              alt=""
              src="/images/logo.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            <Title>Capitnest</Title>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/wallet">Wallet</Nav.Link>
            <Nav.Link href="/market/buy">Deposit</Nav.Link>
            <Nav.Link href="/send-coins">Send Money</Nav.Link>
            <Nav.Link href="https://capitnestswap.web.app">SOL Swap</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {auth.currentUser ? (
          <Dropdown as={ButtonGroup}>
            <Button href="/dashboard" variant="success">
              {username}
            </Button>

            <Dropdown.Toggle
              split
              variant="success"
              id="dropdown-split-basic"
            />

            <Dropdown.Menu>
              <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="/wallet">Wallet</Dropdown.Item>
              <Dropdown.Item href="/send-coins">Send Coins</Dropdown.Item>
              <Dropdown.Item
                href="https://github.com/nottimnik/startup"
                target="_blank"
              >
                Open Source
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Nav.Link href="/login">
            <LoginButton>Login</LoginButton>
          </Nav.Link>
        )}
      </Navbar>
    </Content>
  );
}

const Content = styled.div`
  color: white;
  text-decoration: none;

  a {
    text-decoration: none;

    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: rgb(73, 84, 90);

    &:hover {
      color: black;
    }
  }
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;

  font-size: 28px;
  font-weight: 600;
  color: #04d192;
  margin-left: 10px;
  margin-top: 4px;

  &:hover {
    color: #04b681;
  }
`;

const LoginButton = styled.button`
  background-color: #04d192;
  font-size: 16px;
  font-weight: 500;
  font-family: "Inter", sans-serif;
  color: white;
  padding: 4px 20px;
  border-radius: 12px;

  &:hover {
    background-color: #03c78c;
  }
`;
