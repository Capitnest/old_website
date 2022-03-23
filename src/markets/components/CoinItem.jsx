import React from "react";
import styled from "styled-components";
import { Box, Flex, Avatar } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

export default function CoinItem(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <a
      href={"/markets/" + props.coins.id}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {colorMode === "dark" ? (
        <CoinRowDark>
          <p>{props.coins.market_cap_rank}</p>
          <ImgSymbol>
            <img src={props.coins.image} alt="" />
            <p>{props.coins.name}</p>
          </ImgSymbol>
          <p>{props.coins.current_price}</p>

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

          <HideMobile>{props.coins.total_volume}</HideMobile>
          <HideMobile>{props.coins.market_cap}</HideMobile>
        </CoinRowDark>
      ) : (
        <CoinRowLight>
          <p>{props.coins.market_cap_rank}</p>
          <ImgSymbol>
            <img src={props.coins.image} alt="" />
            <p>{props.coins.name}</p>
          </ImgSymbol>
          <p>{props.coins.current_price}</p>

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

          <HideMobile>{props.coins.total_volume}</HideMobile>
          <HideMobile>{props.coins.market_cap}</HideMobile>
        </CoinRowLight>
      )}
    </a>
  );
}

const CoinRowDark = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 12px #18191b;
  background-color: #26272b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;

  &:hover {
    transform: scale(1.04);
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
