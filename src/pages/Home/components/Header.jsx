import React from "react";
import { Flex, Spacer, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Head>
      <h1 style={{ fontfamily: "'Unbounded', cursive" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flex: "wrap",
            marginBottom: "0px",
          }}
        >
          The{" "}
          <span style={{ marginLeft: "7px", color: "#04d192" }}>
            <TypeAnimation
              sequence={[
                "Best", // Types 'One'
                2000, // Waits 1s
                "Fastest", // Deletes 'One' and types 'Two'
                2000,
                "Easiest",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
            />
          </span>
          way to
        </div>
        be up-to-date in crypto
      </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            color: "gray",
            width: "85%",
          }}
        >
          Capitnest is a platform that collects & filters through thousands of
          different information sources and shows you only the true and concise
          information about crypto.
        </p>
      </div>

      <Buttons
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <Link to="/register">
          <Button
            width="164px"
            height="52px"
            borderRadius="99px"
            fontFamily='"Unbounded", cursive'
            fontWeight="400"
            fontSize="20px"
            colorScheme="green"
            marginRight="10px"
            backgroundColor="#04d192"
          >
            Register
          </Button>
        </Link>
        <a href="#more">
          <Button
            width="164px"
            marginLeft="10px"
            height="52px"
            borderRadius="99px"
            fontFamily='"Unbounded", cursive'
            fontWeight="400"
            fontSize="20px"
            colorScheme="green"
            borderColor="#04d192"
            variant="outline"
          >
            Learn More
          </Button>
        </a>
      </Buttons>
    </Head>
  );
}

const Buttons = styled.div`
  *:hover {
    transform: scale(1.05) perspective(1px);
  }

  @media (max-width: 350px) {
    *:hover {
      transform: scale(1) perspective(0px);
    }
  }
`;

const Head = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;

  img {
    margin-top: 30px;
  }

  h1 {
    font-size: 60px;
    font-family: "Unbounded", cursive;
    text-align: center;
    font-weight: bold;
    margin-top: 80px;
  }

  p {
    margin-top: 10px;
    font-size: 18px;
    font-family: "Inter", sans-serif;
  }

  button {
    margin-top: 5px;
    width: 150px;
  }

  a {
    font-family: "Inter", sans-serif;

    &:hover {
    }
  }

  @media (max-width: 1100px) {
    img {
      margin-top: 50px;
    }

    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 900px) {
    img {
      width: 1000px;
    }

    h1 {
      font-size: 45px;
    }
  }

  @media (max-width: 800px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 35px;
    }

    p {
      font-size: 17px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 25px;
    }
  }
`;
