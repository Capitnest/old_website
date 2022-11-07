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
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=9&page=1&sparkline=true";

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
            <Text>
              <h1>Track the markets</h1>
              <p>Real-time price data of cryptocurrencies at your fingertips</p>
            </Text>

            <p></p>
            <CoinItem coins={coins[0]} />

            <CoinItem coins={coins[1]} />

            <CoinItem coins={coins[5]} />

            <CoinItem coins={coins[7]} />

            <p style={{ marginTop: "5px" }}>
              Data from{" "}
              <a
                href="https://www.coingecko.com/"
                target="_blank"
                style={{
                  color: "rgb(141, 198, 71)",
                  textDecoration: "underline",
                }}
              >
                CoinGecko
              </a>
            </p>
          </>
        )}
      </div>
    </Container>
  );
}

const Text = styled.div`
  h1 {
    font-size: 40px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    margin-top: 80px;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Inter", sans-serif;
  }
`;

const Container = styled.div`
  max-width: 1140px;
  margin: auto;

  a {
    text-decoration: none;
    color: inherit;
  }
`;
