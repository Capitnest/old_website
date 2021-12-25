import React, { useEffect, useState, useRef } from "react";
import Navbarr from "../Navbar/Navbarr";
import { Container } from "react-bootstrap";
import { auth, database } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import StripeCheckout from "react-stripe-checkout";
import { Form, Button } from "react-bootstrap";

export default function SendCoins() {
  const [balance, setBalance] = useState(0);
  const [username, setUsername] = useState("");

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
    }
  }, []);

  function handleToken(token, addresses) {
    //change the database values for the user that send the coins
    database.ref("users/" + auth.currentUser.uid).set({
      username: username,
      balance: parseFloat(balance + 1),
    });
  }

  return (
    <>
      <Navbarr />
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <h1>WALLET</h1>
          <p>{balance}</p>
          <p>{username}</p>

          <div style={{ display: "flex" }}>
            <p>1 Atomic Coin</p>{" "}
            <StripeCheckout
              stripeKey="pk_test_51K9uVxLJsCLKknsTbLFXXP2C1vKMKaulvZMNncQq169KKLnccQmFKiLckmcGsnZqY80IWJ77aQW843nJQ2qkJvb400vNjHPZTs"
              token={handleToken}
              amount={101}
              name={"1 Atomic Coin"}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>10 Atomic Coins</p>{" "}
            <StripeCheckout
              stripeKey="pk_test_51K9uVxLJsCLKknsTbLFXXP2C1vKMKaulvZMNncQq169KKLnccQmFKiLckmcGsnZqY80IWJ77aQW843nJQ2qkJvb400vNjHPZTs"
              token={handleToken}
              amount={1010}
              name={"10 Atomic Coins"}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>100 Atomic Coins</p>{" "}
            <StripeCheckout
              stripeKey="pk_test_51K9uVxLJsCLKknsTbLFXXP2C1vKMKaulvZMNncQq169KKLnccQmFKiLckmcGsnZqY80IWJ77aQW843nJQ2qkJvb400vNjHPZTs"
              token={handleToken}
              amount={10100}
              name={"100 Atomic Coins"}
            />
          </div>
          <div style={{ display: "flex" }}>
            <p>1000 Atomic Coins</p>{" "}
            <StripeCheckout
              stripeKey="pk_test_51K9uVxLJsCLKknsTbLFXXP2C1vKMKaulvZMNncQq169KKLnccQmFKiLckmcGsnZqY80IWJ77aQW843nJQ2qkJvb400vNjHPZTs"
              token={handleToken}
              amount={101000}
              name={"1000 Atomic Coins"}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
