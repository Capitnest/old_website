import { Box } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import { Card } from "../../common/Card";

export function Featured() {
  return (
    <>
      <Title>Trending Topics</Title>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Card
          title="How crypto is being stolen"
          time="6"
          topic="security"
          img="/images/learn/how-crypto-gets-stolen-and-how-to-protect-your-crypto.png "
        />
        <Card
          title="How crypto is being stolen"
          time="6"
          topic="security"
          img="/images/learn/how-crypto-gets-stolen-and-how-to-protect-your-crypto.png "
        />
        <Card
          title="How crypto is being stolen"
          time="6"
          topic="security"
          img="/images/learn/how-crypto-gets-stolen-and-how-to-protect-your-crypto.png "
        />
      </div>
    </>
  );
}

const Title = styled.h1`
  font-size: 30px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  margin-top: 100px;
  margin: 10px;
`;
