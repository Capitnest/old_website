import React from "react";
import {
  Tabs,
  Tab,
  Flex,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  TabList,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function IndexesNavbar() {
  return (
    <>
      <Tabs defaultIndex={2}>
        <TabList>
          <Link to="/markets">
            <Tab>Coins</Tab>
          </Link>
          <Link to="/exchanges">
            <Tab>Exchanges</Tab>
          </Link>
          <Tab>Indexes</Tab>
        </TabList>
      </Tabs>

      <Ad>
        Data from{" "}
        <a
          href="https://www.coingecko.com/"
          target="_blank"
          style={{
            color: "rgb(141, 198, 71)",
            textDecoration: "underline",
          }}
        >
          CoinGecko
        </a>
      </Ad>
    </>
  );
}

const Ad = styled.p`
  margin-top: 10px;
  margin-bottom: -15px;
  text-align: right;
`;
