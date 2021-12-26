import React, { useEffect, useState, useRef } from "react";
import Navbarr from "../Navbar/Navbarr";
import { Container } from "react-bootstrap";
import { auth, database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import StripeCheckout from "react-stripe-checkout";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

export default function SendCoins() {
  const [balance, setBalance] = useState(0);
  const [username, setUsername] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (auth.currentUser !== null) {
      database
        .ref("users/" + auth.currentUser.uid + "/balance")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setBalance(data);
        });
      database
        .ref("users/" + auth.currentUser.uid + "/username")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setUsername(data);
        });
      //get the current price of the coin in usd
      database
        .ref("price")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setPrice(data);
        });
    }
  }, []);

  function handleToken(token, addresses) {
    //change the database values for the user that send the coins
    database.ref("users/" + auth.currentUser.uid).set({
      username: username,
      balance: parseFloat(balance + 1),
    });
  }

  function handleTokenn(token, addresses) {
    //change the database values for the user that send the coins
    database.ref("users/" + auth.currentUser.uid).set({
      username: username,
      balance: parseFloat(balance + 10),
    });
  }

  function handleTokennn(token, addresses) {
    //change the database values for the user that send the coins
    database.ref("users/" + auth.currentUser.uid).set({
      username: username,
      balance: parseFloat(balance + 100),
    });
  }

  return (
    <>
      <Navbarr />
          <div style={{display: "flex", justifyContent: "center"}}>
          <Card>
            <h1>Your Wallet:</h1>
              <p><b>{balance}.00</b> Atomic ≈ {balance * price}$</p>
              <p><b>0.00</b> USD ≈ 0.00$</p>
              <p><b>0.00</b> Cat ≈ 0.00$</p>
          </Card>
          </div>

          <div style={{display: "flex", justifyContent: "center", flexDirection : "row"}}>

          <div style={{ display: "flex" }}>
            <Card>
            <p>1 Atomic Coin ≈ {1 * price}</p>{" "}
            <StripeCheckout
              stripeKey="pk_test_51K9uVxLJsCLKknsTbLFXXP2C1vKMKaulvZMNncQq169KKLnccQmFKiLckmcGsnZqY80IWJ77aQW843nJQ2qkJvb400vNjHPZTs"
              token={handleToken}
              amount={101}
              name={"1 Atomic Coin"}
            />
            </Card>
          </div>
          <div style={{ display: "flex" }}>
            <Card>
            <p>10 Atomic Coins ≈ {10 * price}</p>{" "}
            <StripeCheckout
              stripeKey="pk_test_51K9uVxLJsCLKknsTbLFXXP2C1vKMKaulvZMNncQq169KKLnccQmFKiLckmcGsnZqY80IWJ77aQW843nJQ2qkJvb400vNjHPZTs"
              token={handleTokenn}
              amount={1010}
              name={"10 Atomic Coins"}
            />
            </Card>
          </div>
          <div style={{ display: "flex" }}>
            <Card>
            <p>100 Atomic Coins ≈ {100 * price}</p>{" "}
            <StripeCheckout
              stripeKey="pk_test_51K9uVxLJsCLKknsTbLFXXP2C1vKMKaulvZMNncQq169KKLnccQmFKiLckmcGsnZqY80IWJ77aQW843nJQ2qkJvb400vNjHPZTs"
              token={handleTokennn}
              amount={10100}
              name={"100 Atomic Coins"}
            />
            </Card>
          </div>
          
          </div>
    </>
  );
}

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 20px 20px 20px;
  border-color: gray;
  background-color: rgba(26,26,94);
  color: white;
  margin-top: 10%;
  margin-right: 10%;
  margin-left: 10%;
  width: 300px;
`;
