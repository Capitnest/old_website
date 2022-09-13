import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";
import {
  Stack,
  FormControl,
  Input,
  Button,
  FormLabel,
  useColorMode,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";

export default function Activate() {
  const [message, setMessage] = useState();
  const { logout, currentUser } = useAuth();
  const [license, setLicense] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  function ActivateLicense(e) {
    e.preventDefault();

    setLoading(true);

    axios
      .get(
        `https://timnik.pythonanywhere.com/validate-license?license=${license}&uid=${currentUser.uid}`
      )
      .then((response) => {
        setMessage(JSON.parse(response.data));
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });

    setLoading(false);
  }

  return (
    <div>
      <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>
        Activate your PRO plan
      </h1>

      <Stack spacing="6" marginTop="40px">
        <FormControl>
          <FormLabel fontFamily='"Inter", sans-serif' fontWeight="400">
            Enter your license
          </FormLabel>
          <Input
            name="text"
            type="text"
            autoComplete="email"
            required
            fontSize="16px"
            fontFamily='"Inter", sans-serif'
            color={() => {
              if (colorMode === "dark") {
                return "RGBA(255, 255, 255, 0.80)";
              } else {
                return "rgb(110, 125, 135)";
              }
            }}
            backgroundColor={() => {
              if (colorMode === "dark") {
                return "#4A5568";
              } else {
                return "#CBD5E0";
              }
            }}
            borderRadius="4px"
            height="38px"
            borderWidth="2px"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
          />
        </FormControl>

        {/*
        color="rgb(110, 125, 135)"
                    backgroundColor="rgb(240, 244, 248)" 
        */}

        {/* Show message when the command is executed */}
        {message !== undefined ? (
          <>
            {error !== false ? (
              <>
                <Alert status="error">
                  <AlertIcon />
                  You've tried too many times, your rate is being limited, try
                  again in a couple of minutes!
                </Alert>
              </>
            ) : (
              <></>
            )}
            {message.Success !== false ? (
              <>
                {console.log(message)}
                <Alert status="success">
                  <AlertIcon />
                  {message.Message}
                </Alert>
              </>
            ) : (
              <>
                <Alert status="error">
                  <AlertIcon />
                  {message.Message}
                </Alert>
              </>
            )}
          </>
        ) : (
          <></>
        )}

        {/* <PasswordField /> */}
        <Button
          type="submit"
          colorScheme="green"
          fontFamily='"Inter", sans-serif'
          fontSize="15px"
          fontWeight="500"
          isLoading={loading}
          onClick={ActivateLicense}
        >
          Activate
        </Button>
      </Stack>
    </div>
  );
}
