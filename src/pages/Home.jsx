import React, { useEffect, useState } from "react";
import Navbarr from "../components/Navbar/Navbarr";
import { database, auth } from "./../firebase";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import ReactTypingEffect from "react-typing-effect";

export default function Home() {
  return (
    <div>
      <Navbarr />

      <div style={{ textAlign: "center" }}>
        <img src="/images/wow.gif" height={250} />

        <Title>
          Understand what is happening in{" "}
          <ReactTypingEffect
            text={["Crypto", "Stocks", "Economy", "the World."]}
            cursorRenderer={(cursor) => <h1>{cursor}</h1>}
            speed={150}
            eraseDelay={500}
            eraseSpeed={100}
            typingDelay={500}
          />
        </Title>
        <Description>
          Know & understand important daily events in your choosen markets.
        </Description>

        <Button
          variant="success"
          href="/signup"
          style={{ fontSize: 17, fontWeight: "bold" }}
        >
          Sign Up
        </Button>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <BigCardSection>
            <CardSection>
              <Card>
                <div style={{ textAlign: "center", margin: "auto" }}>
                  <img src="/images/blockchain.webp" height={100} />
                </div>
                <h1>Send & Receive</h1>
                <p>Pay Anyone, instatly</p>
              </Card>
              <Card>
                <div style={{ textAlign: "center" }}>
                  <img src="/images/stocks.png" height={120} />
                </div>
                <h1>Stocks & Forex</h1>
                <p>Store your money in a secure place.</p>
              </Card>
            </CardSection>
            <CardSection>
              <Card>
                <div style={{ textAlign: "center" }}>
                  <img src="/images/globe.png" height={80} />
                </div>
                <h1>Privacy</h1>
                <p>
                  We don't store transactions history & your funds are not
                  visible to anyone.
                </p>
              </Card>
              <Card>
                <div style={{ textAlign: "center" }}>
                  <img src="/images/industry.webp" height={80} />
                </div>
                <h1>Decentralized Storage</h1>
                <p>
                  Your information is stored around the world and backed-up in 9
                  different places.
                </p>
              </Card>
            </CardSection>
          </BigCardSection>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            marginTop: "100px",
            backgroundColor: "#fdfdfd",
          }}
        >
          <SubTitle>
            What is <p>Capitnest</p>?
          </SubTitle>
          <SubDescription>News. Tools. Community. Events</SubDescription>

          <Category>
            <img src="/images/daily.png" width={500} />
            <CategoryText>
              <br /> <br />
              <SubCategory>News</SubCategory>
              <SubCategoryTitle>
                We find the important news for you
              </SubCategoryTitle>
              <SubCategoryDescription>
                We send you emerging business trends months before they pop.
                Save yourself from months of research, spending thousands of
                dollars testing, and the feeling of regret for not starting
                sooner.
              </SubCategoryDescription>
            </CategoryText>
          </Category>

          <Category>
            <CategoryText>
              <br /> <br />
              <SubCategory>Community</SubCategory>
              <SubCategoryTitle>Find people like you.</SubCategoryTitle>
              <SubCategoryDescription>
                Gain access to our legendary community where you can network and
                collaborate with over 15,000 ambitious and successful people
                rooting for you and your success.
              </SubCategoryDescription>
            </CategoryText>
            <img src="/images/community.png" width={500} />
          </Category>

          <Category>
            <img src="/images/tools.png" width={500} />
            <CategoryText>
              <br /> <br />
              <SubCategory>Tools</SubCategory>
              <SubCategoryTitle>
                We find the important news for you
              </SubCategoryTitle>
              <SubCategoryDescription>
                We send you emerging business trends months before they pop.
                Save yourself from months of research, spending thousands of
                dollars testing, and the feeling of regret for not starting
                sooner.
              </SubCategoryDescription>
            </CategoryText>
          </Category>
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
      </div>

      <br />
      <br />

      <Footer />
    </div>
  );
}

const Title = styled.h1`
  font-family: "Inter", sans-serif;
  color: rgb(45, 55, 72);
  font-weight: 600;
  font-size: 48px;
  margin-right: 20%;
  margin-left: 20%;

  * {
    font-family: "Inter", sans-serif;
    color: rgb(45, 55, 72);
    font-weight: 600;
    font-size: 48px;
  }
`;

const SubTitle = styled.p`
  font-family: "Inter", sans-serif;
  color: rgb(45, 55, 72);
  font-weight: 600;
  font-size: 45px;
  margin-right: 20%;
  margin-left: 20%;

  display: flex;
  justify-content: center;
  flex-direction: row;

  p {
    font-family: "Inter", sans-serif;
    color: #04d192;
    font-weight: 600;
    font-size: 45px;
    margin-right: 2px;
    margin-left: 10px;
  }
`;

const SubCategory = styled.p`
  font-family: "Inter", sans-serif;
  color: rgb(45, 55, 72);
  font-weight: 600;
  font-size: 30px;
`;

const SubCategoryTitle = styled.p`
  font-family: "Inter", sans-serif;
  color: rgb(45, 55, 72);
  font-weight: 600;
  font-size: 22px;
`;

const SubCategoryDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;

  color: rgb(45, 55, 72);
`;

const SubDescription = styled.p`
  font-size: 20px;
  font-weight: 500;
  font-family: "Inter", sans-serif;

  color: rgb(45, 55, 72);
  margin-right: 25%;
  margin-left: 25%;
`;

const Category = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-right: 20%;
  margin-left: 20%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const CategoryText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 400px;
`;

const Description = styled.p`
  font-size: 20px;
  margin-right: 25%;
  margin-left: 25%;
`;

const Card = styled.div`
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px 20px 20px;
  border-color: gray;

  margin-top: 30px;
  margin-right: 15px;
  margin-left: 15px;
  width: 300px;

  &:hover {
    position: relative;
    top: -3px;
  }

  h1 {
    font-size: 20px;
    margin-top: 10px;
  }
`;

const CardSection = styled.div`
  display: flex;

  @media (max-width: 1350px) {
    flex-direction: column;
  }
`;

const BigCardSection = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

const BigCardSectionn = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;
