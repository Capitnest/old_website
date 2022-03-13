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
import Content from "./components/Content";

import Footerr from "../../components/Footer";
import { Layout } from "../../components/Layout";

export default function Homepage() {
  return (
    <>
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

          <Content />

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
        </Page>
      </Layout>

      <Footerr />
    </>
  );
}

const Page = styled.div`
  margin-top: 30px;
`;
