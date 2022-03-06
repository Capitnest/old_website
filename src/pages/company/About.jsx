import React from "react";
import { Navbar } from "../../components/Navbar";
import styled from "styled-components";

export default function About() {
  return (
    <>
      <Navbar />

      <Content>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "50px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src="/images/logo.png" width="100px" />
          </div>
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
              We are working to be the best place to do research about crypto &
              NFTs
            </h1>
            <p>
              We want to build the best place to see the latest news, get latest
              prices for crypto, interact with other ethusiasts, explore content
              from multiple social media at the same time & more.
            </p>
          </div>
          <img src="/images/about.png" width="650px" />
        </Mission>

        <Mission>
          <img src="/images/join.png" width="500px" />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "100px",
              marginLeft: "30px",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Join us & Help us build this Amazing Company!
            </h1>
            <p>We are currently looking for talented individuals to join us.</p>
          </div>
        </Mission>
      </Content>
    </>
  );
}

const Mission = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Content = styled.div`
  margin-right: 20%;
  margin-left: 20%;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    margin-right: 5%;
    margin-left: 5%;
  }
`;
