import React, { useState } from "react";
import EmptyList from "./components/EmptyList";
import BlogList from "./components/BlogList";
import SearchBar from "./components/SearchBar";
import { blogList } from "./data/data";
import Header from "./components/Header";
import Featured from "./components/Featured/Featured";
import { Layout } from "../components/Layout";

import styled from "styled-components";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  //Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  //Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  //Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <Layout>
      <Content>
        {/* Page Header */}

        <Header />

        <br />

        {/* Search Bar */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <SearchBar
            value={searchKey}
            clearSearch={handleClearSearch}
            formSubmit={handleSearchBar}
            handleSearchKey={(e) => setSearchKey(e.target.value)}
          />
        </div>

        <br />

        <a
          href="https://twitter.com/intent/tweet?button_hashtag=crypto&ref_src=twsrc%5Etfw"
          class="twitter-hashtag-button"
          data-show-count="false"
        >
          Tweet #crypto
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>

        <br />

        {/* Blog List & Empty View */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </div>
      </Content>
    </Layout>
  );
};

export default Home;

const Content = styled.div`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
  }

  font-family: "Montserrat", sans-serif;

  button,
  input {
    font-family: "Montserrat", sans-serif;
  }
`;
