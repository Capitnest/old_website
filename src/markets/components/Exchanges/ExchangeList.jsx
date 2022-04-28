import React from "react";
import styled from "styled-components";
import { Box, Flex, Avatar, Badge, Progress } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Numeral from "react-numeral";
import NumberFormat from "react-number-format";

export default function CoinItem(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  function ProgressColor(score) {
    if (score > 6) {
      return "green";
    } else if (score <= 6 && score > 4) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <a
      href={"/markets/" + props.coins.id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {colorMode === "dark" ? (
        <CoinRowDark>
          <CoinDark>
            <Flex>
              <Avatar src={props.coins.image} />
              <Flex marginLeft="10px" flexDirection="column">
                <p style={{ fontSize: "18px", marginLeft: "4px" }}>
                  {props.coins.name}
                </p>
                <Flex>
                  <Badge width="30px" colorScheme="green">
                    <p style={{ textAlign: "center", marginTop: "2px" }}>
                      {props.coins.trust_score_rank}
                    </p>
                  </Badge>
                </Flex>
              </Flex>
            </Flex>
          </CoinDark>

          <Price>
            <p style={{}}>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.trade_volume_24h_btc}
                displayType="text"
              />
            </p>
          </Price>

          <Percentage>
            <p>dsada</p>
          </Percentage>

          <Volume>
            <HideMobile>
              <p>dsdsa</p>
            </HideMobile>
          </Volume>

          <Mkt>
            <HideMobile>
              <p>dsadsa</p>
            </HideMobile>
          </Mkt>
        </CoinRowDark>
      ) : (
        <CoinRowLight>
          <CoinWhite>
            <Flex>
              <Avatar src={props.coins.image} />
              <Flex marginLeft="10px" flexDirection="column">
                <p style={{ fontSize: "18px", marginLeft: "4px" }}>
                  {props.coins.name}
                </p>
                <Flex>
                  <Badge width="30px" colorScheme="green">
                    <p style={{ textAlign: "center", marginTop: "2px" }}>
                      {props.coins.trust_score_rank}
                    </p>
                  </Badge>
                </Flex>
              </Flex>
            </Flex>
          </CoinWhite>

          <Price>
            <Flex justifyContent="center">
              <Progress
                value={props.coins.trust_score * 10}
                width="50%"
                borderRadius="6px"
                height="12px"
                marginTop="4px"
                colorScheme={ProgressColor(props.coins.trust_score)}
              />

              <p style={{ marginLeft: "6px" }}>{props.coins.trust_score}</p>
            </Flex>
          </Price>

          <Percentage>
            <p>
              <NumberFormat
                thousandSeparator={true}
                value={props.coins.trade_volume_24h_btc}
                displayType="text"
                decimalScale={1}
              />
            </p>
          </Percentage>

          <Volume>
            <HideMobile>
              <p>
                <NumberFormat
                  thousandSeparator={true}
                  value={props.coins.trade_volume_24h_btc_normalized}
                  displayType="text"
                  decimalScale={3}
                />
              </p>
            </HideMobile>
          </Volume>

          <Mkt>
            <HideMobile>
              <a href={props.coins.url}>Visit</a>
            </HideMobile>
          </Mkt>
        </CoinRowLight>
      )}
    </a>
  );
}

const Mkt = styled.div`
  text-align: center;
  width: 20%;

  @media (max-width: 770px) {
    display: none;
  }
`;

const Percentage = styled.div`
  text-align: center;
  width: 15%;

  @media (max-width: 770px) {
    width: 30%;
  }
`;

const Volume = styled.div`
  text-align: center;
  width: 20%;

  @media (max-width: 770px) {
    display: none;
  }
`;

const CoinDark = styled.div`
  width: 23%;
  background-color: rgba(0, 0, 0, 0.24);

  padding: 0.6rem 1rem;
  border-radius: 0px;

  @media (max-width: 770px) {
    width: 35%;
  }

  @media (max-width: 600px) {
    width: 40%;
  }

  @media (max-width: 550px) {
    width: 50%;
  }
`;

const CoinWhite = styled.div`
  width: 23%;
  background-color: #edf2f7;

  padding: 0.6rem 1rem;
  border-radius: 0px;

  @media (max-width: 770px) {
    width: 35%;
  }

  @media (max-width: 600px) {
    width: 40%;
  }

  @media (max-width: 550px) {
    width: 50%;
  }
`;

const Price = styled.div`
  width: 20%;

  text-align: center;

  @media (max-width: 770px) {
    width: 30%;
  }
`;

const CoinRowDark = styled.div`
  display: flex;

  font-size: 18px;
  font-weight: bold;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.06);
  border-radius: 0px;

  &:hover {
    transform: scale(1.01);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const CoinRowLight = styled.div`
  display: flex;
  align-items: center;
  background-color: #f7fafc;
  border-radius: 0px;
  font-weight: bold;

  &:hover {
    transform: scale(1.01);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const ImgSymbol = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 8px;
    width: auto;
  }
`;

const HideMobile = styled.p`
  @media screen and (max-width: 770px) {
    display: none;
  }
`;
