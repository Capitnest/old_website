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
    name,
    username,
    authorProfilePic,
    authorLink,
    tweet,
    date,
    user_url,
    source,
    profile,
    picture,
    description,
    title,
  },
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <Content>
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="5px"
            borderColor="#04d192"
            backgroundColor="rgb(18, 22, 31)"
          >
            <Flex flexDirection="column">
              <Flex>
                <a href={user_url} target="_blank">
                  <Avatar name={name} src={profile} />
                </a>
                <Flex flexDirection="column">
                  <a href={user_url} target="_blank">
                    <h1 style={{ marginLeft: "5px" }}>{name}</h1>
                  </a>
                  <a
                    style={{ marginLeft: "5px" }}
                    href={user_url}
                    target="_blank"
                  >
                    {username}
                  </a>
                </Flex>
              </Flex>
              <Flex flexDirection="column">
                <p style={{ width: "100%", marginTop: "2px" }}>
                  {title}
                  {picture !== "" ? (
                    <>
                      <img
                        src={picture}
                        alt="picture"
                        style={{ borderRadius: "4px" }}
                      />

                      {description}
                    </>
                  ) : (
                    <></>
                  )}
                </p>
                <br />
                <Flex marginTop="20px" justifyContent="space-between">
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
            </Flex>
          </Box>
        </Content>
      ) : (
        <Content>
          <Box
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="5px"
            borderColor="#04d192"
            backgroundColor="var(--chakra-colors-gray-100)"
          >
            <Flex flexDirection="column">
              <Flex>
                <a href={user_url} target="_blank">
                  <Avatar name={name} src={profile} />
                </a>
                <Flex flexDirection="column">
                  <a href={user_url} target="_blank">
                    <h1 style={{ marginLeft: "5px" }}>{name}</h1>
                  </a>
                  <a
                    style={{ marginLeft: "5px" }}
                    href={user_url}
                    target="_blank"
                  >
                    {username}
                  </a>
                </Flex>
              </Flex>
              <Flex flexDirection="column">
                <p style={{ width: "100%", marginTop: "2px" }}>
                  {title}
                  {picture !== "" ? (
                    <>
                      <img
                        src={picture}
                        alt="picture"
                        style={{ borderRadius: "4px" }}
                      />

                      {description}
                    </>
                  ) : (
                    <></>
                  )}
                </p>
                <br />
                <Flex marginTop="20px" justifyContent="space-between">
                  <Flex>
                    <span style={{}}>
                      <Like />
                    </span>

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
            </Flex>
          </Box>
        </Content>
      )}
    </>
  );
}

const Content = styled.div`
  font-family: "Inter", sans-serif;
  width: 100%;

  h1 {
    font-weight: bold;
  }

  a {
    &:hover {
      text-decoration: none;
      color: #04d192;
    }
  }
`;

const Date = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 16px;
  margin-bottom: 0px;
`;
