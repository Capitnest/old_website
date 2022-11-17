import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

//COMPONENTS
import Header from "./components/Header";
import Stats from "./components/Stats";
import Filter from "./components/Filter";
import Explore from "./components/Explore";
import Content from "./components/Content";
import Newsletter from "./components/Newsletter";
import Join from "./components/Join";

import Coins from "./components/CryptoPrices/Coins";

//LIBRARIES COMPONENTS
import { Container } from "@chakra-ui/react";

//LAYOUT
import Footerr from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function Homepage() {
  return (
    <>
      <Helmet>
        <title>Capitnest | The Truth in Crypto</title>
      </Helmet>

      <Navbar />
      <Container maxW="container.lg">
        <Header />

        <Stats />
        <a
          name="more"
          style={{ position: "relative", zIndex: "-2", top: "-80px" }}
        />

        <Filter />
        <br />
        <br />
        <Explore />
        <br />
        <br />
        <br />
        <Coins />
        <br />
        <Newsletter />
        <br />
        <Join />
        <br />
      </Container>
      <Footerr />
    </>
  );
}
