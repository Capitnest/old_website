import React from "react";
import styled from "styled-components";
import { Box, Flex, Avatar } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
import Numeral from "react-numeral";
import { Link } from "react-router-dom";

export default function CoinItem(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Link
      to={"/coins/" + props.coins.id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {colorMode === "dark" ? (
        <CoinRowDark>
          <ImgSymbol>
            <img src={props.coins.image} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                {props.coins.symbol}
              </p>
              <p>{props.coins.name}</p>
            </div>
          </ImgSymbol>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{ fontWeight: 700, fontSize: "20px", textAlign: "right" }}
            >
              <Numeral value={props.coins.current_price} format={"0,000.00"} />$
            </p>

            <div style={{ display: "flex", justifyContent: "right" }}>
              {props.coins.price_change_percentage_24h < 2 ? (
                <p style={{ color: "var(--chakra-colors-red-500)" }}>
                  {" "}
                  {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
                </p>
              ) : (
                <p style={{ color: "var(--chakra-colors-green-400)" }}>
                  {" "}
                  {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
                </p>
              )}{" "}
              <p style={{ marginLeft: "5px" }}>24h</p>
            </div>
          </div>
        </CoinRowDark>
      ) : (
        <CoinRowLight>
          <ImgSymbol>
            <img src={props.coins.image} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: "20px",
                }}
              >
                {props.coins.symbol}
              </p>
              <p>{props.coins.name}</p>
            </div>
          </ImgSymbol>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{ fontWeight: 700, fontSize: "20px", textAlign: "right" }}
            >
              <Numeral value={props.coins.current_price} format={"0.0"} />$
            </p>

            <div style={{ display: "flex", justifyContent: "right" }}>
              {props.coins.price_change_percentage_24h < 2 ? (
                <p style={{ color: "var(--chakra-colors-red-400)" }}>
                  {" "}
                  {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
                </p>
              ) : (
                <p style={{ color: "var(--chakra-colors-green-400)" }}>
                  {" "}
                  {props.coins.price_change_percentage_24h.toFixed(2)}%{" "}
                </p>
              )}{" "}
              <p style={{ marginLeft: "5px" }}>24h</p>
            </div>
          </div>
        </CoinRowLight>
      )}
    </Link>
  );
}

const CoinRowDark = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 12px #18191b;
  background-color: #1f2434;
  border-width: 1px;

  border-radius: 4px;
  margin-top: 5px;
  padding: 0.3rem 0.5rem;
`;

const CoinRowLight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 2px #18191b;

  background-color: var(--chakra-colors-gray-100);
  border-width: 1px;

  border-radius: 4 px;
  margin-top: 5px;
  padding: 0.3rem 0.5rem;
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
