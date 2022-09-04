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
  Hide,
  useColorMode,
  Show,
} from "@chakra-ui/react";
import { CheckIcon, QuestionIcon, CloseIcon } from "@chakra-ui/icons";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

export default function Pricing() {
  const [plan, setPlan] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

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

        <Hide breakpoint="(max-width: 767px)">
          <Line>
            <RowHead>
              <div className="column"></div>
              <span className="column">Free</span>
              <div className="column">Social</div>

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
                  Fundamental, limited on-chain history and crypto market data
                  for retail investors and crypto enthusiasts.
                </PriceDescription>
              </div>
              <div className="column">
                <Stat>
                  <StatNumber>
                    {plan === false ? <>$29</> : <>$39</>}
                  </StatNumber>
                  <StatHelpText>per month, billed yearly</StatHelpText>
                </Stat>
                <PriceDescription>
                  Fundamental, limited on-chain history and crypto market data
                  for retail investors and crypto enthusiasts.
                </PriceDescription>
              </div>

              <div className="column">
                <Stat>
                  <StatNumber>Contact Us</StatNumber>
                  <StatHelpText>per month, billed yearly</StatHelpText>
                </Stat>
                <PriceDescription>
                  Fundamental, limited on-chain history and crypto market data
                  for retail investors and crypto enthusiasts.
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
          </Line>
          <Line>
            <div className="column">Coin Filters</div>
            <div className="column">5</div>
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
              <CheckIcon />
            </div>
          </Line>

          <Line>
            <div className="column">API Limits</div>
            <div className="column">-</div>

            <div className="column">-</div>
            <div className="column">100 req/min</div>
          </Line>

          <Line>
            <div className="column">Easily Understandable Docs</div>
            <div className="column">-</div>

            <div className="column">-</div>
            <div className="column">
              <CheckIcon />
            </div>
          </Line>
        </Hide>

        <Show breakpoint="(max-width: 767px)">
          <MobileBox style={{ marginTop: "30px" }}>
            <h1
              style={{
                backgroundColor: (() => {
                  if (colorMode === "dark") {
                    return "rgba(255, 255, 255, 0.08)";
                  } else {
                    return 500;
                  }
                })(),
              }}
            >
              Basic
            </h1>

            <h2>
              FREE <span>/mo</span>
            </h2>

            <h6>
              Access to Feeds, Crypto Market Data, Learn Materials & Our Weekly
              Newsletter
            </h6>

            <div style={{ padding: "10px" }}>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Coin Filters</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Charts</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Advanced Coin Metrics</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Learn Material</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Weekly Newsletter</p>
              </Line>
            </div>
          </MobileBox>

          <MobileBox
            style={{
              borderColor:
                "linear-gradient(90deg, rgb(127, 122, 238) 0.01%, rgb(48, 94, 178) 34.37%, rgb(248, 110, 128) 100%)",
            }}
          >
            <h1
              style={{
                backgroundColor: (() => {
                  if (colorMode === "dark") {
                    return "rgba(255, 255, 255, 0.08)";
                  } else {
                    return 500;
                  }
                })(),
              }}
            >
              <div style={{ display: "flex" }}>
                Pro{" "}
                <span style={{ padding: "3px", marginLeft: "5px" }}>
                  {plan === false ? (
                    <>
                      <p>
                        <BadgeBox>Save 26%</BadgeBox>
                      </p>
                    </>
                  ) : (
                    <>
                      <BadgeBox>Save 0%</BadgeBox>
                    </>
                  )}
                </span>
              </div>
            </h1>

            <h2>
              {plan === false ? <>$29</> : <>$39</>}

              <span>/mo</span>
            </h2>

            <h6>
              Access to Institution-level Research, our Private Discord Server
              and to our upcomming events (without any extra costs).{" "}
            </h6>

            <div style={{ padding: "10px" }}>
              <Line>
                <AiOutlineCloseCircle
                  color={() => {
                    if (colorMode === "dark") {
                      return "red";
                    } else {
                      return "red;";
                    }
                  }}
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>No ads</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color={() => {
                    if (colorMode === "dark") {
                      return "white";
                    } else {
                      return "black;";
                    }
                  }}
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Everything from the Basic plan</p>
              </Line>

              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Access to Institutional-Level Research</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Access to our Discord Server</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Access to Capitnest Events</p>
              </Line>
            </div>
          </MobileBox>

          <MobileBox>
            <h1
              style={{
                backgroundColor: (() => {
                  if (colorMode === "dark") {
                    return "rgba(255, 255, 255, 0.08)";
                  } else {
                    return 500;
                  }
                })(),
              }}
            >
              Developer
            </h1>

            <hr />

            <h2>Contact Us</h2>

            <h6>
              Access to our full API, with documentation & support from our
              team.
            </h6>

            <div style={{ padding: "10px" }}>
              <Line>
                <AiFillCheckCircle
                  color={() => {
                    if (colorMode === "dark") {
                      return "white";
                    } else {
                      return "black;";
                    }
                  }}
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Everything from the Pro plan</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Access to our Full API</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>100 req/min API Limit</p>
              </Line>
              <Line>
                <AiFillCheckCircle
                  color="#04d192"
                  size={18}
                  style={{ marginTop: "2px" }}
                />{" "}
                <p>Easy to read Documentation</p>
              </Line>
            </div>
          </MobileBox>
        </Show>
      </Layout>
    </>
  );
}

const BadgeBox = styled.div`
  padding: 2px;
  border-radius: 5px;
  background-color: #e53e3e;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: white;
`;

const MobileBox = styled.div`
  margin-bottom: 20px;
  width: 100%;
  font-family: "Inter", sans-serif;
  border-width: 2px;
  border-radius: 5px;

  span {
    font-size: 16px;
    color: gray;
    margin-left: 2px;
  }

  h1 {
    font-size: 22px;
    font-weight: 600;
    padding: 10px;
  }

  h2 {
    font-size: 25px;
    font-weight: 500;
    padding: 10px;
    display: flex;
  }

  p {
    margin-left: 3px;
  }

  .header-mobilebox {
    display: flex;
    justify-content: space-between;
  }

  h6 {
    padding: 10px;
  }
`;

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
    width: 25%;
  }
`;
