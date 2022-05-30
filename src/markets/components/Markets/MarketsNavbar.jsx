import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Wrap,
  TabList,
  useColorMode,
  Show,
  Hide,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { categories } from "../../data/categories";
import SearchBar from "../../../news/components/SearchBar";

export default function MarketsNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [blogs, setBlogs] = useState(categories);
  const [searchKey, setSearchKey] = useState("");

  //Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  //Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = categories;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.name.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  //Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(categories);
    setSearchKey("");
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Tabs>
        <TabList>
          <Tab>Coins</Tab>
          <Link to="/exchanges">
            <Tab>Exchanges</Tab>
          </Link>
          <Link to="/indexes">
            <Tab>Indexes</Tab>
          </Link>
        </TabList>
      </Tabs>

      <br />

      <div>
        <Button onClick={onOpen}>Categories</Button>

        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Categories</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SearchBar
                value={searchKey}
                clearSearch={handleClearSearch}
                formSubmit={handleSearchBar}
                handleSearchKey={(e) => setSearchKey(e.target.value)}
              />
              <br />
              <div style={{ overflowY: "scroll", height: "600px" }}>
                <Wrap>
                  {!blogs.length ? (
                    <h1>Category not found</h1>
                  ) : (
                    <CategoryList blogs={blogs} />
                  )}
                </Wrap>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}

function CategoryList({ blogs }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {blogs.map((blog) => (
        <a href={`/markets/categories/${blog.link}`}>
          {colorMode === "dark" ? (
            <>
              <BoxDark>{blog.name}</BoxDark>
            </>
          ) : (
            <>
              <BoxWhite>{blog.name}</BoxWhite>
            </>
          )}
        </a>
      ))}
    </>
  );
}

const BoxDark = styled.div`
  border-radius: 4px;
  border-width: 1px;
  padding: 6px 10px;
  border-width: 2px;
  margin-right: 10px;
  background-color: #4a5568;
  color: RGBA(255, 255, 255, 0.8);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border-color: RGBA(255, 255, 255, 0.16);

  &:hover {
    color: #04d192;
    transform: scale(1.01);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const BoxWhite = styled.div`
  border-radius: 4px;
  border-width: 1px;
  padding: 6px 10px;
  border-width: 2px;
  margin-right: 10px;
  background-color: rgb(240, 244, 248);
  color: rgb(110, 125, 135);
  font-family: "Inter", sans-serif;
  font-size: 16px;
  border-color: rgb(218, 221, 236);

  &:hover {
    color: #04d192;
    transform: scale(1.01);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;
