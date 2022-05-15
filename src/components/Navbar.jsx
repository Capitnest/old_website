import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import Navlink from "./Navlink";
import styled from "styled-components";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { auth } from "../utils/init-firebase";
import { Navbar as Navbarr, Nav, Container } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  // const { logout, currentUser } = useAuth()
  const { logout, currentUser } = useAuth();

  function signOut() {
    return auth.signOut();
  }

  return (
    <>
      <div
        style={{
          backgroundColor: (() => {
            if (colorMode === "light") {
              return "rgb(255, 255, 255)";
            } else {
              return "rgb(26, 32, 44)";
            }
          })(),
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 999,
          width: "100%",
          boxShadow: "0 2px 2px -2px gray",
        }}
      >
        <Navbarr expand="md" variant={colorMode === "dark" ? "dark" : "light"}>
          <Container>
            <Navbarr.Brand>
              <Link to="/">
                <div style={{ display: "flex" }}>
                  <img
                    alt="Capitnest Logo"
                    src="/images/logo.png"
                    width="40"
                    className="d-inline-block align-top"
                  />
                  <Title>Capitnest</Title>
                </div>
              </Link>
            </Navbarr.Brand>

            <Navbarr.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/feeds">
                  <Navlink to="/feeds" name="Feed" />
                </Link>
                <Link to="/markets">
                  <Navlink to="/markets" name="Markets" />
                </Link>

                <a href="/news">
                  <Navlink to="/news" name="News" />
                </a>
              </Nav>

              {!currentUser && (
                <a href="/register">
                  <Button
                    borderRadius="44px"
                    size="md"
                    fontSize="15px"
                    fontFamily='"Inter", sans-serif'
                    colorScheme="green"
                  >
                    Sign in / Register
                  </Button>
                </a>
              )}
              {currentUser && (
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={
                      <CgProfile
                        size={25}
                        color={colorMode === "dark" ? "white" : "black"}
                      />
                    }
                    variant="link"
                  />
                  <MenuList>
                    <MenuItem>
                      <Link to="/" style={{ color: "inherit" }}>
                        Dashboard
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/profile" style={{ color: "inherit" }}>
                        Settings
                      </Link>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem color="danger">
                      <Button
                        onClick={signOut}
                        variant="link"
                        colorScheme="red"
                      >
                        👋 Sign Out
                      </Button>
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Navbarr.Collapse>

            <ThemeIconColapse>
              <IconButton
                variant="ghost"
                marginLeft="10px"
                icon={useColorModeValue(<FaMoon />, <FaSun />)}
                onClick={() => {
                  toggleColorMode();
                }}
                aria-label="toggle-dark-mode"
              />
            </ThemeIconColapse>
            <Navbarr.Toggle aria-controls="basic-navbar-nav">
              {colorMode === "dark" ? (
                <GiHamburgerMenu size={25} color="white" />
              ) : (
                <GiHamburgerMenu size={25} color="black" />
              )}
            </Navbarr.Toggle>
          </Container>
        </Navbarr>
      </div>
    </>
  );
}

/*
Make the theme IconButton be on the left side next to the 
menu button, idk how to make it fixed so I am basically moving it
to the left manually
*/
const ThemeIconColapse = styled.div`
  @media (max-width: 767px) {
    margin-left: 37%;
    display: flex;
    justify-content: right;
  }

  @media (max-width: 541px) {
    margin-left: 30%;
  }

  @media (max-width: 500px) {
    margin-left: 25%;
  }

  @media (max-width: 450px) {
    margin-left: 20%;
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
