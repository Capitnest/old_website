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
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
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

        <Featured />

        <br />

        <br />

        {/* Blog List & Empty View */}
        <div style={{ marginTop: "-70px" }}>
          <h1
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "30px",
              fontWeight: 600,
              fontStyle: "italic",
              marginBottom: "10px",
            }}
          >
            Latest News
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default Home;

const Content = styled.div`
  margin-top: 50px;

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
