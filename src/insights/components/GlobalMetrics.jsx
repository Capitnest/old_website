import React, { useState, useEffect } from "react";
import { Layout } from "./../../components/Layout";
import { Helmet } from "react-helmet";
import axios from "axios";
import Tab from "./Tab";

import MarketDominance from "./MarketDominance";
import CurrentGlobalMetrics from "./CurrentGlobalMetrics";

export default function GlobalMetrics() {
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
            <CurrentGlobalMetrics data={data} />

            <MarketDominance data={data} />
          </>
        )}
      </Layout>
    </>
  );
}
