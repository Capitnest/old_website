import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import styled from "styled-components";

export default function Header() {
  return (
    <Head>
      <Flex flexDirection={"column"}>
        <h1>Find important news about Crypto & NFTs</h1>
        <p>
          In a industry full of fake news, scams & bad advices find the most
          important & trustworthy news about Cryptocurrency & NFTs.
        </p>
        <Spacer />

        <ButtonN>
          <a href="/register">
            <Button>Sign Up</Button>
          </a>
        </ButtonN>
      </Flex>
      <Imagee>
        <img src="/images/home.png" width="1000px" />
      </Imagee>
    </Head>
  );
}

const Button = styled.button`
  appearance: none;
  border-radius: 4px;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,
    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  box-sizing: border-box;
  cursor: pointer;
  display: "inline-flex";
  height: 40px;
  background-color: #6d4bd0;
  color: white;
  font-size: 18px;
  font-weight: 500;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
    transform: translateY(-2px);
    background-color: #5a35c6;
    color: #e4e4e4;
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 0px inset;
    transform: translateY(2px);
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  img {
    margin-top: 30px;
  }

  h1 {
    font-size: 60px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    margin-top: 80px;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Inter", sans-serif;
  }

  button {
    margin-top: 5px;
    width: 150px;
  }

  a {
    font-family: "Inter", sans-serif;

    &:hover {
    }
  }

  @media (max-width: 1200px) {
    img {
      margin-top: 20px;
      width: 800px;
    }
  }

  @media (max-width: 1100px) {
    img {
      margin-top: 50px;
    }

    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 900px) {
    /* img {
      width: 1100px
    } */
  }

  @media (max-width: 750px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;

    p {
      margin-right: 2%;
      margin-left: 2%;
    }

    h1 {
      font-size: 47px;
      margin-top: 0px;
    }

    img {
      width: 400px;
      margin-bottom: 0px;
    }
  }

  @media (max-width: 650px) {
    p {
      margin-right: 0px;
      margin-left: 0px;
    }

    h1 {
      font-size: 45px;
    }
  }

  @media (max-width: 600px) {
    p {
      font-size: 17px;
    }

    h1 {
      font-size: 41px;
    }
  }
`;

const ButtonN = styled.div`
  @media (max-width: 700px) {
    margin-top: 0px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

const Imagee = styled.div`
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-left: 0px;
    margin-top: 0px;
  }
`;
