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

//LAYOUT
import Footerr from "../../components/Footer";
import { Layout } from "../../components/Layout";

export default function Homepage() {
  return (
    <>
      <Layout>
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

        <Newsletter />

        <br />
        <br />
        <br />
        <br />

        <Join />
      </Layout>

      <Footerr />
    </>
  );
}
