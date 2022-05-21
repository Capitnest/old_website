import React from "react";
import styled from "styled-components";
import {
  Flex,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from "@chakra-ui/react";
import NumberFormat from "react-number-format";

export default function Markets(props) {
  const coins = props.data;

  return (
    <>
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 700,
          marginBottom: "20px",
          marginTop: "10px",
        }}
      >
        {coins.name}'s' Markets
      </h1>
      <Flex flexDirection="column" justifyContent="center">
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th fontFamily="'Inter', sans-serif">Base</Th>
                <Th fontFamily="'Inter', sans-serif">Target</Th>

                <Th fontFamily="'Inter', sans-serif">Volume</Th>

                <Th fontFamily="'Inter', sans-serif">Market</Th>

                <HideMobile>
                  <Th fontFamily="'Inter', sans-serif">Trade Url</Th>
                </HideMobile>
              </Tr>
            </Thead>
            <Tbody>
              {coins.tickers.map((ticker) => {
                return (
                  <Tr>
                    <Td>{ticker.base}</Td>
                    <Td>{ticker.target}</Td>

                    <Td>
                      $
                      <NumberFormat
                        thousandSeparator={true}
                        value={ticker.converted_volume.usd}
                        displayType="text"
                        decimalScale={0}
                      />
                    </Td>

                    <Td>{ticker.market.name}</Td>

                    <HideMobile>
                      <Td color="#4299E1">
                        <a href={ticker.trade_url} target="_blank">
                          url
                        </a>
                      </Td>
                    </HideMobile>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
}

const HideMobile = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
`;
