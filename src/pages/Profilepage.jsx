import {
  chakra,
  Container,
  Heading,
  Badge,
  Spacer,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import React, { useState } from "react";

import { useAuth } from "../contexts/AuthContext";

export default function Profilepage() {
  const { currentUser } = useAuth();

  return (
    <Layout>
      <br />
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Profile</h1>
      <p>Email: {currentUser.email}</p>

      <br />
    </Layout>
  );
}
