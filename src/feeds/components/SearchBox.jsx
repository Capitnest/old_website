import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  useToast,
  MenuDivider,
} from "@chakra-ui/react";
import { CloseIcon, Search2Icon, ChevronDownIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export function SearchBar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { logout, currentUser } = useAuth();
  const toast = useToast();

  return (
    <Content>
      <div style={{ height: "24px" }}></div>
      <Form>
        <form
          onSubmit={props.formSubmit}
          style={{
            backgroundColor: () => {
              if (colorMode === "dark") {
                return "black";
              } else {
                return "white";
              }
            },
          }}
        >
          <InputGroup
            style={{
              backgroundColor: (() => {
                if (colorMode === "light") {
                  return "rgb(255, 255, 255)";
                } else {
                  return "#1f2434";
                }
              })(),
            }}
          >
            <InputLeftElement>
              <button>
                <Search2Icon />
              </button>
            </InputLeftElement>

            <Input
              variant="filled"
              type="text"
              placeholder="Search on Capitnest"
              value={props.value}
              onChange={props.handleSearchKey}
            />

            <InputRightElement>
              {props.value && (
                <button onClick={props.clearSearch}>
                  <CloseIcon />
                </button>
              )}
            </InputRightElement>
          </InputGroup>
        </form>
        <Coins>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              {props.coin === null ? (
                <>All Coins</>
              ) : (
                <img
                  src={`/images/icons/${props.coin}.png`}
                  style={{ height: "30px", width: "30px", marginRight: "30px" }}
                />
              )}
            </MenuButton>
            <MenuList>
              {props.coin === null ? (
                <></>
              ) : (
                <Link to="/feeds">
                  <MenuItem>All Coins</MenuItem>
                </Link>
              )}
              <Link to="/feeds/bitcoin">
                <MenuItem>
                  <img
                    src="/images/icons/bitcoin.png"
                    style={{
                      height: "25px",
                      width: "25px",
                      marginRight: "5px",
                    }}
                  />
                  Bitcoin
                </MenuItem>
              </Link>
              <Link to="/feeds/ethereum">
                <MenuItem>
                  <img
                    src="/images/icons/ethereum.png"
                    style={{
                      height: "25px",
                      width: "25px",
                      marginRight: "5px",
                    }}
                  />
                  Ethereum
                </MenuItem>
              </Link>
              <Link to="/feeds/solana">
                <MenuItem>
                  <img
                    src="/images/icons/solana.png"
                    style={{
                      height: "25px",
                      width: "25px",
                      marginRight: "5px",
                    }}
                  />
                  Solana
                </MenuItem>
              </Link>
              <Link to="/feeds/cardano">
                <MenuItem>
                  <img
                    src="/images/icons/cardano.png"
                    style={{
                      height: "25px",
                      width: "25px",
                      marginRight: "5px",
                    }}
                  />
                  Cardano
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Coins>
      </Form>
      <Options>
        {props.plan === "pro" && !props.loggedIn ? (
          <>
            <TimeStamp to={`/feeds/${props.path}/trending`} name="Trending" />
            <TimeStamp to={`/feeds/${props.path}/1`} name="1d" />
            <TimeStamp to={`/feeds/${props.path}/7`} name="1w" />
            <TimeStamp to={`/feeds/${props.path}/32`} name="1m" />
            <TimeStamp to={`/feeds/${props.path}/90`} name="3m" />
            <TimeStamp to={`/feeds/${props.path}/180`} name="6m" />
            <TimeStamp to={`/feeds/${props.path}/360`} name="1y" />
          </>
        ) : (
          <>
            <Button size="sm">Trending</Button>

            {currentUser ? (
              <>
                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "Capitnest Pro is required to access 1 day feeds",
                      description: (
                        <>
                          {" "}
                          <a
                            href="/pricing"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Become a PRO user - 30% OFF
                          </a>
                        </>
                      ),
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  1d
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "Capitnest Pro is required to access 1 week feeds",
                      description: (
                        <>
                          {" "}
                          <a
                            href="/pricing"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Become a PRO user - 30% OFF
                          </a>
                        </>
                      ),
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  1w
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title:
                        "Capitnest Pro is required to access 1 month feeds",
                      description: (
                        <>
                          {" "}
                          <a
                            href="/pricing"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Become a PRO user - 30% OFF
                          </a>
                        </>
                      ),
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  1m
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title:
                        "Capitnest Pro is required to access 3 month feeds",
                      description: (
                        <>
                          {" "}
                          <a
                            href="/pricing"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Become a PRO user - 30% OFF
                          </a>
                        </>
                      ),
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  3m
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title:
                        "Capitnest Pro is required to access 6 month feeds",
                      description: (
                        <>
                          {" "}
                          <a
                            href="/pricing"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Become a PRO user - 30% OFF
                          </a>
                        </>
                      ),
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  6m
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "Capitnest Pro is required to access 1 year feeds",
                      description: (
                        <>
                          {" "}
                          <a
                            href="/pricing"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Become a PRO user - 30% OFF
                          </a>
                        </>
                      ),
                      duration: 9000,
                      isClosable: true,
                    })
                  }
                >
                  1y
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "You need to be logged in to access 1 day feeds",
                      description: (
                        <>
                          <a
                            href="/login"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Log In
                          </a>{" "}
                          /{" "}
                          <a
                            href="/register"
                            style={{
                              textDecoration: "underline",
                              marginLeft: "3px",
                            }}
                          >
                            Register for free
                          </a>
                        </>
                      ),
                      duration: 1500,
                      isClosable: true,
                    })
                  }
                >
                  1d
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "You need to be logged in to access 1 week feeds",
                      description: (
                        <>
                          <a
                            href="/login"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Log In
                          </a>{" "}
                          /{" "}
                          <a
                            href="/register"
                            style={{
                              textDecoration: "underline",
                              marginLeft: "3px",
                            }}
                          >
                            Register for free
                          </a>
                        </>
                      ),
                      duration: 1500,
                      isClosable: true,
                    })
                  }
                >
                  1w
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "You need to be logged in to access 1 month feeds",
                      description: (
                        <>
                          <a
                            href="/login"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Log In
                          </a>{" "}
                          /{" "}
                          <a
                            href="/register"
                            style={{
                              textDecoration: "underline",
                              marginLeft: "3px",
                            }}
                          >
                            Register for free
                          </a>
                        </>
                      ),
                      duration: 1500,
                      isClosable: true,
                    })
                  }
                >
                  1m
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "You need to be logged in to access 3 month feeds",
                      description: (
                        <>
                          <a
                            href="/login"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Log In
                          </a>{" "}
                          /{" "}
                          <a
                            href="/register"
                            style={{
                              textDecoration: "underline",
                              marginLeft: "3px",
                            }}
                          >
                            Register for free
                          </a>
                        </>
                      ),
                      duration: 1500,
                      isClosable: true,
                    })
                  }
                >
                  3m
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "You need to be logged in to access 6 month feeds",
                      description: (
                        <>
                          <a
                            href="/login"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Log In
                          </a>{" "}
                          /{" "}
                          <a
                            href="/register"
                            style={{
                              textDecoration: "underline",
                              marginLeft: "3px",
                            }}
                          >
                            Register for free
                          </a>
                        </>
                      ),
                      duration: 1500,
                      isClosable: true,
                    })
                  }
                >
                  6m
                </Button>

                <Button
                  variant="link"
                  onClick={() =>
                    toast({
                      title: "You need to be logged in to access 1 year feeds",
                      description: (
                        <>
                          <a
                            href="/login"
                            style={{
                              textDecoration: "underline",
                              marginRight: "3px",
                            }}
                          >
                            Log In
                          </a>{" "}
                          /{" "}
                          <a
                            href="/register"
                            style={{
                              textDecoration: "underline",
                              marginLeft: "3px",
                            }}
                          >
                            Register for free
                          </a>
                        </>
                      ),
                      duration: 1500,
                      isClosable: true,
                    })
                  }
                >
                  1y
                </Button>
              </>
            )}
          </>
        )}
      </Options>
      <div style={{ height: "7px" }}></div>
    </Content>
  );
}

function TimeStamp({ to, name, ...rest }) {
  const location = useLocation();

  var isActive = location.pathname === to;

  if (
    to === "/feeds/general/trending" &&
    (location.pathname === "/" ||
      location.pathname === "/feeds" ||
      location.pathname === "/feeds/general/trending")
  ) {
    var isActive = true;
  }

  return (
    <>
      {isActive ? (
        <Button
          variant="solid"
          size="sm"
          style={{ marginLeft: "4px", padding: "6px" }}
        >
          {name}
        </Button>
      ) : (
        <Link to={to} style={{ marginTop: "4px" }}>
          <Button variant="link" {...rest} size="sm">
            {name}
          </Button>
        </Link>
      )}
    </>
  );
}

const Content = styled.div`
  input:focus {
    box-shadow: none;
    outline: none;
  }

  @media (max-width: 1150px) {
    width: 530px;
  }

  @media (max-width: 1020px) {
    width: 98%;
  }

  @media (max-width: 840px) {
    width: 430px;
  }

  @media (max-width: 820px) {
    width: 420px;
  }

  @media (max-width: 810px) {
    width: 415px;
  }

  @media (max-width: 795px) {
    width: 405px;
  }

  @media (max-width: 780px) {
    width: 98%;
  }

  @media (max-width: 765px) {
    width: 96%;
  }

  @media (max-width: 750px) {
    width: 94%;
  }

  @media (max-width: 740px) {
    width: 600px;
  }

  @media (max-width: 630px) {
    width: 550px;
  }

  @media (max-width: 570px) {
    width: 470px;
  }

  @media (max-width: 480px) {
    width: 370px;
  }

  @media (max-width: 400px) {
    width: 350px;
  }

  @media (max-width: 370px) {
    width: 320px;
  }

  @media (max-width: 340px) {
    width: 290px;
  }

  @media (max-width: 300px) {
    width: 270px;
  }
`;

const Coins = styled.div`
  display: none;
  @media (max-width: 1150px) {
    display: inline;

    border-width: 2px;
    border-radius: 8px;
    background-color: #1f2434;
  }
`;

const ContentLight = styled.div`
  background-color: #fff;

  input:focus {
    box-shadow: none;
    outline: none;
  }
`;

const Options = styled.div`
  display: flex;
  font-size: 16px;
  margin-top: 10px;
`;

const Form = styled.div`
  border-width: 2px;
  border-radius: 5px;

  @media (max-width: 1150px) {
    display: flex;
    border-width: 0px;

    form {
      border-width: 2px;
      border-radius: 8px;

      width: 1000px;
      margin-right: 7px;
    }
  }
`;

const FormLight = styled.div`
  border-width: 2px;
  border-radius: 8px;

  @media (max-width: 1150px) {
    display: flex;
    border-width: 0px;

    form {
      border-width: 2px;
      border-radius: 8px;
      width: 1000px;
      margin-right: 7px;
    }
  }
`;

const ContentDark = styled.div`
  background-color: var(--chakra-colors-gray-800);
`;

const FormDark = styled.div`
  border-width: 2px;
  border-radius: 8px;

  background-color: #1f2434;

  @media (max-width: 1150px) {
    display: flex;
    border-width: 0px;
    background-color: var(--chakra-colors-gray-800);

    form {
      border-width: 2px;
      border-radius: 8px;
      width: 1000px;
      margin-right: 7px;
      background-color: #1f2434;
    }
  }
`;
