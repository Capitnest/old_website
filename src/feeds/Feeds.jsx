import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import Tweet from "./components/Tweet";
import { daily } from "../data/feeds/general/daily";
import { influencers } from "./influencers";
import {
  Wrap,
  WrapItem,
  useColorMode,
  Box,
  SkeletonCircle,
  SkeletonText,
  Show,
  Hide,
} from "@chakra-ui/react";
import styled from "styled-components";
import Influencer from "./components/Influencer";
import { SearchBar } from "./components/SearchBox";
import Coins from "./components/CryptoPrices/Coins";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import HashtagsNav from "./components/HashtagsNav";
import axios from "axios";

export default function Feeds() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(daily);
  const [searchKey, setSearchKey] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const [plan, setPlan] = useState("pro");

  const [defaultList, setDefaultList] = useState([]);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://timnik.pythonanywhere.com/feeds/general`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setPosts(response.data);
        setDefaultList(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });

    //scroll to the top
    window.scrollTo(0, 0);
  }, []);

  //Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  //Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = defaultList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setPosts(filteredBlogs);
  };

  //Clear search and show all blogs
  const handleClearSearch = () => {
    setPosts(defaultList);
    setSearchKey("");
  };

  return (
    <>
      <Helmet>
        <title>Feeds | Capitnest</title>
      </Helmet>
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
              <HashtagsNav />
            </LeftSide>

            <MiddleSide>
              <Search>
                <SearchBar
                  value={searchKey}
                  clearSearch={handleClearSearch}
                  formSubmit={handleSearchBar}
                  handleSearchKey={(e) => setSearchKey(e.target.value)}
                  coin={null}
                  plan={plan}
                />
              </Search>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  marginTop: "85px",
                  overflowY: "scroll",
                }}
              >
                <ScrollLength>
                  {!posts.length ? (
                    <>
                      {loading === true ? (
                        <GhostTweet>
                          <Box
                            padding="6"
                            boxShadow="lg"
                            borderRadius="4px"
                            borderWidth="2px"
                          >
                            <SkeletonCircle size="10" />
                            <SkeletonText mt="4" noOfLines={4} spacing="4" />
                          </Box>
                          <Box
                            padding="6"
                            boxShadow="lg"
                            borderRadius="4px"
                            borderWidth="2px"
                            marginTop="10px"
                          >
                            <SkeletonCircle size="10" />
                            <SkeletonText mt="4" noOfLines={4} spacing="4" />
                          </Box>
                          <Box
                            padding="6"
                            boxShadow="lg"
                            borderRadius="4px"
                            borderWidth="2px"
                            marginTop="10px"
                          >
                            <SkeletonCircle size="10" />
                            <SkeletonText mt="4" noOfLines={4} spacing="4" />
                          </Box>
                          <Box
                            padding="6"
                            boxShadow="lg"
                            borderRadius="4px"
                            borderWidth="2px"
                            marginTop="10px"
                          >
                            <SkeletonCircle size="10" />
                            <SkeletonText mt="4" noOfLines={4} spacing="4" />
                          </Box>
                        </GhostTweet>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            flexDirection: "column",
                            textAlign: "center",
                          }}
                        >
                          <img src="/images/empty.png" />
                          <h1
                            style={{
                              fontSize: "30px",
                              marginBottom: "100%",
                              fontWeight: "bold",
                            }}
                          >
                            No results found :(
                          </h1>
                        </div>
                      )}
                    </>
                  ) : (
                    posts.map((tweet) => (
                      <div style={{ marginBottom: "20px" }}>
                        <WrapItem>
                          <Tweet blog={tweet} />
                        </WrapItem>
                      </div>
                    ))
                  )}
                </ScrollLength>
              </div>
            </MiddleSide>

            <RightNavbar>
              <RightNavbarContent>
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

                <SmallerTitle
                  style={{ marginBottom: "10px", marginTop: "5px" }}
                >
                  <Linkk>
                    <Link to="/markets">Top Cryptocurrencies</Link>
                  </Linkk>
                </SmallerTitle>
                <Coins />
              </RightNavbarContent>
            </RightNavbar>
          </div>
        </Content>
      </Layout>
    </>
  );
}

const ScrollLength = styled.div`
  height: calc(100vh - 246px);
`;

const LeftSide = styled.div`
  position: fixed;
  margin-right: 1000px;
  margin-top: -7px;

  @media (max-width: 1150px) {
    display: none;
    width: 0px;
    height: 0px;
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
  font-family: "Inter", sans-serif;
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
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-top: -7px;

  @media (max-width: 1150px) {
    width: 40%;
  }

  @media (max-width: 740px) {
    width: 0px;
    height: 0px;
  }
`;

const RightNavbarContent = styled.div`
  position: fixed;
  margin-right: 20%;
  @media (max-width: 1200px) {
    margin-right: 5%;
  }

  @media (max-width: 740px) {
    width: 0px;
    height: 0px;
    position: relative;
    display: none !important;
  }
`;

const Search = styled.div`
  position: fixed;
  z-index: 1;
  margin-top: -32px;
  width: 496px;

  @media (max-width: 1150px) {
    width: 50%;
  }

  @media (max-width: 1050px) {
    width: 53%;
  }

  @media (max-width: 840px) {
    width: 415px;
  }
`;

const MiddleSide = styled.div`
  width: 50%;
  margin-right: 40px;

  @media (max-width: 1150px) {
    width: 53%;
  }

  @media (max-width: 740px) {
    width: 600px;
    margin-right: 0px;
  }

  @media (max-width: 630px) {
    width: 550px;
  }

  @media (max-width: 570px) {
    width: 470px;
  }

  @media (max-width: 480px) {
    width: 370px;
  }

  @media (max-width: 400px) {
    width: 350px;
  }

  @media (max-width: 370px) {
    width: 320px;
  }

  @media (max-width: 340px) {
    width: 290px;
  }

  @media (max-width: 300px) {
    width: 270px;
  }
`;

const GhostTweet = styled.div`
  width: 100%;
  margin-top: 20px;

  @media (max-width: 786px) {
    width: 700px;
  }

  @media (max-width: 700px) {
    width: 580px;
  }

  @media (max-width: 600px) {
    width: 480px;
  }

  @media (max-width: 500px) {
    width: 380px;
  }

  @media (max-width: 400px) {
    width: 280px;
  }

  @media (max-width: 300px) {
    width: 180px;
  }

  @media (max-width: 200px) {
    width: 80px;
  }
`;
