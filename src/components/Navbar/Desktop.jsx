import React, { useState } from "react";

import Navlink from "./../Navlink";
import { useAuth } from "./../../contexts/AuthContext";
import { auth } from "./../../utils/init-firebase";

import { Link } from "react-router-dom";

import { CgProfile } from "react-icons/cg";
import { FaMoon, FaChartPie } from "react-icons/fa";
import { BsFillSunFill, BsCurrencyExchange } from "react-icons/bs";
import { MdArticle, MdOndemandVideo } from "react-icons/md";
import { AiOutlineAreaChart } from "react-icons/ai";

import Dropdown from "react-bootstrap/Dropdown";

import styled from "styled-components";
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

export default function Desktop() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout, currentUser } = useAuth();

  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(true);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const [showw, setShoww] = useState(false);
  const showDropdownn = (e) => {
    setShoww(true);
  };
  const hideDropdownn = (e) => {
    setShoww(false);
  };

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

        <Pages>
          <Link to="/feeds">
            <Navlink to="/feeds" name="Feed" />
          </Link>

          <div
            style={{ display: "flex", flexDirection: "column" }}
            onMouseEnter={showDropdownn}
            onMouseLeave={hideDropdownn}
          >
            <Link to="/markets">
              <Navlink to="/markets" name="Markets" activated={showw} />
            </Link>

            <Dropdown show={showw}>
              <div style={{ height: "3px" }} />

              <Dropdown.Menu
                style={{
                  backgroundColor: (() => {
                    if (colorMode === "light") {
                      return "rgb(255, 255, 255)";
                    } else {
                      return "rgb(26, 32, 44)";
                    }
                  })(),
                  color: (() => {
                    if (colorMode === "light") {
                      return "black";
                    } else {
                      return "white";
                    }
                  })(),
                  borderColor: (() => {
                    if (colorMode === "light") {
                      return "black";
                    } else {
                      return "white";
                    }
                  })(),
                  borderWidth: "1px",
                  borderColor: "#04b681",
                  width: "410px",
                }}
              >
                <DropdownContent>
                  <Link to="/markets">
                    <div>
                      <DropdownIcon>
                        <AiOutlineAreaChart
                          size={30}
                          color="white"
                          style={{ marginLeft: "10px", marginTop: "10px" }}
                        />
                      </DropdownIcon>
                      <span>
                        <h1>Markets</h1>
                        <p>Track & analyze any cryptocurrency.</p>
                      </span>
                    </div>
                  </Link>
                  <Link to="/exchanges">
                    <div>
                      <DropdownIcon>
                        <BsCurrencyExchange
                          size={30}
                          color="white"
                          style={{ marginLeft: "10px", marginTop: "10px" }}
                        />
                      </DropdownIcon>
                      <span>
                        <h1>Exchanges</h1>
                        <p>Data about the top crypto exchanges.</p>
                      </span>
                    </div>
                  </Link>
                  <Link to="/indexes">
                    <div>
                      <DropdownIcon>
                        <FaChartPie
                          size={30}
                          color="white"
                          style={{ marginLeft: "10px", marginTop: "10px" }}
                        />
                      </DropdownIcon>
                      <span>
                        <h1>Indexes</h1>
                        <p>The top indexes of cryptocurrencies.</p>
                      </span>
                    </div>
                  </Link>
                </DropdownContent>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column" }}
            onMouseEnter={showDropdown}
            onMouseLeave={hideDropdown}
          >
            <Link to="/learn/explore">
              <Navlink to="/learn/explore" name="Learn" activated={show} />
            </Link>

            <Dropdown show={show}>
              <div style={{ height: "3px" }} />

              <Dropdown.Menu
                style={{
                  backgroundColor: (() => {
                    if (colorMode === "light") {
                      return "rgb(255, 255, 255)";
                    } else {
                      return "rgb(26, 32, 44)";
                    }
                  })(),
                  color: (() => {
                    if (colorMode === "light") {
                      return "black";
                    } else {
                      return "white";
                    }
                  })(),
                  borderColor: (() => {
                    if (colorMode === "light") {
                      return "black";
                    } else {
                      return "white";
                    }
                  })(),
                  borderWidth: "1px",
                  borderColor: "#04b681",
                  width: "410px",
                }}
              >
                <DropdownContent>
                  <Link to="/learn/articles">
                    <div>
                      <DropdownIcon>
                        <MdArticle
                          size={30}
                          color="white"
                          style={{ marginLeft: "10px", marginTop: "10px" }}
                        />
                      </DropdownIcon>
                      <span>
                        <h1>Articles & Tutorials</h1>
                        <p>Learn everything about crypto.</p>
                      </span>
                    </div>
                  </Link>
                  <Link to="/learn/videos">
                    <div>
                      <DropdownIcon>
                        <MdOndemandVideo
                          size={30}
                          color="white"
                          style={{ marginLeft: "10px", marginTop: "10px" }}
                        />
                      </DropdownIcon>
                      <span>
                        <h1>Videos</h1>
                        <p>Advanced strategies & analytics in video format.</p>
                      </span>
                    </div>
                  </Link>
                </DropdownContent>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <Link to="/research">
            <Navlink to="/research" name="Research" />
          </Link>
          <Link to="/pricing">
            <Navlink to="/pricing" name="Pricing" />
          </Link>
        </Pages>
      </LeftSide>

      <RightSide>
        <button
          style={{ borderWidth: "0px", marginRight: "9px" }}
          onClick={() => {
            toggleColorMode();
          }}
        >
          {useColorModeValue(
            <FaMoon size={25} color="#F6AD55" />,
            <BsFillSunFill size={27} color="#F6AD55" />
          )}
        </button>

        <VerticalLine
          style={{
            borderColor: (() => {
              if (colorMode === "light") {
                return "rgba(0, 0, 0, 0.24)";
              } else {
                return "rgba(255, 255, 255, 0.24)";
              }
            })(),
          }}
        />
        {!currentUser && (
          <div style={{ marginTop: "9px", marginLeft: "8px" }}>
            <a href="/login" style={{ marginRight: "5px" }}>
              <Button
                borderRadius="5px"
                size="md"
                fontSize="15px"
                fontFamily='"Inter", sans-serif'
              >
                Log In
              </Button>
            </a>
            <a href="/register">
              <Button
                borderRadius="5px"
                size="md"
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
              <Link to="/profile" style={{ color: "inherit" }}>
                <MenuItem>⚙️ Settings</MenuItem>
              </Link>

              <MenuDivider />
              <MenuItem color="danger">
                <Button onClick={signOut} variant="link" colorScheme="red">
                  👋 Sign Out
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </RightSide>
    </Content>
  );
}

const Pages = styled.div`
  display: flex;
  margin-top: 15px;
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

const DropdownContent = styled.div`
  margin: 10px;
  margin-top: 0px;
  margin-bottom: -5px;
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    margin-bottom: 5px;

    &:hover {
      color: #04b681;
    }

    span {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }

    h1 {
      font-size: 18px;
      font-weight: 600;
      margin-top: 5px;
    }
  }
`;

const DropdownIcon = styled.div`
  background-color: #04b681;
  border-radius: 50%;
  height: 50px;
  width: 50px;
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
