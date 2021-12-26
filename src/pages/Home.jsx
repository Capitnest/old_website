import React, { useEffect, useState } from "react";
import { AccordionToggle, Nav } from "react-bootstrap";
import Navbarr from "../components/Navbar/Navbarr";
import { database, auth } from "./../firebase";
import Countdown from "react-countdown";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export default function Home() {
  return (
    <div style={{color: "white"}}>
      <Navbarr />

      <div style={{ textAlign: "center" }}>
        <img src="/images/home.png" height={250} />

        <h1 style={{ fontFamily: "sans-serif", fontWeight: 700 }}>
          Atomic Coin
        </h1>
        <p style={{ fontSize: 20, marginRight: 30, marginLeft: 30 }}>
          A fast centralized blockchain built to enable scalability, user-friendly apps for the world
        </p>

        <Button variant="success" href="/signup">
          Sign Up
        </Button>

        <div style={{ display: "flex", justifyContent: "center", position: "relative", top: "-100px" }}>
          <Card
            
          >
            <h1>Suported Transactions</h1>
            <p>+1000 per second</p>
          </Card>
          <Card
             
          >
             <h1>Validator Nodes</h1>
             <p>3,567 Nodes</p>
          </Card>
          <Card
             
          >
             <h1 style={{fontSize: 32}}>Avg. Transaction Cost</h1>
             <p>0.0005$ per transaction</p>
          </Card>
          <Card
             
          >
             <h1>APY</h1>
             <p>17% aprox.</p>
          </Card>
        </div>


        <br />
        <br />

             <h1 style={{textAlign: "center", display: "flex", justifyContent: "center", position: "relative", top: "px"}}>Parteners</h1> 
        <div style={{ display: "flex", justifyContent: "center", position: "relative", top: "-150px" }}>
          <Card
            
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

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 20px 20px 20px;
  border-color: gray;
  background-color: rgba(26,26,94);
  color: white;
  margin-top: 10%;
  margin-right: 3%;
  margin-left: 3%;
  width: 300px;

  &:hover {
    background-color: rgba(26,28,100);
    position: relative;
    top: -3px;
  }
`;
