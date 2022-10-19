import React from "react";
import { Box, Badge, Flex, useColorMode, Avatar } from "@chakra-ui/react";
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
      <Box
        marginRight="5px"
        marginLeft="5px"
        borderWidth="1px"
        borderRadius="4px"
        display="flex"
        flexDirection="column"
        style={{
          backgroundColor: (() => {
            if (colorMode === "light") {
              return "#E2E8F0";
            } else {
              return "rgba(255, 255, 255, 0.04)";
            }
          })(),
          borderColor: (() => {
            if (colorMode === "light") {
              return "#A0AEC0";
            } else {
              return "rgba(255, 255, 255, 0.24)";
            }
          })(),
        }}
      >
        <Link to={`/learn/post/${id}`}>
          <Image>
            <img src={cover} alt="cover" style={{ borderRadius: "4px" }} />
          </Image>
        </Link>
        <div style={{ margin: "6px" }}>
          <Link to={`/learn/post/${id}`}>
            {colorMode === "dark" ? (
              <TitleDark>{title}</TitleDark>
            ) : (
              <TitleWhite>{title}</TitleWhite>
            )}
          </Link>

          <Flex>
            <Flex>
              <Avatar
                src={`/images/team/${authorUsername}.png`}
                height={35}
                width={35}
              />
              <Flex flexDirection="column" marginTop="-2px" marginLeft="3px">
                <Link to={`/team/${authorUsername}`}>
                  <Flex>
                    <h1
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        fontWeight: "bold",
                        marginLeft: "4px",
                      }}
                    >
                      {author}
                    </h1>

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
                </Link>
                <p style={{ color: "gray", marginLeft: "4px" }}>{date}</p>
              </Flex>
            </Flex>
          </Flex>

          <Flex justifyContent="space-between" marginTop="20px">
            <Link to={`/learn/post/${id}`}>
              <Button>
                <p>Read more</p>
              </Button>
            </Link>

            <p
              style={{
                fontSize: "16px",
                fontFamily: "'Inter', sans-serif",
                marginTop: "4px",
              }}
            >
              {time} min
            </p>

            <Badge
              colorScheme={topic_badge_color(topic)}
              fontSize="16px"
              textTransform="lowercase"
            >
              <div style={{ marginTop: "5px", textAlign: "center" }}>
                {topic}
              </div>
            </Badge>
          </Flex>
        </div>
      </Box>
    </Content>
  );
};

export default BlogItem;

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

  &:hover {
    filter: brightness(120%);
  }

  @media (max-width: 800px) {
    img {
      height: 250px;
      width: 100%;
    }
  }
`;

const TitleDark = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: bold;
  height: 40px;

  &:hover {
    color: rgba(255, 255, 255, 0.48);
  }
`;

const TitleWhite = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: bold;
  height: 40px;

  &:hover {
    color: rgba(0, 0, 0, 0.64);
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
