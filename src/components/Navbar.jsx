import {
  Box,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Button,
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

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  // const { logout, currentUser } = useAuth()
  const { logout, currentUser } = useAuth();

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
                <Navlink to="/feeds" name="Feed" />
                <Navlink to="/markets" name="Markets" />
                <Navlink to="/news" name="News" />

                <Navlink to="/nfts" name="NFTs" />
              </Nav>
              <Spacer />
              <Spacer />
              <Spacer />
              {!currentUser && (
                <a href="/register">
                  <Button
                    borderRadius="44px"
                    size="md"
                    fontSize="15px"
                    fontFamily='"Inter", sans-serif'
                    colorScheme="teal"
                  >
                    Sign in / Register
                  </Button>
                </a>
              )}
              {currentUser && (
                <a href="/profile">
                  <IconButton variant="ghost" icon={<CgProfile size={25} />} />
                </a>
              )}
            </Navbarr.Collapse>

            <IconButton
              variant="ghost"
              marginLeft="10px"
              icon={useColorModeValue(<FaMoon />, <FaSun />)}
              onClick={() => {
                toggleColorMode();
              }}
              aria-label="toggle-dark-mode"
            />
          </Container>
        </Navbarr>
      </div>
    </>
  );
}

const Link = styled.h1`
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
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

const paragrap = styled.p`
  font-family: "Inter", sans-serif;

  font-size: 28px;
  font-weight: 600;
  margin-left: 10px;
`;
