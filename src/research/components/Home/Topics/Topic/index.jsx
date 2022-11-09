import React from "react";
import { Box } from "@chakra-ui/react";
import styled from "styled-components";

export function Topic(props) {
  return (
    <Box
      p="3"
      borderWidth="2px"
      borderRadius="lg"
      backgroundColor="#1A202C"
      borderColor="#1A202C"
    >
      <div>
        <img src={props.icon} width="50px" />
      </div>
      <Title>{props.name}</Title>
    </Box>
  );
}

const Title = styled.h1`
  font-size: 22px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  margin-top: 10px;
`;
