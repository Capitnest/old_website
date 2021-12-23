import React, { useEffect, useState } from "react";
import Navbarr from "./Navbar/Navbarr";
import { Container } from "react-bootstrap";
import { auth, database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

export default function SendCoins() {
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (auth.currentUser !== null) {
      database
        .ref("users/" + auth.currentUser.uid + "/balance")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setBalance(data);
        });
    }
  }, []);

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
        </div>
      </Container>
    </>
  );
}
