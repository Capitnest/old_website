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
          <a href="/register">
            <Button>Explore</Button>
          </a>
        </FilterButton>
      </Flex>
      <FilterImage>
        <img
          src="/images/explore.png"
          style={{ marginTop: "-40px" }}
          width="1300px"
        />
      </FilterImage>
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
    box-shadow: #d6d6e7 0 7px 13px 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
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

  @media (max-width: 1200px) {
    margin-top: 60px;
  }

  @media (max-width: 750px) {
    img {
      width: 1000px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    text-align: center;
    flex-direction: column-reverse;

    img {
      width: 500px;
    }
  }
`;

const FilterImage = styled.div`
  @media (max-width: 700px) {
    text-align: center;
    display: flex;
    justify-content: center;

    img {
      display: flex;
      justify-content: center;
    }
  }
`;

const FilterButton = styled.div`
  @media (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;
