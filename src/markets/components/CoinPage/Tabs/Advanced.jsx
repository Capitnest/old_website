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
  Hide,
  Show,
} from "@chakra-ui/react";
import dateFormat from "dateformat";
import NumberFormat from "react-number-format";
import { format } from "friendly-numbers";

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
                  <Hide breakpoint="(max-width: 450px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.market_cap.usd}
                      displayType="text"
                      decimalScale={1}
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">
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
                  <Hide breakpoint="(max-width: 450px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.total_volume.usd}
                      displayType="text"
                      decimalScale={1}
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">
                    {format(coins.market_data.total_volume.usd, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                </Td>
              </Tr>
              <Tr>
                <Td>Circulating Supply</Td>
                <Td fontWeight="700">
                  <Hide breakpoint="(max-width: 450px)">
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.circulating_supply}
                      displayType="text"
                      decimalScale={1}
                    />
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">
                    {format(coins.market_data.circulating_supply, {
                      decimals: 2,
                      formattedDecimals: 1,
                      smallMinimumMeaningfulDigits: 2,
                    })}
                  </Show>
                </Td>
              </Tr>
              {coins.market_data.total_supply === null ? (
                <></>
              ) : (
                <Tr>
                  <Td>Total Supply</Td>
                  <Td fontWeight="700">
                    <Hide breakpoint="(max-width: 450px)">
                      <NumberFormat
                        thousandSeparator={true}
                        value={coins.market_data.total_supply}
                        displayType="text"
                        decimalScale={1}
                      />
                    </Hide>
                    <Show breakpoint="(max-width: 450px)">
                      {format(coins.market_data.total_supply, {
                        decimals: 2,
                        formattedDecimals: 1,
                        smallMinimumMeaningfulDigits: 2,
                      })}
                    </Show>
                  </Td>
                </Tr>
              )}
              {coins.market_data.max_supply === null ? (
                <></>
              ) : (
                <Tr>
                  <Td>Max Supply</Td>
                  <Td fontWeight="700">
                    <Hide breakpoint="(max-width: 450px)">
                      <NumberFormat
                        thousandSeparator={true}
                        value={coins.market_data.max_supply}
                        displayType="text"
                        decimalScale={1}
                      />
                    </Hide>
                    <Show breakpoint="(max-width: 450px)">
                      {format(coins.market_data.max_supply, {
                        decimals: 2,
                        formattedDecimals: 1,
                        smallMinimumMeaningfulDigits: 2,
                      })}
                    </Show>
                  </Td>
                </Tr>
              )}
              <Hide breakpoint="(max-width: 450px)">
                <Tr>
                  <Td>24h Low / 24h High</Td>
                  <Td fontWeight="700">
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.low_24h.usd}
                      displayType="text"
                    />{" "}
                    / $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.high_24h.usd}
                      displayType="text"
                    />
                  </Td>
                </Tr>
              </Hide>
              <Show breakpoint="(max-width: 450px)">
                <Tr>
                  <Td>24h Low</Td>
                  <Td fontWeight="700">
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.low_24h.usd}
                      displayType="text"
                    />{" "}
                  </Td>
                </Tr>
                <Tr>
                  <Td>24h High</Td>
                  <Td fontWeight="700">
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={coins.market_data.high_24h.usd}
                      displayType="text"
                    />{" "}
                  </Td>
                </Tr>
              </Show>
            </Tbody>
          </Table>
        </TableContainer>

        <h1
          style={{
            fontSize: "22px",
            fontWeight: 700,
            marginBottom: "0px",
            marginTop: "30px",
          }}
        >
          All Time Highs & Lows
          <Show breakpoint="(max-width: 450px)">
            <p
              style={{
                fontSize: "18px",
              }}
            >
              ATH & ATL
            </p>
          </Show>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    All Time High Price
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">ATH Price</Show>
                </Td>

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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    All Time High Percentage
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">ATH Percentage</Show>
                </Td>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    All Time High Date
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">ATH Date</Show>
                </Td>

                <Td fontWeight="700">
                  {dateFormat(coins.market_data.ath_date.usd)}
                </Td>
              </Tr>

              <Tr>
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    All Time Low Price
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">ATL Price</Show>
                </Td>

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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    All Time Low Percentage
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">ATL Percentage</Show>
                </Td>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">All Time Low Date</Hide>
                  <Show breakpoint="(max-width: 450px)">ATL Date</Show>
                </Td>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    Price Change Percentage 1h
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">1 hour</Show>
                </Td>

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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    Price Change Percentage 24h
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">24 hours</Show>
                </Td>

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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    Price Change Percentage 7d
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">7 days</Show>
                </Td>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    Price Change Percentage 14d
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">14 days</Show>
                </Td>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    Price Change Percentage 30d
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">30 days</Show>
                </Td>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    Price Change Percentage 60d
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">60 days</Show>
                </Td>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    Price Change Percentage 200d
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">200 days</Show>
                </Td>
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
                <Td>
                  <Hide breakpoint="(max-width: 450px)">
                    Price Change Percentage 1year
                  </Hide>
                  <Show breakpoint="(max-width: 450px)">1 year</Show>
                </Td>
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
