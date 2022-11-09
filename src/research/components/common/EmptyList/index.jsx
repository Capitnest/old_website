import React from "react";
import styled from "styled-components";

const EmptyList = () => (
  <>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        marginTop: "75px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src="/images/empty.png" height="350px" width="350px" />
      </div>
      <Title>No content with the selected tag exists</Title>
      <Description>Select another tag</Description>
    </div>
  </>
);

export default EmptyList;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 600;
`;

const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: gray;
`;
