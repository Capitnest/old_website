import React, { useEffect, useState } from "react";
import { Layout } from "../../components/Layout";
import Tab from "./../components/Tab";
import axios from "axios";
import NumberFormat from "react-number-format";
import styled from "styled-components";
import { useColorMode } from "@chakra-ui/react";

export default function DefiData() {
  const { colorMode } = useColorMode();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/global/decentralized_finance_defi`)
      .then((response) => {
        setData(response.data.data);
        setLoading(false);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "30px",
          fontWeight: 600,
          marginTop: "30px",
        }}
      >
        Defi Global Data
      </h1>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          marginTop: "5px",
        }}
      >
        DeFi or Decentralized Finance refers to financial services that are
        built on top of distributed networks with no central intermediaries.
      </p>
      {loading === true ? (
        <>Loading data from coingecko...</>
      ) : (
        <>
          <Stats style={{ marginTop: "20px" }}>
            <Box
              border
              style={{
                backgroundColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(237, 242, 247)";
                  } else {
                    return "#1f2434";
                  }
                })(),
                borderColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(214, 213, 222)";
                  } else {
                    return "rgb(64, 63, 75)";
                  }
                })(),
              }}
            >
              <NumberFormat
                thousandSeparator={true}
                value={data.defi_dominance}
                displayType="text"
                decimalScale={2}
              />
              %<h1>Market Dominance</h1>
            </Box>
            <Box
              border
              style={{
                backgroundColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(237, 242, 247)";
                  } else {
                    return "#1f2434";
                  }
                })(),
                borderColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(214, 213, 222)";
                  } else {
                    return "rgb(64, 63, 75)";
                  }
                })(),
              }}
            >
              <NumberFormat
                thousandSeparator={true}
                value={data.defi_market_cap / 1000}
                displayType="text"
                decimalScale={2}
              />
              $<h1>Market Cap</h1>
            </Box>

            <Box
              border
              style={{
                backgroundColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(237, 242, 247)";
                  } else {
                    return "#1f2434";
                  }
                })(),
                borderColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(214, 213, 222)";
                  } else {
                    return "rgb(64, 63, 75)";
                  }
                })(),
              }}
            >
              <NumberFormat
                thousandSeparator={true}
                value={data.trading_volume_24h / 1000}
                displayType="text"
                decimalScale={2}
              />
              $<h1>24h Trading Volume</h1>
            </Box>
          </Stats>

          <Stats style={{ marginTop: "20px" }}>
            <BoxCoin
              border
              style={{
                backgroundColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(237, 242, 247)";
                  } else {
                    return "#1f2434";
                  }
                })(),
                borderColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(214, 213, 222)";
                  } else {
                    return "rgb(64, 63, 75)";
                  }
                })(),
              }}
            >
              <NumberFormat
                thousandSeparator={true}
                value={data.defi_to_eth_ratio}
                displayType="text"
                decimalScale={2}
              />
              %<h1>Defi to ETH Ratio</h1>
            </BoxCoin>

            <BoxCoin
              border
              style={{
                backgroundColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(237, 242, 247)";
                  } else {
                    return "#1f2434";
                  }
                })(),
                borderColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(214, 213, 222)";
                  } else {
                    return "rgb(64, 63, 75)";
                  }
                })(),
              }}
            >
              <NumberFormat
                thousandSeparator={true}
                value={data.eth_market_cap / 1000}
                displayType="text"
                decimalScale={2}
              />
              $<h1>ETH Market Cap</h1>
            </BoxCoin>
          </Stats>

          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "25px",
              fontWeight: 600,
              marginTop: "20px",
            }}
          >
            Top Defi Coin
          </h1>

          <p>The top defi coin in decentralized finance.</p>

          <Stats style={{ marginTop: "20px" }}>
            <BoxCoin
              border
              style={{
                backgroundColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(237, 242, 247)";
                  } else {
                    return "#1f2434";
                  }
                })(),
                borderColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(214, 213, 222)";
                  } else {
                    return "rgb(64, 63, 75)";
                  }
                })(),
              }}
            >
              {data.top_coin_name}
              <h1>Name</h1>
            </BoxCoin>
            <BoxCoin
              border
              style={{
                backgroundColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(237, 242, 247)";
                  } else {
                    return "#1f2434";
                  }
                })(),
                borderColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(214, 213, 222)";
                  } else {
                    return "rgb(64, 63, 75)";
                  }
                })(),
              }}
            >
              <NumberFormat
                thousandSeparator={true}
                value={data.top_coin_defi_dominance}
                displayType="text"
                decimalScale={2}
              />
              %<h1>Dominance</h1>
            </BoxCoin>
          </Stats>
        </>
      )}
    </>
  );
}

const Stats = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const BoxCoin = styled.div`
  border-radius: 5px;

  padding: 12px 12px 12px;
  border-width: 2px;

  width: 450px;

  text-align: center;

  font-size: 25px;
  font-weight: 600;

  h1 {
    font-size: 18px;

    margin-top: 15px;
    font-weight: 400;
  }

  @media (max-width: 800px) {
    width: inherit;
    margin-top: 10px;
  }
`;

export const Box = styled.div`
  border-radius: 5px;

  padding: 12px 12px 12px;
  border-width: 2px;

  width: 250px;

  text-align: center;

  font-size: 25px;
  font-weight: 600;

  h1 {
    font-size: 18px;

    margin-top: 15px;
    font-weight: 400;
  }

  @media (max-width: 800px) {
    width: inherit;
    margin-top: 10px;
  }
`;
