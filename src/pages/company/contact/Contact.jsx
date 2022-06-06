import React from "react";
import { Layout } from "../../../components/Layout";
import styled from "styled-components";
import { chakra, Flex } from "@chakra-ui/react";
import Footerr from "../../../components/Footer";

export default function Contact() {
  return (
    <>
      <Layout>
        <Content>
          <Title>Contact Us</Title>
          <hr />
          <Description>You can contact us at capitnest@proton.me</Description>

          <div style={{ height: "450px" }}></div>
        </Content>
      </Layout>
      <Footerr />
    </>
  );
}

const Content = styled.div``;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  font-family: "Libre Baskerville", serif;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;

  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  margin-top: 20px;

  font-size: 18px;

  margin-bottom: 20px;
`;
