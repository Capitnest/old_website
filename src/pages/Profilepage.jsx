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
import { auth } from "../utils/init-firebase";

export default function Profilepage() {
  const { currentUser } = useAuth();

  function signOut() {
    return auth.signOut();
  }

  return (
    <Layout>
      <br />
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>Profile</h1>
      <p>Email: {currentUser.email}</p>
      <button onClick={signOut}>Sign Out</button>
      <br />
    </Layout>
  );
}
