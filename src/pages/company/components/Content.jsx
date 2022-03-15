import React from "react";
import { Flex, Center, Box, Avatar } from "@chakra-ui/react";
import styled from "styled-components";

export default function Content() {
  return (
    <Component>
      <Flex marginTop="25px" justifyContent={"center"}>
        <span>
          <Box
            maxW="sm"
            borderWidth="0px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                size="2xl"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp6181763.jpg&f=1&nofb=1"
              />
            </div>
            <h1>Timnik</h1>
            <p style={{ fontSize: "15px", marginTop: "5px" }}>
              CEO & Developer
            </p>
          </Box>
        </span>

        <span>
          <Box
            maxW="sm"
            borderWidth="0px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar size="2xl" src="/images/team/luke.png" />
            </div>
            <h1>Luke</h1>
            <p style={{ fontSize: "15px", marginTop: "5px" }}>CPO</p>
          </Box>
        </span>

        <span>
          <Box
            maxW="sm"
            borderWidth="0px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                size="2xl"
                src="https://cdn.discordapp.com/avatars/435382285089636354/636c2b6077a5b25e4a0c0a1051ede1a5.webp?size=128
"
              />
            </div>
            <h1>BossuJmek</h1>
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Advisor</p>
          </Box>
        </span>

        <span>
          <Box
            maxW="sm"
            borderWidth="0px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                size="2xl"
                src="https://cdn.iconscout.com/company-photo/large/jonhson-subianto-478234.jpg?w=400&h=400&updated_at=1646721731
"
              />
            </div>
            <h1>Jonhson Subianto</h1>
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Ilustrator</p>
          </Box>
        </span>

        <span>
          <Box
            maxW="sm"
            borderWidth="0px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                size="2xl"
                src="https://cdn.iconscout.com/company-photo/large/firmansyaharts-908116.png?w=400&h=400&updated_at=1646727235
"
              />
            </div>
            <h1>FirmansyahArts</h1>
            <p style={{ fontSize: "15px", marginTop: "5px" }}>Ilustrator</p>
          </Box>
        </span>
      </Flex>
    </Component>
  );
}

const Button = styled.button`
  appearance: none;
  border-radius: 4px;

  box-sizing: border-box;
  cursor: pointer;
  display: "inline-flex";
  height: 36px;
  background-color: #6d4bd0;
  padding: 8px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-top: 5px;

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

const Component = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;
  }

  p {
    font-family: "Inter", sans-serif;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }

  span {
    margin-right: 10px;
    margin-left: 10px;
  }
`;
