import React from "react";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export default function Filter() {
  return (
    <Content>
      <FilterImage>
        <img
          src="/images/filter.png"
          style={{ marginRight: "40px", marginTop: "-40px" }}
          width="900px"
        />
      </FilterImage>
      <Flex direction={"column"}>
        <h1>We filter through the bad and only show you the good</h1>
        <p>
          We filter through hundrends of different sources and only show to you
          the legit & high-quality content.
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
