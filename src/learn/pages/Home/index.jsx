import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import SearchBarDark from "../../components/Home/SearchBarDark";
import SearchBarLight from "../../components/Home/SearchBarLight";
import { blogList } from "../../config/data";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar/Navbar";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Nav from "react-bootstrap/Nav";
import {
  Container,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  Badge,
  Button,
  MenuOptionGroup,
  MenuDivider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Featured } from "../../components/Home/Featured";
import { Lost } from "../../components/Home/Lost";
import { Topics } from "../../components/Home/Topics";
import Footerr from "../../../components/Footer";
import styled from "styled-components";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");
  const { colorMode, toggleColorMode } = useColorMode();
  const { showResults, setShowResults } = useState(false);
  const [results, setResults] = useState(false);

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    if (searchKey === "") {
      setResults(false);
    } else {
      setResults(true);
    }
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
    setResults(false);
  };

  return (
    <div>
      <Helmet>
        <title>Capitnest | Learn</title>
      </Helmet>
      <div>
        <Navbar />

        {/* Page Header */}
        <Container maxW="container.lg" marginTop="80px" marginBottom="80px">
          <div style={{ display: "flex", justifyContent: "right" }}>
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

            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                borderRadius="4px"
                borderLeftRadius="0px"
                borderLeftWidth="0px"
                borderWidth="2px"
                borderColor="rgba(255, 255, 255, 0.16)"
                style={{
                  borderColor: (() => {
                    if (colorMode === "light") {
                      return "rgba(0, 0, 0, 0.24)";
                    } else {
                      return "rgba(255, 255, 255, 0.16)";
                    }
                  })(),
                }}
              >
                Topics
              </MenuButton>
              <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </div>

          <Header>
            <h1>Capitnest Learn</h1>

            <p>
              Learn everything you need to know about cryptocurrencies and
              blockchain technology. We cover all the topics you need to get
              started in the web3 world. How to buy, send, receive, store,
              understand cryptocurrencies. How the blockchain works, how the
              information is decentralized and a lot more! Choose your desired
              topic and dive in!
            </p>

            <Tabs marginTop="20px" variant="enclosed">
              <TabList>
                <Tab>Posts</Tab>
                <Tab>The Classroom</Tab>
                <Tab>Courses</Tab>
              </TabList>
            </Tabs>

            <div
              style={{
                marginTop: "10px",
                marginLeft: "5px",
                marginBottom: "10px",
              }}
            >
              {results === false ? <h1>Posts:</h1> : <h1>Results:</h1>}
            </div>
          </Header>

          {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
        </Container>
        <Footerr />
      </div>
    </div>
  );
};

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
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default Home;
