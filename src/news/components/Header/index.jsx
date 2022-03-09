import React from "react";
import styled from "styled-components";
import { Search2Icon } from "@chakra-ui/icons";

const Header = () => (
  <NewsHeader>
    <br />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>News</h1>
      <a href="#search" style={{ marginTop: "24px", marginLeft: "7px" }}>
        <Search2Icon />
      </a>
    </div>
    <p style={{ marginTop: "-15px" }}>
      Get the most recent news about crypto & nfts
    </p>
  </NewsHeader>
);

export default Header;

const NewsHeader = styled.header`
  text-align: center;

  h2 {
    color: #0080ff;
    font-size: 2rem;
  }

  h1 {
    font-size: 3rem;
    color: #04d192;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  h1 span {
    color: #00ad79;
  }

  p {
    color: #a9a9a9;
    font-weight: 500;
  }
`;