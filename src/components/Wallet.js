import React, { useEffect, useState } from "react";
import Navbarr from "./Navbar/Navbarr";
import { Container } from "react-bootstrap";
import { auth, database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";
import Footer from "./Footer/Footer";
import Particles from "react-particles-js";
import particlesConfig from "../config/particlesConfig";

export default function SendCoins() {
  const [balance, setBalance] = useState(0); //the balance of the user
  const [price, setPrice] = useState(0); //the current price of the coin

  useEffect(() => {
    if (auth.currentUser !== null) {
      //get the balance of the user from the database
      database
        .ref("users/" + auth.currentUser.uid + "/balance")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setBalance(data);
        });

      //get the current price of the coin in usd
      database.ref("price").on("value", (snapshot) => {
        const data = snapshot.val();
        setPrice(data);
      });
    }
  }, []);

  return (
    <Page>
      <Navbarr />

      <div style={{ position: "absolute", zIndex: -1 }}>
        <Particles height="95vh" width="95vw" params={particlesConfig} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Content>
          <MainCard>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h1 style={{ fontSize: "40px", textAlign: "center" }}>Wallet</h1>
            </div>
            <p>Wallet Id: {auth.currentUser.uid}</p>
            <br />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1 style={{ fontSize: "40px", textAlign: "center" }}>Balance</h1>
              <h1 style={{ fontSize: "60px" }}>{balance}$</h1>
            </div>
          </MainCard>
        </Content>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </Page>
  );
}

const Content = styled.div`
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 5%;
`;

const Page = styled.div``;

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 200px 200px 100px 100px;
  border-color: gray;
  background-color: rgba(30, 30, 94);
  color: white;
  margin-top: 5%;
  margin-right: 3%;
  margin-left: 3%;
  width: 30%;
`;

const MainCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 20px 20px;
  border-color: gray;
  background-color: rgba(26, 26, 94);
  color: white;
  margin-top: 5%;
  margin-right: 3%;
  margin-left: 3%;
`;

const CardMeniu = styled.div`
  display: flex;
`;
