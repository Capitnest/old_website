import React from "react";
import styled from "styled-components";
import { Box, Flex, Avatar, Badge } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Numeral from "react-numeral";
import NumberFormat from "react-number-format";

export default function CoinItem(props) {
  const { colorMode, toggleColorMode } = useColorMode();

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
                      {props.coins.market_cap_rank}
                    </p>
                  </Badge>
                  <p
                    style={{
                      textTransform: "uppercase",
                      fontSize: "14px",
                      fontWeight: 700,
                      marginLeft: "5px",
                    }}
                  >
                    {props.coins.symbol}
                  </p>
                </Flex>
              </Flex>
            </Flex>
          </CoinDark>

          <Price>
            <p style={{}}>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.current_price}
                displayType="text"
              />
            </p>
          </Price>

          <Percentage>
            {props.coins.price_change_percentage_24h < 2 ? (
              <p style={{ color: "rgb(245, 0, 87)" }}>
                {" "}
                {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
              </p>
            ) : (
              <p style={{ color: "rgb(33, 247, 158)" }}>
                {" "}
                {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
              </p>
            )}
          </Percentage>

          <Volume>
            <HideMobile>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.total_volume}
                displayType="text"
              />
            </HideMobile>
          </Volume>

          <Mkt>
            <HideMobile>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.market_cap}
                displayType="text"
              />
            </HideMobile>
          </Mkt>
        </CoinRowDark>
      ) : (
        <CoinRowLight>
          <CoinWhite>
            <Flex>
              <Avatar src={props.coins.image} />
              <Flex marginLeft="10px" flexDirection="column">
                <p style={{ fontSize: "18px" }}>{props.coins.name}</p>
                <Flex>
                  <Badge width="30px" colorScheme="green">
                    <p style={{ textAlign: "center", marginTop: "2px" }}>
                      {props.coins.market_cap_rank}
                    </p>
                  </Badge>
                  <p
                    style={{
                      textTransform: "uppercase",
                      fontSize: "14px",
                      fontWeight: 700,
                      marginLeft: "5px",
                    }}
                  >
                    {props.coins.symbol}
                  </p>
                </Flex>
              </Flex>
            </Flex>
          </CoinWhite>

          <Price>
            <p>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.current_price}
                displayType="text"
              />
            </p>
          </Price>

          <Percentage>
            {props.coins.price_change_percentage_24h < 2 ? (
              <p style={{ color: "rgb(245, 0, 87)" }}>
                {" "}
                {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
              </p>
            ) : (
              <p style={{ color: "green" }}>
                {" "}
                {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
              </p>
            )}
          </Percentage>

          <Volume>
            <HideMobile>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.total_volume}
                displayType="text"
              />
            </HideMobile>
          </Volume>

          <Mkt>
            <HideMobile>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.market_cap}
                displayType="text"
              />
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
