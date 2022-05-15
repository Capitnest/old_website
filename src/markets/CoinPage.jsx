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
  Hide,
  Show,
  Slider,
  SliderTrack,
  SliderThumb,
  SliderFilledTrack,
} from "@chakra-ui/react";
import dateFormat, { masks } from "dateformat";
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
          <title>{id} Price & Chart | Capitnest</title>
        ) : (
          <title>
            {coins.name} ({coins.symbol.toUpperCase()}) Price & Chart |
            Capitnest
          </title>
        )}
      </Helmet>
      <Layout>
        <Content>
          <Flex marginBottom="20px" color="#A0AEC0" marginLeft="-15px">
            <Link to="/markets">
              <Button variant="Link">coins</Button>
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
                        <StatArrow
                          type="decrease"
                          color="var(--chakra-colors-red-400)"
                        />
                        <span style={{ color: "var(--chakra-colors-red-400)" }}>
                          {coins.market_data.price_change_percentage_24h}%
                        </span>
                      </>
                    ) : (
                      <>
                        <StatArrow type="increase" />
                        <span
                          style={{ color: "var(--chakra-colors-green-400)" }}
                        >
                          <NumberFormat
                            thousandSeparator={true}
                            value={
                              coins.market_data.price_change_percentage_24h
                            }
                            displayType="text"
                            decimalScale={6}
                          />
                          %
                        </span>
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

                <Show below="md">
                  <Stat
                    borderWidth="2px"
                    padding="10px"
                    borderRightRadius="10px"
                  >
                    <StatLabel>24h Trading Volume </StatLabel>
                    <StatNumber fontSize="23px">
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
                </Show>

                <Hide below="md">
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
                  <Stat
                    borderWidth="2px"
                    padding="10px"
                    borderRightRadius="10px"
                  >
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
                </Hide>
              </Flex>
            </>
          )}

          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            {useScript(
              "https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"
            )}

            <script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></script>
            <coingecko-coin-compare-chart-widget
              coin-ids={id}
              currency="usd"
              locale="en"
            ></coingecko-coin-compare-chart-widget>
          </div>

          <Tabs>
            <TabList>
              <Tab>General</Tab>
              <Tab>About</Tab>
              <Tab>Social</Tab>
              <Tab>Developer</Tab>
              <Tab>Advanced</Tab>
              <Tab>Top 100 Markets</Tab>
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

                    <h1
                      style={{
                        fontSize: "30px",
                        fontWeight: "700",
                        marginBottom: "10px",
                        marginTop: "15px",
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
                  <Wrap marginTop="20px">
                    <Stat>
                      <StatLabel>Name</StatLabel>
                      <StatNumber fontSize="18px">
                        {coins.name} ({coins.symbol})
                      </StatNumber>
                    </Stat>

                    <Stat>
                      <StatLabel>Website</StatLabel>
                      <StatNumber fontSize="18px">
                        <a href={coins.links.homepage[0]} target="_blank">
                          {coins.links.homepage[0]}
                        </a>
                      </StatNumber>
                    </Stat>

                    <Stat>
                      <StatLabel>Forum</StatLabel>
                      <StatNumber fontSize="18px">
                        <a
                          href={coins.links.official_forum_url[0]}
                          target="_blank"
                        >
                          {coins.links.official_forum_url[0]}
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
                      {coins.links.twitter_screen_name === "" ? (
                        <></>
                      ) : (
                        <div style={{ display: "flex" }}>
                          <BsTwitter size={20} style={{ marginRight: "5px" }} />
                          <a
                            href={`https://www.twitter.com/${coins.links.twitter_screen_name}`}
                            target="_blank"
                          >
                            {`https://www.twitter.com/${coins.links.twitter_screen_name}`}
                          </a>
                        </div>
                      )}

                      {coins.links.facebook_username === "" ? (
                        <></>
                      ) : (
                        <div style={{ display: "flex" }}>
                          <BsFacebook
                            size={20}
                            style={{ marginRight: "5px" }}
                          />
                          <a
                            href={`https://www.facebook.com/${coins.links.facebook_username}`}
                            target="_blank"
                          >
                            {`https://www.facebook.com/${coins.links.facebook_username}`}
                          </a>
                        </div>
                      )}

                      {coins.links.subreddit_url === "" ? (
                        <></>
                      ) : (
                        <div style={{ display: "flex" }}>
                          <BsReddit size={20} style={{ marginRight: "5px" }} />
                          <a href={coins.links.subreddit_url} target="_blank">
                            {coins.links.subreddit_url}
                          </a>
                        </div>
                      )}
                    </StatNumber>
                  </Stat>
                </TabPanel>
                <TabPanel>
                  <h1
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  >
                    Social Statistics
                  </h1>
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

                  <h1
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      marginBottom: "10px",
                      marginTop: "20px",
                    }}
                  >
                    Today's Market Sentiment
                  </h1>

                  <div>
                    <p style={{ textAlign: "left" }}>👍 Good</p>

                    <Slider
                      marginTop="0px"
                      defaultValue={coins.sentiment_votes_up_percentage}
                      min={0}
                      max={100}
                      step={30}
                      disabled
                    >
                      <SliderTrack bg="rgb(245, 0, 87)">
                        <Box position="relative" right={10} />
                        <SliderFilledTrack bg="rgb(4, 209, 146)" />
                      </SliderTrack>
                      <SliderThumb boxSize={2} />
                    </Slider>

                    <p style={{ textAlign: "right" }}>👎 Bad</p>
                  </div>
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
                <TabPanel>
                  <Flex flexDirection="column">
                    <h1
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        marginBottom: "10px",
                        marginTop: "10px",
                      }}
                    >
                      Advanced Stats
                    </h1>
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
                            <Td>Current Price</Td>
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
                            <Td>Circulating Supply</Td>
                            <Td fontWeight="700">
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.circulating_supply}
                                displayType="text"
                                decimalScale={2}
                              />
                            </Td>
                          </Tr>
                          {coins.market_data.total_supply === null ? (
                            <></>
                          ) : (
                            <Tr>
                              <Td>Total Supply</Td>
                              <Td fontWeight="700">
                                <NumberFormat
                                  thousandSeparator={true}
                                  value={coins.market_data.total_supply}
                                  displayType="text"
                                  decimalScale={2}
                                />
                              </Td>
                            </Tr>
                          )}
                          {coins.market_data.max_supply === null ? (
                            <></>
                          ) : (
                            <Tr>
                              <Td>Max Supply</Td>
                              <Td fontWeight="700">
                                <NumberFormat
                                  thousandSeparator={true}
                                  value={coins.market_data.max_supply}
                                  displayType="text"
                                  decimalScale={2}
                                />
                              </Td>
                            </Tr>
                          )}
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
                        </Tbody>
                      </Table>
                    </TableContainer>

                    <h1
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        marginBottom: "10px",
                        marginTop: "30px",
                      }}
                    >
                      All Time Highs & Lows
                    </h1>
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
                            <Td>All Time High Price</Td>
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
                            <Td>All Time High Percentage</Td>
                            <Td fontWeight="700">
                              {coins.market_data.ath_change_percentage.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data.ath_change_percentage
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data.ath_change_percentage
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>All Time High Date</Td>
                            <Td fontWeight="700">
                              {dateFormat(coins.market_data.ath_date.usd)}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>All Time Low Price</Td>
                            <Td fontWeight="700">
                              $
                              <NumberFormat
                                thousandSeparator={true}
                                value={coins.market_data.atl.usd}
                                displayType="text"
                              />
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>All Time Low Percentage</Td>
                            <Td fontWeight="700">
                              {coins.market_data.atl_change_percentage.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data.atl_change_percentage
                                        .usd
                                    }
                                    thousandSeparator={true}
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data.atl_change_percentage
                                        .usd
                                    }
                                    thousandSeparator={true}
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>
                          <Tr>
                            <Td>All Time Low Date</Td>
                            <Td fontWeight="700">
                              {dateFormat(coins.market_data.atl_date.usd)}
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>

                    <h1
                      style={{
                        fontSize: "22px",
                        fontWeight: 700,
                        marginBottom: "10px",
                        marginTop: "30px",
                      }}
                    >
                      Price Change Percentage
                    </h1>

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
                            <Td>Price Change Percentage 1h</Td>
                            <Td fontWeight="700">
                              {coins.market_data
                                .price_change_percentage_1h_in_currency.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_1h_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_1h_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>Price Change Percentage 24h</Td>
                            <Td fontWeight="700">
                              {coins.market_data
                                .price_change_percentage_24h_in_currency.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_24h_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_24h_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>Price Change Percentage 7d</Td>
                            <Td fontWeight="700">
                              {coins.market_data
                                .price_change_percentage_7d_in_currency.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_7d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_7d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>Price Change Percentage 14d</Td>
                            <Td fontWeight="700">
                              {coins.market_data
                                .price_change_percentage_14d_in_currency.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_14d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_14d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>Price Change Percentage 30d</Td>
                            <Td fontWeight="700">
                              {coins.market_data
                                .price_change_percentage_30d_in_currency.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_30d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_30d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>Price Change Percentage 60d</Td>
                            <Td fontWeight="700">
                              {coins.market_data
                                .price_change_percentage_60d_in_currency.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_60d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_60d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>Price Change Percentage 200d</Td>
                            <Td fontWeight="700">
                              {coins.market_data
                                .price_change_percentage_200d_in_currency.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_200d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_200d_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>

                          <Tr>
                            <Td>Price Change Percentage 1year</Td>
                            <Td fontWeight="700">
                              {coins.market_data
                                .price_change_percentage_1y_in_currency.usd <
                              0 ? (
                                <p style={{ color: "rgb(245, 0, 87)" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_1y_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              ) : (
                                <p style={{ color: "#04d192" }}>
                                  <NumberFormat
                                    value={
                                      coins.market_data
                                        .price_change_percentage_1y_in_currency
                                        .usd
                                    }
                                    decimalScale={1}
                                    displayType="text"
                                  />
                                  %
                                </p>
                              )}
                            </Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <h1
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      marginBottom: "20px",
                      marginTop: "10px",
                    }}
                  >
                    Top 100 {coins.name} Markets
                  </h1>
                  <Flex flexDirection="column" justifyContent="center">
                    <TableContainer>
                      <Table variant="simple">
                        <Thead>
                          <Tr>
                            <Th fontFamily="'Inter', sans-serif">Base</Th>
                            <Th fontFamily="'Inter', sans-serif">Target</Th>

                            <Th fontFamily="'Inter', sans-serif">Volume</Th>

                            <Th fontFamily="'Inter', sans-serif">Market</Th>

                            <HideMobile>
                              <Th fontFamily="'Inter', sans-serif">
                                Trade Url
                              </Th>
                            </HideMobile>
                          </Tr>
                        </Thead>
                        <Tbody>
                          {coins.tickers.map((ticker) => {
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

                                <Td>{ticker.market.name}</Td>

                                <HideMobile>
                                  <Td color="#4299E1">
                                    <a href={ticker.trade_url} target="_blank">
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
  font-family: "Inter", sans-serif;
`;

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
`;

const HideMobile = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
