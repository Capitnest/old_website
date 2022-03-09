import React, { useState } from "react";
import { Layout } from "../components/Layout";
import Tweet from "./components/Tweet";
import { tweets } from "./tweets.js";
import { influencers } from "./influencers";
import { Flex, Spacer, Wrap, WrapItem, useColorMode } from "@chakra-ui/react";
import styled from "styled-components";
import Influencer from "./components/Influencer";
import useScript from "./../functions/useScript";
import { SearchBarLight, SearchBarDark } from "./components/SearchBox";
import CryptoPrices from "./components/CryptoPrices";

export default function Feeds() {
  const [blogs, setBlogs] = useState(tweets);
  const [searchKey, setSearchKey] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();

  //Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  //Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = tweets;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.searchKeywords.toLowerCase().includes(searchKey.toLowerCase().trim())
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="scrollbarParent"
        >
          <LeftSide>
            <Search
              style={{
                backgroundColor: () => {
                  if (colorMode === "dark") {
                    return "#fff";
                  } else {
                    return "#fff";
                  }
                },
              }}
            >
              {colorMode === "dark" ? (
                <SearchBarDark
                  value={searchKey}
                  clearSearch={handleClearSearch}
                  formSubmit={handleSearchBar}
                  handleSearchKey={(e) => setSearchKey(e.target.value)}
                />
              ) : (
                <SearchBarLight
                  value={searchKey}
                  clearSearch={handleClearSearch}
                  formSubmit={handleSearchBar}
                  handleSearchKey={(e) => setSearchKey(e.target.value)}
                />
              )}
            </Search>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginTop: "75px",
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
          </LeftSide>

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
              <CryptoPrices />
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
  margin-top: 71px;
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

  @media (max-width: 1500px) {
    font-size: 23px;
  }
`;

const RightNavbar = styled.div`
  position: fixed;
  margin-right: 20%;
  @media (max-width: 1200px) {
    margin-right: 5%;
  }

  @media (max-width: 786px) {
    width: 0px;
    height: 0px;
    position: relative;
    display: none !important;
  }
`;

const Search = styled.div`
  position: fixed;
  z-index: 1;
  margin-top: -6px;
  width: 496px;

  @media (max-width: 1040px) {
    width: 49%;
  }

  @media (max-width: 840px) {
    width: 415px;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  margin-right: 40px;

  @media (max-width: 786px) {
    display: flex;
    justify-content: center;
    margin-right: 30%;
    margin-left: 30%;
  }
`;
