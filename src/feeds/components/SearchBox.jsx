import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  useColorMode,
  Flex,
  Button,
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
    <Flex marginTop="7px" fontsize="16px">
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
    </Flex>
    <div style={{ height: "7px" }}></div>
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
  border-radius: 8px;
  border-width: 2px;
`;

const ContentDark = styled.div`
  background-color: var(--chakra-colors-gray-800);

  input:focus {
    box-shadow: none;
    outline: none;
  }
`;

const FormDark = styled.div`
  border-width: 2px;
  border-radius: 8px;

  background-color: #1f2434;
`;
