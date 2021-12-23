import React from "react";
import Navbarr from "../Navbar/Navbarr";
import { Chart } from "react-google-charts";
import { Container } from "react-bootstrap";

export default function Overview() {
  return (
    <>
      <Navbarr />
      <div>
        <Chart
          width={"600px"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["x", "Atomic Coin"],
            ["12.15.2021", 0.02345],
            ["12.16.2021", 0.05324],
            ["12.17.2021", 0.06352],
            ["12.18.2021", 0.17805],
            ["12.19.2021", 0.59893],
          ]}
          options={{
            hAxis: {
              title: "Date",
            },
            vAxis: {
              title: "Price in USD",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />

        <Chart
          width={"500px"}
          height={"300px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Day", "Coins Bought", "Coins Sold"],
            ["12.15.2021", 10, 0],
            ["12.16.2021", 20, 0],
            ["12.17.2021", 25, 5],
            ["12.18.2021", 153, 56],
            ["12.19.2021", 563, 238],
          ]}
          options={{
            title: "Coins Bought & Coins Sold Chart",
            hAxis: { title: "Date", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            // For the legend to fit, we make the chart area smaller
            chartArea: { width: "50%", height: "70%" },
            // lineWidth: 25
          }}
          // For tests
          rootProps={{ "data-testid": "1" }}
        />
      </div>
    </>
  );
}
