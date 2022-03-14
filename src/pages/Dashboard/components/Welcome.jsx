import React from "react";
import { useAuth } from "../../../contexts/AuthContext";
import styled from "styled-components";

export default function Welcome() {
  const { currentUser } = useAuth();

  return (
    <>
      {currentUser.displayName !== null ? (
        <Title>Welcome, {currentUser.displayName}!</Title>
      ) : (
        <Title>Welcome!</Title>
      )}
    </>
  );
}

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
