import React from "react";
import {
  Box,
  Wrap,
  CircularProgress,
  CircularProgressLabel,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import styled from "styled-components";

export default function Stats() {
  const { colorMode, toggleColorMode } = useColorMode();

  // choose the border color
  function borderClr() {
    if (colorMode == "light") {
      return "rgba(0, 0, 0, 0.80)";
    } else {
      return "rgba(0, 0, 0, 0.24)";
    }
  }

  // choose the background color
  function backgroundClr() {
    if (colorMode == "light") {
      return "rgba(0, 0, 0, 0.08)";
    } else {
      return "#2D3748";
    }
  }

  return (
    <>
      <BigScreen>
        <span>
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
            borderColor={borderClr}
            background={backgroundClr}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/post.png" width="100px" />
            </div>
            <h1>536k</h1>
            <p>Posts Filtered Through</p>
          </Box>
        </span>
        <span>
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
            borderColor={borderClr}
            background={backgroundClr}
          >
            <CircularProgress
              value={100}
              color="#04d192"
              size="120px"
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CircularProgressLabel>
                <p style={{ fontWeight: "bold", fontSize: "30px" }}>11,5k</p>
              </CircularProgressLabel>
            </CircularProgress>

            <p>
              People Trusted <br /> Our Information
            </p>
          </Box>
        </span>
        <span>
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
            borderColor={borderClr}
            background={backgroundClr}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/interact.webp" width="77px" />
            </div>
            <h1>1,47k</h1>
            <p>
              People Interacted with <br /> Our Content
            </p>
          </Box>
        </span>
      </BigScreen>

      <Center>
        <SmallScreen>
          <div>
            <Box
              maxW="sm"
              borderWidth="2px"
              borderRadius="lg"
              overflow="hidden"
              padding="8px"
              borderColor={borderClr}
              background={backgroundClr}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/images/post.png" width="100px" />
              </div>
              <h1>536k</h1>
              <p>Posts Filtered Through</p>
            </Box>
          </div>
          <span>
            <Box
              maxW="sm"
              borderWidth="2px"
              borderRadius="lg"
              overflow="hidden"
              padding="8px"
              marginTop="5px"
              borderColor={borderClr}
              background={backgroundClr}
            >
              <CircularProgress
                value={100}
                color="#04d192"
                size="120px"
                style={{
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgressLabel>
                  <h3 style={{ fontWeight: "bold" }}>11,5k</h3>
                </CircularProgressLabel>
              </CircularProgress>

              <p>People Trusted Our Information</p>
            </Box>
            <Box
              maxW="sm"
              borderWidth="2px"
              borderRadius="lg"
              overflow="hidden"
              padding="8px"
              marginTop="5px"
              marginLeft="5px"
              borderColor={borderClr}
              background={backgroundClr}
            >
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/images/interact.webp" width="77px" />
              </div>
              <h1>1,47k</h1>
              <p>People Interacted with Our Content</p>
            </Box>
          </span>
        </SmallScreen>
      </Center>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "120px",
        }}
      >
        <a href="#more">
          <Button colorScheme="teal">
            <ArrowDownIcon marginBottom="4px" /> See More
          </Button>
        </a>
      </div>
    </>
  );
}

const Button = styled.button`
  appearance: none;
  border-radius: 4px;

  box-sizing: border-box;
  cursor: pointer;
  display: "inline-flex";
  height: 40px;
  background-color: #6d4bd0;
  padding: 8px;
  color: white;
  font-size: 18px;
  font-weight: 500;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
    background-color: #5a35c6;
    color: #e4e4e4;
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 0px inset;
    transform: translateY(2px);
  }
`;

const SmallScreen = styled.div`
  display: none;
  margin-top: 20px;
  margin-right: 2%;
  margin-left: 2%;

  span {
    display: flex;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;
  }

  p {
    font-family: "Inter", sans-serif;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }

  @media (max-width: 450px) {
    display: inline;
  }

  @media (max-width: 385px) {
    font-size: 15px;
  }

  @media (max-width: 330px) {
    font-size: 13px;
  }
`;

const BigScreen = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;
  }

  p {
    font-family: "Inter", sans-serif;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }

  span {
    margin-right: 5px;
    margin-left: 5px;
  }

  @media (max-width: 450px) {
    display: none;
  }
`;
