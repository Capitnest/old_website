import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import SearchBarDark from "../../components/Home/SearchBarDark";
import SearchBarLight from "../../components/Home/SearchBarLight";
import { blogList } from "../../config/data";
import { covers } from "../../config/covers";

import { Helmet } from "react-helmet";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Layout } from "../../../components/Layout";
import {
  Container,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import Footerr from "../../../components/Footer";
import styled from "styled-components";

const Home = () => {
  const [blogs, setBlogs] = useState(covers);
  const [searchKey, setSearchKey] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const { showResults, setShowResults } = useState(false);
  const [results, setResults] = useState(false);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();

    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = covers;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
    setResults(false);
  };

  return (
    <div>
      <Helmet>
        <title>Capitnest | Learn</title>
      </Helmet>
      <div>
        <Layout>
          <HeaderImage>
            <img src="/images/research.png" />
          </HeaderImage>

          {/* <div style={{ display: "flex", justifyContent: "right" }}>
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
          </div> */}

          <Tags>
            {colorMode === "dark" ? (
              <>
                <TagDark>Short-term</TagDark>
                <TagDark>Long-term</TagDark>
                <TagDark>Technical Analysis</TagDark>
                <TagDark>Sentiment Analysis</TagDark>
              </>
            ) : (
              <>
                <TagLight>Short-term</TagLight>
                <TagLight>Long-term</TagLight>
                <TagLight>Technical Analysis</TagLight>
                <TagLight>Sentiment Analysis</TagLight>
              </>
            )}
          </Tags>

          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </Layout>
        <Footerr />
      </div>
    </div>
  );
};

const HeaderImage = styled.div`
  img {
    object-fit: cover;
    height: 188px;
    width: 100%;
    border-radius: 5px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 12px;
`;

const TagLight = styled.button`
  margin-right: 8px;
  margin-top: 8px;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 12px;
  padding-left: 12px;
  font-family: "Inter", sans-serif;
  border-width: 1px;
  border-radius: 5px;
  border-width: 1px;
  background-color: rgb(249, 249, 250);
  border-color: rgb(214, 213, 222);

  &:hover {
    transition: 0.5s;
    color: rgb(4, 182, 129);
  }
`;

const TagDark = styled.button`
  margin-right: 8px;
  margin-top: 8px;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 12px;
  padding-left: 12px;
  font-family: "Inter", sans-serif;
  border-width: 1px;
  border-radius: 5px;
  border-width: 1px;
  background-color: #171923;
  border-color: rgb(64, 63, 75);

  &:hover {
    transition: 0.5s;
    color: rgb(4, 182, 129);
  }
`;

const Header = styled.div`
  h1 {
    font-family: "Inter", sans-serif;
    font-size: 30px;
    margin-bottom: 5px;
    font-weight: bold;
  }

  p {
    font-family: "Inter", sans-serif;
    font-size: 16px;
  }

  @media (max-width: 465px) {
    margin-top: 10px;

    p {
      font-size: 15px;
    }
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default Home;
