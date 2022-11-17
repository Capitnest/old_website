import React from "react";
import { Flex, Wrap, Box, useColorMode } from "@chakra-ui/react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MarketDominance(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  function AltCoinsPercentage(perc) {
    // var sum = 0;
    // var x = 0;
    // for (x in perc.data["market_cap_percentage"]) {
    //   sum += perc.data["market_cap_percentage"][x];
    //   x += 1;
    // }

    return (
      100 -
      props.data.data.market_cap_percentage.eth -
      props.data.data.market_cap_percentage.btc
    );
  }

  return (
    <>
      <Content>
        {colorMode === "dark" ? (
          <>
            <MarketDominanceContent>
              <Title>Market Dominance</Title>

              <Link to="/coins/bitcoin" style={{ color: "inherit" }}>
                <CoinBox
                  style={{
                    backgroundColor: (() => {
                      if (colorMode === "light") {
                        return "rgb(237, 242, 247)";
                      } else {
                        return "#1f2434";
                      }
                    })(),
                  }}
                >
                  <img src="/images/icons/bitcoin.png" alt="bicoin" />

                  <div>
                    <h1>Bitcoin</h1>
                    <p>
                      <NumberFormat
                        thousandSeparator={true}
                        value={props.data.data.market_cap_percentage.btc}
                        displayType="text"
                        decimalScale={1}
                      />
                      %
                    </p>
                  </div>
                </CoinBox>
              </Link>

              <Link to="/coins/ethereum" style={{ color: "inherit" }}>
                <CoinBox
                  style={{
                    backgroundColor: (() => {
                      if (colorMode === "light") {
                        return "rgb(237, 242, 247)";
                      } else {
                        return "#1f2434";
                      }
                    })(),
                  }}
                >
                  <img
                    src="/images/icons/ethereum.png"
                    alt="ethereum"
                    width="40px"
                  />

                  <div>
                    <h1>Ethereum</h1>
                    <p>
                      <NumberFormat
                        thousandSeparator={true}
                        value={props.data.data.market_cap_percentage.eth}
                        displayType="text"
                        decimalScale={1}
                      />
                      %
                    </p>
                  </div>
                </CoinBox>
              </Link>

              <Link to="/markets" style={{ color: "inherit" }}>
                <CoinBox
                  style={{
                    backgroundColor: (() => {
                      if (colorMode === "light") {
                        return "rgb(237, 242, 247)";
                      } else {
                        return "#1f2434";
                      }
                    })(),
                  }}
                >
                  <FaCoins size={50} style={{ marginTop: "4px" }} />

                  <div>
                    <h1>Other</h1>
                    <p>
                      <NumberFormat
                        thousandSeparator={true}
                        value={AltCoinsPercentage(props.data)}
                        displayType="text"
                        decimalScale={1}
                      />
                      %
                    </p>
                  </div>
                </CoinBox>
              </Link>
            </MarketDominanceContent>
            <Index>
              <Title>Crypto Fear Index</Title>
              <Wrap>
                <Box padding="10px" borderWidth="2px" borderRadius="10px">
                  <img
                    src="https://alternative.me/crypto/fear-and-greed-index.png"
                    alt="Crypto Fear & Greed Index on May 13, 2020"
                    width="100%"
                  />
                </Box>
              </Wrap>
            </Index>
          </>
        ) : (
          <>
            <MarketDominanceContent>
              <Title>Market Dominance</Title>
            </MarketDominanceContent>

            <Index>
              <Title>Crypto Fear Index</Title>
              <Wrap>
                <Box padding="10px" borderWidth="2px" borderRadius="10px">
                  <img
                    src="https://alternative.me/crypto/fear-and-greed-index.png"
                    alt="Crypto Fear & Greed Index on May 13, 2020"
                    width="100%"
                  />
                </Box>
              </Wrap>
            </Index>
          </>
        )}
      </Content>
    </>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const MarketDominanceContent = styled.div`
  width: 68%;

  @media (max-width: 1000px) {
    width: 57%;
    margin-right: 10px;
  }

  @media (max-width: 800px) {
    width: 100%;
  }

  .marketdominance-flex {
    @media (max-width: 800px) {
      flex-wrap: nowrap;
    }
  }
`;

const Index = styled.div`
  width: 30%;

  @media (max-width: 1000px) {
    width: 40%;
  }

  @media (max-width: 900px) {
    width: 60%;
  }

  @media (max-width: 800px) {
    margin-top: 30px;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CoinBox = styled.div`
  border-radius: 5px;
  padding: 10px;
  border-width: 2px;
  font-family: "Inter", sans-serif;
  display: flex;
  height: 83.3px;
  margin-bottom: 10px;

  h1 {
    font-size: 18px;
    font-weight: 500;
  }

  p {
    font-size: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    margin-left: 10px;
  }
`;
