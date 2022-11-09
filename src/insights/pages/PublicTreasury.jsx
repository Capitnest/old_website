import React, { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../../components/Layout";
import Tab from "../components/Tab";
import { loadingAnimation } from "../components/loadingAnimation";
import {
  useColorMode,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import NumberFormat from "react-number-format";

export default function PublicTreasury() {
  const [crypto, setCrypto] = useState("bitcoin");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { colorMode } = useColorMode();

  const changeCrypto = (e) => {
    if (crypto === "bitcoin") {
      setCrypto("ethereum");
      setLoading(true);
    } else {
      setCrypto("bitcoin");
      setLoading(true);
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/companies/public_treasury/${crypto}`
      )
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [crypto]);

  return (
    <>
      <Layout>
        <Tab index={3} />

        <Menu>
          <MenuButton
            as={Button}
            borderWidth="1px"
            borderRadius="4px"
            rightIcon={<ChevronDownIcon />}
          >
            {" "}
            {crypto === "bitcoin" ? <>Bitcoin</> : <>Ethereum</>}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={changeCrypto}>
              {crypto === "bitcoin" ? <>Ethereum</> : <>Bitcoin</>}
            </MenuItem>
          </MenuList>
        </Menu>

        <p style={{ marginBottom: "20px", marginTop: "20px" }}>
          The public crypto holdings of companies. Data from{" "}
          <a
            href="https://coingecko.com"
            style={{ color: "rgb(141, 198, 71)" }}
            target="_blank"
          >
            CoinGecko
          </a>
          .
        </p>

        {loading === true ? (
          <>Loading data from coingecko.com..</>
        ) : (
          <>
            <Stats>
              <Box
                border
                style={{
                  backgroundColor: (() => {
                    if (colorMode === "light") {
                      return "rgb(249, 249, 250)";
                    } else {
                      return "#171923";
                    }
                  })(),
                  borderColor: (() => {
                    if (colorMode === "light") {
                      return "rgb(214, 213, 222)";
                    } else {
                      return "rgb(64, 63, 75)";
                    }
                  })(),
                }}
              >
                <NumberFormat
                  thousandSeparator={true}
                  value={data.market_cap_dominance}
                  displayType="text"
                  decimalScale={2}
                />
                %<h1>Market Cap Dominance</h1>
              </Box>

              <Box
                border
                style={{
                  backgroundColor: (() => {
                    if (colorMode === "light") {
                      return "rgb(249, 249, 250)";
                    } else {
                      return "#171923";
                    }
                  })(),
                  borderColor: (() => {
                    if (colorMode === "light") {
                      return "rgb(214, 213, 222)";
                    } else {
                      return "rgb(64, 63, 75)";
                    }
                  })(),
                }}
              >
                <NumberFormat
                  thousandSeparator={true}
                  value={data.total_holdings}
                  displayType="text"
                  decimalScale={2}
                />
                {crypto === "bitcoin" ? <>BTC</> : <>ETH</>}
                <h1>Total Holdings</h1>
              </Box>

              <Box
                border
                style={{
                  backgroundColor: (() => {
                    if (colorMode === "light") {
                      return "rgb(249, 249, 250)";
                    } else {
                      return "#171923";
                    }
                  })(),
                  borderColor: (() => {
                    if (colorMode === "light") {
                      return "rgb(214, 213, 222)";
                    } else {
                      return "rgb(64, 63, 75)";
                    }
                  })(),
                }}
              >
                <NumberFormat
                  thousandSeparator={true}
                  value={data.total_value_usd}
                  displayType="text"
                  decimalScale={2}
                />
                $<h1>Total Value</h1>
              </Box>
            </Stats>

            <TableContainer marginTop="20px">
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Company Name</Th>
                    <Th>Symbol</Th>
                    <Th isNumeric>Country</Th>
                    <Th isNumeric>
                      Total {crypto === "bitcoin" ? <>BTC</> : <>ETH</>}
                    </Th>
                    <Th isNumeric>
                      % of the total{" "}
                      {crypto === "bitcoin" ? <>BTC</> : <>ETH</>} supply
                    </Th>
                    <Th isNumeric>Entry Value</Th>
                    <Th isNumeric>Current Value</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.companies.map((company) => {
                    return (
                      <Tr>
                        <Td>{company.name}</Td>
                        <Td>{company.symbol}</Td>
                        <Td>{company.country}</Td>
                        <Td isNumeric>
                          {" "}
                          <NumberFormat
                            thousandSeparator={true}
                            value={company.total_holdings}
                            displayType="text"
                            decimalScale={2}
                          />
                        </Td>
                        <Td isNumeric>
                          {" "}
                          <NumberFormat
                            thousandSeparator={true}
                            value={company.percentage_of_total_supply}
                            displayType="text"
                            decimalScale={2}
                          />
                        </Td>

                        <Td isNumeric>
                          {" "}
                          <NumberFormat
                            thousandSeparator={true}
                            value={company.total_entry_value_usd}
                            displayType="text"
                            decimalScale={2}
                          />
                          $
                        </Td>
                        <Td isNumeric>
                          {" "}
                          <NumberFormat
                            thousandSeparator={true}
                            value={company.total_current_value_usd}
                            displayType="text"
                            decimalScale={2}
                          />
                          $
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </>
        )}
      </Layout>
    </>
  );
}

const Stats = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Box = styled.div`
  border-radius: 5px;

  padding: 12px 12px 12px;
  border-width: 1px;

  width: 250px;

  text-align: center;

  font-size: 25px;
  font-weight: 600;

  h1 {
    font-size: 18px;

    margin-top: 15px;
    font-weight: 400;
  }

  @media (max-width: 800px) {
    width: inherit;
    margin-top: 10px;
  }
`;
