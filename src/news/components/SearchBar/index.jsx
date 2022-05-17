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
              borderColor="#718096"
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
              borderRadius="4px"
              borderWidth="1px"
              borderColor="#718096"
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
