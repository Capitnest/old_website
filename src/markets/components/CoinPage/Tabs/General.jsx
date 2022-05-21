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
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

export default function General(props) {
  const coins = props.data;

  return (
    <>
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
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.current_price.usd}
                    displayType="text"
                  />
                </Td>
              </Tr>
              {coins.market_data.roi === null ? (
                <></>
              ) : (
                <Tr>
                  <Td>{coins.name} ROI</Td>
                  <Td fontWeight="700">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.roi.percentage}
                      displayType="text"
                      decimalScale={1}
                    />
                    %
                  </Td>
                </Tr>
              )}
              <Tr>
                <Td>Market Cap</Td>
                <Td fontWeight="700">
                  $
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.market_cap.usd}
                    displayType="text"
                    decimalScale={1}
                  />
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
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.total_volume.usd}
                    displayType="text"
                    decimalScale={1}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>24h Low / 24h High</Td>
                <Td fontWeight="700">
                  $
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.low_24h.usd}
                    displayType="text"
                    decimalScale={1}
                  />{" "}
                  / $
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.high_24h.usd}
                    displayType="text"
                    decimalScale={1}
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>24h Price Change</Td>
                <Td fontWeight="700">
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.price_change_percentage_24h}
                    displayType="text"
                    decimalScale={1}
                  />
                  %
                </Td>
              </Tr>
              <Tr>
                <Td>7d Price Change</Td>
                <Td fontWeight="700">
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.price_change_percentage_7d}
                    displayType="text"
                    decimalScale={1}
                  />
                  %
                </Td>
              </Tr>
              <Tr>
                <Td>All-time High</Td>
                <Td fontWeight="700">
                  $
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.ath.usd}
                    displayType="text"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>All-time Low</Td>
                <Td fontWeight="700">
                  $
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.atl.usd}
                    displayType="text"
                  />
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

        <Flex>
          <Stat borderWidth="2px" padding="10px" borderLeftRadius="10px">
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
          <Stat borderWidth="2px" padding="10px">
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
          <Stat borderWidth="2px" padding="10px">
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
          <Stat borderWidth="2px" padding="10px" borderRightRadius="10px">
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
    </>
  );
}
