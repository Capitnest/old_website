import React from "react";
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

export default function MarketsNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
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
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<SearchIcon />}
                />
                <Input type="tel" placeholder="Search for a category" />
              </InputGroup>
              <br />
              <div style={{ overflowY: "scroll", height: "600px" }}>
                <Wrap>
                  {categories.map((category) => (
                    <a href={`/markets/categories/${category.link}`}>
                      <Box>{category.name}</Box>
                    </a>
                  ))}
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
    </>
  );
}

const Box = styled.div`
  border-radius: 12px;
  padding: 6px 10px;
  border-width: 2px;
  margin-right: 10px;
`;
