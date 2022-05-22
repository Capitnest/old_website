import React from "react";
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Hide,
  Show,
  useColorMode,
} from "@chakra-ui/react";
import { format } from "friendly-numbers";
import NumberFormat from "react-number-format";

export default function Header(props) {
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
      <div>
        <Stat>
          <StatLabel fontSize="1.75rem" fontWeight="700">
            <img src={coins.image.large} alt={coins.name} width="75px" />
            {coins.name} ({coins.symbol.toUpperCase()})
          </StatLabel>
          <StatNumber fontSize="3rem" fontWeight="700">
            $
            <NumberFormat
              thousandSeparator={true}
              value={coins.market_data.current_price.usd}
              displayType="text"
            />
          </StatNumber>

          <StatHelpText fontSize="1.2rem" fontWeight="700">
            {coins.market_data.price_change_percentage_24h < 0 ? (
              <>
                <StatArrow
                  type="decrease"
                  color="var(--chakra-colors-red-400)"
                />
                <span style={{ color: "var(--chakra-colors-red-400)" }}>
                  {coins.market_data.price_change_percentage_24h}%
                </span>
              </>
            ) : (
              <>
                <StatArrow type="increase" />
                <span style={{ color: "var(--chakra-colors-green-400)" }}>
                  <NumberFormat
                    thousandSeparator={true}
                    value={coins.market_data.price_change_percentage_24h}
                    displayType="text"
                    decimalScale={6}
                  />
                  %
                </span>
              </>
            )}
          </StatHelpText>
        </Stat>
      </div>

      <Flex>
        <Stat
          borderWidth="2px"
          padding="10px"
          borderLeftRadius="10px"
          backgroundColor={backgroundClr}
          borderColor={borderClr}
        >
          <StatLabel>Market Cap</StatLabel>
          <StatNumber>
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
          </StatNumber>

          <StatHelpText>Rank {coins.market_cap_rank} / 3789</StatHelpText>
        </Stat>

        <Show below="md">
          <Stat
            borderWidth="2px"
            padding="10px"
            borderRightRadius="10px"
            backgroundColor={backgroundClr}
            borderColor={borderClr}
          >
            <StatLabel>24h Trading Volume </StatLabel>
            <StatNumber fontSize="23px">
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
            </StatNumber>

            <StatHelpText>
              <NumberFormat
                thousandSeparator={true}
                value={coins.market_data.total_volume.btc}
                displayType="text"
                decimalScale={3}
              />{" "}
              BTC
            </StatHelpText>
          </Stat>
        </Show>

        <Hide below="md">
          <Stat
            borderWidth="2px"
            padding="10px"
            backgroundColor={backgroundClr}
            borderColor={borderClr}
          >
            <StatLabel>24h Trading Volume </StatLabel>
            <StatNumber>
              $
              <NumberFormat
                thousandSeparator={true}
                value={coins.market_data.total_volume.usd}
                displayType="text"
                decimalScale={1}
              />
            </StatNumber>

            <StatHelpText>
              <NumberFormat
                thousandSeparator={true}
                value={coins.market_data.total_volume.btc}
                displayType="text"
                decimalScale={3}
              />{" "}
              BTC
            </StatHelpText>
          </Stat>
          <Stat
            borderWidth="2px"
            padding="10px"
            borderRightRadius="10px"
            backgroundColor={backgroundClr}
            borderColor={borderClr}
          >
            <StatLabel>Circulating Supply</StatLabel>
            <StatNumber>
              <NumberFormat
                thousandSeparator={true}
                value={coins.market_data.circulating_supply}
                displayType="text"
                decimalScale={1}
              />
            </StatNumber>

            <StatHelpText>
              {coins.market_data.max_supply === null ? (
                <>-</>
              ) : (
                <>MAX {coins.market_data.max_supply}</>
              )}
            </StatHelpText>
          </Stat>
        </Hide>
      </Flex>
    </>
  );
}
