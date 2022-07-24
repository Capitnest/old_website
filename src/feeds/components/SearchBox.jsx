import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { CloseIcon, Search2Icon, ChevronDownIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const SearchBarLight = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => (
  <ContentLight>
    <div style={{ height: "24px" }}></div>
    <FormLight>
      <form onSubmit={formSubmit} style={{ backgroundColor: "#fafafa" }}>
        <InputGroup>
          <InputLeftElement>
            <button>
              <Search2Icon />
            </button>
          </InputLeftElement>

          <Input
            variant="filled"
            type="text"
            placeholder="Search on Capitnest"
            value={value}
            onChange={handleSearchKey}
          />

          <InputRightElement>
            {value && (
              <button onClick={clearSearch}>
                <CloseIcon />
              </button>
            )}
          </InputRightElement>
        </InputGroup>
      </form>
      <Coins></Coins>
    </FormLight>
    <Options>
      <Button padding="0px" size="sm">
        1d
      </Button>
      <Button variant="link" disabled>
        1w
      </Button>
      <Button variant="link" disabled>
        1m
      </Button>
      <Button variant="link" disabled>
        3m
      </Button>
      <Button variant="link" disabled>
        6m
      </Button>
      <Button variant="link" disabled>
        1y
      </Button>
      <Button variant="link" disabled>
        max
      </Button>
    </Options>
    <div style={{ height: "7px" }}></div>
  </ContentLight>
);

export const SearchBarDark = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => (
  <ContentDark>
    <div style={{ height: "24px" }}></div>
    <FormDark>
      <form onSubmit={formSubmit}>
        <InputGroup>
          <InputLeftElement>
            <button>
              <Search2Icon />
            </button>
          </InputLeftElement>

          <Input
            variant="filled"
            type="text"
            placeholder="Search on Capitnest"
            value={value}
            onChange={handleSearchKey}
          />

          <InputRightElement>
            {value && (
              <button onClick={clearSearch}>
                <CloseIcon />
              </button>
            )}
          </InputRightElement>
        </InputGroup>
      </form>
      <Coins>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            All Coins
          </MenuButton>
          <MenuList>
            <Link to="/feeds/bitcoin">
              <MenuItem>
                <img
                  src="/images/icons/bitcoin.png"
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                Bitcoin
              </MenuItem>
            </Link>
            <Link to="/feeds/ethereum">
              <MenuItem>
                <img
                  src="/images/icons/ethereum.png"
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                Ethereum
              </MenuItem>
            </Link>
            <Link to="/feeds/solana">
              <MenuItem>
                <img
                  src="/images/icons/solana.png"
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                Solana
              </MenuItem>
            </Link>
            <Link to="/feeds/cardano">
              <MenuItem>
                <img
                  src="/images/icons/cardano.png"
                  style={{ height: "25px", width: "25px", marginRight: "5px" }}
                />
                Cardano
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Coins>
    </FormDark>
    <Options>
      <Button padding="0px" size="sm">
        1d
      </Button>
      <Button variant="link" disabled>
        1w
      </Button>
      <Button variant="link" disabled>
        1m
      </Button>
      <Button variant="link" disabled>
        3m
      </Button>
      <Button variant="link" disabled>
        6m
      </Button>
      <Button variant="link" disabled>
        1y
      </Button>
      <Button variant="link" disabled>
        max
      </Button>
    </Options>
    <div style={{ height: "7px" }}></div>
  </ContentDark>
);

const Coins = styled.div`
  display: none;
  @media (max-width: 1150px) {
    display: inline;

    border-width: 2px;
    border-radius: 8px;
    background-color: #1f2434;
  }
`;

const ContentLight = styled.div`
  background-color: #fff;

  input:focus {
    box-shadow: none;
    outline: none;
  }

  @media (max-width: 768px) {
    margin-top: -12px;
  }
`;

const Options = styled.div`
  display: flex;
  font-size: 16px;
  margin-top: 10px;
`;

const FormLight = styled.div`
  border-radius: 8px;
  border-width: 2px;

  @media (max-width: 430px) {
    width: 92%;
  }
`;

const ContentDark = styled.div`
  background-color: var(--chakra-colors-gray-800);

  input:focus {
    box-shadow: none;
    outline: none;
  }

  @media (max-width: 1150px) {
    width: 530px;
  }

  @media (max-width: 1020px) {
    width: 98%;
  }

  @media (max-width: 840px) {
    width: 430px;
  }

  @media (max-width: 820px) {
    width: 420px;
  }

  @media (max-width: 810px) {
    width: 415px;
  }

  @media (max-width: 795px) {
    width: 405px;
  }

  @media (max-width: 780px) {
    width: 98%;
  }

  @media (max-width: 765px) {
    width: 96%;
  }

  @media (max-width: 750px) {
    width: 94%;
  }

  @media (max-width: 740px) {
    width: 600px;
  }

  @media (max-width: 630px) {
    width: 550px;
  }

  @media (max-width: 570px) {
    width: 470px;
  }

  @media (max-width: 480px) {
    width: 370px;
  }

  @media (max-width: 400px) {
    width: 350px;
  }

  @media (max-width: 370px) {
    width: 320px;
  }

  @media (max-width: 340px) {
    width: 290px;
  }

  @media (max-width: 300px) {
    width: 270px;
  }
`;

const FormDark = styled.div`
  border-width: 2px;
  border-radius: 8px;

  background-color: #1f2434;

  @media (max-width: 1150px) {
    display: flex;
    border-width: 0px;
    background-color: var(--chakra-colors-gray-800);

    form {
      border-width: 2px;
      border-radius: 8px;
      width: 1000px;
      margin-right: 7px;
      background-color: #1f2434;
    }
  }
`;
