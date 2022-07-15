import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import SearchBar from "../../components/Home/SearchBar";
import { blogList } from "../../config/data";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import { Container } from "@chakra-ui/react";
import { Header } from "../../components/Home/Header";
import { Featured } from "../../components/Home/Featured";
import { Lost } from "../../components/Home/Lost";
import { Topics } from "../../components/Home/Topics";
import Footerr from "../../../components/Footer";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      <Helmet>
        <title>Inqiri | Search</title>
      </Helmet>
      <div>
        <Navbar />
        {/* Page Header */}

        <Container maxW="container.lg" marginTop="50px">
          <Header />

          <Featured />

          <Lost />

          <Featured />

          <Featured />
        </Container>

        <Topics />

        <Footerr />

        {/* Search Bar
          <SearchBar
            value={searchKey}
            clearSearch={handleClearSearch}
            formSubmit={handleSearchBar}
            handleSearchKey={(e) => setSearchKey(e.target.value)}
          /> */}

        {/* Blog List & Empty View */}
        {/* {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />} */}
      </div>
    </div>
  );
};

export default Home;
