import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import styled from "styled-components";
import { AiOutlineCheckCircle, AiOutlineAreaChart } from "react-icons/ai";
import { GoTelescope } from "react-icons/go";
import FadeIn from "react-fade-in";

export default function Explore() {
  return (
    <Content>
      <TwoBoxes>
        <Box
          backgroundColor="RGBA(0, 0, 0, 0.64)"
          borderRadius="10px"
          padding="36px 50px"
          className="explore-twoboxes-box1"
        >
          <h1
            style={{
              fontFamily: '"Unbounded", cursive',

              display: "flex",
            }}
          >
            <AiOutlineAreaChart size={56} />
            Markets
          </h1>
          <p>
            Real-time price data & statistics of cryptocurrencies & exchanges at
            your fingertips.
          </p>
        </Box>

        <Box
          backgroundColor="RGBA(0, 0, 0, 0.64)"
          borderRadius="10px"
          padding="36px 50px"
          className="explore-twoboxes-box2"
        >
          <h1
            style={{
              fontFamily: '"Unbounded", cursive',
              display: "flex",
            }}
          >
            <GoTelescope size={57} />
            Research
          </h1>
          <p>Institutional-level research made by our team.</p>
        </Box>
      </TwoBoxes>

      {/* <Box
        width="100%"
        backgroundColor="RGBA(0, 0, 0, 0.48)"
        borderRadius="10px"
        padding="36px 50px"
        paddingBottom="0px"
        marginTop="50px"
      >
        <Columns>
          <div style={{ width: "44%" }}>
            <img src="/images/pages/home/video.png" height="250px" />
          </div>
          <div style={{ width: "60%" }}>
            <Tag style={{ fontFamily: '"Unbounded", cursive' }}>LEARN</Tag>
            <h1
              style={{ fontFamily: '"Unbounded", cursive', fontSize: "48px" }}
            >
              Become a expert in WEB3
            </h1>

            <Benefits>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                Courses, Videos & Articles
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                Content for beginners & advanced
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                Learn trading strategies
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                Content made by us or choosen by us
              </p>
            </Benefits>
          </div>
        </Columns>
      </Box> */}

      <Box
        width="100%"
        backgroundColor="RGBA(0, 0, 0, 0.48)"
        borderRadius="10px"
        padding="36px 50px"
        paddingBottom="0px"
        marginTop="50px"
      >
        <Columns>
          <div className="explore-box-columns-column1">
            <Tag style={{ fontFamily: '"Unbounded", cursive' }}>INSIGHTS</Tag>
            <h1 style={{ fontFamily: '"Unbounded", cursive' }}>
              See the depths of crypto
            </h1>

            <Benefits>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                Global Market Data
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                See the most searched coins
              </p>
              <p>
                <AiOutlineCheckCircle
                  color="#04d192"
                  size={27}
                  style={{ marginRight: "4px" }}
                />
                See companies public treasury
              </p>
            </Benefits>
          </div>
          <div className="explore-box-columns-column2">
            <img src="/images/pages/home/insights.png" height="250px" />
          </div>
        </Columns>
      </Box>
    </Content>
  );
}

const TwoBoxes = styled.div`
  display: flex;

  .explore-twoboxes-box1 {
    margin-right: 20px;
    @media (max-width: 978px) {
      p {
        font-size: 16px;
      }
    }
  }
  .explore-twoboxes-box2 {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .explore-twoboxes-box1 {
      margin-right: 0px;

      @media (max-width: 978px) {
        p {
          font-size: 16px;
        }
      }
    }

    .explore-twoboxes-box2 {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
`;

const Columns = styled.div`
  display: flex;

  .explore-box-columns-column1 {
    width: 60%;
  }

  .explore-box-columns-column2 {
    width: 40%;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;

    .explore-box-columns-column1 {
      width: 100%;
    }

    .explore-box-columns-column2 {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 10px;
    }
  }

  @media (max-width: 510px) {
    h1 {
      font-size: 25px;
    }
  }
`;

const Benefits = styled.div`
  p {
    display: flex;
  }
`;

const Tag = styled.p`
  font-size: 20px;
  margin-top: 0px;
  font-family: "Unbounded", cursive;
  color: #04d192;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 48px;
    font-family: "Inter", sans-serif;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Inter", sans-serif;
  }

  button {
    margin-top: 20px;
    width: 150px;
  }

  a {
    font-family: "Inter", sans-serif;
    &:hover {
    }
  }

  @media (max-width: 1010px) {
    h1 {
      font-size: 40px;
    }
  }
`;
