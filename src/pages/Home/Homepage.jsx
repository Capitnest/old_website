import React from "react";
import styled from "styled-components";

//COMPONENTS
import Header from "./components/Header";
import Stats from "./components/Stats";
import Filter from "./components/Filter";
import Explore from "./components/Explore";
import Content from "./components/Content";
import Newsletter from "./components/Newsletter";
import Join from "./components/Join";

//LIBRARIES COMPONENTS
import { Container } from "@chakra-ui/react";

//LAYOUT
import Footerr from "../../components/Footer";
import { Navbar } from "../../components/Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">
        <Header />

        <Stats />

        <a
          name="more"
          style={{ position: "relative", zIndex: "-2", top: "-80px" }}
        />

        <br />
        <br />
        <br />
        <br />

        <Filter />

        <br />
        <br />

        <Explore />

        <br />

        <Content />

        {/* <Text my={6}>{currentUser?.email}</Text> */}

        <br />
        <br />
        <br />

        <Newsletter />

        <br />
        <br />
        <br />
        <br />

        <Join />

        <br />
        <br />
      </Container>
      <Footerr />
    </>
  );
}
