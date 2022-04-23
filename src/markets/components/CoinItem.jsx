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
          <Coin>
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
          </Coin>

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
              <p style={{ color: "red" }}>
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
        </CoinRowDark>
      ) : (
        <CoinRowLight>
          <span>
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
          </span>

          <span>
            <p>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.current_price}
                displayType="text"
              />
            </p>
          </span>

          <span>
            {props.coins.price_change_percentage_24h < 2 ? (
              <p style={{ color: "red" }}>
                {" "}
                {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
              </p>
            ) : (
              <p style={{ color: "green" }}>
                {" "}
                {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
              </p>
            )}
          </span>

          <span>
            <HideMobile>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.total_volume}
                displayType="text"
              />
            </HideMobile>
          </span>

          <span>
            <HideMobile>
              <NumberFormat
                thousandSeparator={true}
                prefix={"$"}
                value={props.coins.market_cap}
                displayType="text"
              />
            </HideMobile>
          </span>
        </CoinRowLight>
      )}
    </a>
  );
}

const Mkt = styled.div`
  text-align: right;
  width: 20%;
`;

const Percentage = styled.div`
  text-align: right;
  width: 15%;
  font-size: 20px;
`;

const Volume = styled.div`
  text-align: right;
  width: 20%;
  font-size: 18px;
`;

const Coin = styled.div`
  width: 20%;
  background-color: #1f2434;
  border-width: 1px;
  padding: 0.7rem 1rem;
  border-radius: 8px;
`;

const Price = styled.div`
  width: 20%;

  text-align: right;
  border-radius: 8px;

  p {
    font-size: 20px;
  }
`;

const CoinRowDark = styled.div`
  display: flex;

  font-size: 18px;

  align-items: center;
  box-shadow: 0px 0px 12px #18191b;
  background-color: #26272b;
  border-radius: 8px;
  border-width: 1px;
  margin-top: 2px;

  &:hover {
    transform: scale(1.01);
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
`;

const CoinRowLight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 4px #18191b;
  background-color: #fff;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;

  &:hover {
    transform: scale(1.04);
    transition: 0.3s ease-in-out;
    cursor: pointer;
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
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
