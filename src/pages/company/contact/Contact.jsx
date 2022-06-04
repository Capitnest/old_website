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
          <Description>
            Capitnest was founded in 2020 with a simple mission: get people to
            the truth in crypto.
            <br />
            <br />
            Capitnest collects social information from hundreds of different
            sources and filter through them to get people to the truth. We
            collect information from articles, social media, videos & websites
            and use algorithms to filter them. In a world full of rug pulls,
            scams & bad advices we get people to the trusted and truthful
            information.
            <br />
            <br />
            Capitnest fully independent and is funded only by our users &
            advertisers. We don't sell your personal information, we simply
            partner with brands to display their product on our website as an
            advertisment.
            <br />
            <br />
            Our aim is not to build the next billion dollar crypto startup, but
            to build a trusted website from where people get the truth.
          </Description>

          <div style={{ height: "30px" }}></div>
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
