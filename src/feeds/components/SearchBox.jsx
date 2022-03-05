import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
} from "@chakra-ui/react";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import styled from "styled-components";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <Content>
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
  </Content>
);

export default SearchBar;

const Content = styled.div`
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc;
  border-radius: 8px;

  input:focus {
    box-shadow: none;
    outline: none;
  }
`;
