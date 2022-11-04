import React from "react";
import { Badge, Flex, useColorMode, Avatar } from "@chakra-ui/react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdVerified } from "react-icons/md";

const BlogItem = ({
  blog: {
    title,
    topic,
    time,
    cover,
    id,
    description,
    date,
    authorUsername,
    isVerified,
    author,
  },
}) => {
  const { colorMode, toggleColorMode } = useColorMode();

  function topic_badge_color(topic) {
    if (topic === "security") {
      return "teal";
    } else if (topic === "blockchain") {
      return "blue";
    } else if (topic === "crypto") {
      return "green";
    } else if (topic === "exchanges") {
      return "purple";
    } else {
      return "green";
    }
  }

  return (
    <Content>
      <Link to={`/learn/post/${id}`} style={{ color: "inherit" }}>
        <Box
          border
          display="flex"
          flexDirection="column"
          style={{
            backgroundColor: (() => {
              if (colorMode === "light") {
                return "rgb(249, 249, 250)";
              } else {
                return "#171923";
              }
            })(),
            borderColor: (() => {
              if (colorMode === "light") {
                return "rgb(214, 213, 222)";
              } else {
                return "rgb(64, 63, 75)";
              }
            })(),
          }}
        >
          <Image>
            <img src={cover} alt="cover" style={{ borderRadius: "4px" }} />
          </Image>

          <Tag
            textTransform="lowercase"
            style={{
              backgroundColor: (() => {
                if (colorMode === "light") {
                  return "#e2e8f0";
                } else {
                  return "rgb(64, 63, 75)";
                }
              })(),
            }}
          >
            <div style={{ textAlign: "center" }}>#{topic}</div>
          </Tag>

          <h1>{title}</h1>

          <Flex>
            <Flex>
              <Avatar
                src={`/images/team/${authorUsername}.png`}
                height={35}
                width={35}
              />
              <Flex flexDirection="column" marginLeft="3px">
                <Flex>
                  <h2
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginLeft: "4px",
                    }}
                  >
                    {author}
                  </h2>

                  {isVerified ? (
                    <MdVerified
                      style={{ marginLeft: "3px" }}
                      size="17"
                      color="#4299e1"
                    />
                  ) : (
                    <></>
                  )}
                </Flex>

                <p style={{ color: "gray", marginLeft: "4px" }}>{date}</p>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Link>
    </Content>
  );
};

export default BlogItem;

const Tag = styled.div`
  font-size: 15px;
  padding: 0px 6px;
  font-family: "Inter", sans-serif;
  border-width: 0px;
  border-radius: 5px;
  width: max-content;
  margin-top: 10px;
  margin-bottom: -8px;
`;

const Box = styled.div`
  border-radius: 5px;
  width: 320px;
  padding: 12px 12px 12px;
  border-width: 1px;

  h1 {
    font-size: 18px;
    height: 44px;
    margin-top: 15px;
    font-weight: 600;
  }

  &:hover {
    margin-top: -2px;
  }
`;

const Content = styled.div`
  @media (max-width: 800px) {
    margin-bottom: 20px;
  }
`;

const Image = styled.div`
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 800px) {
    img {
      height: 250px;
      width: 100%;
    }
  }
`;

const Button = styled.button`
  appearance: none;
  border-radius: 4px;

  cursor: pointer;
  display: "inline-flex";
  height: 30px;
  background-color: #6d4bd0;
  color: white;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,
      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;
  }

  &:hover {
    transform: translateY(-2px);
    background-color: #5a35c6;
    color: #e4e4e4;
  }

  &:active {
    box-shadow: #d6d6e7 0 3px 0px inset;
    transform: translateY(2px);
  }

  p {
    margin: 6px;
  }
`;
