import React from "react";
import { Box, textDecoration } from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function HashtagsNav() {
  return (
    <Box
      maxW="md"
      borderWidth="1px"
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
          <Navlink to="/feeds/solana" name="#Solana"/>
          <Navlink to="/feeds/cardano" name="#Cardano"/>
          <Navlink to="/feeds/polkadot" name="#Polkadot"/>
          <Navlink to="/feeds/luna" name="#Luna"/>
          <Navlink to="/feeds/bnb" name="#BNB" />
          <Navlink to="/feeds/xrp" name="#XRP"/>
          <Navlink to="/feeds/doge" name="#Doge"/>
          <Navlink to="/feeds/shib"name ="#Shib"/>
        </div>
      </div>
    </Box>
  );
}

function Navlink({ to, name, ...rest }) {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link>
      <a
        href={to}
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
      </a>
    </Link>
  );
}

const Link = styled.div`

	a {
	&:hover {
		color: #04d192;
	}
	}
`
