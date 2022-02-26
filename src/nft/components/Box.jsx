import React from "react";
import {
  Box,
  Avatar,
  Wrap,
  Image,
  WrapItem,
  Flex,
  Badge,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";
import styled from "styled-components";
import { FaTwitterSquare, FaDiscord, FaGlobe } from "react-icons/fa";

export default function Tweet({
  blog: {
    name,
    logo,
    description,
    website,
    release,
    time,
    type,
    blockchain,
    price,
    supply,
    discord,
    twitter,
  },
}) {
  return (
    <Content>
      <Box
        maxW="sm"
        borderWidth="3px"
        borderRadius="lg"
        overflow="hidden"
        borderColor="#019165"
      >
        <Image src={logo} alt="logo" />
        <Badge borderRadius="full" px="2" colorScheme="teal" marginLeft="4px">
          Ethereum
        </Badge>
        <div style={{ padding: "5px" }}>
          <h1 style={{ fontSize: "30px" }}>{name}</h1>
          <ul>
            <li>Release: {release}</li>
            <li>Time: {time}</li>
            <li>Type: {type}</li>
            <li>Supply: {supply}</li>
          </ul>

          <h1 style={{ fontSize: "20px", marginTop: "5px" }}>Price: {price}</h1>
          <Flex marginTop="5px">
            <Popover>
              <PopoverTrigger>
                <Button colorScheme="blue">Description</Button>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>
                  <h1 style={{ fontSize: "20px" }}>Description</h1>
                </PopoverHeader>
                <PopoverBody>{description}</PopoverBody>
              </PopoverContent>
            </Popover>

            <Button marginLeft="5px">
              <a href={website} style={{ display: "flex" }} target="_blank">
                {" "}
                <FaGlobe /> <div style={{ marginLeft: "3px" }}>Website</div>
              </a>
            </Button>
            <Button marginLeft="5px">
              <a href={discord} target="_blank">
                <FaDiscord size={30} />
              </a>
            </Button>
            <Button marginLeft="5px">
              <a href={twitter} target="_blank">
                <FaTwitterSquare size={30} />
              </a>
            </Button>
          </Flex>
        </div>
      </Box>
    </Content>
  );
}

const Content = styled.div`
  font-family: "Inter", sans-serif;

  h1 {
    font-weight: bold;
  }

  a {
    &:hover {
      text-decoration: none;
      color: #04d192;
    }
  }
`;
