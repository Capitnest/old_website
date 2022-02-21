import React from "react";
import { Box, Avatar, Wrap, WrapItem, Flex } from "@chakra-ui/react";
import styled from "styled-components";

export default function Tweet({
  blog: {
    id,
    authorName,
    authorUsername,
    authorProfilePic,
    authorLink,
    tweet,
    date,
  },
}) {
  return (
    <Content>
      <Box
        maxW="sm"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
        padding="5px"
        borderColor="#019165"
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
            <Flex justifyContent="right">
              <p style={{ fontSize: "15px", marginLeft: "50px" }}>{date}</p>
            </Flex>
          </WrapItem>
          <WrapItem>{tweet}</WrapItem>
        </Wrap>
      </Box>
    </Content>
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
`;
