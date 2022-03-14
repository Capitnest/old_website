import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  useColorMode,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import styled from "styled-components";

export default function Stats() {
  const { colorMode, toggleColorMode } = useColorMode();

  // choose the background color in
  function backgroundClr() {
    if (colorMode == "light") {
      return "#fafafa";
    } else {
      return "#2D3748";
    }
  }

  return (
    <>
      <Statss>
        <span>
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
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
                <p style={{ fontWeight: "bold" }}>11,5k</p>
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
      </Statss>

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

const Statss = styled.div`
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
`;
