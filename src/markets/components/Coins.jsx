import React from "react";
import styled from "styled-components";
import CoinItem from "./CoinItem";
import { useColorMode } from "@chakra-ui/react";
import MaterialTable from "material-table";

export default function Coins(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <div>
        {colorMode === "dark" ? (
          <>
            <HeadingDark>
              <Name>Coin</Name>
              <p>Price</p>
              <p>24h</p>
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
              <p>#</p>
              <Name>Coin</Name>
              <p>Price</p>
              <p>24h</p>
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
  justify-content: space-between;
  align-items: center;
  background-color: #26272b;
  box-shadow: 0px 0px 12px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;
  font-weight: 700;
`;

const HeadingLight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 4px #18191b;
  border-radius: 8px;
  margin: 2rem 1rem;
  padding: 0.7rem 1rem;
  font-weight: 700;
`;

const Name = styled.p`
  margin-left: 0rem;
`;

const HideMobile = styled.p`
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
