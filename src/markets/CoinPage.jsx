import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import useScript from "../functions/useScript";
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
} from "@chakra-ui/react";
import Footerr from "../components/Footer";
import { Line } from "react-chartjs-2";
import axios from "axios";

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
              <img src={coins.image.large} alt={coins.name} width="75px" />
              <Stat>
                <StatLabel fontSize="22px">
                  {coins.name} ({coins.symbol})
                </StatLabel>
                <StatNumber>${coins.market_data.current_price.usd} </StatNumber>

                <StatHelpText>
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
            </>
          )}

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
                    <p>Market Cap Rank: {coins.market_cap_rank}</p>
                    <p>Market Cap: {coins.market_data.market_cap.usd}</p>
                    <p>
                      24 Hour Trading Vol: {coins.market_data.total_volume.usd}
                    </p>
                    <p>
                      24H High/Low: {coins.market_data.high_24h.usd}$ /{" "}
                      {coins.market_data.low_24h.usd}$
                    </p>
                  </Flex>
                </TabPanel>
                <TabPanel>
                  <p>
                    <p>
                      Twitter Followers:{" "}
                      {coins.community_data.twitter_followers}
                    </p>
                    <p>
                      Reddit Average Posts 48h:{" "}
                      {coins.community_data.reddit_average_posts_48h}
                    </p>
                    <p>
                      Reddit Average Comments 48h:{" "}
                      {coins.community_data.reddit_average_comments_48h}
                    </p>
                    <p>
                      Reddit Subscribers:{" "}
                      {coins.community_data.reddit_subscribers}
                    </p>
                    <p>
                      Reddit Accounts Active 48h:{" "}
                      {coins.community_data.reddit_accounts_active_48h}
                    </p>
                    <p>
                      Telegram Channel:{" "}
                      {coins.community_data.telegram_channel_user_count}
                    </p>
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>Forks: {coins.developer_data.forks}</p>
                  <p>Github Stars: {coins.developer_data.stars}</p>
                  <p>Subscribers: {coins.developer_data.subscribers}</p>
                  <p>
                    Github Total Issues: {coins.developer_data.total_issues}
                  </p>
                  <p>
                    Github Closed Issues: {coins.developer_data.closed_issues}
                  </p>
                  <p>
                    Github Pull Requests Merges:{" "}
                    {coins.developer_data.pull_requests_merged}
                  </p>
                  <p>
                    Github Pull Request Contributors:{" "}
                    {coins.developer_data.pull_request_contributors}
                  </p>
                </TabPanel>
              </TabPanels>
            )}
          </Tabs>

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
