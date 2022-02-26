import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  DarkMode,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import Navlink from "./Navlink";
import styled from "styled-components";
import {
  Navbar as Navbarr,
  Nav,
  Dropdown,
  Button,
  ButtonGroup,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { CgProfile } from "react-icons/cg";

export function Navbar() {
  const { toggleColorMode } = useColorMode();
  const [theme, setTheme] = useState("dark");
  // const { logout, currentUser } = useAuth()
  const { logout, currentUser } = useAuth();

  const handleTheme = () => {
    if (theme == "dark") {
      setTheme("white");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <div
        style={{
          // backgroundColor: (() => {
          //   if (theme == "dark") {
          //     return "rgb(26, 32, 44)";
          //   } else {
          //     return "rgb(255, 255, 255)";
          //   }
          // })(),
          // position: "fixed",
          // top: 0,
          // left: 0,
          // zIndex: 999,
          // width: "100%",
          boxShadow: "0 2px 2px -2px gray",
          backgroundColor: "-moz-initial",
        }}
      >
        <Navbarr expand="md">
          <Container>
            <Navbarr.Brand href="/">
              <div style={{ display: "flex" }}>
                <img
                  alt="Capitnest Logo"
                  src="/images/logo.png"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />
                <Title>Capitnest</Title>
              </div>
            </Navbarr.Brand>
            <Navbarr.Toggle aria-controls="basic-navbar-nav" />
            <Navbarr.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Navlink to="/news" name="News" />
                <Navlink to="/feeds" name="Feeds" />
                <Navlink to="/nfts" name="NFTs" />
              </Nav>
            </Navbarr.Collapse>
            {!currentUser && <Navlink to="/login" name="Login" />}
            {currentUser && <Navlink to="/profile" name="Profile" />}

            <IconButton
              variant="ghost"
              icon={useColorModeValue(<FaMoon />, <FaSun />)}
              onClick={() => {
                toggleColorMode();
                handleTheme();
              }}
              aria-label="toggle-dark-mode"
            />
          </Container>
        </Navbarr>
      </div>
    </>
  );
}

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

const paragrap = styled.p`
  font-family: "Inter", sans-serif;

  font-size: 28px;
  font-weight: 600;
  margin-left: 10px;
`;
