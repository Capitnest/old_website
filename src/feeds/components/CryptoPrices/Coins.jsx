import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CoinItem from "./CoinItem";
import {
  useColorMode,
  Hide,
  Box,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

export default function Coins(props) {
  const [coins, setCoins] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();
  const [loading, setLoading] = useState(true);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {});
  }, []);

  return (
    <Container>
      <div>
        {loading === true ? (
          <>
            <Box
              padding="6"
              boxShadow="lg"
              borderRadius="4px"
              borderWidth="2px"
              marginTop="10px"
            >
              <SkeletonCircle size="10" marginRight="5px" />
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </Box>
            <Box
              padding="6"
              boxShadow="lg"
              borderRadius="4px"
              borderWidth="2px"
              marginTop="10px"
            >
              <SkeletonCircle size="10" marginRight="5px" />
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </Box>
            <Box
              padding="6"
              boxShadow="lg"
              borderRadius="4px"
              borderWidth="2px"
              marginTop="10px"
            >
              <SkeletonCircle size="10" marginRight="5px" />
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </Box>
          </>
        ) : (
          <>
            <CoinItem coins={coins[0]} />
            <Hide breakpoint="(max-height: 430px)">
              <CoinItem coins={coins[1]} />
            </Hide>
            <Hide breakpoint="(max-height: 500px)">
              <CoinItem coins={coins[2]} />
            </Hide>
            <Hide breakpoint="(max-height: 580px)">
              <CoinItem coins={coins[3]} />
            </Hide>
            <Hide breakpoint="(max-height: 650px)">
              <CoinItem coins={coins[4]} />
            </Hide>
            <Hide breakpoint="(max-height: 730px)">
              <CoinItem coins={coins[5]} />
            </Hide>
            <Hide breakpoint="(max-height: 800px)">
              <CoinItem coins={coins[6]} />
            </Hide>
          </>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1140px;
  margin: auto;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
