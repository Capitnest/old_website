import React from "react";
import styled from "styled-components";

import { Layout } from "../../components/Layout";
import Footer from "../../components/Footer";
import { Wrap, Avatar } from "@chakra-ui/react";

import Content from "./components/Content";

export default function Company() {
  return (
    <>
      <Layout>
        <Page>
          <a name="about" />
          <br />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              marginTop: "100px",
            }}
          >
            <h1
              style={{
                fontSize: "40px",
                textAlign: "center",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              About Capitnest
            </h1>
          </div>

          <Mission>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "100px",
              }}
            >
              <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
                We are working to be the best place to do research about crypto
                & NFTs
              </h1>
              <p>
                We want to build the best place to see the latest news, get
                latest prices for crypto, interact with other ethusiasts,
                explore content from multiple social media at the same time &
                more.
              </p>
            </div>
            <img src="/images/team.png" width="650px" />
          </Mission>

          <a name="team" />

          <br />
          <br />
          <br />

          <h1
            style={{
              fontSize: "40px",
              textAlign: "center",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            Meet Our Team
          </h1>

          <Content />
        </Page>
      </Layout>

      <Footer />
    </>
  );
}

const Mission = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Page = styled.div`
  font-family: "Inter", sans-serif;
`;
