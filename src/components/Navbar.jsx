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
