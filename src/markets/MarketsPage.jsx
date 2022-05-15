import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Footerr from "../components/Footer";
import axios from "axios";
import useScript from "./../functions/useScript";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import {
  Badge,
  Flex,
  Center,
  Button,
  Stat,
  StatLabel,
  StatNumber,
  Skeleton,
  StatHelpText,
} from "@chakra-ui/react";

//Components
import Coins from "./components/Coins";
import CoinItem from "./components/CoinItem";
import NavbarCategories from "./components/NavbarCategories";
import GlobalStats from "./components/GlobalStats";
import MarketsPaginations from "./components/MarketsPaginations";
import MarketsNavbar from "./components/MarketsNavbar";

export default function MarketsPage() {
  const { id } = useParams();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=${id}&sparkline=false`;

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
      <Layout>
        <Flex justifyContent="center" flexDirection="column">
          <Title>Markets</Title>
          <br />
          <p style={{ textAlign: "center", fontSize: "20px" }}>Page: {id}</p>
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