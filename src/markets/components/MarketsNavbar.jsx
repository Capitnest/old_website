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
  InputGroup,
  Input,
  InputLeftElement,
  TabList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { categories } from "./../data/categories";
import SearchBar from "../../news/components/SearchBar";

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

      <Flex>
        <Stat>
          <StatLabel fontSize="18px" fontWeight="700">
            Coins
          </StatLabel>
          <StatNumber>3868</StatNumber>
          <StatHelpText>Tracked</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="18px" fontWeight="700">
            Exchanges
          </StatLabel>
          <StatNumber>250</StatNumber>
          <StatHelpText>Tracked</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="18px" fontWeight="700">
            Indexes
          </StatLabel>
          <StatNumber>29</StatNumber>
          <StatHelpText>Tracked</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="18px" fontWeight="700">
            Categories
          </StatLabel>
          <StatNumber>75</StatNumber>
          <StatHelpText>Available</StatHelpText>
        </Stat>
      </Flex>

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
  return (
    <>
      {blogs.map((blog) => (
        <a href={`/markets/categories/${blog.link}`}>
          <Box>{blog.name}</Box>
        </a>
      ))}
    </>
  );
}

const Box = styled.div`
  border-radius: 12px;
  padding: 6px 10px;
  border-width: 2px;
  margin-right: 10px;
`;
