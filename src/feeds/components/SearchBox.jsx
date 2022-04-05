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

export const SearchBarLight = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => (
  <ContentLight>
    <br />

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
    </FormLight>
    <br />
  </ContentLight>
);

export const SearchBarDark = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => (
  <ContentDark>
    <br />

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
    </FormDark>
    <br />
  </ContentDark>
);

const ContentLight = styled.div`
  background-color: #fff;

  input:focus {
    box-shadow: none;
    outline: none;
  }
`;

const FormLight = styled.div`
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc;
  border-radius: 8px;
`;

const ContentDark = styled.div`
  background-color: var(--chakra-colors-gray-800);

  input:focus {
    box-shadow: none;
    outline: none;
  }
`;

const FormDark = styled.div`
  -moz-box-shadow: 0 0 3px #ccc;
  -webkit-box-shadow: 0 0 3px #ccc;
  box-shadow: 0 0 3px #ccc;
  border-radius: 8px;
`;
