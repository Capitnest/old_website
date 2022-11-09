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
import {
  social_engament,
  social_mentions,
  social_engament_percentage,
  social_mentions_percentage,
  url_shares,
  url_shares_percentage,
} from "../data";

export default function Social() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Title>Today's Social Metrics</Title>
      <Content>
        {colorMode === "dark" ? (
          <>
            <GlobalBoxDark>
              <Stat>
                <StatLabel>Social Engagement</StatLabel>

                <StatNumber>
                  <Number>
                    <NumberFormat
                      thousandSeparator={true}
                      value={social_engament}
                      displayType="text"
                      decimalScale={2}
                    />
                  </Number>
                </StatNumber>

                {social_engament_percentage > 0 ? (
                  <>
                    <StatArrow type="increase" />
                    <span style={{ color: "#48BB78" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={social_engament_percentage}
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
                        value={social_engament_percentage}
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
                <StatLabel>URL Shares</StatLabel>

                <StatNumber>
                  <Number>
                    <NumberFormat
                      thousandSeparator={true}
                      value={url_shares}
                      displayType="text"
                      decimalScale={2}
                    />
                  </Number>
                </StatNumber>

                {url_shares_percentage > 0 ? (
                  <>
                    <StatArrow type="increase" />
                    <span style={{ color: "#48BB78" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={url_shares_percentage}
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
                        value={url_shares_percentage}
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
                <StatLabel>Social Mentions</StatLabel>

                <StatNumber>
                  <Number>
                    <NumberFormat
                      thousandSeparator={true}
                      value={social_mentions}
                      displayType="text"
                      decimalScale={2}
                    />
                  </Number>
                </StatNumber>

                {social_mentions_percentage > 0 ? (
                  <>
                    <StatArrow type="increase" />
                    <span style={{ color: "#48BB78" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={social_mentions_percentage}
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
                        value={social_mentions_percentage}
                        displayType="text"
                        decimalScale={2}
                      />
                      %
                    </span>
                  </>
                )}
              </Stat>
            </GlobalBoxDark>
          </>
        ) : (
          <>
            <GlobalBoxWhite>
              <Stat>
                <StatLabel>Social Engagement</StatLabel>

                <StatNumber>
                  <Number>
                    <NumberFormat
                      thousandSeparator={true}
                      value={social_engament}
                      displayType="text"
                      decimalScale={2}
                    />
                  </Number>
                </StatNumber>

                {social_engament_percentage > 0 ? (
                  <>
                    <StatArrow type="increase" />
                    <span style={{ color: "#48BB78" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={social_engament_percentage}
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
                        value={social_engament_percentage}
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
                <StatLabel>URL Shares</StatLabel>

                <StatNumber>
                  <Number>
                    <NumberFormat
                      thousandSeparator={true}
                      value={url_shares}
                      displayType="text"
                      decimalScale={2}
                    />
                  </Number>
                </StatNumber>
              </Stat>
            </GlobalBoxWhite>
            <GlobalBoxWhite>
              <Stat>
                <StatLabel>Social Mentions</StatLabel>

                <StatNumber>
                  <Number>
                    <NumberFormat
                      thousandSeparator={true}
                      value={social_mentions}
                      displayType="text"
                      decimalScale={2}
                    />
                  </Number>
                </StatNumber>

                {social_mentions_percentage > 0 ? (
                  <>
                    <StatArrow type="increase" />
                    <span style={{ color: "#48BB78" }}>
                      <NumberFormat
                        thousandSeparator={true}
                        value={social_mentions_percentage}
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
                        value={social_mentions_percentage}
                        displayType="text"
                        decimalScale={2}
                      />
                      %
                    </span>
                  </>
                )}
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
