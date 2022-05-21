import React from "react";
import useScript from "../../../functions/useScript";

export default function Chart(props) {
  const id = props.id;

  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      {useScript(
        "https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"
      )}

      <script src="https://widgets.coingecko.com/coingecko-coin-compare-chart-widget.js"></script>
      <coingecko-coin-compare-chart-widget
        coin-ids={id}
        currency="usd"
        locale="en"
      ></coingecko-coin-compare-chart-widget>
    </div>
  );
}
