import {
  Badge,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Flex,
  Button,
  Spacer,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Center,
  Wrap,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import MaterialTable from "material-table";
import styled from "styled-components";
import useScript from "../../functions/useScript";
import { Navbar } from "../../components/Navbar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import Filter from "./components/Filter";
import Explore from "./components/Explore";
import { Layout } from "../../components/Layout";

export default function Homepage() {
  return (
    <Layout>
      <Page>
        <Header />

        <Stats />

        <a name="more" />
        <br />
        <br />
        <br />
        <br />

        <Filter />

        <br />
        <br />

        <Explore />

        <Content>
          <h2>Explore All Types of Content</h2>
          <Flex marginTop="25px" justifyContent={"center"}>
            <span>
              <Box
                maxW="sm"
                borderWidth="2px"
                borderRadius="lg"
                overflow="hidden"
                padding="10px"
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src="/images/socialmedia.png" width="150px" />
                </div>
                <h1>Feed</h1>
                <p style={{ fontSize: "15px", marginTop: "5px" }}>
                  Explore Crypto & NFT content through a social media style App
                </p>
                <Center>
                  <Button colorScheme="green" size="sm" marginTop="7px">
                    <a
                      href="/news"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Explore
                    </a>
                  </Button>
                </Center>
              </Box>
            </span>
            <span>
              <Box
                maxW="sm"
                borderWidth="2px"
                borderRadius="lg"
                overflow="hidden"
                padding="10px"
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src="/images/news.webp" width="150px" />
                </div>
                <h1>News</h1>
                <p style={{ fontSize: "16px", marginTop: "5px" }}>
                  The Latest Important News about Crypto & NFTs
                </p>

                <Center>
                  <Button colorScheme="green" size="sm" marginTop="7px">
                    <a
                      href="/news"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Explore
                    </a>
                  </Button>
                </Center>
              </Box>
            </span>

            <span>
              <Box
                maxW="sm"
                borderWidth="2px"
                borderRadius="lg"
                overflow="hidden"
                padding="10px"
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <img src="/images/nft.png" width="130px" />
                </div>
                <h1>NFTs</h1>
                <p style={{ fontSize: "15px", marginTop: "5px" }}>
                  See the Upcomming NFTs & Information about them
                </p>
                <Center>
                  <Button colorScheme="green" size="sm" marginTop="7px">
                    <a
                      href="/news"
                      style={{ fontSize: "15px", fontWeight: "bold" }}
                    >
                      Explore
                    </a>
                  </Button>
                </Center>
              </Box>
            </span>
          </Flex>
        </Content>

        {/* <Text my={6}>{currentUser?.email}</Text> */}

        <br />
        <br />
        <br />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "30px",
              fontWeight: 800,
            }}
          >
            Join Our Newsletter and get the Most Important News in your inbox!
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {useScript(
              "https://eocampaign1.com/form/045a91d2-9409-11ec-9258-0241b9615763.js"
            )}
            <script
              async
              src="https://eocampaign1.com/form/045a91d2-9409-11ec-9258-0241b9615763.js"
              data-form="045a91d2-9409-11ec-9258-0241b9615763"
            ></script>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />

        <Heading size="md" mt={8}>
          Some other links (only for reference):
        </Heading>
        <List>
          <ListItem>
            <Link to="/reset-password">reset page</Link>
          </ListItem>
          <ListItem>
            <Link to="/forgot-password">forgot page</Link>
          </ListItem>
        </List>
      </Page>
    </Layout>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;
  }

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin-top: 7px;
  }

  p {
    font-family: "Inter", sans-serif;
    text-align: center;
    margin-right: 10px;
    margin-left: 10px;
  }

  span {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

const Page = styled.div`
  margin-top: 30px;
`;
