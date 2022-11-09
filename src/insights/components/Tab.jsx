import React from "react";
import { Tabs, TabList, Tab as T, TabPanels, TabPanel } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Tab(props) {
  return (
    <div>
      <Tabs
        marginTop="40px"
        variant="enclosed-colored"
        defaultIndex={props.index}
        style={{ marginBottom: "20px" }}
      >
        <TabList>
          <Link to="/insights/global" style={{ color: "inherit" }}>
            <T>Global Data</T>
          </Link>
          <T>Defi Data</T>
          <T>Trending Cryptos</T>
          <Link to="/insights/companies" style={{ color: "inherit" }}>
            <T>Companies Holdings</T>
          </Link>
        </TabList>
      </Tabs>
    </div>
  );
}
