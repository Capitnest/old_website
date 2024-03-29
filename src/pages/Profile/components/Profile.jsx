import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Stack,
  useToast,
  Badge,
} from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { useAuth } from "../../../contexts/AuthContext";
import { auth } from "../../../utils/init-firebase";

import { updateProfile } from "firebase/auth";

//Captcha
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";

export default function Profile() {
  const { currentUser } = useAuth();
  const [username, setUsername] = useState("");
  const [captcha, setCaptcha] = useState("");
  const mounted = useRef(false);
  const toast = useToast();
  const [plan, setPlan] = useState("free");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function signOut() {
    return auth.signOut();
  }

  useEffect(() => {
    if (currentUser) {
      axios
        .get(
          `https://timnik.pythonanywhere.com/get-plan?uid=${currentUser.uid}`
        )
        .then((response) => {
          setPlan(response.data);
        })
        .catch((error) => {});
    }

    loadCaptchaEnginge(6);
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, [currentUser]);

  return (
    <>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Profile</h1>
      <p>
        Display Name:{" "}
        {currentUser.displayName !== null ? (
          <>{currentUser.displayName}</>
        ) : (
          <Badge colorScheme="red">No username</Badge>
        )}
      </p>

      <p>Email: {currentUser.email}</p>
      <p>Plan: {plan}</p>
      <p>
        Discord: <Badge colorScheme="red">Not connected</Badge>
      </p>

      <br />

      <hr />

      <br />

      <Stack spacing="6">
        <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>Update Profile</h1>

        <Stack spacing="6">
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (validateCaptcha(captcha) === true) {
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
                  description: "That's your current display name!",
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

      <br />
      <br />

      <br />

      <hr />

      <br />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button onClick={signOut} variant="outline" colorScheme="red">
          Sign Out
        </Button>
      </div>

      <br />
    </>
  );
}
