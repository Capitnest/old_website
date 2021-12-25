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
    <div>
      <Navbar bg="dark" variant="dark" expand="md">
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/images/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Atomic Coin
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/wallet">Wallet</Nav.Link>
            <Nav.Link href="/market/buy">Buy Coins</Nav.Link>
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
              <Dropdown.Divider />
              <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ) : (
          <Nav.Link href="/login">Login</Nav.Link>
        )}
      </Navbar>
    </div>
  );
}
