import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Avatar, Flex, useColorMode } from "@chakra-ui/react";

export const BlogItem = ({
  blog: { title, tags, authorName, date, summary, img },
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <BoxDark>
          <Tags>
            {tags.map((tag) => (
              <TagDark>{tag}</TagDark>
            ))}
          </Tags>
          <Header>
            <Avatar name={authorName} />
            <HeaderText>
              <h1>{authorName}</h1>
              <p>{date}</p>
            </HeaderText>
          </Header>
          <Text>
            <h1>{title}</h1>
            <span>
              <p>{summary}</p>
              <img src={img} />
            </span>
          </Text>
        </BoxDark>
      ) : (
        <BoxLight>
          <Tags>
            {tags.map((tag) => (
              <TagLight>{tag}</TagLight>
            ))}
          </Tags>
          <Header>
            <Avatar name={authorName} />
            <HeaderText>
              <h1>{authorName}</h1>
              <p>{date}</p>
            </HeaderText>
          </Header>
          <Text>
            <h1>{title}</h1>
            <span>
              <p>{summary}</p>
              <img src={img} />
            </span>
          </Text>
        </BoxLight>
      )}
    </>
  );
};

const Header = styled.div`
  margin-top: 10px;
  display: flex;

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-family: "Inter", sans-serif;
    color: gray;
    font-weight: 600;
  }
`;

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  margin-top: 2px;
`;

const Tag = styled.div``;

const Tags = styled.div`
  display: flex;
`;

const TagDark = styled.button`
  font-size: 14px;
  padding: 1px 6px;
  font-family: "Inter", sans-serif;
  border-width: 0px;
  border-radius: 5px;
  margin-right: 7px;
  background-color: rgb(64, 63, 75);
`;

const TagLight = styled.button`
  font-size: 14px;
  padding: 1px 6px;
  font-family: "Inter", sans-serif;
  border-width: 0px;
  border-radius: 5px;
  margin-right: 7px;
  background-color: #e2e8f0;
`;

const BoxLight = styled.div`
  margin-bottom: 20px;
  height: 350px;
  padding: 20px;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: rgb(214, 213, 222);
  background-color: rgb(249, 249, 250);

  font-family: "Inter", sans-serif;

  @media (max-width: 700px) {
    height: 100%;
  }
`;

const BoxDark = styled.div`
  margin-bottom: 20px;
  height: 350px;
  padding: 20px;
  width: 100%;
  border-radius: 5px;
  border-width: 1px;
  border-color: rgb(64, 63, 75);
  background-color: #171923;

  font-family: "Inter", sans-serif;

  @media (max-width: 700px) {
    height: 100%;
  }
`;

const Text = styled.div`
  margin-top: 15px;
  font-family: "Inter", sans-serif;

  h1 {
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 15px;
    margin-right: 30px;
  }

  ul {
    margin-left: 15px;
  }

  img {
    object-fit: cover;
    width: 250px;
    height: 170px;
    border-radius: 5px;
  }

  span {
    margin-top: 10px;
    display: flex;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;

    span {
      display: flex;
      flex-direction: column-reverse;

      img {
        width: 100%;
        height: 250px;
        margin-bottom: 15px;
      }
    }
  }
`;
