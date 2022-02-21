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
} from "@chakra-ui/react";
import { ArrowDownIcon } from "@chakra-ui/icons";

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import MaterialTable from "material-table";
import styled from "styled-components";

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
          marginBottom: "120px",
        }}
      >
        <Button colorScheme="teal">
          <a href="#more">
            <ArrowDownIcon /> See More
          </a>
        </Button>
      </div>

      <Filter>
        <a name="more"></a>
        <img src="/images/filter.png" />

        <h1>
          We filter through thousands of articles from hundrends of difference
          sources
        </h1>
      </Filter>

      {/* <Text my={6}>{currentUser?.email}</Text> */}

      <Heading>
        Firebase Authentication
        <chakra.span
          fontWeight="black"
          fontStyle="italic"
          fontSize="9xl"
          mx={2}
        >
          v9
        </chakra.span>
        <Badge
          fontWeight="black"
          fontSize="4xl"
          mx={2}
          px={2}
          colorScheme="green"
        >
          NEW API
        </Badge>
      </Heading>
      <OrderedList fontSize="3xl" my={4}>
        <ListItem>Email password authentication (Register/Login)</ListItem>
        <ListItem>Google Sign in</ListItem>
        <ListItem>Forgot Password</ListItem>
        <ListItem>Custom Reset password page</ListItem>
        <ListItem>Protected routes</ListItem>
        <ListItem>
          <Code fontSize="inherit"> Redirect TO</Code> or Back (keeping the
          state)
        </ListItem>
        <ListItem>
          custom Auth Hook <Code fontSize="3xl">useAuth()</Code>
        </ListItem>
        <ListItem>Loading indicators while sign-in/up</ListItem>
        <ListItem>
          Dark Mode enabled template using
          <Badge
            fontSize="inherit"
            colorScheme="teal"
            mx={2}
            textTransform="capitalize"
            borderRadius="md"
          >
            Chakra UI
          </Badge>
        </ListItem>
      </OrderedList>
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
    font-size: 50px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
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
