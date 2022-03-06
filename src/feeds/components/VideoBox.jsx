import React from "react";
import { Box, Avatar, Wrap, WrapItem, Flex } from "@chakra-ui/react";
import styled from "styled-components";

export default function VideoBox({ blog: { source, sourceName, src, title } }) {
  return (
    <Content>
      <Box
        maxW="md"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
        borderColor="#019165"
      >
        <iframe
          allowFullScreen="allowFullScreen"
          src={
            "https://www.youtube.com/embed/" +
            src +
            "?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=650&amp;width=650"
          }
          width="443"
          height="247"
          allowtransparency="true"
          frameborder="0"
        ></iframe>
        <div style={{ padding: "10px" }}>
          <a href={source} target="_blank">
            {sourceName}
          </a>
          <h1 style={{ fontSize: "20px" }}>{title}</h1>
        </div>
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
