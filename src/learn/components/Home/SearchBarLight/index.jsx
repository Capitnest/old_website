import React from "react";

import styled from "styled-components";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { CloseIcon, Search2Icon } from "@chakra-ui/icons";

const SearchBarLight = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => (
  <>
    <BigContent>
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
              placeholder="Search on Capitnest Learn"
              fontSize="16px"
              fontFamily='"Inter", sans-serif'
              borderRadius="5px"
              borderWidth="2px"
              borderRightRadius="0px"
              borderColor="rgba(0, 0, 0, 0.24)"
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
    </BigContent>
  </>
);

const Content = styled.div`
  text-align: right;
  width: 100%;
  height: 40px;
  font-family: "Inter", sans-serif;

  input:focus {
    box-shadow: none;
    outline: none;
  }
`;

const BigContent = styled.div`
  display: flex;
  justify-content: right;
`;

export default SearchBarLight;
