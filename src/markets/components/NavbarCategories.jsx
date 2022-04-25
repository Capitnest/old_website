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
    <Flex>
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

      <Modal isOpen={isOpen} onClose={onClose}>
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
            <Wrap>
              {categories.map((category) => (
                <a href={category.link}>
                  <Box>{category.name}</Box>
                </a>
              ))}

              <a href="/markets/categories/non-fungible-tokens-nft">
                <Box>NFT</Box>
              </a>
              <a href="/markets/categories/metaverse">
                <Box>Metaverse</Box>
              </a>
              <a href="/markets/categories/solana-ecosystem">
                <Box>Solana Ecosystem</Box>
              </a>
              <a href="/markets/categories/smart-contract-platform">
                <Box>Smart Contract Platform</Box>
              </a>
              <a href="/markets/categories/stablecoins">
                <Box>Stablecoins</Box>
              </a>
              <a href="/markets/categories/binance-smart-chain">
                <Box>BNB Chain Ecosystem</Box>
              </a>
              <a href="/markets/categories/avalanche-ecosystem">
                <Box>Avalanche Ecosystem</Box>
              </a>
              <a href="/markets/categories/ethereum-ecosystem">
                <Box>Ethereum Ecosystem</Box>
              </a>
              <a href="/markets/categories/polygon-ecosystem">
                <Box>Polygon Ecosystem</Box>
              </a>
              <a href="/markets/categories/solana-ecosystem">
                <Box>Solana Ecosystem</Box>
              </a>
              <a href="/markets/categories/cardano-ecosystem">
                <Box>Cardano Ecosystem</Box>
              </a>
              <a href="/markets/categories/dot-ecosystem">
                <Box>Polkadot Ecosystem</Box>
              </a>
              <a href="/markets/categories/moonriver-ecosystem">
                <Box>Moonriver Ecosystem</Box>
              </a>
              <a href="/markets/categories/terra-ecosystem">
                <Box>Terra Ecosystem</Box>
              </a>
              <a href="/markets/categories/near-protocol-ecosystem">
                <Box>Near Protocol Ecosystem</Box>
              </a>
              <a href="/markets/categories/fantom-ecosystem">
                <Box>Fantom Ecosystem</Box>
              </a>
            </Wrap>
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
