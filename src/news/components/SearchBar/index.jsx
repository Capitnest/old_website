import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import styled from "styled-components";

export default function SearchBar({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Content>
      <form onSubmit={formSubmit}>
        <InputGroup>
          <InputLeftElement>
            <button>
              <Search2Icon />
            </button>
          </InputLeftElement>

          {colorMode === "dark" ? (
            <Input
              variant="filled"
              type="text"
              placeholder="Search"
              fontSize="16px"
              fontFamily='"Inter", sans-serif'
              color="RGBA(255, 255, 255, 0.80)"
              backgroundColor="#4A5568"
              borderRadius="4px"
              borderWidth="1px"
              boxShadow="RGBA(255, 255, 255, 0.16) 0px 1px 2px 0px"
              borderColor="RGBA(255, 255, 255, 0.16)"
              value={value}
              onChange={handleSearchKey}
            />
          ) : (
            <Input
              variant="filled"
              type="text"
              placeholder="Search"
              fontSize="16px"
              fontFamily='"Inter", sans-serif'
              color="rgb(110, 125, 135)"
              backgroundColor="rgb(240, 244, 248)"
              borderRadius="4px"
              borderWidth="1px"
              boxShadow="rgb(221, 225, 227) 0px 1px 2px 0px"
              borderColor="rgb(218, 221, 236)"
              value={value}
              onChange={handleSearchKey}
            />
          )}

          <InputRightElement>
            {value && (
              <button onClick={clearSearch}>
                <CloseIcon />
              </button>
            )}
          </InputRightElement>
        </InputGroup>
      </form>
    </Content>
  );
}

const Content = styled.div`
  width: 100%;
  height: 40px;
  font-family: "Inter", sans-serif;

  input:focus {
    box-shadow: none;
    outline: none;
  }
`;
