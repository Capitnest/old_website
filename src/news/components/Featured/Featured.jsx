import { Spacer } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";
import useScript from "../../../functions/useScript";

export default function Featured() {
  const FeaturedImg =
    "https://static.news.bitcoin.com/wp-content/uploads/2022/02/bitconnect.jpg";
  const FeaturedTitle =
    "US Charges Indian Citizen in $3.4 Billion Crypto Ponzi Scheme Bitconnect";
  const FeaturedDate = "February 27, 2022";

  const PopularImgOne =
    "https://static.news.bitcoin.com/wp-content/uploads/2022/02/lana.jpg";
  const PopularTitleOne =
    "Adult Film Star Lana Rhoades Deletes Twitter Account After NFT Project Was Criticized";

  const PopularImgTwo =
    "https://static.news.bitcoin.com/wp-content/uploads/2022/02/putin.jpg";
  const PopularTitleTwo =
    "Analysts Warn of Regulatory Risks if Russia Is Able to Use Crypto to Evade Sanctions";

  const PopularImgThree =
    "https://static.news.bitcoin.com/wp-content/uploads/2022/02/ukraine1.jpg";
  const PopularTitleThree =
    "Bitcoin Donations Pour in to Help Ukrainian Military Fight Russia — Over $5 Million in BTC Raised";

  return (
    <>
      <Content>
        <Feature>
          <h1 style={{ fontStyle: "italic" }}>Featured</h1>
          <a href="/fds">
            <img src={FeaturedImg} />
          </a>
          <a href="/vfs">
            <h1 style={{ marginTop: "10px" }}>{FeaturedTitle}</h1>
          </a>
          <p>{FeaturedDate}</p>
          {useScript("https://www.livecoinwatch.com/static/lcw-widget.js")}
          <script
            defer
            src="https://www.livecoinwatch.com/static/lcw-widget.js"
          ></script>{" "}
          <div
            class="livecoinwatch-widget-5"
            lcw-base="USD"
            lcw-color-tx="#abb8c3"
            lcw-marquee-1="coins"
            lcw-marquee-2="movers"
            lcw-marquee-items="10"
          ></div>
        </Feature>
        <Spacer />
        <Popular>
          <h1>Popular</h1>
          <PopularArticle>
            <a href="/d">
              <img src={PopularImgOne} />
            </a>
            <a href="das/">
              <h2>{PopularTitleOne}</h2>
            </a>
          </PopularArticle>
          <PopularArticle>
            <a href="bf">
              <img src={PopularImgTwo} />
            </a>
            <a href="/das">
              <h2>{PopularTitleTwo}</h2>
            </a>
          </PopularArticle>
          <PopularArticle>
            <a href="fds">
              <img src={PopularImgThree} />
            </a>
            <a href="/dsa">
              <h2>{PopularTitleThree}</h2>
            </a>
          </PopularArticle>
        </Popular>
      </Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  font-family: "Inter", sans-serif;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  flex-wrap: wrap;

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  a {
    &:hover {
      color: gray;
    }
  }
`;

const Popular = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    font-style: italic;
  }
`;

const PopularArticle = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin-top: 5px;
    margin-bottom: 5px;
  }

  a {
    &:hover {
      color: gray;
    }
  }
`;
