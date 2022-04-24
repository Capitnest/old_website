import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import CoinItem from "./CoinItem";
import { useColorMode } from "@chakra-ui/react";

export default function Coins(props) {
  const [coins, setCoins] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <div>
        {coins.map((coinss) => {
          return <CoinItem coins={coinss} />;
        })}
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
