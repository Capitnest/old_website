import React, { useEffect, useState } from "react";
import Navbarr from "./Navbar/Navbarr";
import { Container } from "react-bootstrap";
import { auth, database } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import styled from "styled-components";

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
      database
        .ref("price")
        .on("value", (snapshot) => {
          const data = snapshot.val();
          setPrice(data);
        });
    }



  }, []);

  return (
    <Page>
      <Navbarr />

      <Content>
        <MainCard>
          <h1>Wallet</h1>
          <p>See all the coins & how much they worth</p>
        </MainCard>

        <CardMeniu>
          <Card>
            <h1>Atomic Coin</h1>
            <div style={{display: "flex"}}>
            <h1>{balance}.00 </h1>{" "}<p style={{marginTop: "21px"}}>Atomic</p>
            </div>
            <p>Estimated Value ≈ {price * balance}</p>
          </Card>

          <Card>
            <h1>USD Coin</h1>
            <div style={{display: "flex"}}>
            <h1>0.00 </h1>{" "}<p style={{marginTop: "21px"}}>USD</p>
            </div>
            <p>Estimated Value ≈ 0.0$</p>
          </Card>

          <Card>
            <h1>Cat Coin</h1>
            <div style={{display: "flex"}}>
            <h1>0.00 </h1>{" "}<p style={{marginTop: "21px"}}>Cat</p>
            </div>
            <p>Estimated Value ≈ 0.0$</p>
          </Card>

        </CardMeniu>
      </Content>

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
<br />
<br />
<br />

    </Page>
  );
}


const Content = styled.div`
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 5%;
`;

const Page = styled.div`
  background-image: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F04%2FSimple-wallpapers-HD-for-desktop.png&f=1&nofb=1");
`;

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 20px 20px 20px;
  border-color: gray;
  background-color: rgba(26,26,94);
  color: white;
  margin-top: 5%;
  margin-right: 3%;
  margin-left: 3%;
  width: 30%;
`;

const MainCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 20px 20px 20px;
  border-color: gray;
  background-color: rgba(26,26,94);
  color: white;
  margin-top: 5%;
  margin-right: 3%;
  margin-left: 3%;
`;

const CardMeniu = styled.div`
  display: flex;

  
`;