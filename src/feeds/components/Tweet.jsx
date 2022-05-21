import React, { useState } from "react";
import {
  Box,
  Avatar,
  Wrap,
  WrapItem,
  Flex,
  Button,
  useColorMode,
  Card,
} from "@chakra-ui/react";
import styled from "styled-components";
import Like from "./Like";
import Report from "./Report";
import { FaGlobe } from "react-icons/fa";

export default function Tweet({
  blog: {
    id,
    authorName,
    authorUsername,
    authorProfilePic,
    authorLink,
    tweet,
    date,
    source,
  },
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <Content>
          <Box
            maxW="lg"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="5px"
            borderColor="#04d192"
            backgroundColor="rgb(18, 22, 31)"
          >
            <Wrap>
              <WrapItem>
                <a href={authorLink} target="_blank">
                  <Avatar name={authorName} src={authorProfilePic} />
                </a>
                <Flex flexDirection="column">
                  <a href={authorLink} target="_blank">
                    <h1 style={{ marginLeft: "5px" }}>{authorName}</h1>
                  </a>
                  <a
                    style={{ marginLeft: "5px" }}
                    href={authorLink}
                    target="_blank"
                  >
                    {authorUsername}
                  </a>
                </Flex>
              </WrapItem>
              <Flex flexDirection="column">
                <WrapItem>{tweet}</WrapItem>
                <Flex marginTop="10px">
                  <Like />

                  <div style={{ marginLeft: "5px" }}>
                    <Report />
                  </div>

                  <a href={source} style={{ display: "flex" }} target="_blank">
                    <Button marginLeft="5px">
                      {" "}
                      <div style={{ marginTop: "1px" }}>
                        <FaGlobe />{" "}
                      </div>{" "}
                      <div style={{ marginLeft: "5px" }}>Source</div>
                    </Button>
                  </a>

                  <Date>{date}</Date>
                </Flex>
              </Flex>
            </Wrap>
          </Box>
        </Content>
      ) : (
        <Content>
          <Box
            maxW="lg"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="5px"
            borderColor="#04d192"
            backgroundColor="var(--chakra-colors-gray-100)"
          >
            <Wrap>
              <WrapItem>
                <a href={authorLink} target="_blank">
                  <Avatar name={authorName} src={authorProfilePic} />
                </a>
                <Flex flexDirection="column">
                  <a href={authorLink} target="_blank">
                    <h1 style={{ marginLeft: "5px" }}>{authorName}</h1>
                  </a>
                  <a
                    style={{ marginLeft: "5px" }}
                    href={authorLink}
                    target="_blank"
                  >
                    {authorUsername}
                  </a>
                </Flex>
              </WrapItem>
              <Flex flexDirection="column">
                <WrapItem>{tweet}</WrapItem>
                <Flex marginTop="10px">
                  <Like />

                  <div style={{ marginLeft: "5px" }}>
                    <Report />
                  </div>

                  <a href={source} style={{ display: "flex" }} target="_blank">
                    <Button marginLeft="5px">
                      {" "}
                      <div style={{ marginTop: "1px" }}>
                        <FaGlobe />{" "}
                      </div>{" "}
                      <div style={{ marginLeft: "5px" }}>Source</div>
                    </Button>
                  </a>

                  <Date>{date}</Date>
                </Flex>
              </Flex>
            </Wrap>
          </Box>
        </Content>
      )}
    </>
  );
}

const Content = styled.div`
  font-family: "Inter", sans-serif;

  h1 {
    font-weight: bold;
  }

  a {
    &:hover {
      text-decoration: none;
      color: #04d192;
    }
  }

  @media (max-width: 310px) {
    width: 280px;
  }

  @media (max-width: 296px) {
    width: 250px;
  }
`;

const Date = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 16px;
  margin-bottom: 0px;

  @media (max-width: 1038px) {
    margin-left: 160px;
  }

  @media (max-width: 1000px) {
    margin-left: 160px;
  }

  @media (max-width: 980px) {
    margin-left: 150px;
  }

  @media (max-width: 960px) {
    margin-left: 130px;
  }

  @media (max-width: 940px) {
    margin-left: 130px;
  }

  @media (max-width: 920px) {
    margin-left: 120px;
  }

  @media (max-width: 900px) {
    margin-left: 110px;
  }

  @media (max-width: 850px) {
    position: static;
    top: 0px;
    left: 0px;
    margin-left: 100px;
    margin-top: 18px;
    margin-bottom: 0px;
    margin-right: 2px;
  }

  @media (max-width: 450px) {
    margin-left: 90px;
  }

  @media (max-width: 400px) {
    margin-left: 70px;
  }

  @media (max-width: 385px) {
    margin-left: 50px;
  }

  @media (max-width: 355px) {
    margin-left: 30px;
  }

  @media (max-width: 340px) {
    margin-left: 10px;
  }

  @media (max-width: 320px) {
    margin-left: 5px;
  }

  @media (max-width: 310px) {
    display: none;
  }
`;
