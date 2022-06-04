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
          <Title>Grow your brand with Capitnest</Title>
          <hr />
          <Description>
            Want to advertise to a global community of technology and finance
            entusiasts? Step this way. Capitnest will expose your brand to a new
            web3 community.
          </Description>

          <div style={{ height: "30px" }}></div>

          <Title>How to partner with us</Title>
          <hr />

          <Description>
            We partner with brands in the following ways:
          </Description>

          <SmallTitle>Feeds Banner</SmallTitle>
          <hr />

          <Description>
            Banner on the most visited & used section on our website.
            <br /> <br />
            <img src="/images/ads/banner.png" width="600px" />
            <br /> <br />
            <span style={{ fontStyle: "italic" }}>Priced per month</span>
            <br /> <br />
            <ul style={{ marginLeft: "15px" }}>
              <li>Banner visibled on all screens size</li>
              <li>Visibility on the most used section on the website</li>
            </ul>
            <br />
            Advertisment Banner can be static (image) or a max 10s video.
            <br />
            <br />
            Desktop Banner Size: 150x150 - 150x300 pixels
            <br />
            Mobile Banner Size: 40x380 pixels (the image will be automatically
            made smaller on smaller screens)
          </Description>

          <div style={{ height: "30px" }}></div>

          <SmallTitle>Post Advertisement</SmallTitle>
          <hr />

          <Description>
            A custom post on the general page on Feeds.
            <br /> <br />
            <img src="/images/ads/post.png" width="600px" />
            <br /> <br />
            <span style={{ fontStyle: "italic" }}>Priced per day</span>
            <br /> <br />
            <ul style={{ marginLeft: "15px" }}>
              <li>Integrated Design</li>
              <li>Visibility on the most used section on the website</li>
              <li>Visible on all screens size</li>
            </ul>
            <br />
            The Image of the post (which is optional) can only be static.
            <br />
            Image Size: Any (the image will automatically scale down if the
            resolution its too big)
            <br />
            <br />
            Header Character Limit: 350 max (the text above the image)
            <br />
            Description Character Limit: 200 max (the text below the image)
            <br />
          </Description>
        </Content>
      </Layout>
      <Footerr />
    </>
  );
}

const Content = styled.div``;

const SmallTitle = styled.h1`
  font-family: "Inter", sans-serif;

  font-family: "Libre Baskerville", serif;
  font-weight: bold;
  font-size: 25px;
  margin-top: 20px;
  margin-bottom: 10px;
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
