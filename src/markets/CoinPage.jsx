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

// COMPONENTS
import Header from "./components/CoinPage/Header";
import Chart from "./components/CoinPage/Chart";
import Sentiment from "./components/CoinPage/Sentiment";
import Navigation from "./components/CoinPage/Navigation";

// COMPONENTS TABS
import General from "./components/CoinPage/Tabs/General";
import About from "./components/CoinPage/Tabs/About";
import Social from "./components/CoinPage/Tabs/Social";
import Developer from "./components/CoinPage/Tabs/Developer";
import Advanced from "./components/CoinPage/Tabs/Advanced";
import Markets from "./components/CoinPage/Tabs/Markets";

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
          <Navigation id={id} />

          {loading === true ? (
            <>Loading...</>
          ) : (
            <>
              <Header data={coins} />

              <Chart id={id} />

              <Sentiment data={coins} />

              <Tabs>
                <TabList flexWrap="wrap" display="flex">
                  <Tab>General</Tab>
                  <Tab>About</Tab>
                  <Tab>Social</Tab>
                  <Tab>Developer</Tab>
                  <Tab>Advanced</Tab>
                  <Tab>Markets</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <General data={coins} />
                  </TabPanel>
                  <TabPanel>
                    <About data={coins} />
                  </TabPanel>
                  <TabPanel>
                    <Social data={coins} />
                  </TabPanel>
                  <TabPanel>
                    <Developer data={coins} />
                  </TabPanel>
                  <TabPanel>
                    <Advanced data={coins} />
                  </TabPanel>
                  <TabPanel>
                    <Markets data={coins} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </>
          )}

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
