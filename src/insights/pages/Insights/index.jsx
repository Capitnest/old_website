import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import SearchBarDark from "../../components/Home/SearchBarDark";
import SearchBarLight from "../../components/Home/SearchBarLight";
import { covers } from "../../config/covers";

import { Helmet } from "react-helmet";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Layout } from "../../../components/Layout";
import { useColorMode } from "@chakra-ui/react";
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

  const shortTerm = (e) => {
    e.preventDefault();
    setSearchKey("short-term");
    console.log(searchKey);
    handleSearchResults();
    setSearchKey("short-term");
    handleSpecificSearch("short-term");
  };

  const longTerm = (e) => {
    e.preventDefault();
    setSearchKey("long-term");
    console.log(searchKey);
    handleSearchResults();
    setSearchKey("long-term");
    handleSpecificSearch("long-term");
  };

  const technical = (e) => {
    e.preventDefault();
    setSearchKey("technical-analysis");
    console.log(searchKey);
    handleSearchResults();
    setSearchKey("technical-analysis");
    handleSpecificSearch("technical-analysis");
  };

  const sentiment = (e) => {
    e.preventDefault();
    setSearchKey("sentimental-analysis");
    console.log(searchKey);
    handleSearchResults();
    setSearchKey("sentimental-analysis");
    handleSpecificSearch("sentimental-analysis");
  };

  const handleSpecificSearch = (search) => {
    const allBlogs = covers;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.tags.includes(search.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = covers;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.tags.includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(covers);
    setSearchKey("");
  };

  return (
    <div>
      <Helmet>
        <title>Capitnest | Research</title>
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
                handleSearhKey={(e) => setSearchKey(e.target.value)}
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
            <Tag
              tag="short-term"
              searchKey={searchKey}
              name="Short-term"
              functio={shortTerm}
              clear={handleClearSearch}
            />
            <Tag
              tag="long-term"
              searchKey={searchKey}
              name="Long-term"
              functio={longTerm}
              clear={handleClearSearch}
            />
            <Tag
              tag="technical-analysis"
              searchKey={searchKey}
              name="Technical Analysis"
              functio={technical}
              clear={handleClearSearch}
            />
            <Tag
              tag="sentimental-analysis"
              searchKey={searchKey}
              name="Sentimental Analysis"
              functio={sentiment}
              clear={handleClearSearch}
            />
          </Tags>

          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </Layout>
        <Footerr />
      </div>
    </div>
  );
};

function Tag({ tag, functio, name, clear, searchKey, ...rest }) {
  const isActive = searchKey === tag;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <>
          {isActive ? (
            <TagDarkActive onClick={clear}>{name}</TagDarkActive>
          ) : (
            <TagDark onClick={functio}>{name}</TagDark>
          )}
        </>
      ) : (
        <>
          {isActive ? (
            <TagLightActive onClick={clear} {...rest}>
              {name}
            </TagLightActive>
          ) : (
            <TagLight onClick={functio} {...rest}>
              {name}
            </TagLight>
          )}
        </>
      )}
    </>
  );
}

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

const TagLightActive = styled.button`
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
  border-color: rgb(4, 182, 129);
  color: rgb(4, 182, 129);
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

const TagDarkActive = styled.button`
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
  border-color: rgb(4, 182, 129);
  color: rgb(4, 182, 129);
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
