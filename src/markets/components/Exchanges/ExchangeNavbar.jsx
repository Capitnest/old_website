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

      <br />

      <Flex>
        <Stat>
          <StatLabel fontSize="18px" fontWeight="700">
            Coins
          </StatLabel>
          <StatNumber>3868</StatNumber>
          <StatHelpText>Tracked</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="18px" fontWeight="700">
            Exchanges
          </StatLabel>
          <StatNumber>250</StatNumber>
          <StatHelpText>Tracked</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="18px" fontWeight="700">
            Indexes
          </StatLabel>
          <StatNumber>29</StatNumber>
          <StatHelpText>Tracked</StatHelpText>
        </Stat>

        <Stat>
          <StatLabel fontSize="18px" fontWeight="700">
            Categories
          </StatLabel>
          <StatNumber>75</StatNumber>
          <StatHelpText>Available</StatHelpText>
        </Stat>
      </Flex>
    </>
  );
}
