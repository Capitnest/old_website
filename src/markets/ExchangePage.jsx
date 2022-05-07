import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import useScript from "../functions/useScript";
import { Helmet } from "react-helmet";
import {
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Box,
  Wrap,
  Center,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Tfoot,
  Badge,
  Avatar,
  Progress,
  Square,
} from "@chakra-ui/react";
import Footerr from "../components/Footer";
import { Line } from "react-chartjs-2";
import axios from "axios";
import NumberFormat from "react-number-format";
import {
  BsTwitter,
  BsReddit,
  BsTelegram,
  BsFacebook,
  BsSlack,
  BsGlobe,
} from "react-icons/bs";
import { TheatersOutlined } from "@material-ui/icons";

export default function ExchangePage() {
  const { id } = useParams();
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/exchanges/${id}`;

  function ProgressColor(score) {
    if (score > 6) {
      return "green";
    } else if (score <= 6 && score > 4) {
      return "orange";
    } else {
      return "red";
    }
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setExchange(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        {loading === true ? (
          <title>Capitnest</title>
        ) : (
          <title>{exchange.name} Trade Volume, Trust Score | Capitnest</title>
        )}
      </Helmet>
      <Layout>
        <Content>
          <Flex marginBottom="20px" color="#A0AEC0" marginLeft="-15px">
            <Link to="/exchanges">
              <Button variant="Link">exchanges</Button>
            </Link>
            <span style={{ marginTop: "7px" }}>/</span>

            <Button variant="Link">
              {loading === true ? <></> : <>{id}</>}
            </Button>
          </Flex>

          {loading === true ? (
            <>Loading...</>
          ) : (
            <>
              <div>
                <Stat>
                  <StatLabel fontSize="1.75rem" fontWeight="700">
                    <Avatar
                      src={exchange.image}
                      alt={exchange.name}
                      size={75}
                    />
                  </StatLabel>

                  <StatNumber>
                    {exchange.name}{" "}
                    <Badge colorScheme="green">
                      {exchange.trust_score_rank}
                    </Badge>
                  </StatNumber>

                  <StatHelpText fontSize="1.2rem" fontWeight="700">
                    {exchange.centralized === true ? (
                      <>Centralized</>
                    ) : (
                      <>Decentralized</>
                    )}
                  </StatHelpText>
                </Stat>

                <Flex>
                  <Stat
                    borderWidth="2px"
                    padding="10px"
                    borderLeftRadius="10px"
                  >
                    <StatLabel>Trust Score</StatLabel>
                    <StatNumber>{exchange.trust_score}</StatNumber>
                  </Stat>
                  <HideMobile>
                    <Stat borderWidth="2px" padding="10px" width="300px">
                      <StatLabel>24h Trade Volume BTC</StatLabel>
                      <StatNumber>
                        <NumberFormat
                          thousandSeparator={true}
                          value={exchange.trade_volume_24h_btc}
                          displayType="text"
                          decimalScale={3}
                        />
                      </StatNumber>
                    </Stat>
                  </HideMobile>
                  <Stat
                    borderWidth="2px"
                    padding="10px"
                    borderRightRadius="10px"
                  >
                    <StatLabel>24h Trade Volume USD</StatLabel>
                    <StatNumber>
                      $
                      <NumberFormat
                        thousandSeparator={true}
                        value={exchange.trade_volume_24h_btc * 40000}
                        displayType="text"
                        decimalScale={1}
                      />
                    </StatNumber>
                  </Stat>
                </Flex>

                <br />

                <Tabs>
                  <TabList>
                    <Tab>General</Tab>
                    <Tab>About</Tab>
                    <Tab>Top 100 tickers</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <Flex flexDirection="column">
                        <TableContainer>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th></Th>
                                <Th></Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              <Tr>
                                <Td>24h Trade Volume USD Estimated</Td>
                                <Td fontWeight="700">
                                  $
                                  <NumberFormat
                                    thousandSeparator={true}
                                    value={
                                      exchange.trade_volume_24h_btc * 40000
                                    }
                                    displayType="text"
                                    decimalScale={0}
                                  />
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>24h BTC Trade Volume</Td>
                                <Td fontWeight="700">
                                  <NumberFormat
                                    thousandSeparator={true}
                                    value={exchange.trade_volume_24h_btc}
                                    displayType="text"
                                    decimalScale={3}
                                  />{" "}
                                  BTC
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>24h BTC Trade Volume Normalized</Td>
                                <Td fontWeight="700">
                                  <NumberFormat
                                    thousandSeparator={true}
                                    value={
                                      exchange.trade_volume_24h_btc_normalized
                                    }
                                    displayType="text"
                                    decimalScale={3}
                                  />{" "}
                                  BTC
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Trust Score Rank</Td>
                                <Td fontWeight="700">
                                  <NumberFormat
                                    thousandSeparator={true}
                                    value={exchange.trust_score_rank}
                                    displayType="text"
                                    decimalScale={0}
                                  />
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Trust Score</Td>
                                <Td fontWeight="700">
                                  <NumberFormat
                                    thousandSeparator={true}
                                    value={exchange.trust_score}
                                    displayType="text"
                                    decimalScale={0}
                                  />
                                </Td>
                              </Tr>
                              <Tr>
                                <Td>Has Trading Incentive</Td>
                                <Td fontWeight="700">
                                  {exchange.has_trading_incentive === true ? (
                                    <p>Yes</p>
                                  ) : (
                                    <p>No</p>
                                  )}
                                </Td>
                              </Tr>
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Flex>
                    </TabPanel>

                    <TabPanel>
                      <p>{exchange.description}</p>

                      <Wrap marginTop="20px">
                        <Stat>
                          <StatLabel>Name</StatLabel>
                          <StatNumber fontSize="18px">
                            {exchange.name}
                          </StatNumber>
                        </Stat>

                        <Stat>
                          <StatLabel>Country</StatLabel>
                          <StatNumber fontSize="18px">
                            {exchange.country}
                          </StatNumber>
                        </Stat>

                        <Stat>
                          <StatLabel>Year Established</StatLabel>
                          <StatNumber fontSize="18px">
                            {exchange.year_established}
                          </StatNumber>
                        </Stat>

                        <Stat>
                          <StatLabel>Website</StatLabel>
                          <StatNumber fontSize="18px">
                            <a href={exchange.url} target="_blank">
                              {exchange.url}
                            </a>
                          </StatNumber>
                        </Stat>
                      </Wrap>

                      <Stat marginTop="20px">
                        <StatLabel marginBottom="10px" fontSize="18px">
                          Links
                        </StatLabel>
                        <StatNumber
                          fontSize="15px"
                          flexDirection="column"
                          display="flex"
                          color="#4299E1"
                        >
                          {exchange.twitter_handle === "" ? (
                            <></>
                          ) : (
                            <div style={{ display: "flex" }}>
                              <BsTwitter
                                size={20}
                                style={{ marginRight: "5px" }}
                              />
                              <a
                                href={`https://www.twitter.com/${exchange.twitter_handle}`}
                                target="_blank"
                              >
                                {`https://www.twitter.com/${exchange.twitter_handle}`}
                              </a>
                            </div>
                          )}

                          {exchange.facebook_url === "" ? (
                            <></>
                          ) : (
                            <div style={{ display: "flex" }}>
                              <BsFacebook
                                size={20}
                                style={{ marginRight: "5px" }}
                              />
                              <a href={exchange.facebook_url} target="_blank">
                                {exchange.facebook_url}
                              </a>
                            </div>
                          )}

                          {exchange.reddit_url === "" ? (
                            <></>
                          ) : (
                            <div style={{ display: "flex" }}>
                              <BsReddit
                                size={20}
                                style={{ marginRight: "5px" }}
                              />
                              <a href={exchange.reddit_url} target="_blank">
                                {exchange.reddit_url}
                              </a>
                            </div>
                          )}

                          {exchange.telegram_url === "" ? (
                            <></>
                          ) : (
                            <div style={{ display: "flex" }}>
                              <BsTelegram
                                size={20}
                                style={{ marginRight: "5px" }}
                              />
                              <a href={exchange.telegram_url} target="_blank">
                                {exchange.telegram_url}
                              </a>
                            </div>
                          )}

                          {exchange.slack_url === "" ? (
                            <></>
                          ) : (
                            <div style={{ display: "flex" }}>
                              <BsSlack
                                size={20}
                                style={{ marginRight: "5px" }}
                              />
                              <a href={exchange.slack_url} target="_blank">
                                {exchange.slack_url}
                              </a>
                            </div>
                          )}

                          {exchange.other_url_1 === "" ? (
                            <></>
                          ) : (
                            <div style={{ display: "flex" }}>
                              <BsGlobe
                                size={20}
                                style={{ marginRight: "5px" }}
                              />
                              <a href={exchange.other_url_1} target="_blank">
                                {exchange.other_url_1}
                              </a>
                            </div>
                          )}

                          {exchange.other_url_2 === "" ? (
                            <></>
                          ) : (
                            <div style={{ display: "flex" }}>
                              <BsGlobe
                                size={20}
                                style={{ marginRight: "5px" }}
                              />
                              <a href={exchange.other_url_2} target="_blank">
                                {exchange.other_url_2}
                              </a>
                            </div>
                          )}
                        </StatNumber>
                      </Stat>
                    </TabPanel>

                    <TabPanel>
                      <Flex flexDirection="column" justifyContent="center">
                        <TableContainer>
                          <Table variant="simple">
                            <Thead>
                              <Tr>
                                <Th fontFamily="'Inter', sans-serif">Base</Th>
                                <Th fontFamily="'Inter', sans-serif">Target</Th>
                                <Th fontFamily="'Inter', sans-serif">Volume</Th>

                                <HideMobile>
                                  <Th fontFamily="'Inter', sans-serif">
                                    Trade Url
                                  </Th>
                                </HideMobile>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {exchange.tickers.map((ticker) => {
                                return (
                                  <Tr>
                                    <Td>{ticker.base}</Td>
                                    <Td>{ticker.target}</Td>
                                    <Td>
                                      $
                                      <NumberFormat
                                        thousandSeparator={true}
                                        value={ticker.converted_volume.usd}
                                        displayType="text"
                                        decimalScale={0}
                                      />
                                    </Td>

                                    <HideMobile>
                                      <Td color="#4299E1">
                                        <a
                                          href={ticker.trade_url}
                                          target="_blank"
                                        >
                                          url
                                        </a>
                                      </Td>
                                    </HideMobile>
                                  </Tr>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Flex>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
            </>
          )}
        </Content>
      </Layout>
      <Footerr />
    </>
  );
}

const HideMobile = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Inter", sans-serif;
`;
