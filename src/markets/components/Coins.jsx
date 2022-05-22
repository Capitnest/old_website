import React from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";
import { useColorMode, Hide, Show } from "@chakra-ui/react";

export default function Coins(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <div style={{ fontFamily: "'Inter', sans-serif" }}>
        {colorMode === "dark" ? (
          <>
            <HeadingDark>
              <Name>Coin</Name>
              <Price>
                <Hide breakpoint="(max-width: 550px)">Price</Hide>
              </Price>

              <Percentage>
                <Hide breakpoint="(max-width: 550px)">24h</Hide>
                <Show breakpoint="(max-width: 550px)">Price</Show>
              </Percentage>

              <HideMobile>Volume</HideMobile>
              <HideMobile>Mkt Cap</HideMobile>
            </HeadingDark>

            {props.coins.map((coinss) => {
              return <CoinItem coins={coinss} />;
            })}
          </>
        ) : (
          <>
            <HeadingLight>
              <Name>Coin</Name>
              <Price>
                <Hide breakpoint="(max-width: 550px)">Price</Hide>
              </Price>

              <Percentage>
                <Hide breakpoint="(max-width: 550px)">24h</Hide>
                <Show breakpoint="(max-width: 550px)">Price</Show>
              </Percentage>
              <HideMobile>Volume</HideMobile>
              <HideMobile>Mkt Cap</HideMobile>
            </HeadingLight>

            {props.coins.map((coinss) => {
              return <CoinItem coins={coinss} />;
            })}
          </>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1140px;
  margin: auto;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const HeadingDark = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.48);
  box-shadow: 0px 0px 12px #1a1f20;
  padding: 0.7rem 1rem;
  font-weight: 700;
`;

const HeadingLight = styled.div`
  display: flex;
  align-items: center;
  background-color: #e2e8f0;
  padding: 0.7rem 1rem;
  font-weight: 700;
`;

const Name = styled.p`
  margin-left: 0rem;
  width: 23%;
  text-align: left;
  font-size: 18px;

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

const HideMobile = styled.p`
  width: 20%;
  text-align: center;

  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const Price = styled.div`
  width: 20%;
  text-align: center;

  @media (max-width: 770px) {
    width: 30%;
  }
`;

const Percentage = styled.div`
  width: 15%;
  text-align: center;

  @media (max-width: 770px) {
    width: 30%;
  }
`;
