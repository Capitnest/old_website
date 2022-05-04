import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatArrow,
  useColorMode,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";
import styled from "styled-components";

export default function CurrentGlobalMetrics(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const data = props.data;

  return (
    <>
      <Title>Current Global Metrics</Title>
      <Content>
        {colorMode === "dark" ? (
          <>
            <GlobalBoxDark>
              <Stat>
                <StatLabel>Market Cap</StatLabel>

                <StatNumber>
                  <Number>
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={data.data.total_market_cap.usd}
                      displayType="text"
                      decimalScale={0}
                    />
                  </Number>
                </StatNumber>

                {data.data.market_cap_change_percentage_24h_usd > 0 ? (
                  <>
                    <StatArrow type="increase" />
                    <span style={{ color: "#48BB78" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={data.data.market_cap_change_percentage_24h_usd}
                        displayType="text"
                        decimalScale={2}
                      />
                      %
                    </span>
                  </>
                ) : (
                  <>
                    <StatArrow type="decrease" />
                    <span style={{ color: "rgb(245, 101, 101)" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={data.data.market_cap_change_percentage_24h_usd}
                        displayType="text"
                        decimalScale={2}
                      />
                      %
                    </span>
                  </>
                )}
              </Stat>
            </GlobalBoxDark>
            <GlobalBoxDark>
              <Stat>
                <StatLabel>24h Trade Volume</StatLabel>

                <StatNumber>
                  <Number>
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={data.data.total_volume.usd}
                      displayType="text"
                      decimalScale={0}
                    />
                  </Number>
                </StatNumber>
              </Stat>
            </GlobalBoxDark>
            <GlobalBoxDark>
              <Stat>
                <StatLabel>Active Cryptocurrency</StatLabel>

                <StatNumber>
                  <Number>3,868</Number>
                </StatNumber>

                <StatArrow type="increase" />
                <span style={{ color: "#48BB78" }}>
                  <NumberFormat
                    thousandSeparator={true}
                    value={5.43}
                    displayType="text"
                    decimalScale={2}
                  />
                  %
                </span>
              </Stat>
            </GlobalBoxDark>
          </>
        ) : (
          <>
            <GlobalBoxWhite>
              <Stat>
                <StatLabel>Market Cap</StatLabel>

                <StatNumber>
                  <Number>
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={data.data.total_market_cap.usd}
                      displayType="text"
                      decimalScale={0}
                    />
                  </Number>
                </StatNumber>

                {data.data.market_cap_change_percentage_24h_usd > 0 ? (
                  <>
                    <StatArrow type="increase" />
                    <span style={{ color: "#48BB78" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={data.data.market_cap_change_percentage_24h_usd}
                        displayType="text"
                        decimalScale={2}
                      />
                      %
                    </span>
                  </>
                ) : (
                  <>
                    <StatArrow type="decrease" />
                    <span style={{ color: "rgb(245, 101, 101)" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={data.data.market_cap_change_percentage_24h_usd}
                        displayType="text"
                        decimalScale={2}
                      />
                      %
                    </span>
                  </>
                )}
              </Stat>
            </GlobalBoxWhite>
            <GlobalBoxWhite>
              <Stat>
                <StatLabel>24h Trade Volume</StatLabel>

                <StatNumber>
                  <Number>
                    $
                    <NumberFormat
                      thousandSeparator={true}
                      value={data.data.total_volume.usd}
                      displayType="text"
                      decimalScale={0}
                    />
                  </Number>
                </StatNumber>
              </Stat>
            </GlobalBoxWhite>
            <GlobalBoxWhite>
              <Stat>
                <StatLabel>Active Cryptocurrency</StatLabel>

                <StatNumber>
                  <Number>3,868</Number>
                </StatNumber>

                <StatArrow type="increase" />
                <span style={{ color: "#48BB78" }}>
                  <NumberFormat
                    thousandSeparator={true}
                    value={5.43}
                    displayType="text"
                    decimalScale={2}
                  />
                  %
                </span>
              </Stat>
            </GlobalBoxWhite>
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
  }

  margin-bottom: 30px;
`;

const GlobalBoxDark = styled.div`
  background-color: #1f2434;
  padding: 10px;
  border-width: 2px;
  border-radius: 10px;
  width: 30%;
  text-align: center;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const Number = styled.div`
  font-size: 28px;

  @media (max-width: 1000px) {
    font-size: 26px;
  }

  @media (max-width: 900px) {
    font-size: 24px;
  }

  @media (max-width: 850px) {
    font-size: 22px;
  }

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

const GlobalBoxWhite = styled.div`
  background-color: rgb(237, 242, 247);
  padding: 10px;
  border-width: 2px;
  border-radius: 10px;
  width: 30%;
  text-align: center;

  @media (max-width: 800px) {
    width: 100%;
    margin-top: 10px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 20px;
`;
