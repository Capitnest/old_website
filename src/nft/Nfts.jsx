import React from "react";
import { Navbar } from "../components/Navbar";
import Box from "./components/Box";
import { nftList } from "./nft.js";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import styled from "styled-components";

export default function Nfts() {
  return (
    <>
      <Navbar />

      <Content>
        <br />
        <h1
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "40px",
            fontWeight: "1000",
          }}
        >
          Upcomming NFTs
        </h1>

        <Wrap>
          {nftList.map((tweet) => (
            <div style={{ marginTop: "10px", marginBottom: "10px" }}>
              <WrapItem>
                <Box blog={tweet} />
              </WrapItem>
            </div>
          ))}
        </Wrap>
      </Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 18%;
  margin-left: 18%;

  @media (max-width: 1200px) {
    margin-right: 5%;
    margin-left: 5%;
  }
`;
