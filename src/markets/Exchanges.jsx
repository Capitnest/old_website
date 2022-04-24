import React, { useState, useEffect } from "react";
import { Layout } from "../components/Layout";
import Footerr from "../components/Footer";
import axios from "axios";
import useScript from "./../functions/useScript";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Badge, Flex } from "@chakra-ui/react";

//Components
import Exchange from "./components/Exchanges/Exchange";
import NavbarCategories from "./components/NavbarCategories";

export default function Exchanges() {
  const [coins, setCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/exchanges?per_page=200";

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
    <>
      <Layout>
        <Flex justifyContent="center">
          <Title>Exchanges</Title>
        </Flex>

        <NavbarCategories />

        <br />

        <Exchange coins={coins} />
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
