import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import {
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Box,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Footerr from "../components/Footer";
import axios from "axios";

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
          {loading === true ? (
            <>
              <SkeletonCircle size="50" marginBottom="30px" />

              <Box
                padding="6"
                boxShadow="lg"
                borderRadius="4px"
                borderWidth="2px"
              >
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
              <Box
                padding="6"
                boxShadow="lg"
                borderRadius="4px"
                borderWidth="2px"
                marginTop="10px"
              >
                <SkeletonText mt="4" noOfLines={4} spacing="4" />
              </Box>
            </>
          ) : (
            <>
              <Navigation id={id} />

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
