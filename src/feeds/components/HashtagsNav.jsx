import React from "react";
import { Box, textDecoration, useColorMode } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

export default function HashtagsNav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      {colorMode === "dark" ? (
        <Box
          maxW="md"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          backgroundColor="#1f2434"
          color="white"
          marginRight="20px"
          padding="10px 20px"
          height="100%"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "20px",
            }}
          >
            <div
              href="/feeds"
              style={{
                display: "flex",
                fontSize: "25px",
              }}
            >
              <HiHome size={32} />
              <Navlink to="/feeds" name="Home" />
            </div>

            <hr />

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Navlink to="/feeds/bitcoin" name="#Bitcoin" />
              <Navlink to="/feeds/ethereum" name="#Ethereum" />
              <Navlink to="/feeds/solana" name="#Solana" />
              <Navlink to="/feeds/cardano" name="#Cardano" />
              {/* <Navlink to="/feeds/polkadot" name="#Polkadot" />
              <Navlink to="/feeds/bnb" name="#BNB" />
              <Navlink to="/feeds/xrp" name="#XRP" />
              <Navlink to="/feeds/doge" name="#Doge" /> */}
            </div>
          </div>
        </Box>
      ) : (
        <Box
          maxW="md"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
          backgroundColor="var(--chakra-colors-gray-100)"
          marginRight="20px"
          padding="10px 20px"
          height="100%"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "20px",
            }}
          >
            <div
              href="/feeds"
              style={{
                display: "flex",
                fontSize: "25px",
              }}
            >
              <HiHome size={32} />
              <Navlink to="/feeds" name="Home" />
            </div>

            <hr />

            <div
              style={{
                marginTop: "15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Navlink to="/feeds/bitcoin" name="#Bitcoin" />
              <Navlink to="/feeds/ethereum" name="#Ethereum" />
              <Navlink to="/feeds/solana" name="#Solana" />
              <Navlink to="/feeds/cardano" name="#Cardano" />
              {/* <Navlink to="/feeds/polkadot" name="#Polkadot" />
              <Navlink to="/feeds/bnb" name="#BNB" />
              <Navlink to="/feeds/xrp" name="#XRP" />
              <Navlink to="/feeds/doge" name="#Doge" /> */}
            </div>
          </div>
        </Box>
      )}
    </>
  );
}

function Navlink({ to, name, ...rest }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Linkk>
      <Link
        to={to}
        style={{
          fontWeight: (() => {
            if (isActive === true) {
              return 700;
            } else {
              return "inherit";
            }
          })(),
        }}
      >
        {name}
      </Link>
    </Linkk>
  );
}

const Linkk = styled.div`
  a {
    &:hover {
      color: #04d192;
    }
  }
`;
