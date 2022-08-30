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
  Tooltip,
  Badge,
} from "@chakra-ui/react";
import { CheckIcon, QuestionIcon, CloseIcon } from "@chakra-ui/icons";

export default function Pricing() {
  const [plan, setPlan] = useState(false);

  return (
    <>
      <Layout>
        <Title>
          Choose a <span>Plan</span> that fits you
        </Title>
        <Description>Pay monthly or yearly, cancel at any time.</Description>

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
        <Hr />

        <Badge colorScheme="teal">Feeds</Badge>
        <Line>
          <div className="column">
            <Tooltip label="Very advanced">Advanced Filters</Tooltip>
          </div>
          <div className="column">
            <CloseIcon width="12px" fontWeight="500" />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>
        <Line>
          <div className="column">Coin Filters</div>
          <div className="column">5</div>
          <div className="column">20</div>
          <div className="column">20</div>
          <div className="column">20</div>
        </Line>
        <Hr />

        <Badge colorScheme="teal">Markets</Badge>

        <Line>
          <div className="column">Chart</div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>

        <Line>
          <div className="column">Advanced Coin Metrics</div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>

        <Hr />

        <Badge colorScheme="teal">Access</Badge>

        <Line>
          <div className="column">Discord Server</div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>

        <Line>
          <div className="column">Access to Capitnest Events</div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>

        <Hr />

        <Badge colorScheme="teal">Content</Badge>

        <Line>
          <div className="column">Research Reports</div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>
        <Line>
          <div className="column">Learn Material</div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>
        <Line>
          <div className="column">Premium Newsletter</div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>

        <Hr />

        <Badge colorScheme="teal">Api</Badge>

        <Line>
          <div className="column">Access to our Full API</div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CloseIcon width="12px" />
          </div>
          <div className="column">
            <CheckIcon />
          </div>
        </Line>

        <Line>
          <div className="column">API Limits</div>
          <div className="column">-</div>
          <div className="column">-</div>
          <div className="column">-</div>
          <div className="column">100 req/min</div>
        </Line>

        <Line>
          <div className="column">Easily Understandable Docs</div>
          <div className="column">-</div>
          <div className="column">-</div>
          <div className="column">-</div>
          <div className="column">
            <CheckIcon />
          </div>
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

const Hr = styled.hr`
  margin-top: 20px;
  margin-bottom: 20px;
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
  padding-top: 10px;
  padding-bottom: 10px;
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
  margin-top: 5px;
  margin-bottom: 5px;
  width: 100%;
  .column {
    width: 20%;
  }
`;
