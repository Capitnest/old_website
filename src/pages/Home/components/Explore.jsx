import React from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export default function Explore() {
  return (
    <Content>
      <Flex direction={"column"}>
        <h1>Zoom Out & See from all the different angles</h1>
        <p>
          It's hard to understand information from tens of different sources. We
          get you to the truth by zooming out. By seeing and hearing everything
          from everywhere. From every social media, news website & platform.
        </p>
        <FilterButton>
          <Button>
            <a href="/register">Explore</a>
          </Button>
        </FilterButton>
      </Flex>
      <FilterImage>
        <img
          src="/images/explore.png"
          style={{ marginRight: "40px", marginTop: "-40px" }}
          width="1300px"
        />
      </FilterImage>
    </Content>
  );
}

const Button = styled.button`
  appearance: button;
  background-color: #191919;
  background-image: none;
  border: 1px solid #191919;
  border-radius: 4px;
  box-shadow: rgb(172, 44, 255) 4px 4px 0 0, #191919 4px 4px 0 1px;
  box-sizing: border-box;
  color: rgb(172, 44, 255);
  cursor: pointer;
  display: inline-block;

  font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  margin: 0 5px 10px 0;
  overflow: visible;
  padding: 12px 40px;
  text-align: center;
  text-transform: none;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus {
    text-decoration: none;
  }

  &:hover {
    text-decoration: none;
    background-color: #161616;
    color: #9619e7;
  }

  &:active {
    box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
    outline: 0;
  }

  &:not([disabled]):active {
    box-shadow: rgb(172, 44, 255) 2px 2px 0 0, #191919 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }

  @media (min-width: 768px) {
    padding: 12px 50px;
  }

  a {
    &:hover {
      text-decoration: none;
      color: #9619e7;
    }
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

  @media (max-width: 1200px) {
    h1 {
      font-size: 35px;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 900px) {
    h1 {
      font-size: 25px;
    }
  }

  @media (max-width: 750px) {
    img {
      width: 1000px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;

    img {
      width: 400px;
    }
  }
`;

const FilterImage = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const FilterButton = styled.div`
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;
