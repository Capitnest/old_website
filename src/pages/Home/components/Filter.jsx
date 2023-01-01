import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function Filter() {
  return (
    <Content>
      <Box
        width="100%"
        backgroundColor="RGBA(0, 0, 0, 0.48)"
        borderRadius="10px"
        padding="36px 50px"
      >
        <Columns>
          <div className="column1">
            <Tag style={{ fontFamily: '"Unbounded", cursive' }}>FEEDS</Tag>
            <h1 style={{ fontFamily: '"Unbounded", cursive' }}>
              Latest News in a Twitter-like format
            </h1>

            <Benefits>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                Scroll and read all the important news of the day
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                Takes 2-7 minutes to read all the news of the day
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                Timestamp, Coin & Popularity filters
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                News & Posts from different platforms (different websites &
                twitter)
              </p>
            </Benefits>
          </div>
          <div className="column2">
            <img src="/images/pages/home/feeds.png" height="300px" />
          </div>
        </Columns>
      </Box>
    </Content>
  );
}

const Columns = styled.div`
  display: flex;

  .column1 {
    width: 60%;
  }

  .column2 {
    width: 40%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;

    .column1 {
      width: 100%;
    }

    .column2 {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

const Benefits = styled.div`
  p {
    display: flex;
  }
`;

const Tag = styled.p`
  font-size: 20px;
  margin-top: 0px;
  font-family: "Unbounded", cursive;
  color: #04d192;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 48px;
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

  @media (max-width: 1010px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 890px) {
    p {
      font-size: 16px;
    }

    h1 {
      font-size: 36px;
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
