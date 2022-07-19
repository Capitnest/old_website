import React from "react";
import { Box, Badge, Flex, useColorMode } from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BlogItem = ({ blog: { title, topic, time, cover, id } }) => {
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
    <Content>
      <Box
        marginRight="5px"
        marginLeft="5px"
        borderWidth="2px"
        borderRadius="4px"
      >
        <Link to={`/learn/post/${id}`}>
          <Image>
            <img src={cover} alt="cover" />
          </Image>
        </Link>
        <div style={{ margin: "6px" }}>
          <Link to={`/learn/post/${id}`}>
            <Title>{title}</Title>
          </Link>

          <Flex justifyContent="space-between" marginTop="10px">
            <Link to={`/learn/post/${id}`}>
              <Button>
                <p>Read more</p>
              </Button>
            </Link>

            <p style={{ fontSize: "18px", fontFamily: "'Inter', sans-serif" }}>
              {time} MIN
            </p>

            <Badge colorScheme={topic_badge_color(topic)} fontSize="16px">
              {topic}
            </Badge>
          </Flex>
        </div>
      </Box>
    </Content>
  );
};

export default BlogItem;

const Content = styled.div``;

const Image = styled.div`
  &:hover {
    filter: brightness(120%);
  }
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: bold;
`;

const Button = styled.button`
  appearance: none;
  border-radius: 4px;

  cursor: pointer;
  display: "inline-flex";
  height: 30px;
  background-color: #6d4bd0;
  color: white;
  font-size: 16px;
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
