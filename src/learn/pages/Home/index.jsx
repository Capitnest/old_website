import React, { useState } from "react";
import EmptyList from "../../components/common/EmptyList";
import BlogList from "../../components/Home/BlogList";
import SearchBarDark from "../../components/Home/SearchBarDark";
import SearchBarLight from "../../components/Home/SearchBarLight";
import { blogList } from "../../config/data";
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
  useDisclosure,
  Tab,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Footerr from "../../../components/Footer";
import styled from "styled-components";
import { RiArticleLine } from "react-icons/ri";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
        <title>Capitnest | Articles</title>
      </Helmet>
      <div>
        <Layout>
          {/* Page Header */}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "30px",
            }}
          >
            <Ad>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent fontFamily="'Inter', sans-serif">
                  <ModalHeader></ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <p
                      style={{
                        textAlign: "center",
                        fontSize: "20px",
                        fontWeight: 600,
                      }}
                    >
                      You don't have permission to write an article at the
                      moment!
                    </p>
                    <p style={{ textAlign: "center", marginTop: "10px" }}>
                      Apply to become a verified writer at Capitnest.
                    </p>
                  </ModalBody>

                  <ModalFooter>
                    <a
                      href="https://tally.so/r/w5BgKE"
                      target="_blank"
                      style={{ color: "inherit" }}
                    >
                      <Button colorScheme="green" mr={3} onClick={onClose}>
                        Become a Writer
                      </Button>
                    </a>
                    <Button variant="ghost" onClick={onClose}>
                      I am not interested.
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Ad>

            <Search>
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

              <Button
                borderRadius="5px"
                borderLeftRadius="0px"
                borderWidth="2px"
                fontSize="18px"
                onClick={onOpen}
              >
                <RiArticleLine
                  size={20}
                  style={{ marginBottom: "3px", marginRight: "4px" }}
                />
                Write
              </Button>

              {/* <span style={{ width: "100px" }}>
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
              </span> */}
            </Search>
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

            {/* <Tabs marginTop="20px" variant="enclosed">
              <TabList>
                <Tab>Posts</Tab>
                <Tab>The Classroom</Tab>
                <Tab>Courses</Tab>
              </TabList>
            </Tabs> */}

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
        </Layout>
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

  @media (max-width: 465px) {
    margin-top: 10px;

    p {
      font-size: 15px;
    }
  }
`;

const Ad = styled.div``;

const Search = styled.div`
  display: flex;
`;

export default Home;
