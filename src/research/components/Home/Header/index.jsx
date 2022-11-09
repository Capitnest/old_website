import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import styled from "styled-components";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export function Header() {
  return (
    <Head>
      <Text>
        <h1>Your WEB3 journey Starts here</h1>
        <p>
          Learn everything you need to know about cryptocurrencies and
          blockchain technology. We cover all the topics you need to get started
          in the web3 world. How to buy, send, receive, store, understand
          cryptocurrencies. How the blockchain works, how the information is
          decentralized and a lot more! Choose your desired topic and dive in!
        </p>
        <ButtonN>
          <a href="/register">
            <Button>Start Learning</Button>
          </a>
          <a href="/learn/library">
            <ButtonLink>
              Discover more in our library <ArrowForwardIcon />
            </ButtonLink>
          </a>
        </ButtonN>
      </Text>
      <Imagee>
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/crypto-cloud-mining-5401572-4521504.png"
          width="1000px"
        />
      </Imagee>
    </Head>
  );
}

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 120%;

  @media (max-width: 750px) {
    justify-content: center;
  }
`;

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

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 830px) {
    margin-left: 0px;
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

  @media (max-width: 900px) {
    font-size: 16px;
    height: 35px;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 40px;

  img {
    margin-top: 30px;
  }

  h1 {
    font-size: 50px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    margin-top: 100px;
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

  @media (max-width: 1000px) {
    img {
      width: 850px;
      margin-top: 40px;
    }

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 900px) {
    img {
      width: 1000px;
      margin-top: 50px;
    }

    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 800px) {
    img {
      width: 900px;
    }
  }

  @media (max-width: 850px) {
    h1 {
      font-size: 35px;
    }
    p {
      font-size: 16px;
    }
  }

  @media (max-width: 750px) {
    flex-direction: column-reverse;

    h1 {
      text-align: center;
      margin-left: 0px;
      margin-right: 0px;
    }

    img {
      width: 150px;
    }
  }
`;

const ButtonN = styled.div`
  @media (max-width: 900px) {
    width: 140%;
  }

  @media (max-width: 830px) {
    width: 100%;
    display: flex;
    flex-direction: column;

    a {
      margin-top: 5px;
    }
  }

  @media (max-width: 750px) {
    flex-direction: row;
    justify-content: center;
  }

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
