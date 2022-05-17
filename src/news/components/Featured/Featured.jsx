import { Spacer } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export default function Featured() {
  const FeaturedImg =
    "https://static.news.bitcoin.com/wp-content/uploads/2022/03/shutterstock_1261992364.jpg";
  const FeaturedTitle =
    "EU Policymakers may vote on Environmental Standard that could Ban some Cryptocurrencies";

  const PopularImgOne =
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcryptogazette.com%2Fwp-content%2Fuploads%2F2020%2F01%2Felon-musk-1024x597.png&f=1&nofb=1";
  const PopularTitleOne =
    "Elon Musk says that He's not Selling his Crypto Holdings. Bitcoin, Ethereum, Dogecoin";

  const PopularImgTwo =
    "https://static.news.bitcoin.com/wp-content/uploads/2022/02/lana.jpg";
  const PopularTitleTwo =
    "Adult Film Star Lana Rhoades Deletes Twitter Account After NFT Project Was Criticized";

  const PopularImgThree =
    "https://static.news.bitcoin.com/wp-content/uploads/2022/02/ukraine1.jpg";
  const PopularTitleThree =
    "Bitcoin Donations Pour in to Help Ukrainian Military Fight Russia — Over $5 Million in BTC Raised";

  return (
    <>
      <Content>
        <Feature>
          <h1>Featured</h1>
          <a href="/news/5">
            <img src={FeaturedImg} />
          </a>
          <a href="/news/5">
            <h1 style={{ marginTop: "10px" }}>{FeaturedTitle}</h1>
          </a>
          <span>
            <hr />
          </span>
        </Feature>
        <Spacer />
        <Popular>
          <h1>Popular</h1>
          <PopularList>
            <PopularArticle>
              <span>
                <a href="/news/4">
                  <img src={PopularImgOne} />
                </a>
                <a href="/news/4">
                  <h2>{PopularTitleOne}</h2>
                </a>
              </span>
            </PopularArticle>
            <PopularArticle>
              <div>
                <a href="/news/2">
                  <img src={PopularImgTwo} />
                </a>
                <a href="/news/2">
                  <h2>{PopularTitleTwo}</h2>
                </a>
              </div>
            </PopularArticle>
          </PopularList>
          <hr />
        </Popular>
      </Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  font-family: "Inter", sans-serif;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;

  width: 70%;
  flex-wrap: wrap;

  span {
    display: none;
  }

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

  @media (max-width: 800px) {
    width: 90%;
    margin-left: 5%;
    margin-bottom: 20px;

    span {
      display: inline;
    }
  }
`;

const Popular = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;

  hr {
    display: none;
  }

  h1 {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  @media (max-width: 800px) {
    width: 90%;
    margin-left: 4%;
    margin-top: 0px;

    h1 {
      margin-left: 1%;
    }

    hr {
      display: inline;
    }
  }
`;

const PopularList = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 800px) {
    flex-direction: row;
    margin-bottom: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const PopularArticle = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  div {
    margin-top: 20px;
  }

  a {
    &:hover {
      color: gray;
    }
  }

  @media (max-width: 800px) {
    flex: 1 0 50%;

    span {
      margin-right: 10px;
    }

    div {
      margin-top: 0px;
      margin-left: 10px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 20px;

    img {
      border-radius: 20px;
    }

    h2 {
      font-weight: 600;
      font-size: 18px;
      font-family: "Montserrat", sans-serif;
    }
  }
`;
