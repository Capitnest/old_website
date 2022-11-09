import React from "react";
import { Layout } from "./../../components/Layout";
import GlobalMetrics from "../components/GlobalMetrics";

import Footerr from "../../components/Footer";
import Tab from "../components/Tab";

export default function Dashboard() {
  return (
    <>
      <Layout>
        <Tab index={0} />
        <GlobalMetrics />
      </Layout>
    </>
  );
}
