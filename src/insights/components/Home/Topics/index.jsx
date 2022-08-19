import React from "react";
import styled from "styled-components";
import { Container, Wrap } from "@chakra-ui/react";
import { Topic } from "./Topic";

export function Topics() {
  return (
    <Content>
      <div style={{ height: "30px" }} />
      <Container maxW="container.lg">
        <Title>Explore Topics</Title>

        <Wrap justifyContent="space-between" width="100%">
          <Topic name="Crypto" icon="/images/learn/icons/crypto.png" />
          <Topic name="Blockchain" icon="/images/learn/icons/blockchain.png" />
          <Topic name="Security" icon="/images/learn/icons/security.png" />
        </Wrap>
      </Container>

      <div style={{ height: "30px" }} />
    </Content>
  );
}

const Title = styled.h1`
  font-size: 30px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Content = styled.div`
  width: 100%;
  margin: 0px;
  background-color: rgba(0, 0, 0, 0.48);
  margin-top: 20px;
`;
