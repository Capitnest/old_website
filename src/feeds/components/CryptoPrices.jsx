import React, { useEffect } from "react";
import useScript from "../../functions/useScript";
import { Wrap, useColorMode } from "@chakra-ui/react";

export default function CryptoPrices() {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    // window.location.reload(true);
  }, []);

  return (
    <>
      <div onLoad>
        {useScript("https://www.livecoinwatch.com/static/lcw-widget.js")}
        {colorMode === "dark" ? (
          <Wrap>
            <script
              defer
              src="https://www.livecoinwatch.com/static/lcw-widget.js"
            ></script>{" "}
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="BTC"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#ffffff"
              lcw-color-bg="#1f2434"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="ETH"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#ffffff"
              lcw-color-bg="#1f2434"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="BNB"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#ffffff"
              lcw-color-bg="#1f2434"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="XRP"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#ffffff"
              lcw-color-bg="#1f2434"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="LUNA"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#ffffff"
              lcw-color-bg="#1f2434"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="SOL"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#ffffff"
              lcw-color-bg="#1f2434"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="ADA"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#ffffff"
              lcw-color-bg="#1f2434"
              lcw-border-w="0"
            ></div>
          </Wrap>
        ) : (
          <Wrap>
            <script
              defer
              src="https://www.livecoinwatch.com/static/lcw-widget.js"
            ></script>{" "}
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="BTC"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#1f2434"
              lcw-color-bg="var(--chakra-colors-gray-100)"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="ETH"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#1f2434"
              lcw-color-bg="var(--chakra-colors-gray-100)"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="BNB"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#1f2434"
              lcw-color-bg="var(--chakra-colors-gray-100)"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="XRP"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#1f2434"
              lcw-color-bg="var(--chakra-colors-gray-100)"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="LUNA"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#1f2434"
              lcw-color-bg="var(--chakra-colors-gray-100)"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="SOL"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#1f2434"
              lcw-color-bg="var(--chakra-colors-gray-100)"
              lcw-border-w="0"
            ></div>
            <div
              class="livecoinwatch-widget-6"
              lcw-coin="ADA"
              lcw-base="USD"
              lcw-period="d"
              lcw-color-tx="#1f2434"
              lcw-color-bg="var(--chakra-colors-gray-100)"
              lcw-border-w="0"
            ></div>
          </Wrap>
        )}
      </div>
    </>
  );
}
