import React from "react";
import { Flex, Wrap, Box, useColorMode } from "@chakra-ui/react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function MarketDominance(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  function AltCoinsPercentage(perc) {
    var sum = 0;
    var x = 0;
    for (x in perc.data["market_cap_percentage"]) {
      sum += perc.data["market_cap_percentage"][x];
      x += 1;
    }

    return 100 - sum;
  }

  return (
    <>
      <Content>
        {colorMode === "dark" ? (
          <>
            <MarketDominanceContent>
              <Title>Market Dominance</Title>
              <Wrap className="marketdominance-flex">
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      alt="bicoin"
                      width="50px"
                    />
                    <Flex flexDirection="column">
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
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                      alt="ethereum"
                      width="50px"
                    />
                    <Flex flexDirection="column">
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
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707"
                      alt="bicoin"
                      width="50px"
                    />
                    <Flex flexDirection="column">
                      <h1>Tether</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={props.data.data.market_cap_percentage.usdt}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
                      alt="bnb"
                      width="50px"
                    />
                    <Flex flexDirection="column">
                      <h1>BNB</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={props.data.data.market_cap_percentage.bnb}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389"
                      alt="usd coin"
                      width="50px"
                    />
                    <Flex flexDirection="column">
                      <h1>USD Coin</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={props.data.data.market_cap_percentage.usdc}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
                      alt="xrp"
                      width="50px"
                      style={{ borderRadius: "50%" }}
                    />
                    <Flex flexDirection="column">
                      <h1>XRP</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={props.data.data.market_cap_percentage.xrp}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422"
                      alt="solana"
                      width="50px"
                      style={{ borderRadius: "50%" }}
                    />
                    <Flex flexDirection="column">
                      <h1>Solana</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={props.data.data.market_cap_percentage.sol}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072"
                      alt="terra"
                      width="50px"
                    />
                    <Flex flexDirection="column">
                      <h1>Terra</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={props.data.data.market_cap_percentage.luna}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
                      alt="cardano"
                      width="50px"
                    />
                    <Flex flexDirection="column">
                      <h1>Cardano</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={props.data.data.market_cap_percentage.ada}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>

                <MarketDominanceBoxDark>
                  <Flex>
                    <img
                      src="https://assets.coingecko.com/coins/images/12681/large/UST.png?1601612407"
                      alt="TerraUSD"
                      width="50px"
                    />
                    <Flex flexDirection="column">
                      <h1>TerraUSD</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={props.data.data.market_cap_percentage.usdt}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
                <MarketDominanceBoxDark>
                  <Flex>
                    <FaCoins size="50px" />
                    <Flex flexDirection="column">
                      <h1>Other Coins</h1>
                      <p>
                        <NumberFormat
                          thousandSeparator={true}
                          value={AltCoinsPercentage(props.data)}
                          displayType="text"
                          decimalScale={1}
                        />
                        %
                      </p>
                    </Flex>
                  </Flex>
                </MarketDominanceBoxDark>
              </Wrap>
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
              <Wrap className="marketdominance-flex">
                <MarketDominanceBoxLight>
                  <Link to="/coins/bitcoin">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                        alt="bicoin"
                        width="50px"
                      />
                      <Flex flexDirection="column">
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
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/coins/ethereum">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880"
                        alt="ethereum"
                        width="50px"
                      />
                      <Flex flexDirection="column">
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
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/coins/tether">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707"
                        alt="bicoin"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <h1>Tether</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={props.data.data.market_cap_percentage.usdt}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/coins/binancecoin">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1644979850"
                        alt="bnb"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <h1>BNB</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={props.data.data.market_cap_percentage.bnb}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/coins/usd-coin">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png?1547042389"
                        alt="usd coin"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <h1>USD Coin</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={props.data.data.market_cap_percentage.usdc}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/coins/ripple">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1605778731"
                        alt="xrp"
                        width="50px"
                        style={{ borderRadius: "50%" }}
                      />
                      <Flex flexDirection="column">
                        <h1>XRP</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={props.data.data.market_cap_percentage.xrp}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/coins/solana">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/4128/large/solana.png?1640133422"
                        alt="solana"
                        width="50px"
                        style={{ borderRadius: "50%" }}
                      />
                      <Flex flexDirection="column">
                        <h1>Solana</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={props.data.data.market_cap_percentage.sol}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/coins/terra-luna">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/8284/large/luna1557227471663.png?1567147072"
                        alt="terra"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <h1>Terra</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={props.data.data.market_cap_percentage.luna}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/coins/cardano">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/975/large/cardano.png?1547034860"
                        alt="cardano"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <h1>Cardano</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={props.data.data.market_cap_percentage.ada}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>

                <MarketDominanceBoxLight>
                  <Link to="/coins/terrausd">
                    <Flex>
                      <img
                        src="https://assets.coingecko.com/coins/images/12681/large/UST.png?1601612407"
                        alt="TerraUSD"
                        width="50px"
                      />
                      <Flex flexDirection="column">
                        <h1>TerraUSD</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={props.data.data.market_cap_percentage.usdt}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
                <MarketDominanceBoxLight>
                  <Link to="/markets">
                    <Flex>
                      <FaCoins size="50px" />
                      <Flex flexDirection="column">
                        <h1>Other Coins</h1>
                        <p>
                          <NumberFormat
                            thousandSeparator={true}
                            value={AltCoinsPercentage(props.data)}
                            displayType="text"
                            decimalScale={1}
                          />
                          %
                        </p>
                      </Flex>
                    </Flex>
                  </Link>
                </MarketDominanceBoxLight>
              </Wrap>
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

const MarketDominanceBoxDark = styled.div`
  padding: 10px;
  border-width: 2px;
  border-radius: 10px;
  background-color: #1f2434;

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }

  p {
    margin-left: 10px;
  }

  &:hover {
    transform: scale(1.01);
    transition: 0.3s ease-in-out;
    cursor: pointer;

    a {
      color: white;
    }
  }

  @media (max-width: 800px) {
    flex: 1 0 34%;
  }

  @media (max-width: 900px) {
    flex: 1 0 34%;
  }

  @media (max-width: 1000px) {
    width: 45%;
  }
`;

const MarketDominanceBoxLight = styled.div`
  padding: 10px;
  border-width: 2px;
  border-radius: 10px;
  background-color: rgb(237, 242, 247);

  h1 {
    font-size: 20px;
    font-weight: bold;
    margin-left: 10px;
  }

  p {
    margin-left: 10px;
  }

  &:hover {
    transform: scale(1.01);
    transition: 0.3s ease-in-out;
    cursor: pointer;

    a {
      color: black;
    }
  }

  @media (max-width: 800px) {
    flex: 1 0 34%;
  }

  @media (max-width: 900px) {
    flex: 1 0 34%;
  }

  @media (max-width: 1000px) {
    width: 40%;
  }
`;
