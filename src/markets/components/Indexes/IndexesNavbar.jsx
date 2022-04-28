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

      <br />
    </>
  );
}
