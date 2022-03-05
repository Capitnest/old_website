import React, { useState } from "react";
import { Layout } from "../components/Layout";
import Tweet from "./components/Tweet";
import { tweets } from "./tweets.js";
import { influencers } from "./influencers";
import { Flex, Wrap, WrapItem } from "@chakra-ui/react";
import styled from "styled-components";
import Influencer from "./components/Influencer";
import useScript from "./../functions/useScript";
import SearchBox from "./components/SearchBox";

export default function Feeds() {
  const [blogs, setBlogs] = useState(tweets);
  const [searchKey, setSearchKey] = useState("");

  //Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  //Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = tweets;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.tweet.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  //Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(tweets);
    setSearchKey("");
  };

  return (
    <Layout>
      <Content>
        <br />
        <br />
        <br />
        <br />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="scrollbarParent"
        >
          <div
            style={{
              width: "50%",
              marginRight: "40px",
            }}
          >
            <div
              style={{
                position: "fixed",
                backgroundColor: "white",
                zIndex: 1,
                width: "496px",
              }}
            >
              <SearchBox
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              {blogs.map((tweet) => (
                <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <WrapItem>
                    <Tweet blog={tweet} />
                  </WrapItem>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              marginTop: "10px",
            }}
          >
            <RightNavbar>
              <SmallerTitle>Top Influencers</SmallerTitle>
              <Wrap width="300px">
                {influencers.map((influ) => (
                  <div style={{ marginTop: "5px", marginBottom: "8px" }}>
                    <WrapItem>
                      <Influencer blog={influ} />
                    </WrapItem>
                  </div>
                ))}
              </Wrap>

              <SmallerTitle style={{ marginBottom: "10px", marginTop: "5px" }}>
                Top Social Cryptocurrencies
              </SmallerTitle>
              <Wrap>
                {useScript(
                  "https://www.livecoinwatch.com/static/lcw-widget.js"
                )}
                <script
                  defer
                  src="https://www.livecoinwatch.com/static/lcw-widget.js"
                ></script>{" "}
                <div
                  class="livecoinwatch-widget-6"
                  lcw-coin="BTC"
                  lcw-base="USD"
                  lcw-period="d"
                  lcw-color-tx="#ffffff"
                  lcw-color-bg="#1f2434"
                  lcw-border-w="0"
                ></div>
                <div
                  class="livecoinwatch-widget-6"
                  lcw-coin="ETH"
                  lcw-base="USD"
                  lcw-period="d"
                  lcw-color-tx="#ffffff"
                  lcw-color-bg="#1f2434"
                  lcw-border-w="0"
                ></div>
                <div
                  class="livecoinwatch-widget-6"
                  lcw-coin="BNB"
                  lcw-base="USD"
                  lcw-period="d"
                  lcw-color-tx="#ffffff"
                  lcw-color-bg="#1f2434"
                  lcw-border-w="0"
                ></div>
                <div
                  class="livecoinwatch-widget-6"
                  lcw-coin="XRP"
                  lcw-base="USD"
                  lcw-period="d"
                  lcw-color-tx="#ffffff"
                  lcw-color-bg="#1f2434"
                  lcw-border-w="0"
                ></div>
                <div
                  class="livecoinwatch-widget-6"
                  lcw-coin="LUNA"
                  lcw-base="USD"
                  lcw-period="d"
                  lcw-color-tx="#ffffff"
                  lcw-color-bg="#1f2434"
                  lcw-border-w="0"
                ></div>
                <div
                  class="livecoinwatch-widget-6"
                  lcw-coin="SOL"
                  lcw-base="USD"
                  lcw-period="d"
                  lcw-color-tx="#ffffff"
                  lcw-color-bg="#1f2434"
                  lcw-border-w="0"
                ></div>
                <div
                  class="livecoinwatch-widget-6"
                  lcw-coin="ADA"
                  lcw-base="USD"
                  lcw-period="d"
                  lcw-color-tx="#ffffff"
                  lcw-color-bg="#1f2434"
                  lcw-border-w="0"
                ></div>
              </Wrap>
            </RightNavbar>
          </div>
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

const Title = styled.h1`
  font-size: 25px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
`;

const SmallerTitle = styled.h1`
  font-size: 23px;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  margin-bottom: 5px;
`;

const RightNavbar = styled.div`
  position: fixed;
  margin-right: 20%;
  @media (max-width: 1200px) {
    margin-right: 5%;
  }

  @media (max-width: 805px) {
    width: 0px;
    height: 0px;
    position: relative;
    display: none !important;
  }
`;
