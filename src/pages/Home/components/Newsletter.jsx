import React from "react";
import useScript from "../../../functions/useScript";

export default function Newsletter() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "30px",
          fontWeight: 800,
        }}
      >
        Join Our Newsletter and get the Most Important News in your inbox!
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {useScript(
          "https://eocampaign1.com/form/045a91d2-9409-11ec-9258-0241b9615763.js"
        )}
        <script
          async
          src="https://eocampaign1.com/form/045a91d2-9409-11ec-9258-0241b9615763.js"
          data-form="045a91d2-9409-11ec-9258-0241b9615763"
        ></script>
      </div>
    </div>
  );
}
