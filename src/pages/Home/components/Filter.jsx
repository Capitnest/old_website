import React from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export default function Filter() {
  return (
    <Content>
      <FilterImage>
        <img
          src="/images/pages/home/feeds.png"
          style={{ marginTop: "-90px" }}
          width="1400px"
        />
      </FilterImage>
      <Flex direction={"column"}>
        <h1>Never be left behind</h1>
        <p>
          Always be up to date to the latest news & updates in the web3 world.
          We filter through thousands of different sources and show you a
          summary of articles & tweets through a twitter-like interface.
        </p>
        <FilterButton>
          <a href="/register">
            <Button>Sign Up</Button>
          </a>
        </FilterButton>
      </Flex>
    </Content>
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

const Content = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
  }
  p {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Inter", sans-serif;
  }
  button {
    margin-top: 20px;
    width: 150px;
  }
  a {
    font-family: "Inter", sans-serif;
    &:hover {
    }
  }

  @media (max-width: 1100px) {
    h1 {
      margin-top: -30px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 40px;
      margin-top: -70px;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 35px;
      margin-top: -60px;
    }
  }

  @media (max-width: 750px) {
    h1 {
      font-size: 28px;
    }
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 25px;
      margin-top: -70px;
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;

    h1 {
      margin-top: 10px;
      font-size: 35px;
    }
  }

  @media (max-width: 370px) {
    h1 {
      font-size: 30px;
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 310px) {
    h1 {
      font-size: 27px;
    }
  }

  @media (max-width: 285px) {
    h1 {
      font-size: 25px;
    }
  }
`;

const FilterImage = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-left: 2%;

  img {
    margin-right: 40px;
  }
  @media (max-width: 600px) {
    margin-left: 0px;
    margin-left: 0px;
    display: flex;
    justify-content: center;
    text-align: center;
    img {
      margin-right: 0px;
      width: 450px;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
  }
`;

const FilterButton = styled.div`
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;
