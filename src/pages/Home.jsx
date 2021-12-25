import React, { useEffect, useState } from "react";
import { AccordionToggle, Nav } from "react-bootstrap";
import Navbarr from "../components/Navbar/Navbarr";
import { database, auth } from "./../firebase";
import Countdown from "react-countdown";
import { Carousel } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Navbarr />

      <div style={{ textAlign: "center" }}>
        <img src="/images/home.png" height={250} />

        <h1 style={{ fontFamily: "sans-serif", fontWeight: 700 }}>
          Atomic Coin
        </h1>
        <p style={{ fontSize: 20, marginRight: 30, marginLeft: 30 }}>
          Our mission is to create the next currency that will combine <br />
          cryptocurrency technology with normal currency.
        </p>

        <Button variant="success" href="/signup">
          Sign Up
        </Button>

        <br />
        <br />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              borderColor: "orange",
              backgroundColor: "#E5E5E5",
            }}
          >
            <a
              href="https://firebase.google.com"
              target="_blank"
              style={{ marginRight: 10, marginLeft: 10 }}
            >
              <img src="/images/parteners/firebase.png" height={75} />
            </a>
          </Card>
          <Card
            style={{
              marginRight: 10,
              marginLeft: 10,
              borderColor: "blue",
              backgroundColor: "#E5E5E5",
            }}
          >
            <a href="https://stripe.com" target="_blank">
              <img src="/images/parteners/stripe.png" height={83} />
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
