import React from "react";
import {
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import dateFormat from "dateformat";
import NumberFormat from "react-number-format";

export default function Advanced(props) {
  const coins = props.data;

  return (
    <>
      <Flex flexDirection="column">
        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          Advanced Stats
        </h1>
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
                <Td>Current Price</Td>
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
                <Td>Circulating Supply</Td>
                <Td fontWeight="700">
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.circulating_supply}
                    displayType="text"
                    decimalScale={2}
                  />
                </Td>
              </Tr>
              {coins.market_data.total_supply === null ? (
                <></>
              ) : (
                <Tr>
                  <Td>Total Supply</Td>
                  <Td fontWeight="700">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.total_supply}
                      displayType="text"
                      decimalScale={2}
                    />
                  </Td>
                </Tr>
              )}
              {coins.market_data.max_supply === null ? (
                <></>
              ) : (
                <Tr>
                  <Td>Max Supply</Td>
                  <Td fontWeight="700">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.max_supply}
                      displayType="text"
                      decimalScale={2}
                    />
                  </Td>
                </Tr>
              )}
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
            </Tbody>
          </Table>
        </TableContainer>

        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "10px",
            marginTop: "30px",
          }}
        >
          All Time Highs & Lows
        </h1>
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
                <Td>All Time High Price</Td>
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
                <Td>All Time High Percentage</Td>
                <Td fontWeight="700">
                  {coins.market_data.ath_change_percentage.usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={coins.market_data.ath_change_percentage.usd}
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={coins.market_data.ath_change_percentage.usd}
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td>All Time High Date</Td>
                <Td fontWeight="700">
                  {dateFormat(coins.market_data.ath_date.usd)}
                </Td>
              </Tr>

              <Tr>
                <Td>All Time Low Price</Td>
                <Td fontWeight="700">
                  $
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.atl.usd}
                    displayType="text"
                  />
                </Td>
              </Tr>
              <Tr>
                <Td>All Time Low Percentage</Td>
                <Td fontWeight="700">
                  {coins.market_data.atl_change_percentage.usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={coins.market_data.atl_change_percentage.usd}
                        thousandSeparator={true}
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={coins.market_data.atl_change_percentage.usd}
                        thousandSeparator={true}
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>
              <Tr>
                <Td>All Time Low Date</Td>
                <Td fontWeight="700">
                  {dateFormat(coins.market_data.atl_date.usd)}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "10px",
            marginTop: "30px",
          }}
        >
          Price Change Percentage
        </h1>

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
                <Td>Price Change Percentage 1h</Td>
                <Td fontWeight="700">
                  {coins.market_data.price_change_percentage_1h_in_currency
                    .usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_1h_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_1h_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td>Price Change Percentage 24h</Td>
                <Td fontWeight="700">
                  {coins.market_data.price_change_percentage_24h_in_currency
                    .usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_24h_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_24h_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td>Price Change Percentage 7d</Td>
                <Td fontWeight="700">
                  {coins.market_data.price_change_percentage_7d_in_currency
                    .usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_7d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_7d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td>Price Change Percentage 14d</Td>
                <Td fontWeight="700">
                  {coins.market_data.price_change_percentage_14d_in_currency
                    .usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_14d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_14d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td>Price Change Percentage 30d</Td>
                <Td fontWeight="700">
                  {coins.market_data.price_change_percentage_30d_in_currency
                    .usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_30d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_30d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td>Price Change Percentage 60d</Td>
                <Td fontWeight="700">
                  {coins.market_data.price_change_percentage_60d_in_currency
                    .usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_60d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_60d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td>Price Change Percentage 200d</Td>
                <Td fontWeight="700">
                  {coins.market_data.price_change_percentage_200d_in_currency
                    .usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_200d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_200d_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>

              <Tr>
                <Td>Price Change Percentage 1year</Td>
                <Td fontWeight="700">
                  {coins.market_data.price_change_percentage_1y_in_currency
                    .usd < 0 ? (
                    <p style={{ color: "rgb(245, 0, 87)" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_1y_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  ) : (
                    <p style={{ color: "#04d192" }}>
                      <NumberFormat
                        value={
                          coins.market_data
                            .price_change_percentage_1y_in_currency.usd
                        }
                        decimalScale={1}
                        displayType="text"
                      />
                      %
                    </p>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}
