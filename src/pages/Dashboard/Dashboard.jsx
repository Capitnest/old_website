import React from "react";
import styled from "styled-components";
import useScript from "../../functions/useScript";

import { Layout } from "../../components/Layout";

//COMPONENTS
import Welcome from "./components/Welcome";
import News from "./components/News";
import Content from "../Home/components/Content";
import Footerr from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <br />
        <br />
        <br />
        <br />

        <Welcome />

        <Content />
      </Layout>
      <Footerr />
    </>
  );
}
