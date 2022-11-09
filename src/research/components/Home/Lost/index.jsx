import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import styled from "styled-components";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export function Lost() {
  return (
    <Head>
      <Flex flexDirection={"column"} width="100%" marginLeft="50px">
        <p style={{ marginTop: "40px" }}>THE CLASSROOM</p>
        <h1>Are you lost?</h1>
        <p>
          Are you lost? Don't know where to start? You can start learning about
          crypto by following our small introduction lecture. Get a basic
          understanding of the web3 space. Learn what is the blockchain, how the
          blockchain works, what are cryptocurrencies, how to buy
          cryptocurrencies, what tools to use & more.
        </p>

        <ButtonN>
          <a href="/register">
            <Button>Start Learning</Button>
          </a>
        </ButtonN>
      </Flex>
      <Imagee>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/lost-wifi-signal-at-home-4898712-4075539.png"
          width="700px"
        />
      </Imagee>
    </Head>
  );
}

const ButtonLink = styled.a`
  margin-left: 20px;
  font-size: 18px;
  text-decoration: underline;
  text-underline-position: under;
  color: #ba55d3;
  font-weight: bold;

  &:hover {
    margin-left: 22px;
    color: #6d4bd0;
  }
`;

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
  justify-content: space-between;
  flex-direction: row-reverse;
  margin-top: 30px;
  margin-bottom: 40px;

  img {
    margin-top: 30px;
  }

  h1 {
    font-size: 50px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
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

    margin-bottom: 80px;
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
    img {
      width: 1000px;
    }

    h1 {
      font-size: 45px;
    }
  }

  @media (max-width: 800px) {
    img {
      width: 900px;
    }
  }

  @media (max-width: 750px) {
    margin-top: 0px;
    img {
      width: 1000px;
      margin-top: 70px;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 680px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 600px) {
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

  @media (max-width: 600px) {
    p {
      font-size: 17px;
    }

    h1 {
      font-size: 41px;
    }
  }

  @media (max-width: 330px) {
    h1 {
      font-size: 37px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 300px) {
    h1 {
      font-size: 34px;
    }
  }

  @media (max-width: 280px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const ButtonN = styled.div`
  margin-top: 10px;

  @media (max-width: 600px) {
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
