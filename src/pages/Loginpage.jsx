import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useToast,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Card } from "../components/Card";
import DividerWithText from "../components/DividerWithText";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import useMounted from "../hooks/useMounted";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import ReactCaptchaa from "react-captchaa";

export default function Loginpage() {
  const history = useHistory();
  const { signInWithGoogle, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [captchaInfo, setCaptchaInfo] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  // const mounted = useRef(false)
  const location = useLocation();

  const mounted = useMounted();

  function handleRedirectToOrBack() {
    // console.log(location?.state)
    history.replace(location.state?.from ?? "/profile");
    // if (location.state) {
    //   history.replace(location.state?.from)
    // } else {
    //   history.replace('/profile')
    // }
  }

  return (
    <Layout>
      <Heading
        textAlign="center"
        my={12}
        fontSize="32px"
        fontFamily='"Inter", sans-serif'
        fontWeight={600}
        marginTop="30px"
        marginBottom="30px"
      >
        Welcome back!
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

            // your login logic here
            setIsSubmitting(true);
            login(email, password)
              .then((res) => {
                handleRedirectToOrBack();
              })
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
                // setTimeout(() => {
                //   mounted.current && setIsSubmitting(false)
                //   console.log(mounted.current)
                // }, 1000)
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
                    value={password}
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="RGBA(255, 255, 255, 0.80)"
                    backgroundColor="#4A5568"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="RGBA(255, 255, 255, 0.16) 0px 1px 2px 0px"
                    borderColor="RGBA(255, 255, 255, 0.16)"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                {/* <PasswordField /> */}
                <Button
                  type="submit"
                  colorScheme="green"
                  fontFamily='"Inter", sans-serif'
                  fontSize="15px"
                  fontWeight="500"
                  isLoading={isSubmitting}
                >
                  Login
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
                    value={password}
                    fontSize="16px"
                    fontFamily='"Inter", sans-serif'
                    color="rgb(110, 125, 135)"
                    backgroundColor="rgb(240, 244, 248)"
                    borderRadius="4px"
                    height="38px"
                    borderWidth="1px"
                    boxShadow="rgb(221, 225, 227) 0px 1px 2px 0px"
                    borderColor="rgb(218, 221, 236)"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormControl>

                {/* <PasswordField /> */}
                <Button
                  type="submit"
                  colorScheme="green"
                  fontFamily='"Inter", sans-serif'
                  fontSize="15px"
                  fontWeight="500"
                  isLoading={isSubmitting}
                >
                  Login
                </Button>
              </Stack>
            </>
          )}
        </chakra.form>
        <HStack
          justifyContent="space-between"
          my={4}
          fontFamily="'Inter', sans-serif"
          fontWeight={400}
        >
          <Button variant="link">
            <Link to="/forgot-password">Forgot password?</Link>
          </Button>
          <Button variant="link" onClick={() => history.push("/register")}>
            Register
          </Button>
        </HStack>
        <DividerWithText my={6}>OR</DividerWithText>
        <Button
          variant="outline"
          isFullWidth
          colorScheme="red"
          fontFamily='"Inter", sans-serif'
          leftIcon={<FaGoogle />}
          onClick={() =>
            signInWithGoogle()
              .then((user) => {
                handleRedirectToOrBack();
                console.log(user);
              })
              .catch((e) => console.log(e.message))
          }
        >
          Sign in with Google
        </Button>
      </Card>
    </Layout>
  );
}
