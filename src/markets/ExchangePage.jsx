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
  Tfoot,
  Badge,
  Avatar,
  Progress,
} from "@chakra-ui/react";
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

export default function ExchangePage() {
  const { id } = useParams();
  const [exchange, setExchange] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/exchanges/${id}`;

  function ProgressColor(score) {
    if (score > 6) {
      return "green";
    } else if (score <= 6 && score > 4) {
      return "orange";
    } else {
      return "red";
    }
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setExchange(response.data);
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
          <title>Capitnest</title>
        ) : (
          <title>{exchange.name} Trade Volume, Trust Score | Capitnest</title>
        )}
      </Helmet>
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
              <div>
                <Stat>
                  <StatLabel fontSize="1.75rem" fontWeight="700">
                    <Avatar
                      src={exchange.image}
                      alt={exchange.name}
                      size={75}
                    />
                  </StatLabel>

                  <StatNumber>
                    {exchange.name}{" "}
                    <Badge colorScheme="green">
                      {exchange.trust_score_rank}
                    </Badge>
                  </StatNumber>

                  <StatHelpText fontSize="1.2rem" fontWeight="700">
                    {exchange.centralized === true ? (
                      <>Centralized</>
                    ) : (
                      <>Decentralized</>
                    )}
                  </StatHelpText>
                </Stat>

                <Flex>
                  <Stat
                    borderWidth="2px"
                    padding="10px"
                    borderLeftRadius="10px"
                  >
                    <StatLabel>Trust Score</StatLabel>
                    <StatNumber>{exchange.trust_score}</StatNumber>
                  </Stat>
                  <Stat borderWidth="2px" padding="10px">
                    <StatLabel>24h Trade Volume BTC</StatLabel>
                    <StatNumber>
                      <NumberFormat
                        thousandSeparator={true}
                        value={exchange.trade_volume_24h_btc}
                        displayType="text"
                        decimalScale={3}
                      />
                    </StatNumber>
                  </Stat>
                  <Stat borderWidth="2px" padding="10px">
                    <StatLabel>24h Trade Volume USD</StatLabel>
                    <StatNumber>
                      $
                      <NumberFormat
                        thousandSeparator={true}
                        value={exchange.trade_volume_24h_btc * 40000}
                        displayType="text"
                        decimalScale={1}
                      />
                    </StatNumber>
                  </Stat>
                </Flex>
              </div>
            </>
          )}
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
