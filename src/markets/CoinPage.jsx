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
  BsGithub,
} from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { DiGitPullRequest } from "react-icons/di";

export default function CoinPage() {
  const { id } = useParams();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

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
  }, []);

  return (
    <>
      <Helmet>
        {loading === true ? (
          <title>Capitnest</title>
        ) : (
          <title>
            {coins.name} ({coins.symbol.toUpperCase()}) Price & Chart |
            Capitnest{" "}
          </title>
        )}
      </Helmet>
      <Layout>
        <Content>
          <Link className="blog-goBack" to="/markets">
            <Button colorScheme="teal" marginBottom="10px">
              <span> &#8592; </span> <span>Go Back </span>
            </Button>
          </Link>

          {loading === true ? (
            <>Loading...</>
          ) : (
            <>
              <div>
                <Stat>
                  <StatLabel fontSize="1.75rem" fontWeight="700">
                    <img
                      src={coins.image.large}
                      alt={coins.name}
                      width="75px"
                    />
                    {coins.name} ({coins.symbol.toUpperCase()})
                  </StatLabel>
                  <StatNumber fontSize="3rem" fontWeight="700">
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.current_price.usd}
                      displayType="text"
                    />
                  </StatNumber>

                  <StatHelpText fontSize="1.2rem" fontWeight="700">
                    {coins.market_data.price_change_percentage_24h < 0 ? (
                      <>
                        <StatArrow type="decrease" />
                        {coins.market_data.price_change_percentage_24h}%
                      </>
                    ) : (
                      <>
                        <StatArrow type="increase" />
                        {coins.market_data.price_change_percentage_24h}%
                      </>
                    )}
                  </StatHelpText>
                </Stat>
              </div>

              <Flex>
                <Stat borderWidth="2px" padding="10px" borderLeftRadius="10px">
                  <StatLabel>Market Cap</StatLabel>
                  <StatNumber>
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.market_cap.usd}
                      displayType="text"
                      decimalScale={1}
                    />
                  </StatNumber>

                  <StatHelpText>
                    Rank {coins.market_cap_rank} / 3789
                  </StatHelpText>
                </Stat>

                <Stat borderWidth="2px" padding="10px">
                  <StatLabel>24h Trading Volume </StatLabel>
                  <StatNumber>
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.total_volume.usd}
                      displayType="text"
                      decimalScale={1}
                    />
                  </StatNumber>

                  <StatHelpText>
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.total_volume.btc}
                      displayType="text"
                      decimalScale={3}
                    />{" "}
                    BTC
                  </StatHelpText>
                </Stat>
                <Stat borderWidth="2px" padding="10px" borderRightRadius="10px">
                  <StatLabel>Circulating Supply</StatLabel>
                  <StatNumber>
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.circulating_supply}
                      displayType="text"
                      decimalScale={1}
                    />
                  </StatNumber>

                  <StatHelpText>
                    {coins.market_data.max_supply === null ? (
                      <>-</>
                    ) : (
                      <>MAX {coins.market_data.max_supply}</>
                    )}
                  </StatHelpText>
                </Stat>
              </Flex>
            </>
          )}

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

          <br />

          <Tabs>
            <TabList>
              <Tab>General</Tab>
              <Tab>Social</Tab>
              <Tab>Developer</Tab>
            </TabList>

            {loading == true ? (
              <h1>Loading..</h1>
            ) : (
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
                            <Td>{coins.name} Price</Td>
                            <Td fontWeight="700">
                              $
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.current_price.usd}
                                displayType="text"
                              />
                            </Td>
                          </Tr>
                          {coins.market_data.roi === null ? (
                            <></>
                          ) : (
                            <Tr>
                              <Td>{coins.name} ROI</Td>
                              <Td fontWeight="700">
                                <NumberFormat
                                  thousandSeparator={true}
                                  value={coins.market_data.roi.percentage}
                                  displayType="text"
                                  decimalScale={1}
                                />
                                %
                              </Td>
                            </Tr>
                          )}
                          <Tr>
                            <Td>Market Cap</Td>
                            <Td fontWeight="700">
                              $
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.market_cap.usd}
                                displayType="text"
                                decimalScale={1}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>Market Cap Rank</Td>
                            <Td fontWeight="700"># {coins.market_cap_rank}</Td>
                          </Tr>
                          <Tr>
                            <Td>Trading Volume</Td>
                            <Td fontWeight="700">
                              $
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.total_volume.usd}
                                displayType="text"
                                decimalScale={1}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>24h Low / 24h High</Td>
                            <Td fontWeight="700">
                              $
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.low_24h.usd}
                                displayType="text"
                                decimalScale={1}
                              />{" "}
                              / $
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.high_24h.usd}
                                displayType="text"
                                decimalScale={1}
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>24h Price Change</Td>
                            <Td fontWeight="700">
                              <NumberFormat
                                thousandSeparator={true}
                                value={
                                  coins.market_data.price_change_percentage_24h
                                }
                                displayType="text"
                                decimalScale={1}
                              />
                              %
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>7d Price Change</Td>
                            <Td fontWeight="700">
                              <NumberFormat
                                thousandSeparator={true}
                                value={
                                  coins.market_data.price_change_percentage_7d
                                }
                                displayType="text"
                                decimalScale={1}
                              />
                              %
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>All-time High</Td>
                            <Td fontWeight="700">
                              $
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.ath.usd}
                                displayType="text"
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>All-time Low</Td>
                            <Td fontWeight="700">
                              $
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.atl.usd}
                                displayType="text"
                              />
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>

                    <br />

                    <h1
                      style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        marginBottom: "10px",
                      }}
                    >
                      Scores
                    </h1>

                    <Flex>
                      <Stat
                        borderWidth="2px"
                        padding="10px"
                        borderLeftRadius="10px"
                      >
                        <StatLabel>Coingecko Score</StatLabel>
                        <StatNumber>
                          <NumberFormat
                            thousandSeparator={true}
                            value={coins.coingecko_score}
                            displayType="text"
                            decimalScale={1}
                          />
                        </StatNumber>
                      </Stat>
                      <Stat borderWidth="2px" padding="10px">
                        <StatLabel>Developer Score</StatLabel>
                        <StatNumber>
                          <NumberFormat
                            thousandSeparator={true}
                            value={coins.developer_score}
                            displayType="text"
                            decimalScale={1}
                          />
                        </StatNumber>
                      </Stat>
                      <Stat borderWidth="2px" padding="10px">
                        <StatLabel>Community Score</StatLabel>
                        <StatNumber>
                          <NumberFormat
                            thousandSeparator={true}
                            value={coins.community_score}
                            displayType="text"
                            decimalScale={1}
                          />
                        </StatNumber>
                      </Stat>
                      <Stat
                        borderWidth="2px"
                        padding="10px"
                        borderRightRadius="10px"
                      >
                        <StatLabel>Liquidity Score</StatLabel>
                        <StatNumber>
                          <NumberFormat
                            thousandSeparator={true}
                            value={coins.liquidity_score}
                            displayType="text"
                            decimalScale={1}
                          />
                        </StatNumber>
                      </Stat>
                    </Flex>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <Wrap>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsFacebook size={50} />
                        </Center>
                        <p>Facebook Likes</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.community_data.facebook_likes === null ? (
                            <p>?</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={coins.community_data.facebook_likes}
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsTwitter size={50} />
                        </Center>
                        <p>Twitter Followers</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          <NumberFormat
                            thousandSeparator={true}
                            value={coins.community_data.twitter_followers}
                            displayType="text"
                            decimalScale={1}
                          />
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsReddit size={50} />
                        </Center>
                        <p>Reddit Average Posts 48h</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          <NumberFormat
                            thousandSeparator={true}
                            value={
                              coins.community_data.reddit_average_posts_48h
                            }
                            displayType="text"
                            decimalScale={1}
                          />
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsReddit size={50} />
                        </Center>
                        <p>Reddit Average Comments 48h</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          <NumberFormat
                            thousandSeparator={true}
                            value={
                              coins.community_data.reddit_average_comments_48h
                            }
                            displayType="text"
                            decimalScale={1}
                          />
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsReddit size={50} />
                        </Center>
                        <p> Reddit Subscribers</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          <NumberFormat
                            thousandSeparator={true}
                            value={coins.community_data.reddit_subscribers}
                            displayType="text"
                            decimalScale={1}
                          />
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsReddit size={50} />
                        </Center>
                        <p> Reddit Accounts Active 48h </p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          <NumberFormat
                            thousandSeparator={true}
                            value={
                              coins.community_data.reddit_accounts_active_48h
                            }
                            displayType="text"
                            decimalScale={1}
                          />
                        </p>
                      </Flex>
                    </Box>

                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsTelegram size={50} />
                        </Center>
                        <p> Telegram Channels </p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.community_data.telegram_channel_user_count ===
                          null ? (
                            <p>0</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={
                                coins.community_data.telegram_channel_user_count
                              }
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                  </Wrap>
                </TabPanel>
                <TabPanel>
                  <Wrap>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BiGitRepoForked size={50} />
                        </Center>
                        <p>Forks</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.developer_data.forks === null ? (
                            <p>0</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={coins.developer_data.forks}
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <RiStarSFill size={50} />
                        </Center>
                        <p>Github Stars</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.developer_data.stars === null ? (
                            <p>0</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={coins.developer_data.stars}
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsGithub size={50} />
                        </Center>
                        <p>Github Subscribers</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.developer_data.subscribers === null ? (
                            <p>0</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={coins.developer_data.subscribers}
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsGithub size={50} />
                        </Center>
                        <p>Github Total Issues</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.developer_data.total_issues === null ? (
                            <p>0</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={coins.developer_data.total_issues}
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <BsGithub size={50} />
                        </Center>
                        <p>Github Closed Issues</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.developer_data.closed_issues === null ? (
                            <p>0</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={coins.developer_data.closed_issues}
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <DiGitPullRequest size={50} />
                        </Center>
                        <p>Github Pull Requests Merges</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.developer_data.pull_requests_merged ===
                          null ? (
                            <p>0</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={coins.developer_data.pull_requests_merged}
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                    <Box
                      padding="10px"
                      borderWidth="2px"
                      borderRadius="12px"
                      maxWidth="180px"
                    >
                      <Flex flexDirection="column" textAlign="center">
                        <Center>
                          <DiGitPullRequest size={50} />
                        </Center>
                        <p>Github Pull Request Contributors</p>
                        <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                          {coins.developer_data.pull_request_contributors ===
                          null ? (
                            <p>0</p>
                          ) : (
                            <NumberFormat
                              thousandSeparator={true}
                              value={
                                coins.developer_data.pull_request_contributors
                              }
                              displayType="text"
                              decimalScale={1}
                            />
                          )}
                        </p>
                      </Flex>
                    </Box>
                  </Wrap>
                </TabPanel>
              </TabPanels>
            )}
          </Tabs>

          <br />
          <br />
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
