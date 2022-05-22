import React from "react";
import {
  Flex,
  Box,
  Wrap,
  Center,
  useColorMode,
  Hide,
  Show,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { BsGithub } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";
import { RiStarSFill } from "react-icons/ri";
import { DiGitPullRequest } from "react-icons/di";

export default function Developer(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const coins = props.data;
  // choose the border color
  function borderClr() {
    if (colorMode == "light") {
      return "rgba(0, 0, 0, 0.80)";
    } else {
      return "rgba(0, 0, 0, 0.24)";
    }
  }

  // choose the background color
  function backgroundClr() {
    if (colorMode == "light") {
      return "rgba(0, 0, 0, 0.08)";
    } else {
      return "#2D3748";
    }
  }

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

      {/* Desktop Desgin */}
      <Hide breakpoint="(max-width: 650px)">
        <Wrap>
          <Box
            padding="10px"
            borderWidth="2px"
            borderRadius="12px"
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
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
            width="180px"
            borderColor={borderClr}
            backgroundColor={backgroundClr}
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
      </Hide>

      {/* Mobile Design */}
      <Show breakpoint="(max-width: 650px)">
        <Flex flexDirection="column">
          <Flex>
            <Box
              padding="10px"
              borderWidth="2px"
              borderTopLeftRadius="12px"
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
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
              borderTopRightRadius="12px"
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
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
          </Flex>
          <Flex>
            <Box
              padding="10px"
              borderWidth="2px"
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
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
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
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
          </Flex>
          <Flex>
            <Box
              padding="10px"
              borderWidth="2px"
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
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
              width="50%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
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
          </Flex>
          <Flex>
            <Box
              padding="10px"
              borderWidth="2px"
              borderBottomLeftRadius="12px"
              borderBottomRightRadius="12px"
              width="100%"
              borderColor={borderClr}
              backgroundColor={backgroundClr}
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
          </Flex>
        </Flex>
      </Show>
    </>
  );
}
