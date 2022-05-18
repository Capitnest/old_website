import React, { useState } from "react";
import EmptyList from "./components/EmptyList";
import BlogList from "./components/BlogList";
import SearchBar from "./components/SearchBar";
import { blogList } from "./data/data";
import Header from "./components/Header";
import Featured from "./components/Featured/Featured";
import { Layout } from "../components/Layout";
import Footer from "../components/Footer";

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
    <>
      <Layout>
        <Content>
          {/* Page Header */}

          <Header />

          <div style={{ marginTop: "20px" }}>
            <Featured />
          </div>

          <a name="search" />
          <br />
          <br />
          <br />

          {/* Blog List & Empty View */}
          <div>
            <LatestNews>
              <h1>Latest News</h1>
              {/* Search Bar */}

              <SearchBox>
                <SearchBar
                  value={searchKey}
                  clearSearch={handleClearSearch}
                  formSubmit={handleSearchBar}
                  handleSearchKey={(e) => setSearchKey(e.target.value)}
                />
              </SearchBox>
            </LatestNews>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
            </div>
          </div>
        </Content>
      </Layout>
      <Footer />
    </>
  );
};

export default Home;

const LatestNews = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 20px;

    h1 {
      text-align: center;
    }
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: 600;

    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  margin-left: 13%;
  width: 100%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

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
