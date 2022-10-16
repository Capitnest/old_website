import React, { useState, useEffect } from "react";
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
  Button,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import { CheckIcon, QuestionIcon, CloseIcon } from "@chakra-ui/icons";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { ref, onValue, get, child, getDatabase } from "firebase/database";
import { useAuth } from "../contexts/AuthContext";
import { auth } from "../utils/init-firebase";
import { Link } from "react-router-dom";

export default function Pricing() {
  const [plan, setPlan] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  const { logout, currentUser } = useAuth();

  const [plann, setPlann] = useState("");

  useEffect(() => {
    if (currentUser) {
      get(child(ref(getDatabase()), `users/${currentUser.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            if (snapshot.val().plan === "pro") {
              console.log("yep");
              setPlann("pro");
            } else {
              setPlann("free");
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("nope");
    }
  }, []);

  return (
    <>
      <Layout>
        <Title>
          Gain a Edge Over the Market
          <br />
          <div
            style={{ display: "flex", justifyContent: "center", flex: "wrap" }}
          >
            With Institutional-level
            <span style={{ marginLeft: "7px" }}>
              <TypeAnimation
                sequence={[
                  "Tools", // Types 'One'
                  2000, // Waits 1s
                  "Research", // Deletes 'One' and types 'Two'
                  2000,
                  "Data",
                  2000,
                  () => {
                    console.log("Done typing!"); // Place optional callbacks anywhere in the array
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
              />
            </span>
          </div>
        </Title>
        <Description>
          Pay monthly or yearly, cancel at any time.{"\n"}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <BadgeBox
              style={{ fontSize: "14px", width: "150px", fontWeight: "bold" }}
            >
              Beta Launch Sale!
            </BadgeBox>
          </div>
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

        <Hide breakpoint="(max-width: 767px)">
          <Line>
            <RowHead
              style={{
                backgroundColor: () => {
                  if (colorMode === "dark") {
                    return "";
                  } else {
                  }
                },
              }}
            >
              <div className="column"></div>
              <span className="column">Free</span>
              <div className="column" style={{ display: "flex" }}>
                Pro{" "}
                <span
                  style={{
                    padding: "3px",
                    marginLeft: "5px",
                  }}
                >
                  {plan === false ? (
                    <>
                      <p>
                        <BadgeBox style={{ fontSize: "14px" }}>
                          Save 60%
                        </BadgeBox>
                      </p>
                    </>
                  ) : (
                    <>
                      <BadgeBox style={{ fontSize: "14px" }}>Save 40%</BadgeBox>
                    </>
                  )}
                </span>
              </div>

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
                  Access to Feeds, Crypto Market Data, Learn Materials & Our
                  Weekly Newsletter
                </PriceDescription>
              </div>
              <div className="column">
                <Stat>
                  <StatNumber>
                    {plan === false ? (
                      <>
                        <span style={{ textDecorationLine: "line-through" }}>
                          $25
                        </span>{" "}
                        $10
                      </>
                    ) : (
                      <>
                        <span style={{ textDecorationLine: "line-through" }}>
                          $25
                        </span>{" "}
                        $15
                      </>
                    )}
                  </StatNumber>
                  <StatHelpText>per month, billed yearly</StatHelpText>
                </Stat>
                <PriceDescription>
                  Access to Institution-level Research, our Private Discord
                  Server and to our upcomming events (without any extra costs).{" "}
                </PriceDescription>
              </div>

              <div className="column">
                <Stat>
                  <StatNumber>Contact Us</StatNumber>
                  <StatHelpText>per month, billed yearly</StatHelpText>
                </Stat>
                <PriceDescription>
                  Access to our full API, with documentation & support from our
                  team.
                </PriceDescription>
              </div>
            </Price>
          </Line>

          <Badge colorScheme="teal">Ads</Badge>
          <Line>
            <div className="column">Remove Ads</div>
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

          <Hr />

          <Badge colorScheme="teal">Feeds</Badge>
          <Line>
            <div className="column">Filters</div>
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
            <div className="column">5</div>

            <div className="column">5</div>
          </Line>
          <Hr />

          <Badge colorScheme="teal">Markets</Badge>

          <Line>
            <div className="column">Charts</div>
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
            <div className="column">VIP Discord Server</div>
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

          <Hr />

          <Badge colorScheme="teal">Upcomming Features</Badge>

          <Line>
            <div className="column">Insights</div>
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
            <div className="column">Signals</div>
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
            <div className="column">Portfolio Tracker</div>
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

          {currentUser ? (
            <>
              <Line>
                <div className="column"></div>
                {plann === "pro" ? (
                  <>
                    <div className="column">
                      <Button
                        colorScheme="green"
                        width="90%"
                        disabled
                        variant="outline"
                      >
                        Current Plan
                      </Button>
                    </div>
                    <div className="column">
                      <Button
                        colorScheme="green"
                        width="90%"
                        disabled
                        variant="outline"
                      >
                        Current Plan
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="column">
                      <Button
                        colorScheme="green"
                        width="90%"
                        disabled
                        variant="outline"
                      >
                        Current Plan
                      </Button>
                    </div>

                    <div className="column">
                      <a
                        class="gumroad-button"
                        href="https://capitnest.gumroad.com/l/pro?wanted=true"
                        style={{ width: "90%" }}
                        target="_blank"
                      >
                        <Button colorScheme="green" width="90%">
                          Upgrade
                        </Button>
                      </a>
                    </div>
                  </>
                )}

                <div className="column">
                  <a
                    href="mailto:capitnest@proton.me"
                    target="_blank"
                    style={{ width: "90%" }}
                  >
                    <Button colorScheme="green" width="90%">
                      Contact Us
                    </Button>
                  </a>
                </div>
              </Line>
            </>
          ) : (
            <>
              <Line>
                <div className="column"></div>

                <div className="column">
                  <Link to="/register" style={{ width: "90%" }}>
                    <Button colorScheme="green" width="90%">
                      Sign Up
                    </Button>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/register" style={{ width: "90%" }}>
                    <Button colorScheme="green" width="90%">
                      Sign up
                    </Button>
                  </Link>
                </div>

                <div className="column">
                  <a
                    href="mailto:capitnest@proton.me"
                    target="_blank"
                    style={{ width: "90%" }}
                  >
                    <Button colorScheme="green" width="90%">
                      Contact Us
                    </Button>
                  </a>
                </div>
              </Line>
            </>
          )}
        </Hide>

        <Show breakpoint="(max-width: 767px)">
          <MobileBox style={{ marginTop: "30px" }}>
            <h1
              style={{
                backgroundColor: (() => {
                  if (colorMode === "dark") {
                    return "rgba(255, 255, 255, 0.08)";
                  } else {
                    return "rgb(226,232,240)";
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

            {currentUser ? (
              <>
                <Button
                  colorScheme="green"
                  width="96%"
                  marginRight="2%"
                  marginLeft="2%"
                  marginBottom="2%"
                  disabled
                  variant="outline"
                >
                  Current Plan
                </Button>
              </>
            ) : (
              <>
                <Link to="/register">
                  <Button
                    colorScheme="green"
                    width="96%"
                    marginRight="2%"
                    marginLeft="2%"
                    marginBottom="2%"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
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
                    return "rgb(226,232,240)";
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

            {currentUser ? (
              <>
                {plann === "pro" ? (
                  <>
                    <Button
                      colorScheme="green"
                      width="96%"
                      marginRight="2%"
                      marginLeft="2%"
                      marginBottom="2%"
                      disabled
                      variant="outline"
                    >
                      Current Plan
                    </Button>
                  </>
                ) : (
                  <>
                    <a
                      class="gumroad-button"
                      href="https://capitnest.gumroad.com/l/pro?wanted=true"
                      style={{
                        width: "96%",
                        marginLeft: "2%",
                        marginRight: "2%",
                        marginBottom: "2%",
                      }}
                      target="_blank"
                    >
                      <Button colorScheme="green" width="96%" marginBottom="2%">
                        Upgrade
                      </Button>
                    </a>
                  </>
                )}
              </>
            ) : (
              <>
                <Link to="/register">
                  <Button
                    colorScheme="green"
                    width="96%"
                    marginRight="2%"
                    marginLeft="2%"
                    marginBottom="2%"
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </MobileBox>

          <MobileBox>
            <h1
              style={{
                backgroundColor: (() => {
                  if (colorMode === "dark") {
                    return "rgba(255, 255, 255, 0.08)";
                  } else {
                    return "rgb(226,232,240)";
                  }
                })(),
              }}
            >
              Developer
            </h1>

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

            <a href="mailto:capitnest@proton.me" target="_blank">
              <Button
                width="96%"
                marginRight="2%"
                marginLeft="2%"
                marginBottom="2%"
                borderWidth="1px"
              >
                Contact Us
              </Button>
            </a>
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
  display: "flex";
  font-family: "Inter", sans-serif;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;

  span {
    color: #04d192;
  }

  @media (max-width: 540px) {
    font-size: 25px;
  }

  @media (max-width: 450px) {
    font-size: 20px;
  }

  @media (max-width: 370px) {
    div {
      flex-direction: column;
    }
  }

  @media (max-width: 310px) {
    font-size: 18px;
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
  margin-right: 10px;
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
  background-color: rgb(56, 161, 105);
  color: white;
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
  font-family: "Inter", sans-serif;

  .column {
    width: 25%;
  }
`;
