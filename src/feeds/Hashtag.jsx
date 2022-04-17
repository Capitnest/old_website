import React, { useState } from "react";
import { Layout } from "../components/Layout";
import Tweet from "./components/Tweet";
import { tweets } from "./tweets.js";
import { influencers } from "./influencers";
import {
  Flex,
  Spacer,
  Wrap,
  WrapItem,
  useColorMode,
  Box,
  Container,
} from "@chakra-ui/react";
import styled from "styled-components";
import Influencer from "./components/Influencer";
import useScript from "./../functions/useScript";
import { SearchBarLight, SearchBarDark } from "./components/SearchBox";
import CryptoPrices from "./components/CryptoPrices";
import { Link, useParams } from "react-router-dom";
import Footer from "./../components/Footer";
import InfiniteScroll from "react-infinite-scroll-component";
import HashtagsNav from "./components/HashtagsNav";

export default function Hashtag() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(tweets);
  const [searchKey, setSearchKey] = useState(id);
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
      blog.searchKeywords.toLowerCase().includes(id.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  //Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(tweets);
    setSearchKey("bitcoin");
  };

  return (
    <>
      <Layout>
        <Content>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className="scrollbarParent"
          >
            <div style={{ position: "fixed", marginRight: "53%" }}>
              <HashtagsNav />
            </div>

            <LeftSide>
              <h1
                style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "25px",
                  fontWeight: 700,
                }}
              >
                Posts about #{id}
              </h1>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <InfiniteScroll dataLength={blogs.length}>
                  {blogs
                    .filter((blog) =>
                      blog.searchKeywords
                        .toLowerCase()
                        .includes(id.toLowerCase().trim())
                    )
                    .map((tweet) => (
                      <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <WrapItem>
                          <Tweet blog={tweet} />
                        </WrapItem>
                      </div>
                    ))}
                </InfiniteScroll>
              </div>
            </LeftSide>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                marginTop: "0px",
              }}
            >
              <RightNavbar>
                <SmallerTitle>
                  <Linkk>
                    <Link to="/top-influencers">Top Influencers</Link>
                  </Linkk>
                </SmallerTitle>
                <Wrap width="300px">
                  {influencers.map((influ) => (
                    <div style={{ marginTop: "5px", marginBottom: "8px" }}>
                      <WrapItem>
                        <Influencer blog={influ} />
                      </WrapItem>
                    </div>
                  ))}
                </Wrap>

                <SmallerTitle
                  style={{ marginBottom: "10px", marginTop: "5px" }}
                >
                  <Linkk>
                    <Link to="/markets">Top Social Cryptocurrencies</Link>
                  </Linkk>
                </SmallerTitle>
                <CryptoPrices />
              </RightNavbar>
            </div>
          </div>
        </Content>
      </Layout>

      <Footer />
    </>
  );
}

const Linkk = styled.div`
  a {
    &:hover {
      text-decoration: underline;
      color: inherit;
      filter: brightness(0.8);
    }
  }
`;

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
  margin-top: -30px;
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
