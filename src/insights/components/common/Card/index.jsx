import React from "react";
import { Box, Badge, Flex, useColorMode } from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export function Card(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  function topic_badge_color(topic) {
    if (topic === "security") {
      return "teal";
    } else if (topic === "blockchain") {
      return "blue";
    } else if (topic === "crypto") {
      return "green";
    } else if (topic === "exchanges") {
      return "purple";
    } else {
      return "green";
    }
  }

  return (
    <div>
      {colorMode === "dark" ? (
        <Link to="/" style={{ color: "white" }}>
          <Content>
            <Box
              maxW="sm"
              borderWidth="3px"
              borderRadius="lg"
              color={() => {
                if (colorMode === "dark ") {
                  return "white";
                } else if (colorMode === "light") {
                  return "black";
                }
              }}
              overflow="hidden"
              backgroundColor={() => {
                if (colorMode === "dark") {
                  return "rgb(18, 22, 31)";
                } else {
                  return "var(--chakra-colors-gray-100)";
                }
              }}
            >
              <img src={props.img} />
              <Box p="3">
                <Title>
                  <p>{props.title}</p>
                </Title>
                <Flex justifyContent="space-between" marginTop="20px">
                  <a href={props.link}>
                    <Button>
                      <p>Read More</p>
                    </Button>
                  </a>
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: '"Inter", sans-serif',
                      marginTop: "3px",
                      fontWeight: "bold",
                    }}
                  >
                    {props.time} MIN
                  </p>
                  <Badge
                    style={{
                      fontSize: "14px",
                      fontFamily: '"Inter", sans-serif',
                    }}
                    colorScheme={topic_badge_color(props.topic)}
                  >
                    <p style={{ margin: "4px" }}>{props.topic}</p>
                  </Badge>
                </Flex>
              </Box>
            </Box>
          </Content>
        </Link>
      ) : (
        <Link
          to="/"
          style={{
            color: "black",
          }}
        >
          <Content>
            <Box
              maxW="sm"
              borderWidth="3px"
              borderRadius="lg"
              color={() => {
                if (colorMode === "dark ") {
                  return "white";
                } else if (colorMode === "light") {
                  return "black";
                }
              }}
              overflow="hidden"
              backgroundColor={() => {
                if (colorMode === "dark") {
                  return "rgb(18, 22, 31)";
                } else {
                  return "var(--chakra-colors-gray-100)";
                }
              }}
            >
              <img src={props.img} />
              <Box p="3">
                <Title>
                  <p>{props.title}</p>
                </Title>
                <Flex justifyContent="space-between" marginTop="20px">
                  <a href={props.link}>
                    <Button>
                      <p>Read More</p>
                    </Button>
                  </a>
                  <p
                    style={{
                      fontSize: "14px",
                      fontFamily: '"Inter", sans-serif',
                      marginTop: "3px",
                      fontWeight: "bold",
                    }}
                  >
                    {props.time} MIN
                  </p>
                  <Badge
                    style={{
                      fontSize: "14px",
                      fontFamily: '"Inter", sans-serif',
                    }}
                    colorScheme={topic_badge_color(props.topic)}
                  >
                    <p style={{ margin: "4px" }}>{props.topic}</p>
                  </Badge>
                </Flex>
              </Box>
            </Box>
          </Content>
        </Link>
      )}
    </div>
  );
}

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  font-family: "Inter", sans-serif;
  height: 40px;

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 950px) {
    font-size: 17px;
  }
`;

const Button = styled.button`
  appearance: none;
  border-radius: 4px;

  cursor: pointer;
  display: "inline-flex";
  height: 30px;
  background-color: #6d4bd0;
  color: white;
  font-size: 14px;
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

  p {
    margin: 6px;
  }
`;

const Content = styled.div`
  &:hover {
    h1 {
      color: inherit;
    }
    p {
      color: inherit;
    }
    color: inherit;
  }

  width: 320px;

  @media (max-width: 1000px) {
    width: 300px;
  }

  @media (max-width: 950px) {
    width: 270px;
  }

  @media (max-width: 850px) {
    width: 250%;
  }

  @media (max-width: 810px) {
    width: 380px;
  }

  @media (max-width: 800px) {
    width: 350px;
  }

  @media (max-width: 740px) {
    width: 330px;
  }

  @media (max-width: 700px) {
    width: 300px;
  }

  @media (max-width: 635px) {
    width: 270px;
  }

  @media (max-width: 580px) {
    width: 380px;
    margin-top: 10px;
  }
`;
