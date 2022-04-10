import { Heading, Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

export default function NotfoundPage() {
  return (
    <Layout>
      <Flex flexDirection="column" justifyContent="center" textAlign="center">
        <Heading>We couldn't find this page :(</Heading>

        <Flex justifyContent="center">
          <img src="/images/404.png" width="400px" />
        </Flex>

        <Link to="/">Go to Home</Link>
      </Flex>
    </Layout>
  );
}
