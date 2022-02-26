import React from "react";
import { Layout } from "../components/Layout";
import Tweet from "./components/Tweet";
import { tweets } from "./tweets.js";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import styled from "styled-components";

export default function Feeds() {
  return (
    <Layout>
      <Content>
        <br />
        <h1
          style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "40px",
            fontWeight: "1000",
            textAlign: "center",
          }}
        >
          Top Crypto Tweets
        </h1>

        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Wrap>
            {tweets.map((tweet) => (
              <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                <WrapItem>
                  <Tweet blog={tweet} />
                </WrapItem>
              </div>
            ))}
          </Wrap>
        </div>
      </Content>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
