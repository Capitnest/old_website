import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Flex,
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
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { categories } from "./../data/categories";

export default function NavbarCategories() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex fontFamily="'Inter', sans-serif">
      <Link to="/markets">
        <Box>Coins</Box>
      </Link>

      <Link to="/exchanges">
        <Box>Exchanges</Box>
      </Link>
      <a href="/markets/categories/decentralized-finance-defi">
        <Box>Defi</Box>
      </a>

      <a href="/markets/categories/non-fungible-tokens-nft">
        <Box>NFT</Box>
      </a>
      <a href="/markets/categories/metaverse">
        <Box>Metaverse</Box>
      </a>
      <Button onClick={onOpen}>Categories</Button>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Categories</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
    </Flex>
  );
}

const Box = styled.div`
  border-radius: 12px;
  padding: 6px 10px;
  border-width: 2px;
  margin-right: 10px;
`;
