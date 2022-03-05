import React, { useState } from "react";
import { Box, Avatar, Wrap, WrapItem, Flex, Button } from "@chakra-ui/react";
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
  return (
    <Content>
      <Box
        maxW="lg"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
        padding="5px"
        borderColor="#019165"
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

              <div style={{ marginLeft: "100px", marginTop: "16px" }}>
                <p style={{ color: "gray" }}>Posted on {date}</p>
              </div>
            </Flex>
          </Flex>
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
