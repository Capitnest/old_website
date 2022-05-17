import React from "react";
import styled from "styled-components";
import { Search2Icon } from "@chakra-ui/icons";
import dateFormat from "dateformat";

const Header = () => (
  <NewsHeader>
    <br />
    <div style={{ display: "flex", justifyContent: "center" }}>
      <h1>News</h1>
    </div>
    <p style={{ marginTop: "-15px" }}>
      {dateFormat(new Date(), "mmmm dS, yyyy")}
      <a href="#search" style={{ marginLeft: "7px" }}>
        <Search2Icon />
      </a>
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
    font-size: 4rem;

    margin-bottom: 1rem;
    font-weight: 600;
  }

  h1 span {
  }

  p {
    font-size: 20px;
    font-weight: 500;
  }
`;
