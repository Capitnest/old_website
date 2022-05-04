import React from "react";
import { Layout } from "../../components/Layout";

//COMPONENTS
import Welcome from "./components/Welcome";
import Content from "../Home/components/Content";
import Footerr from "../../components/Footer";
import GlobalMetrics from "./components/GlobalMetrics";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <Welcome />

        <GlobalMetrics />

        <Content />
      </Layout>
      <Footerr />
    </>
  );
}
