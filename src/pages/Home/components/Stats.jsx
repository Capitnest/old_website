import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Button,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import waves from "./waves.png";

export default function Stats() {
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
        <Button colorScheme="teal">
          <a href="#more">
            <ArrowDownIcon /> See More
          </a>
        </Button>
      </div>
    </>
  );
}

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
