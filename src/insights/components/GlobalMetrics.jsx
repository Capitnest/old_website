import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "./../../components/Layout";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

import MarketDominance from "./MarketDominance";
import CurrentGlobalMetrics from "./CurrentGlobalMetrics";
import Summary from "./Summary";
import Social from "./Social";

export default function GlobalMetrics() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/global`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard | Capitnest </title>
      </Helmet>
      <Layout>
        {loading === true ? (
          <>Loading...</>
        ) : (
          <>
            <Tabs marginTop="40px" variant="enclosed-colored">
              <TabList>
                <Tab>Advanced</Tab>
                <Tab>Summary</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <CurrentGlobalMetrics data={data} />

                  <MarketDominance data={data} />

                  <Social />
                </TabPanel>
                <TabPanel>
                  <Summary data={data} />
                </TabPanel>
              </TabPanels>
            </Tabs>

            <br />
          </>
        )}
      </Layout>
    </>
  );
}
