import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { RiArticleFill } from "react-icons/ri";

export const Banner = ({ title, image, description, link }) => (
  <Card>
    <img src={image} alt="BannerImage" width={"250px"} height={"150px"} />

    <Title>{title}</Title>
    <Description>{description}</Description>
    <Submit>
      <Button
        style={{
          backgroundColor: "#04d192",
          borderColor: "#04d192",
          fontFamily: "Inter, sans-serif",
        }}
        href={link}
      >
        <RiArticleFill /> Read More
      </Button>
    </Submit>
  </Card>
);

const Title = styled.h1`
  margin-top: 10px;
  font-family: "Inter", sans-serif;
  font-size: 28px;
  font-weight: 600;
  color: rgb(73, 84, 90);
`;

const Description = styled.p`
  font-size: 15px;
`;

const Card = styled.div`
  text-align: center;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  color: rgb(73, 84, 90);
  border-radius: 25px;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  width: 350px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  box-sizing: border-box;
  border-color: rgb(237, 242, 247);
  border-left-width: 1px;
  border-right-width: 1px;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 8px;
  border-top-style: solid;

  margin-right: 30px;
  margin-left: 30px;

  @media (max-width: 1200px) {
    margin-right: 10px;
    margin-left: 10px;
  }

  @media (max-width: 1100px) {
    margin-right: 5px;
    margin-left: 5px;
  }

  @media (max-width: 1050px) {
    margin-right: 0px;
    margin-left: 0px;
  }

  @media (max-width: 1000px) {
    margin-top: 20px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 8px 10px 0.5px,
      rgba(0, 0, 0, 0.06) 0px 6px 8px 5px;
    position: relative;
    top: -2px;
  }
`;

const Submit = styled.div`
  button {
    &:hover {
      color: black;
    }
  }
`;
