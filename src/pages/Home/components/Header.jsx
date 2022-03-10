import React from "react";
import { Flex, Spacer, Button } from "@chakra-ui/react";
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
          <Button colorScheme="teal">
            <a href="/register">Sign Up</a>
          </Button>
        </ButtonN>
      </Flex>
      <Imagee>
        <img src="/images/home.png" width="1200px" />
      </Imagee>
    </Head>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: center;

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
      height: 400px;
    }
  }

  @media (max-width: 1100px) {
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    text-align: center;

    img {
      height: 350px;
      width: 400px;
    }

    p {
      margin-left: 7%;
      margin-right: 7%;
    }

    h1 {
      margin-top: 20px;
    }
  }

  @media (max-width: 750px) {
    p {
      margin-right: 2%;
      margin-left: 2%;
    }

    h1 {
      font-size: 47px;
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
  @media (max-width: 900px) {
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
    margin-left: 70px;
  }
`;
