import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
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
  // const { logout, currentUser } = useAuth()
  const { logout, currentUser } = useAuth();

  return (
    // <Box
    //   borderBottom="2px"
    //   borderBottomColor={useColorModeValue("gray.100", "gray.700")}
    //   mb={4}
    //   py={4}
    // >
    //   <HStack
    //     justifyContent="flex-end"
    //     maxW="container.lg"
    //     mx="auto"
    //     spacing={4}
    //   >
    //     <a
    //       href="/"
    //       style={{ display: "flex", flexDirection: "row", marginLeft: "10px" }}
    //     >
    //       <img src="/images/logo.png" width={50} />
    //       <Title>Capitnest</Title>
    //     </a>
    //     <Spacer />
    //     {!currentUser && <Navlink to="/login" name="Login" />}
    //     {!currentUser && <Navlink to="/register" name="Register" />}
    //     {currentUser && <Navlink to="/profile" name="Profile" />}
    //     {currentUser && (
    //       <Navlink
    //         to="/logout"
    //         name="Logout"
    //         onClick={async (e) => {
    //           e.preventDefault();
    //           await logout();
    //         }}
    //       />
    //     )}
    //     <IconButton
    //       variant="ghost"
    //       icon={useColorModeValue(<FaSun />, <FaMoon />)}
    //       onClick={toggleColorMode}
    //       aria-label="toggle-dark-mode"
    //     />
    //   </HStack>
    // </Box>
    <>
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
            </Nav>
          </Navbarr.Collapse>
          {!currentUser && <Navlink to="/login" name="Login" />}
          {currentUser && <Navlink to="/profile" name="Profile" />}

          <IconButton
            variant="ghost"
            icon={useColorModeValue(<FaMoon />, <FaSun />)}
            onClick={toggleColorMode}
            aria-label="toggle-dark-mode"
          />
        </Container>
      </Navbarr>
      <hr />
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
