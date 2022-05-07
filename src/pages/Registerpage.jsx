import {
  Button,
  Center,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AiFillCheckCircle } from "react-icons/ai";
import styled from "styled-components";

export default function Registerpage() {
  const history = useHistory();
  const { signInWithGoogle, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const mounted = useRef(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    loadCaptchaEnginge(6);
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <Layout>
      <Heading
        textAlign="center"
        my={12}
        fontSize="32px"
        fontFamily='"Inter", sans-serif'
        fontWeight={600}
        marginTop="0px"
        marginBottom="30px"
      >
        Welcome to <span style={{ color: "#04d192" }}>Capitnest</span>!
      </Heading>

      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!email || !password) {
              toast({
                description: "Credentials not valid.",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              return;
            }

            if (password !== cpassword) {
              toast({
                description: "Passwords are not the same!",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              return;
            }

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

            if (password.length < 9) {
              toast({
                description: "Your password must have more than 8 characters.",
                status: "error",
                duration: 9000,
                isClosable: true,
              });
              return;
            }

            // your register logic here
            setIsSubmitting(true);
            register(email, password)
              .then((res) => {})
              .catch((error) => {
                console.log(error.message);
                toast({
                  description: error.message,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              })
              .finally(() => {
                mounted.current && setIsSubmitting(false);
              });
          }}
        >
          {colorMode === "dark" ? (
            <>
              <Stack spacing="6">
                <FormControl id="email">
                  <FormLabel
                    fontFamily='"Inter", sans-serif'
                    fontWeight="400"
                    color="RGBA(255, 255, 255, 0.80)"
                  >
                    Email address
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="RGBA(255, 255, 255, 0.80)"
                    backgroundColor="#4A5568"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="RGBA(255, 255, 255, 0.16) 0px 1px 2px 0px"
                    borderColor="RGBA(255, 255, 255, 0.16)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel
                    fontFamily='"Inter", sans-serif'
                    fontWeight="400"
                    color="RGBA(255, 255, 255, 0.80)"
                  >
                    Password
                  </FormLabel>
                  <Input
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="RGBA(255, 255, 255, 0.80)"
                    backgroundColor="#4A5568"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="RGBA(255, 255, 255, 0.16) 0px 1px 2px 0px"
                    borderColor="RGBA(255, 255, 255, 0.16)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel
                    fontFamily='"Inter", sans-serif'
                    fontWeight="400"
                    color="RGBA(255, 255, 255, 0.80)"
                  >
                    Confirm Password
                  </FormLabel>
                  <Input
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="RGBA(255, 255, 255, 0.80)"
                    backgroundColor="#4A5568"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="RGBA(255, 255, 255, 0.16) 0px 1px 2px 0px"
                    borderColor="RGBA(255, 255, 255, 0.16)"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontFamily='"Inter", sans-serif'
                    fontWeight="400"
                    color="RGBA(255, 255, 255, 0.80)"
                  >
                    Captcha
                  </FormLabel>

                  <LoadCanvasTemplate />

                  <Input
                    name="captcha"
                    type="text"
                    required
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="RGBA(255, 255, 255, 0.80)"
                    backgroundColor="#4A5568"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="RGBA(255, 255, 255, 0.16) 0px 1px 2px 0px"
                    borderColor="RGBA(255, 255, 255, 0.16)"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                  />
                </FormControl>

                <p
                  style={{
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  By signing up you agree to our{" "}
                  <a href="/terms.txt" style={{ color: "#04d192" }}>
                    <Linkk> terms of service</Linkk>
                  </a>{" "}
                  &{" "}
                  <a href="/privacy.txt" style={{ color: "#04d192" }}>
                    <Linkk>privacy policy</Linkk>
                  </a>
                  .
                </p>

                <Button
                  type="submit"
                  colorScheme="green"
                  fontFamily='"Inter", sans-serif'
                  fontSize="15px"
                  fontWeight="500"
                  isLoading={isSubmitting}
                >
                  <AiFillCheckCircle style={{ marginRight: "5px" }} size={18} />{" "}
                  Let's get started
                </Button>
              </Stack>
            </>
          ) : (
            <>
              <Stack spacing="6">
                <FormControl id="email">
                  <FormLabel
                    fontFamily='"Inter", sans-serif'
                    color="rgb(73, 84, 90)"
                  >
                    Email address
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="rgb(110, 125, 135)"
                    backgroundColor="rgb(240, 244, 248)"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="rgb(221, 225, 227) 0px 1px 2px 0px"
                    borderColor="rgb(218, 221, 236)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel
                    fontFamily='"Inter", sans-serif'
                    color="rgb(73, 84, 90)"
                  >
                    Password
                  </FormLabel>
                  <Input
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="rgb(110, 125, 135)"
                    backgroundColor="rgb(240, 244, 248)"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="rgb(221, 225, 227) 0px 1px 2px 0px"
                    borderColor="rgb(218, 221, 236)"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel
                    fontFamily='"Inter", sans-serif'
                    color="rgb(73, 84, 90)"
                  >
                    Confirm Password
                  </FormLabel>
                  <Input
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="rgb(110, 125, 135)"
                    backgroundColor="rgb(240, 244, 248)"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="rgb(221, 225, 227) 0px 1px 2px 0px"
                    borderColor="rgb(218, 221, 236)"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel
                    fontFamily='"Inter", sans-serif'
                    color="rgb(73, 84, 90)"
                  >
                    Captcha
                  </FormLabel>
                  <LoadCanvasTemplate />
                  <Input
                    name="captcha"
                    type="text"
                    required
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="rgb(110, 125, 135)"
                    backgroundColor="rgb(240, 244, 248)"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="rgb(221, 225, 227) 0px 1px 2px 0px"
                    borderColor="rgb(218, 221, 236)"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                  />
                </FormControl>

                <p
                  style={{
                    fontSize: "15px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  By signing up you agree to our{" "}
                  <a href="/terms.txt" style={{ color: "#04d192" }}>
                    <Linkk> terms of service</Linkk>
                  </a>{" "}
                  &{" "}
                  <a href="/privacy.txt" style={{ color: "#04d192" }}>
                    <Linkk>privacy policy</Linkk>
                  </a>
                  .
                </p>

                <Button
                  type="submit"
                  colorScheme="green"
                  fontFamily='"Inter", sans-serif'
                  fontSize="15px"
                  fontWeight="500"
                  isLoading={isSubmitting}
                >
                  <AiFillCheckCircle style={{ marginRight: "5px" }} size={18} />{" "}
                  Let's get started
                </Button>
              </Stack>
            </>
          )}
        </chakra.form>
        <Center my={4}>
          <Button variant="link" onClick={() => history.push("/login")}>
            Login
          </Button>
        </Center>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="red"
          fontFamily='"Inter", sans-serif'
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then((user) => console.log(user))
              .catch((e) => console.log(e.message))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
}

const Linkk = styled.span`
  &:hover {
    color: #04b681;
    text-decoration: underline;
  }
`;
