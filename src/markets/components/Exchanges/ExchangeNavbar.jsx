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
  Hide,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function ExchangeNavbar() {
  return (
    <>
      <Tabs defaultIndex={1}>
        <TabList>
          <Link to="/markets">
            <Tab>Coins</Tab>
          </Link>
          <Tab>Exchanges</Tab>

          <Link to="/indexes">
            <Tab>Indexes</Tab>
          </Link>
        </TabList>
      </Tabs>
    </>
  );
}
