import React from "react";
import { Flex, Center, Box, useColorMode } from "@chakra-ui/react";
import styled from "styled-components";

export default function Content() {
  const { colorMode, toggleColorMode } = useColorMode();

  // choose the background color in
  function backgroundClr() {
    if (colorMode == "light") {
      return "#fafafa";
    } else {
      return "rgb(18, 22, 31)";
    }
  }

  return (
    <Component>
      <Flex marginTop="25px" justifyContent={"center"}>
        <span>
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
            backgroundColor={backgroundClr}
            borderColor="#6d4bd0"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/feed.png" width="200px" />
            </div>
            <h1>Feeds</h1>
            <p style={{ fontSize: "15px", marginTop: "5px" }}>
              Explore Crypto & NFT content through a social media style App
            </p>
            <Center>
              <a href="/news" style={{ fontSize: "15px", fontWeight: "bold" }}>
                <Button colorScheme="green" size="sm" marginTop="7px">
                  Explore
                </Button>
              </a>
            </Center>
          </Box>
        </span>
        <span>
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
            backgroundColor={backgroundClr}
            borderColor="#6d4bd0"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/news.png" width="200px" />
            </div>
            <h1>News</h1>
            <p style={{ fontSize: "16px", marginTop: "5px" }}>
              The Latest Important News about Crypto & NFTs
            </p>

            <Center>
              <a href="/news" style={{ fontSize: "15px", fontWeight: "bold" }}>
                <Button colorScheme="green" size="sm" marginTop="7px">
                  Explore
                </Button>
              </a>
            </Center>
          </Box>
        </span>

        <span>
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
            backgroundColor={backgroundClr}
            borderColor="#6d4bd0"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/nft.png" width="200px" />
            </div>
            <h1>NFTs</h1>
            <p style={{ fontSize: "16px", marginTop: "5px" }}>
              See the Upcomming NFTs & Information about them
            </p>
            <Center>
              <a href="/nfts">
                <Button colorScheme="green" size="sm" marginTop="7px">
                  Explore
                </Button>
              </a>
            </Center>
          </Box>
        </span>
      </Flex>
    </Component>
  );
}

const Button = styled.button`
  appearance: none;
  border-radius: 4px;

  box-sizing: border-box;
  cursor: pointer;
  display: "inline-flex";
  height: 36px;
  background-color: #6d4bd0;
  padding: 8px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;

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

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 25px;
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
    margin-right: 10px;
    margin-left: 10px;
  }
`;
