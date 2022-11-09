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
  Show,
  Hide,
} from "@chakra-ui/react";
import { AiOutlineAreaChart } from "react-icons/ai";
import React, { useState, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import Navlink from "./Navlink";
import styled from "styled-components";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { auth } from "../utils/init-firebase";
import {
  Navbar as Navbarr,
  Nav,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { Link, useHistory } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscGlobe } from "react-icons/vsc";
import { RiBookMarkFill } from "react-icons/ri";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { RestoreIcon, FavoriteIcon, LocationOnIcon } from "@material-ui/icons";
import { GiArchiveResearch } from "react-icons/gi";

import Desktop from "./Navbar/Desktop";
import Mobile from "./Navbar/Mobile";

export function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const history = useHistory();

  // const { logout, currentUser } = useAuth()
  const { logout, currentUser } = useAuth();

  function signOut() {
    return auth.signOut();
  }

  return (
    <>
      <Hide breakpoint="(max-width: 920px)">
        <Desktop />
      </Hide>
      <Show breakpoint="(max-width: 920px)">
        <Mobile />
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
          <div
            style={{
              position: "fixed",
              top: "auto",
              bottom: "0",
              width: "100%",
              boxShadow: "0 2px 2px -2px gray",
            }}
          >
            <hr style={{ height: "2px" }} />
            {colorMode === "dark" ? (
              <BottomNavigation
                showLabels
                style={{ backgroundColor: "rgb(26, 32, 44)", color: "white" }}
              >
                <BottomNavigationAction
                  onClick={() => {
                    history.push(`/feeds`);
                  }}
                  label={
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Feeds
                    </p>
                  }
                  icon={<VscGlobe size={30} color="white" />}
                />
                <BottomNavigationAction
                  onClick={() => {
                    history.push(`/markets`);
                  }}
                  label={
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Markets
                    </p>
                  }
                  icon={<AiOutlineAreaChart size={30} color="white" />}
                />
                <BottomNavigationAction
                  onClick={() => {
                    history.push(`/learn`);
                  }}
                  label={
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Learn
                    </p>
                  }
                  icon={<RiBookMarkFill size={30} color="white" />}
                />
                <BottomNavigationAction
                  onClick={() => {
                    history.push(`/research`);
                  }}
                  label={
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "white",
                      }}
                    >
                      Research
                    </p>
                  }
                  icon={<GiArchiveResearch size={30} color="white" />}
                />
              </BottomNavigation>
            ) : (
              <BottomNavigation showLabels style={{}}>
                <BottomNavigationAction
                  onClick={() => {
                    history.push(`/feeds`);
                  }}
                  label={
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      Feeds
                    </p>
                  }
                  icon={<VscGlobe size={30} color="black" />}
                />
                <BottomNavigationAction
                  onClick={() => {
                    history.push(`/markets`);
                  }}
                  label={
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      Markets
                    </p>
                  }
                  icon={<AiOutlineAreaChart size={30} color="black" />}
                />
                <BottomNavigationAction
                  onClick={() => {
                    history.push(`/learn`);
                  }}
                  label={
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      Learn
                    </p>
                  }
                  icon={<RiBookMarkFill size={30} color="black" />}
                />

                <BottomNavigationAction
                  onClick={() => {
                    history.push(`/research`);
                  }}
                  label={
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "black",
                      }}
                    >
                      Research
                    </p>
                  }
                  icon={<GiArchiveResearch size={30} color="black" />}
                />
              </BottomNavigation>
            )}
          </div>
        </div>
      </Show>
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

  @media (max-width: 350px) {
    font-size: 24px;
    margin-top: 6px;
  }

  @media (max-width: 310px) {
    font-size: 18px;
    margin-top: 7px;
  }
`;
