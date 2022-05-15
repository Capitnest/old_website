import React from "react";
import { Layout } from "../../components/Layout";

//COMPONENTS
import Welcome from "./components/Welcome";
import GlobalMetrics from "./components/GlobalMetrics";

import Footerr from "../../components/Footer";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <Welcome />

        <GlobalMetrics />
      </Layout>
      <Footerr />
    </>
  );
}
