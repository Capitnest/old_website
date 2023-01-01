import React, { useRef, useEffect, useState } from "react";

import Navlink from "./../Navlink";
import { useAuth } from "./../../contexts/AuthContext";
import { auth } from "./../../utils/init-firebase";

import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FaGripLinesVertical, FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";

import {
  twitter,
  instagram,
  version,
  telegram,
  github,
  trustpilot,
} from "../../utils/information";

import styled from "styled-components";
import {
  Box,
  HStack,
  Input,
  IconButton,
  Spacer,
  useColorMode,
  useColorModeValue,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Show,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Hide,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscGlobe } from "react-icons/vsc";
import { RiBookMarkFill } from "react-icons/ri";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { RestoreIcon, FavoriteIcon, LocationOnIcon } from "@material-ui/icons";
import { GiArchiveResearch, GiUpgrade } from "react-icons/gi";
import { AiOutlineAreaChart, AiOutlineTeam } from "react-icons/ai";
import { FaTwitter, FaTelegram, FaInstagram, FaGithub } from "react-icons/fa";
import { SiTrustpilot } from "react-icons/si";
import axios from "axios";

import { db } from "./../../utils/init-firebase";
import { ref, onValue, get, child, getDatabase } from "firebase/database";

import { api } from "./../../utils/capitnest";

export default function Mobile() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { logout, currentUser } = useAuth();

  const [plan, setPlan] = useState("");

  useEffect(() => {
    if (currentUser) {
      axios
        .get(
          `https://timnik.pythonanywhere.com/get-plan?uid=${currentUser.uid}`
        )
        .then((response) => {
          setPlan(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [currentUser]);

  function signOut() {
    return auth.signOut();
  }

  return (
    <Content
      style={{
        backgroundColor: (() => {
          if (colorMode === "light") {
            return "rgb(255, 255, 255)";
          } else {
            return "rgb(26, 32, 44)";
          }
        })(),
      }}
    >
      <LeftSide>
        <Link to="/">
          <Logo>
            <img
              alt="Capitnest Logo"
              src="/images/logo.png"
              width="40"
              className="d-inline-block align-top"
            />
            <Title>Capitnest</Title>
          </Logo>
        </Link>
      </LeftSide>

      <RightSide>
        {/* <button
          style={{ borderWidth: "0px", marginRight: "9px" }}
          onClick={() => {
            toggleColorMode();
          }}
        >
          {useColorModeValue(
            <FaMoon size={25} color="#F6AD55" />,
            <BsFillSunFill size={27} color="#F6AD55" />
          )}
        </button> */}

        <IconButton
          ref={btnRef}
          onClick={onOpen}
          marginTop="10px"
          colorScheme="outline"
          icon={
            <HamburgerIcon
              w={8}
              h={8}
              color={() => {
                if (colorMode === "light") {
                  return "black";
                } else {
                  return "white";
                }
              }}
            />
          }
        />

        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent
            backgroundColor={() => {
              if (colorMode === "light") {
                return "white";
              } else {
                return "rgb(26, 32, 44)";
              }
            }}
          >
            <DrawerCloseButton />
            <DrawerHeader>
              <Link to="/">
                <LogoMenu>
                  <img
                    alt="Capitnest Logo"
                    src="/images/logo.png"
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                  />
                  <h1>Capitnest</h1>
                </LogoMenu>
              </Link>
            </DrawerHeader>

            <hr style={{ marginTop: "-4px" }} />

            {!currentUser && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "4px",
                  marginBottom: "4px",
                }}
              >
                <a href="/login" style={{ marginRight: "2px" }}>
                  <Button
                    borderRadius="5px"
                    width="150px"
                    size="md"
                    fontSize="15px"
                    fontFamily='"Inter", sans-serif'
                  >
                    Log In
                  </Button>
                </a>
                <a href="/register" style={{ marginLeft: "2px" }}>
                  <Button
                    borderRadius="5px"
                    size="md"
                    width="150px"
                    fontSize="15px"
                    fontFamily='"Inter", sans-serif'
                    colorScheme="green"
                    fontWeight="600"
                  >
                    Register
                  </Button>
                </a>
              </div>
            )}

            {currentUser && (
              <>
                <Link to="/profile" style={{ color: "inherit" }}>
                  <div
                    style={{
                      padding: "15px",
                      display: "flex",
                      marginLeft: "20px",
                      justifyContent: "left",
                    }}
                  >
                    <CgProfile
                      size={40}
                      style={{ marginTop: "5px", marginRight: "10px" }}
                      color={colorMode === "dark" ? "white" : "black"}
                    />
                    <div>
                      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {currentUser.displayName}
                      </p>
                      <p style={{ textTransform: "capitalize" }}>
                        Plan: {plan}
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            )}

            <PagesMenu>
              <hr />

              {currentUser !== null && plan === "pro" ? (
                <></>
              ) : (
                <>
                  {" "}
                  <p>
                    {" "}
                    <Link
                      to="/pricing"
                      style={{
                        display: "flex",
                      }}
                    >
                      <GiUpgrade
                        size={20}
                        style={{ marginRight: "4px", marginTop: "2px" }}
                        color="#04d192"
                      />
                      Become a{" "}
                      <span
                        style={{
                          color: "#04d192",
                          fontWeight: "bold",
                          marginLeft: "4px",
                          marginRight: "4px",
                        }}
                      >
                        PRO
                      </span>{" "}
                      User
                    </Link>
                  </p>
                </>
              )}

              <hr />

              <p>
                {" "}
                <Link
                  to="/feeds"
                  style={{
                    display: "flex",
                  }}
                >
                  <VscGlobe
                    size={20}
                    style={{ marginRight: "4px", marginTop: "2px" }}
                  />
                  Feeds
                </Link>
              </p>
              <hr />

              <p>
                {" "}
                <Link
                  to="/markets"
                  style={{
                    display: "flex",
                  }}
                >
                  <AiOutlineAreaChart
                    size={20}
                    style={{ marginRight: "4px", marginTop: "2px" }}
                  />
                  Markets
                </Link>
              </p>
              <hr />

              <p>
                {" "}
                <Link
                  to="/insights"
                  style={{
                    display: "flex",
                  }}
                >
                  <RiBookMarkFill
                    size={20}
                    style={{ marginRight: "4px", marginTop: "2px" }}
                  />
                  Insights
                </Link>
              </p>
              <hr />

              <p>
                {" "}
                <Link
                  to="/research"
                  style={{
                    display: "flex",
                  }}
                >
                  <GiArchiveResearch
                    size={20}
                    style={{ marginRight: "4px", marginTop: "2px" }}
                  />
                  Research
                </Link>
              </p>
            </PagesMenu>

            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton marginLeft="20px">
                    <AiOutlineTeam size={20} style={{ marginRight: "4px" }} />
                    Company
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} marginLeft="20px">
                  <Link to="/team" style={{ color: "inherit" }}>
                    <p style={{ fontSize: "14px" }}>Our Team</p>
                  </Link>
                  <Link to="/advertise" style={{ color: "inherit" }}>
                    <p style={{ fontSize: "14px" }}>Advertise</p>
                  </Link>
                  <Link to="/manifesto" style={{ color: "inherit" }}>
                    <p style={{ fontSize: "14px" }}>Manifesto</p>
                  </Link>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <DrawerBody>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <a href={twitter} target="_blank" style={{ color: "inherit" }}>
                  <IconButton
                    borderRadius="50%"
                    borderWidth="1px"
                    icon={<FaTwitter size={22} />}
                  />
                </a>
                <a href={telegram} target="_blank" style={{ color: "inherit" }}>
                  <IconButton
                    borderRadius="50%"
                    borderWidth="1px"
                    icon={<FaTelegram size={22} />}
                  />
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <IconButton
                    borderRadius="50%"
                    borderWidth="1px"
                    icon={<FaInstagram size={22} />}
                  />
                </a>
                <a href={github} target="_blank" style={{ color: "inherit" }}>
                  <IconButton
                    borderRadius="50%"
                    borderWidth="1px"
                    icon={<FaGithub size={22} />}
                  />
                </a>
                <a
                  href={trustpilot}
                  target="_blank"
                  style={{ color: "inherit" }}
                >
                  <IconButton
                    borderRadius="50%"
                    borderWidth="1px"
                    icon={<SiTrustpilot size={22} />}
                  />
                </a>
              </div>

              <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Link
                  to="/terms.txt"
                  style={{ color: "inherit", fontSize: "12px" }}
                >
                  Terms & Conditions
                </Link>{" "}
                •{" "}
                <Link
                  to="/privacy.txt"
                  style={{ color: "inherit", fontSize: "12px" }}
                >
                  Privacy Policy
                </Link>
              </p>

              <hr />

              <p style={{ marginTop: "20px", fontSize: "12px" }}>
                ©2022 Capitnest.com | All rights reserved.
              </p>
            </DrawerBody>

            <DrawerFooter
              fontSize="12px"
              fontFamily="'Inter', sans-serif"
              textAlign="center"
            >
              v1.38.2
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </RightSide>
    </Content>
  );
}

const PagesMenu = styled.div`
  p {
    display: flex;
    margin-left: 30px;
    padding: 5px;
    font-size: 16px;
    font-family: "Inter", sans-serif;

    a {
      color: inherit;

      &:hover {
        color: inherit;
      }
    }
  }
`;

const LogoMenu = styled.div`
  display: flex;

  img {
    transition: transform 0.5s ease-in-out;

    &:hover {
      transform: rotate(120deg);
    }
  }

  h1 {
    font-family: "Inter", sans-serif;

    font-size: 24px;
    font-weight: 600;
    color: #04d192;
    margin-left: 10px;
    margin-top: 3px;

    &:hover {
      color: #04b681;
    }
  }
`;

const Pages = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 20px;
`;

const Content = styled.div`
  padding-left: 100px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 2px 2px -2px gray;

  @media (max-width: 1300px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 1250px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const VerticalLine = styled.div`
  border-right: 1.5px solid;
  margin-right: 8px;
  margin-top: 9px;
  height: 41px;
`;

const LeftSide = styled.div`
  display: flex;
`;

const RightSide = styled.div`
  display: flex;
  a {
    color: inherit;
    &:hover {
      color: inherit;
    }
  }

  span {
    border-left: 1px;
  }
`;

const Logo = styled.div`
  display: flex;
  padding: 10px;
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

  @media (max-width: 350px) {
    font-size: 24px;
    margin-top: 6px;
  }

  @media (max-width: 310px) {
    font-size: 18px;
    margin-top: 7px;
  }
`;
