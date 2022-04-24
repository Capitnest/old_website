import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import useScript from "../functions/useScript";
import { Button } from "@chakra-ui/react";
import Footerr from "../components/Footer";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function CoinPage() {
  const { id } = useParams();
  const [historicData, setHistoricData] = useState();
  const [flag, setflag] = useState(false);
  const [days, setDays] = useState(1);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=max`
    );
    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Layout>
        <Content>
          <Link className="blog-goBack" to="/markets">
            <Button colorScheme="teal" marginBottom="10px">
              <span> &#8592; </span> <span>Go Back </span>
            </Button>
          </Link>

          {useScript(
            "https://widgets.coingecko.com/coingecko-coin-ticker-widget.js"
          )}

          <coingecko-coin-ticker-widget
            coin-id={id}
            currency="usd"
            locale="en"
          ></coingecko-coin-ticker-widget>

          <br />
          <br />

          <br />

          {useScript(
            "https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"
          )}

          <script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></script>
          <coingecko-coin-compare-chart-widget
            coin-ids={id}
            currency="usd"
            locale="en"
          ></coingecko-coin-compare-chart-widget>
        </Content>
      </Layout>
      <Footerr />
    </>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;
