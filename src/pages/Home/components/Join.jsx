import React from "react";
import { Flex, Stack, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//ICONS
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

export default function Join() {
  return (
    <Content>
      <h1>
        Stop wasting time on multiple platforms and use{" "}
        <span style={{ color: "#04d192" }}> Capitnest</span>
      </h1>

      <Link
        to="/register"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
          marginBottom: "60px",
        }}
      >
        <Button
          width="164px"
          height="52px"
          borderRadius="99px"
          fontFamily='"Unbounded", cursive'
          fontWeight="400"
          fontSize="20px"
          colorScheme="green"
          marginRight="10px"
          backgroundColor="#04d192"
        >
          Register
        </Button>
      </Link>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  button:hover {
    transform: scale(1.05) perspective(1px);
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
    font-family: "Unbounded", cursive;
    text-align: center;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Inter", sans-serif;
  }

  button {
    width: 150px;
    margin-left: -6px;
  }

  a {
    font-family: "Inter", sans-serif;

    &:hover {
    }
  }

  @media (max-width: 590xp) {
    h1 {
      font-size: 20px;
    }
  }

  @media (max-width: 300px) {
    h1 {
      font-size: 35px;
    }
  }
`;
