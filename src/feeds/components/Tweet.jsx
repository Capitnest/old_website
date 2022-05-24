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
                <Flex marginTop="10px" justifyContent="space-between">
                  <Flex>
                    <Like />

                    <a
                      href={source}
                      style={{ display: "flex" }}
                      target="_blank"
                    >
                      <Button marginLeft="5px">
                        {" "}
                        <div style={{ marginTop: "1px" }}>
                          <FaGlobe />{" "}
                        </div>{" "}
                        <div style={{ marginLeft: "5px" }}>Source</div>
                      </Button>
                    </a>
                  </Flex>

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
                <Flex marginTop="10px" justifyContent="space-between">
                  <Flex>
                    <Like />

                    <a
                      href={source}
                      style={{ display: "flex" }}
                      target="_blank"
                    >
                      <Button marginLeft="5px">
                        {" "}
                        <div style={{ marginTop: "1px" }}>
                          <FaGlobe />{" "}
                        </div>{" "}
                        <div style={{ marginLeft: "5px" }}>Source</div>
                      </Button>
                    </a>
                  </Flex>

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

  @media (max-width: 786px) {
    width: 410px;
  }

  @media (max-width: 430px) {
    width: 390px;
  }

  @media (max-width: 400px) {
    width: 360px;
  }

  @media (max-width: 370px) {
    width: 340px;
  }

  @media (max-width: 350px) {
    width: 320px;
  }

  @media (max-width: 330px) {
    width: 300px;
  }

  @media (max-width: 310px) {
    width: 280px;
  }

  @media (max-width: 290px) {
    width: 260px;
  }

  @media (max-width: 270px) {
    width: 240px;
  }
`;

const Date = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 16px;
  margin-bottom: 0px;
`;
