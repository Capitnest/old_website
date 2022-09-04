import React from "react";
import { Box, Container } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import Footer from "./Footer";
import ScrollButton from "./ScrollButton";
import styled from "styled-components";

export function Layout({ children }) {
  return (
    <Box mb={16}>
      <Navbar />
      <Scroll>
        <ScrollButton />
      </Scroll>
      <br />
      <br />
      <br />
      <br />
      <Container maxW="container.lg">{children}</Container>
    </Box>
  );
}

const Scroll = styled.span`
  @media (max-width: 920px) {
    button {
      margin-bottom: 30px;
    }
  }
`;
