import React from "react";
import Footer from "../components/Footer/Footer";
import Navbarr from "../components/Navbar/Navbarr";

export default function Withdraw() {
  return (
    <div>
      <Navbarr />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src="/images/working.png" height={250} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontFamily: "Nixie One, cursive",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Withdraw
        </h1>
        <p
          style={{
            marginRight: "20%",
            marginLeft: "20%",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          If you want to request a withdraw you can contact the founder Timnik
          on our discord server and he will transfer your money as fast as
          possible. (4 hours - 7 days)
        </p>
      </div>

      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          color: "white",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontFamily: "Nixie One, cursive",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          Withdraw Options
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/solana.png"
            height={100}
            style={{ marginRight: "20px" }}
          />
          <img
            src="/images/paypal.gif"
            height={100}
            style={{ marginRight: "20px", marginLeft: "20px" }}
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
