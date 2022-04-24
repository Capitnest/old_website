import React from "react";
import { Link } from "react-router-dom";
import { Flex } from "@chakra-ui/react";
import styled from "styled-components";

export default function NavbarCategories() {
  return (
    <Flex>
      <Link to="/markets">
        <Box>All Categories</Box>
      </Link>
      <a href="/markets/categories/decentralized-finance-defi">
        <Box>Defi</Box>
      </a>
      <a href="/markets/categories/stablecoins">
        <Box>Stablecoins</Box>
      </a>
      <a href="/markets/categories/non-fungible-tokens-nft">
        <Box>SFT</Box>
      </a>
      <a href="/markets/categories/metaverse">
        <Box>Metaverse</Box>
      </a>
    </Flex>
  );
}

const Box = styled.div`
  border-radius: 12px;
  padding: 6px 10px;
  border-width: 2px;
  margin-right: 10px;

  &:hover {
    background-color: #a0aec0;
  }
`;
