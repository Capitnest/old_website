import React from "react";
import { Box, Flex, Wrap, WrapItem, Avatar, Button } from "@chakra-ui/react";
import Like from "./../../../feeds/components/Like";
import Report from "./../../../feeds/components/Report";
import { FaGlobe } from "react-icons/fa";
import styled from "styled-components";

export default function News() {
  return (
    <div>
      Treding News
      <Flex>
        <Box
          backgroundColor="rgb(18, 22, 22)"
          borderRadius="4px"
          padding="16px"
          border="2px solid black"
          display="flex"
          flexDirection="column"
          borderColor="#019165"
        >
          <Wrap>
            <WrapItem>
              <a href="https://www.cryptopanic.com" target="_blank">
                <Avatar
                  name="CryptoPanic"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsteemitimages.com%2FDQmXUH6jKiNfegCPksgS5eLPhZDpLjakckTSvj3xB7Mp9ns%2Fcryptopanic-coin.png&f=1&nofb=1"
                />
              </a>
              <Flex flexDirection="column">
                <a href="https://www.cryptopanic.com" target="_blank">
                  <h1 style={{ marginLeft: "5px" }}>CryptoPanic</h1>
                </a>
                <a
                  style={{ marginLeft: "5px" }}
                  href="https://www.cryptopanic.com"
                  target="_blank"
                >
                  cryptopanic.com
                </a>
              </Flex>
            </WrapItem>
            <Flex flexDirection="column">
              <WrapItem>
                Elon Musk Won't Sell His Bitcoin, Reveals What Assets to Hold
                During HIgh Inflation
              </WrapItem>
            </Flex>
          </Wrap>
        </Box>
      </Flex>
    </div>
  );
}

const Date = styled.p`
  font-size: 16px;
  color: gray;
  margin-top: 16px;
  margin-bottom: 0px;
  margin-left: 39%;

  @media (max-width: 1038px) {
    margin-left: 160px;
  }

  @media (max-width: 1000px) {
    margin-left: 160px;
  }

  @media (max-width: 980px) {
    margin-left: 150px;
  }

  @media (max-width: 960px) {
    margin-left: 130px;
  }

  @media (max-width: 940px) {
    margin-left: 130px;
  }

  @media (max-width: 920px) {
    margin-left: 120px;
  }

  @media (max-width: 900px) {
    margin-left: 110px;
  }

  @media (max-width: 850px) {
    position: static;
    top: 0px;
    left: 0px;
    margin-left: 100px;
    margin-top: 18px;
    margin-bottom: 0px;
    margin-right: 2px;
  }
`;
