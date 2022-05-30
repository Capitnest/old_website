import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Tweet from "./components/Tweet";
import { tweets } from "./tweets.js";
import { influencers } from "./influencers";
import { Wrap, WrapItem, useColorMode, Box, Badge } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import Influencer from "./components/Influencer";
import { Link, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import HashtagsNav from "./components/HashtagsNav";
import Coins from "./components/CryptoPrices/Coins";

// data
import { bitcoin } from "../data/feeds/hashtag/bitcoin";
import { ethereum } from "../data/feeds/hashtag/ethereum";
import { cardano } from "../data/feeds/hashtag/cardano";
import { solana } from "../data/feeds/hashtag/solana";

export default function Hashtag() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(tweets);
  const [searchKey, setSearchKey] = useState(id);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    //scroll to the top
    window.scrollTo(0, 0);

    if (id === "bitcoin") {
      setBlogs(bitcoin);
    } else if (id === "ethereum") {
      setBlogs(ethereum);
    } else if (id === "cardano") {
      setBlogs(cardano);
    } else if (id === "solana") {
      setBlogs(solana);
    } else {
      setBlogs(null);
    }
  }, [id]);

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
            <HashtagComponent>
              <HashtagsNav />
            </HashtagComponent>

            {blogs === null ? (
              <h1>Not found</h1>
            ) : (
              <>
                <LeftSide>
                  {colorMode === "dark" ? (
                    <>
                      <Box
                        maxW="lg"
                        backgroundColor="rgb(26, 32, 44)"
                        color="white"
                        marginRight="20px"
                        padding="5px 10px"
                        height="60px"
                        marginTop="-30px"
                        width="100%"
                        position="fixed"
                        zIndex="2"
                      >
                        <h1
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "25px",
                            fontWeight: 700,
                            position: "fixed",
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        >
                          Posts about{" "}
                          <Link to="/feeds">
                            <Badge
                              marginBottom="5px"
                              colorScheme="green"
                              fontSize="20px"
                              padding="2px 10px"
                            >
                              {id} <CloseIcon w={4} h={4} marginBottom="4px" />
                            </Badge>
                          </Link>
                        </h1>
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box
                        maxW="lg"
                        backgroundColor="white"
                        marginRight="20px"
                        padding="5px 10px"
                        height="60px"
                        marginTop="-30px"
                        width="100%"
                        position="fixed"
                        zIndex="2"
                      >
                        <h1
                          style={{
                            fontFamily: '"Inter", sans-serif',
                            fontSize: "25px",
                            fontWeight: 700,
                            position: "fixed",
                            marginTop: "20px",
                            marginBottom: "20px",
                          }}
                        >
                          Posts about{" "}
                          <Link to="/feeds">
                            <Badge
                              marginBottom="5px"
                              colorScheme="green"
                              fontSize="20px"
                              padding="2px 10px"
                            >
                              {id} <CloseIcon w={4} h={4} marginBottom="4px" />
                            </Badge>
                          </Link>
                        </h1>
                      </Box>
                    </>
                  )}

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      marginTop: "20px",
                    }}
                  >
                    <InfiniteScroll dataLength={blogs.length}>
                      {blogs.map((tweet) => (
                        <div
                          style={{ marginTop: "10px", marginBottom: "10px" }}
                        >
                          <WrapItem>
                            <Tweet blog={tweet} />
                          </WrapItem>
                        </div>
                      ))}
                    </InfiniteScroll>
                  </div>
                </LeftSide>
              </>
            )}

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
                <Coins />
              </RightNavbar>
            </div>
          </div>
        </Content>
      </Layout>
    </>
  );
}

const HashtagComponent = styled.div`
  position: fixed;
  margin-right: 1000px;
  margin-top: -7px;

  @media (max-width: 1150px) {
    display: none;
  }
`;

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
