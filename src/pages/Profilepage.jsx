import {
  Avatar,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Card,
  useToast,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import React, { useState, useEffect, useRef } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";

import { useAuth } from "../contexts/AuthContext";
import { auth } from "../utils/init-firebase";
import { updateProfile } from "firebase/auth";

import styled from "styled-components";

//Captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

export default function Profilepage() {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState("");
  const [captcha, setCaptcha] = useState("");
  const mounted = useRef(false);
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  function signOut() {
    return auth.signOut();
  }

  function update() {
    updateProfile(currentUser, {
      displayName: "Timnik",
      photoURL:
        "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-hj2bRipxo-I%2FVLFG7mPkBtI%2FAAAAAAAACKM%2FbV-d57jZoTY%2Fs1600%2F51b91bba5a3fd9b6c8b9c53bc0ab6c65.jpg&f=1&nofb=1",
    })
      .then(() => {
        console.log("Profile updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    loadCaptchaEnginge(6);
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <>
      <Layout>
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1
          style={{ fontSize: "40px", fontWeight: "bold", marginBottom: "10px" }}
        >
          Settings
        </h1>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Notifications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">API</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Content>
                <Tab.Content>
                  <hr />
                  <br />
                  <Tab.Pane eventKey="first">
                    <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
                      Profile
                    </h1>
                    <p>Display Name: {currentUser.displayName}</p>
                    <p>Email: {currentUser.email}</p>

                    <br />

                    <hr />

                    <br />

                    <Stack spacing="6">
                      <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
                        Update Profile
                      </h1>

                      <Stack spacing="6">
                        <form
                          onSubmit={async (e) => {
                            e.preventDefault();
                            if (validateCaptcha(captcha) == true) {
                              loadCaptchaEnginge(6);
                            } else {
                              toast({
                                description: "Incorrect Captcha",
                                status: "error",
                                duration: 9000,
                                isClosable: true,
                              });
                              return;
                            }

                            if (username === currentUser.displayName) {
                              toast({
                                description:
                                  "That's your current display name!",
                                status: "error",
                                duration: 9000,
                                isClosable: true,
                              });
                              return;
                            }

                            if (username.length > 20) {
                              toast({
                                description:
                                  "Your display name cannot be longer than 20 characters!",
                                status: "error",
                                duration: 9000,
                                isClosable: true,
                              });
                              return;
                            }

                            updateProfile(currentUser, {
                              displayName: username,
                              photoURL:
                                "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-hj2bRipxo-I%2FVLFG7mPkBtI%2FAAAAAAAACKM%2FbV-d57jZoTY%2Fs1600%2F51b91bba5a3fd9b6c8b9c53bc0ab6c65.jpg&f=1&nofb=1",
                            })
                              .then(() => {
                                console.log("Profile updated");
                              })
                              .catch((error) => {
                                console.log(error);
                              })
                              .finally(() => {
                                toast({
                                  description: "Profile Updated Succesfully",
                                  status: "success",
                                  duration: 9000,
                                  isClosable: true,
                                });
                                mounted.current && setIsSubmitting(false);
                              });
                          }}
                        >
                          <FormControl id="text">
                            <FormLabel>Display Name</FormLabel>
                            <Input
                              name="text"
                              type="text"
                              autoComplete="text"
                              required
                              value={username}
                              placeholder={currentUser.displayName}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </FormControl>

                          <FormControl marginTop="6px">
                            <FormLabel>Captcha</FormLabel>
                            <LoadCanvasTemplate />
                            <Input
                              name="captcha"
                              type="text"
                              required
                              value={captcha}
                              onChange={(e) => setCaptcha(e.target.value)}
                            />
                          </FormControl>

                          <Button
                            type="submit"
                            colorScheme="green"
                            size="md"
                            fontSize="md"
                            marginTop="10px"
                            isLoading={isSubmitting}
                          >
                            Update
                          </Button>
                        </form>
                      </Stack>
                    </Stack>

                    {/* <Card maxW="sm" mx="auto" mt={4}> */}
                    {/* <chakra.form> */}
                    {/* <Stack spacing="6">
                    <FormControl id="text">
                      <FormLabel>Display Name</FormLabel>
                      <Input
                        name="text"
                        type="text"
                        autoComplete="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </FormControl>
                  </Stack> */}
                    {/* </chakra.form> */}
                    {/* </Card> */}

                    <br />

                    <hr />

                    <br />

                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        onClick={signOut}
                        variant="outline"
                        colorScheme="red"
                      >
                        Sign Out
                      </Button>
                    </div>

                    <br />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Second</Tab.Pane>
                  <Tab.Pane eventKey="third">THird</Tab.Pane>
                </Tab.Content>
              </Content>
            </Col>
          </Row>
        </Tab.Container>
      </Layout>
    </>
  );
}

const Content = styled.div`
  margin-top: -60px;

  @media (max-width: 575px) {
    margin-top: 10px;
  }
`;
