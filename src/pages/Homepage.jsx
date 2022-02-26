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
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import MaterialTable from "material-table";
import styled from "styled-components";
import useScript from "../functions/useScript";

export default function Homepage() {
  return (
    <Layout>
      <Head>
        <Flex flexDirection={"column"}>
          <h1>Find important news about Crypto & NFTs</h1>
          <p>
            In a industry full of fake news, scams & bad advices find the most
            important & trustworthy news about Cryptocurrency & NFTs.
          </p>
          <Spacer />
          <Button colorScheme="teal">
            <a href="/register">Sign Up</a>
          </Button>
        </Flex>
        <img src="/images/home.png" />
      </Head>

      <Stats>
        <span>
          <Box
            maxW="sm"
            borderWidth="2px"
            borderRadius="lg"
            overflow="hidden"
            padding="10px"
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src="/images/post.png" width="100px" />
            </div>
            <h1>536k</h1>
            <p>Posts Filtered Through</p>
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
            <CircularProgress
              value={100}
              color="#04d192"
              size="120px"
              style={{
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <CircularProgressLabel>
                <p style={{ fontWeight: "bold" }}>11,5k</p>
              </CircularProgressLabel>
            </CircularProgress>

            <p>
              People Trusted <br /> Our Information
            </p>
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
              <img src="/images/interact.webp" width="77px" />
            </div>
            <h1>1,47k</h1>
            <p>
              People Interacted with <br /> Our Content
            </p>
          </Box>
        </span>
      </Stats>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          marginBottom: "100px",
        }}
      >
        <Button colorScheme="teal">
          <a href="#more">
            <ArrowDownIcon /> See More
          </a>
        </Button>
      </div>

      <a name="more" />
      <br />
      <br />

      <Filter>
        <img src="/images/filter.png" style={{ marginRight: "40px" }} />

        <Flex direction={"column"}>
          <h1>
            We filter through thousands of articles from hundrends of difference
            sources
          </h1>
          <p>
            We look at hundrends of different, podcasts, news articles, social
            media posts, youtube videos, etc. and find the best content & the
            best information to give it to you.
          </p>
          <Button colorScheme="teal" width="150px">
            <a href="/register">Sign Up</a>
          </Button>
        </Flex>
      </Filter>

      <Content>
        <h2>Explore All Types of Content</h2>
        <Flex marginTop="25px">
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
              <h1>Latest News</h1>
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
                <img src="/images/socialmedia.png" width="150px" />
              </div>
              <h1>Popular Social Media Posts</h1>
              <p style={{ fontSize: "15px", marginTop: "5px" }}>
                Twitter Tweets & Social Media Posts
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
                <img src="/images/podcast.png" width="150px" />
              </div>
              <h1>Podcasts</h1>
              <p style={{ fontSize: "15px", marginTop: "5px" }}>
                List of great podcasts that our team & community checked them
                out
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
              <h1>Upcomming NFTs</h1>
              <p style={{ fontSize: "15px", marginTop: "5px" }}>
                List of the Upcomming NFTs & information about them
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

      <Filter>
        <img
          src="/images/statie.png"
          width="600px"
          style={{ marginRight: "40px" }}
        />

        <Flex direction={"column"} marginTop="70px">
          <h1>Join the Greatest Crypto Community</h1>

          <p>
            Join the Greatest Community in Crypto & always be up to date about
            everything that happends about Crypto & NFTs
          </p>
          <Button colorScheme="teal" width="150px">
            <a href="/register">Sign Up</a>
          </Button>
        </Flex>
      </Filter>

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
        <ListItem>
          <Link to="/test">test page</Link>
        </ListItem>
      </List>
    </Layout>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 60px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
    margin-top: 80px;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Inter", sans-serif;
  }

  button {
    margin-top: 5px;
    width: 150px;
  }

  a {
    font-family: "Inter", sans-serif;

    &:hover {
    }
  }
`;

const Filter = styled.div`
  display: flex;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Inter", sans-serif;
  }

  button {
    margin-top: 20px;
    width: 150px;
  }

  a {
    font-family: "Inter", sans-serif;

    &:hover {
    }
  }
`;

const Stats = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;

  h1 {
    font-family: "Inter", sans-serif;
    font-size: 30px;
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
    margin-right: 5px;
    margin-left: 5px;
  }
`;

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
