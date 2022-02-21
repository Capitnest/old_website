import {
  chakra,
  Container,
  Heading,
  Badge,
  Spacer,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import { BsArrowUp } from "react-icons/bs";
import { Chart as ChartJS } from "chart.js/auto";
import MaterialTable from "material-table";
import { Line } from "react-chartjs-2";

export const data = [
  {
    id: 1,
    option: "ETH - Ethereum",
    portfolio: "28.01%",
    balance: 13.14,
  },
  {
    id: 2,
    option: "BTC - Bitcoin",
    portfolio: "27.04",
    balance: 12.68,
  },
  {
    id: 3,
    option: "ADA - Cardano",
    portfolio: "23.75",
    balance: 11.14,
  },
  {
    id: 4,
    option: "SOL - Solana",
    portfolio: "20.94",
    balance: 9.82,
  },
];

const columns = [
  { title: "Investing Option", field: "option" },
  { title: "Portfolio %", field: "portfolio" },
  { title: "Balance $", field: "balance" },
];

const options = {
  legend: {
    display: false,
  },
  hover: {
    intersect: false,
  },
  elements: {
    line: {
      tension: 0,
    },
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callbacks: {},
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
        ticks: {
          display: false,
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    ],
  },
};

export default function Profilepage() {
  const { currentUser } = useAuth();

  function greetings() {
    if (currentUser.email === "timnikofficial@gmail.com") {
      return "Hello, Timnik!";
    } else {
      return <h1>Hello, Stranger</h1>;
    }
  }

  return (
    <Layout>
      <br />
      <Heading>
        {greetings()} <Badge colorScheme="green">Premium Investor</Badge>
      </Heading>

      <Text fontSize="xl">Portfolio</Text>
      <Text fontSize="4xl">
        46.34$
        <Badge colorScheme="green">
          <Flex>
            <BsArrowUp size={15} style={{ position: "relative", top: "3px" }} />{" "}
            <Text fontSize="md" fontWeight="bold">
              5.34%
            </Text>
          </Flex>
        </Badge>
      </Text>

      <Box>
        <Line
          datasetIdKey="id"
          data={{
            options: { options },
            labels: ["", "", "", "", "", "", "", "", "", "", ""],
            datasets: [
              {
                type: "line",
                borderColor: "#5AC53B",
                borderWidth: 2,
                pointBorderColor: "rgba(0, 0, 0, 0)",
                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                pointHoverBackgroundColor: "#000",
                pointHoverBorderColor: "#000000",
                pointHoverBorderWidth: 4,
                pointHoverRadius: 6,
                label: "",
                data: [
                  69.44, 72.34, 60.34, 52.43, 45.78, 35, 54, 32.453, 37.534,
                  42.33, 45.75,
                ],
              },
            ],
          }}
        />
      </Box>

      <Text fontSize="xl">Assets</Text>

      <br />

      <MaterialTable columns={columns} data={data} title="Books Directory" />
    </Layout>
  );
}
