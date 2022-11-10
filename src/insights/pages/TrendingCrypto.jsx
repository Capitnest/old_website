import React, { useEffect, useState } from "react";
import axios from "axios";
import { Layout } from "../../components/Layout";
import Tab from "../components/Tab";
import styled from "styled-components";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Avatar,
  Button,
  Skeleton,
  useColorMode,
} from "@chakra-ui/react";
import useScript from "../../functions/useScript";
import { Link } from "react-router-dom";

export default function TrendingCrypto() {
  const [coingecko, setCoingecko] = useState([]);
  const [loading, setLoading] = useState(true);

  const { colorMode } = useColorMode();

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/search/trending")
      .then((response) => {
        setCoingecko(response.data);
        setLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Layout>
        <Tab index={2} />
        <Stats>
          <div style={{ width: "60%" }}>
            <h1
              style={{
                fontSize: "22px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Top Most Searched Coins on{" "}
              <a
                href="https://coingecko.com"
                style={{ color: "rgb(141, 198, 71)" }}
                target="_blank"
              >
                CoinGecko
              </a>
              .
            </h1>
            <Accordion defaultIndex={[0]} allowToggle>
              {loading === true ? (
                <>
                  <Skeleton width="70%" height="40px" />
                  <Skeleton
                    width="70%"
                    height="40px"
                    style={{ marginTop: "10px" }}
                  />
                  <Skeleton
                    width="70%"
                    height="40px"
                    style={{ marginTop: "10px" }}
                  />
                  <Skeleton
                    width="70%"
                    height="40px"
                    style={{ marginTop: "10px" }}
                  />
                  <Skeleton
                    width="70%"
                    height="40px"
                    style={{ marginTop: "10px" }}
                  />
                  <Skeleton
                    width="70%"
                    height="40px"
                    style={{ marginTop: "10px" }}
                  />
                  <Skeleton
                    width="70%"
                    height="40px"
                    style={{ marginTop: "10px" }}
                  />
                </>
              ) : (
                <>
                  {coingecko.coins.map((coin) => {
                    return (
                      <>
                        <AccordionItem>
                          <h2>
                            <AccordionButton display="flex">
                              <img
                                src={coin.item.small}
                                height="40px"
                                width="40px"
                                style={{ borderRadius: "50%" }}
                              />
                              <h1
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "20px",
                                  marginLeft: "10px",
                                }}
                              >
                                {coin.item.name}
                              </h1>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel>
                            <TrendinggCrypto id={coin.item.id} />
                            <div style={{ height: "10px" }} />
                            <Link
                              to={`/coin/${coin.item.id}`}
                              style={{ color: "inherit" }}
                            >
                              <Button borderRadius="4px" borderWidth="1px">
                                See More Details
                              </Button>
                            </Link>
                          </AccordionPanel>
                        </AccordionItem>
                      </>
                    );
                  })}
                </>
              )}
            </Accordion>
          </div>
          <div>
            <h1
              style={{
                fontSize: "22px",
                fontWeight: 600,
                marginBottom: "10px",
              }}
            >
              Asset of the day on{" "}
              <a
                href="https://lunarcrush.com"
                style={{ color: "rgb(19, 243, 201)" }}
                target="_blank"
              >
                LunarCrush.com
              </a>
            </h1>

            <Box
              border
              style={{
                backgroundColor: (() => {
                  if (colorMode === "light") {
                    return "rgb(249, 249, 250)";
                  } else {
                    return "#171923";
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>Coin: </p>
                <p>NFT:</p>
                <p>Stock:</p>
              </div>
            </Box>
          </div>
        </Stats>
      </Layout>
    </>
  );
}

function TrendinggCrypto(props) {
  return (
    <div>
      {" "}
      {useScript(
        "https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"
      )}
      <script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></script>
      <coingecko-coin-compare-chart-widget
        coin-ids={props.id}
        currency="usd"
        locale="en"
      ></coingecko-coin-compare-chart-widget>
    </div>
  );
}

const Stats = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  border-radius: 5px;

  padding: 12px 12px 12px;
  border-width: 1px;

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
