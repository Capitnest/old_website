import React, { useState } from "react";
import { Layout } from "../components/Layout";
import styled from "styled-components";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Switch,
} from "@chakra-ui/react";

export default function Pricing() {
  const [plan, setPlan] = useState(false);

  return (
    <>
      <Layout>
        <Title>
          Choose a <span>Plan</span> that fits you
        </Title>
        <Description>
          Pay monthly or yearly, you can cancel at any time.
        </Description>

        <PlanType>
          <p
            style={{
              fontWeight: (() => {
                if (plan === true) {
                  return 700;
                } else {
                  return 500;
                }
              })(),
              color: (() => {
                if (plan === true) {
                  return "#04d192";
                } else {
                  return "inherit";
                }
              })(),
              marginRight: "7px",
            }}
          >
            Monthly
          </p>
          <Switch
            id="isChecked"
            colorScheme="green"
            defaultChecked
            onChange={() => {
              setPlan(!plan);
              console.log(plan);
            }}
          />
          <p
            style={{
              fontWeight: (() => {
                if (plan === false) {
                  return 700;
                } else {
                  return 500;
                }
              })(),
              color: (() => {
                if (plan === false) {
                  return "#04d192";
                } else {
                  return "inherit";
                }
              })(),
              marginLeft: "7px",
            }}
          >
            Yearly
          </p>
        </PlanType>

        <Line>
          <RowHead>
            <div className="column"></div>
            <span className="column">Free</span>
            <div className="column">Social</div>
            <div className="column">Analysis</div>
            <div className="column">Developer</div>
          </RowHead>
        </Line>
        <Line>
          <Price>
            <div className="column"></div>
            <div className="column">
              <Stat>
                <StatNumber>Free</StatNumber>
                <StatHelpText>-</StatHelpText>
              </Stat>
              <PriceDescription>
                Fundamental, limited on-chain history and crypto market data for
                retail investors and crypto enthusiasts.
              </PriceDescription>
            </div>
            <div className="column">
              <Stat>
                <StatNumber>{plan === false ? <>$29</> : <>$39</>}</StatNumber>
                <StatHelpText>per month, billed yearly</StatHelpText>
              </Stat>
              <PriceDescription>
                Fundamental, limited on-chain history and crypto market data for
                retail investors and crypto enthusiasts.
              </PriceDescription>
            </div>
            <div className="column">
              <Stat>
                <StatNumber>{plan === false ? <>$99</> : <>$109</>}</StatNumber>
                <StatHelpText>per month, billed yearly</StatHelpText>
              </Stat>
              <PriceDescription>
                Fundamental, limited on-chain history and crypto market data for
                retail investors and crypto enthusiasts.
              </PriceDescription>
            </div>
            <div className="column">
              <Stat>
                <StatNumber>
                  {plan === false ? <>$799</> : <>$799</>}
                </StatNumber>
                <StatHelpText>per month, billed yearly</StatHelpText>
              </Stat>
              <PriceDescription>
                Fundamental, limited on-chain history and crypto market data for
                retail investors and crypto enthusiasts.
              </PriceDescription>
            </div>
          </Price>
        </Line>
      </Layout>
    </>
  );
}

const Title = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;

  span {
    color: #04d192;
  }
`;

const PlanType = styled.div`
  display: flex;
  justify-content: center;
  font-family: "Inter", sans-serif;
  margin-top: 30px;
`;

const PriceDescription = styled.div`
  font-size: 14px;
  font-family: "Inter", sans-serif;
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
`;

const RowHead = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  padding: 20px;
  background-color: #234e52;
  border-radius: 5px;

  span {
    font-weight: 450;
    font-size: 20px;

    font-family: "Inter", sans-serif;
  }

  div {
    font-size: 20px;
    font-weight: 600;
    font-family: "Inter", sans-serif;
  }
`;

const Description = styled.div`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  color: gray;
  text-align: center;
  margin-top: 5px;
`;

const Line = styled.div`
  display: flex;
  width: 100%;
  .column {
    width: 20%;
  }
`;
