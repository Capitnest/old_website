import React from "react";
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Show,
  Hide,
  useColorMode,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import { format } from "friendly-numbers";
import styled from "styled-components";

export default function General(props) {
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
    <Content>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
          marginBottom: "10px",
          marginTop: "15px",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        General Information
      </h1>
      <Flex flexDirection="column">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>{coins.name} Price</Td>
                <Td fontWeight="700">
                  $
                  <Hide breakpoint="(max-width: 485px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.current_price.usd}
                      displayType="text"
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 485px">
                    {format(coins.market_data.current_price.usd, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                </Td>
              </Tr>
              {coins.market_data.roi === null ? (
                <></>
              ) : (
                <Tr>
                  <Td>{coins.name} ROI</Td>
                  <Td fontWeight="700">
                    <Hide breakpoint="(max-width: 485px)">
                      <NumberFormat
                        thousandSeparator={true}
                        value={coins.market_data.roi.percentage}
                        displayType="text"
                        decimalScale={1}
                      />
                    </Hide>
                    <Show breakpoint="(max-width: 485px">
                      {format(coins.market_data.roi.percentage, {
                        decimals: 2,
                        formattedDecimals: 1,
                        smallMinimumMeaningfulDigits: 2,
                      })}
                    </Show>
                    %
                  </Td>
                </Tr>
              )}
              <Tr>
                <Td>Market Cap</Td>
                <Td fontWeight="700">
                  $
                  <Hide breakpoint="(max-width: 485px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.market_cap.usd}
                      displayType="text"
                      decimalScale={1}
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 485px">
                    {format(coins.market_data.market_cap.usd, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                </Td>
              </Tr>
              <Tr>
                <Td>Market Cap Rank</Td>
                <Td fontWeight="700"># {coins.market_cap_rank}</Td>
              </Tr>
              <Tr>
                <Td>Trading Volume</Td>
                <Td fontWeight="700">
                  $
                  <Hide breakpoint="(max-width: 485px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.total_volume.usd}
                      displayType="text"
                      decimalScale={1}
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 485px">
                    {format(coins.market_data.total_volume.usd, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                </Td>
              </Tr>
              <Hide breakpoint="(max-width: 485px)">
                <Tr>
                  <Td>24h Low / 24h High</Td>
                  <Td fontWeight="700">
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.low_24h.usd}
                      displayType="text"
                      decimalScale={1}
                    />
                    / $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.high_24h.usd}
                      displayType="text"
                      decimalScale={1}
                    />
                  </Td>
                </Tr>
              </Hide>
              <Tr>
                <Td>24h Price Change</Td>
                <Td fontWeight="700">
                  <Hide breakpoint="(max-width: 485px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.price_change_percentage_24h}
                      displayType="text"
                      decimalScale={1}
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 485px">
                    {format(coins.market_data.price_change_percentage_24h, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                  %
                </Td>
              </Tr>

              <Show breakpoint="(max-width: 485px">
                <Tr>
                  <Td>24h Low</Td>
                  <Td fontWeight="700">
                    $
                    {format(coins.market_data.low_24h.usd, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Td>
                </Tr>
              </Show>

              <Show breakpoint="(max-width: 485px">
                <Tr>
                  <Td>24h High</Td>
                  <Td fontWeight="700">
                    $
                    {format(coins.market_data.high_24h.usd, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Td>
                </Tr>
              </Show>

              <Tr>
                <Td>7d Price Change</Td>
                <Td fontWeight="700">
                  <Hide breakpoint="(max-width: 485px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.price_change_percentage_7d}
                      displayType="text"
                      decimalScale={1}
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 485px">
                    {format(coins.market_data.price_change_percentage_7d, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                  %
                </Td>
              </Tr>
              <Tr>
                <Td>All-time High</Td>
                <Td fontWeight="700">
                  $
                  <Hide breakpoint="(max-width: 485px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.ath.usd}
                      displayType="text"
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 485px">
                    {format(coins.market_data.ath.usd, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                </Td>
              </Tr>
              <Tr>
                <Td>All-time Low</Td>
                <Td fontWeight="700">
                  $
                  <Hide breakpoint="(max-width: 485px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.atl.usd}
                      displayType="text"
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 485px">
                    {format(coins.market_data.atl.usd, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <h1
          style={{
            fontSize: "30px",
            fontWeight: "700",
            marginBottom: "10px",
            marginTop: "15px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Scores
        </h1>

        <Hide breakpoint="(max-width: 450px)">
          <Flex>
            <Stat
              borderWidth="2px"
              padding="10px"
              borderLeftRadius="10px"
              backgroundColor={backgroundClr}
              borderColor={borderClr}
            >
              <StatLabel>Coingecko Score</StatLabel>
              <StatNumber>
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.coingecko_score}
                  displayType="text"
                  decimalScale={1}
                />
              </StatNumber>
            </Stat>
            <Stat
              borderWidth="2px"
              padding="10px"
              backgroundColor={backgroundClr}
              borderColor={borderClr}
            >
              <StatLabel>Developer Score</StatLabel>
              <StatNumber>
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.developer_score}
                  displayType="text"
                  decimalScale={1}
                />
              </StatNumber>
            </Stat>
            <Stat
              borderWidth="2px"
              padding="10px"
              backgroundColor={backgroundClr}
              borderColor={borderClr}
            >
              <StatLabel>Community Score</StatLabel>
              <StatNumber>
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.community_score}
                  displayType="text"
                  decimalScale={1}
                />
              </StatNumber>
            </Stat>
            <Stat
              borderWidth="2px"
              padding="10px"
              borderRightRadius="10px"
              backgroundColor={backgroundClr}
              borderColor={borderClr}
            >
              <StatLabel>Liquidity Score</StatLabel>
              <StatNumber>
                <NumberFormat
                  thousandSeparator={true}
                  value={coins.liquidity_score}
                  displayType="text"
                  decimalScale={1}
                />
              </StatNumber>
            </Stat>
          </Flex>
        </Hide>

        <Show breakpoint="(max-width: 450px)">
          <Flex flexDirection="column">
            <Flex>
              <Stat
                borderWidth="2px"
                padding="10px"
                borderTopLeftRadius="8px"
                backgroundColor={backgroundClr}
                borderColor={borderClr}
              >
                <StatLabel>Coingecko Score</StatLabel>
                <StatNumber>
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.coingecko_score}
                    displayType="text"
                    decimalScale={1}
                  />
                </StatNumber>
              </Stat>
              <Stat
                borderWidth="2px"
                padding="10px"
                borderTopRightRadius="8px"
                backgroundColor={backgroundClr}
                borderColor={borderClr}
              >
                <StatLabel>Developer Score</StatLabel>
                <StatNumber>
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.developer_score}
                    displayType="text"
                    decimalScale={1}
                  />
                </StatNumber>
              </Stat>
            </Flex>

            <Flex>
              <Stat
                borderWidth="2px"
                padding="10px"
                borderBottomLeftRadius="8px"
                backgroundColor={backgroundClr}
                borderColor={borderClr}
              >
                <StatLabel>Community Score</StatLabel>
                <StatNumber>
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.community_score}
                    displayType="text"
                    decimalScale={1}
                  />
                </StatNumber>
              </Stat>
              <Stat
                borderWidth="2px"
                padding="10px"
                borderBottomRightRadius="8px"
                backgroundColor={backgroundClr}
                borderColor={borderClr}
              >
                <StatLabel>Liquidity Score</StatLabel>
                <StatNumber>
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.liquidity_score}
                    displayType="text"
                    decimalScale={1}
                  />
                </StatNumber>
              </Stat>
            </Flex>
          </Flex>
        </Show>
      </Flex>
    </Content>
  );
}

const Content = styled.div``;
