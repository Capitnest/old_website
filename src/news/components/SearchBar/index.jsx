import React from "react";
import "./styles.css";
import { Input } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className="searchBar-wrap">
    <form onSubmit={formSubmit}>
      <Input
        type="text"
        placeholder="Search By Category"
        value={value}
        onChange={handleSearchKey}
      />
      {value && (
        <span onClick={clearSearch}>
          <CloseIcon />
        </span>
      )}
      <button>Go</button>
    </form>
  </div>
);

export default SearchBar;
