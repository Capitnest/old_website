import React from "react";
import { Flex, Box, Wrap, Center } from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { BsGithub } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { DiGitPullRequest } from "react-icons/di";

export default function Developer(props) {
  const coins = props.data;

  return (
    <>
      <h1
        style={{
          fontSize: "25px",
          fontWeight: "700",
          marginBottom: "10px",
          marginTop: "15px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        Developer Statistics
      </h1>
      <Wrap>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BiGitRepoForked size={50} />
            </Center>
            <p>Forks</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.developer_data.forks === null ? (
                <p>0</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.developer_data.forks}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <RiStarSFill size={50} />
            </Center>
            <p>Github Stars</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.developer_data.stars === null ? (
                <p>0</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.developer_data.stars}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsGithub size={50} />
            </Center>
            <p>Github Subscribers</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.developer_data.subscribers === null ? (
                <p>0</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.developer_data.subscribers}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsGithub size={50} />
            </Center>
            <p>Github Total Issues</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.developer_data.total_issues === null ? (
                <p>0</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.developer_data.total_issues}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <BsGithub size={50} />
            </Center>
            <p>Github Closed Issues</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.developer_data.closed_issues === null ? (
                <p>0</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.developer_data.closed_issues}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <DiGitPullRequest size={50} />
            </Center>
            <p>Github Pull Requests Merges</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.developer_data.pull_requests_merged === null ? (
                <p>0</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.developer_data.pull_requests_merged}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
        <Box
          padding="10px"
          borderWidth="2px"
          borderRadius="12px"
          maxWidth="180px"
        >
          <Flex flexDirection="column" textAlign="center">
            <Center>
              <DiGitPullRequest size={50} />
            </Center>
            <p>Github Pull Request Contributors</p>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              {coins.developer_data.pull_request_contributors === null ? (
                <p>0</p>
              ) : (
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.developer_data.pull_request_contributors}
                  displayType="text"
                  decimalScale={1}
                />
              )}
            </p>
          </Flex>
        </Box>
      </Wrap>
    </>
  );
}
