import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      <div style={{ textAlign: "center" }}>
        <img src="/images/logo.png" height={75} />
      </div>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Nixie One, cursive",
          marginTop: "10px",
        }}
      >
        Capitnest
      </h1>
      <Menu>
        <MenuItem>
          <h4>Social</h4>

          <p>
            <a href="https://discord.gg/6rmB5W8Wuq" target="_blank">
              Discord
            </a>
          </p>
          <p>
            <a href="/">Instagram</a>
          </p>
          <p>
            <a href="/">Twitter</a>
          </p>
        </MenuItem>
        <MenuItem>
          <h4>Wallet</h4>

          <p>
            <a href="/wallet">Your Wallet</a>
          </p>
          <p>
            <a href="/send-coins">Send Coin</a>
          </p>
          <p>
            <a href="/market/buy">Buy Coins</a>
          </p>
        </MenuItem>
        <MenuItem>
          <h4>Capitnest</h4>

          <p>
            <a href="#">Docs</a>
          </p>
          <p>
            <a href="/support/hub">Support</a>
          </p>
          <p>
            <a href="https://www.github.com/nottimnik/startup">Open Source</a>
          </p>
        </MenuItem>
      </Menu>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <img src="/images/gif.gif" height={75} />
      </div>
    </Box>
  );
};

const Box = styled.div`
  color: white;
  background-color: rgba(26, 26, 94);
  padding-top: 10px;
  margin-bottom: 0px;
  padding-bottom: 40px;
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  h4 {
    font-family: "Nixie One", cursive;
  }

  p {
    font-family: "Nixie One", cursive;
  }
`;

const MenuItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 2%;
  margin-left: 2%;
  margin-top: 0;
  margin-bottom: 0;

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
      font-weight: bold;
    }
  }
`;

export default Footer;
