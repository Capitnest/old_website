import React from "react";
import { Center, Flex, Box, Wrap, WrapItem } from "@chakra-ui/react";
import styled from "styled-components";

import { RiRoadMapFill } from "react-icons/ri";

// LAYOUT
import { Layout } from "../../../components/Layout";

export default function RoadMap() {
  return (
    <>
      <Layout>
        <Center>
          <RiRoadMapFill size={100} />
        </Center>
        <Center
          fontSize="40px"
          fontFamily='"Inter", sans-serif'
          fontWeight="bold"
        >
          Capitnest's{" "}
          <div style={{ color: "#04d192", marginLeft: "10px" }}>Roadmap</div>
        </Center>

        <Flex flexDirection="column">
          <Box
            maxW="60%"
            borderWidth="3px"
            borderRadius="lg"
            overflow="hidden"
            padding="5px"
            borderColor="#019165"
            backgroundColor="#f2f2f2"
            marginTop="20px"
          >
            <Flex flexDirection="column">
              <Title>1. Launch the platform</Title>

              <Description>
                Launch our platform and let the users start using it.
              </Description>
            </Flex>
          </Box>

          <Box
            maxW="60%"
            borderWidth="3px"
            borderRadius="lg"
            overflow="hidden"
            padding="5px"
            borderColor="#019165"
            backgroundColor="#f2f2f2"
            marginTop="20px"
          >
            <Flex flexDirection="column">
              <Title>2. Growing our community & Improving the Platform</Title>

              <Description>
                Start growing our community and improving our platform. Adding
                new features and improving the old ones. And the improving our
                platform
              </Description>
            </Flex>
          </Box>

          <Box
            maxW="60%"
            borderWidth="3px"
            borderRadius="lg"
            overflow="hidden"
            padding="5px"
            borderColor="#019165"
            backgroundColor="#f2f2f2"
            marginTop="20px"
          >
            <Flex flexDirection="column">
              <Title>
                3. Implementing Ads on our platform so we can fund the project.
              </Title>

              <Description>
                We will need to add ads on our platform so we can fund the
                project. Mainting oru p
              </Description>
            </Flex>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 35px;
  font-weight: 700;
`;

const Description = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
`;
