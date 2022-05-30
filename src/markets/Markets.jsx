import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Footerr from "../components/Footer";
import axios from "axios";
import styled from "styled-components";
import { Flex, Skeleton } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

//Components
import Coins from "./components/Coins";
import MarketsPaginations from "./components/Markets/MarketsPaginations";
import MarketsNavbar from "./components/Markets/MarketsNavbar";

export default function Markets() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=${page}&sparkline=false`;

  function ChangePage(number) {
    return setPage(number);
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  return (
    <>
      <Helmet>
        <title>Coins & Cryptocurrency Prices | Capitnest</title>
        <meta
          name="description"
          content="See the currenct price of over 3000 cryptocurrencies & advanced statistics about each of them."
        />
      </Helmet>
      <Layout>
        <Flex justifyContent="center">
          <Title>Markets</Title>
        </Flex>

        <br />

        <MarketsNavbar />

        <br />

        {loading === true ? (
          <div>
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
            <Skeleton height="60px" marginTop="5px" />
          </div>
        ) : (
          <>
            <Coins coins={coins} />
          </>
        )}

        <br />

        <MarketsPaginations />
      </Layout>

      <Footerr />
    </>
  );
}

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;
