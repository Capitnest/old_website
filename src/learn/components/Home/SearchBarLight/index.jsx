import React from "react";
import "./styles.css";
import { useColorMode } from "@chakra-ui/react";

const SearchBarLight = ({
  formSubmit,
  value,
  handleSearchKey,
  clearSearch,
}) => (
  <>
    <div className="searchBar-wrap-dark">
      <form onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Search By Title"
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </form>
    </div>
  </>
);

export default SearchBarLight;
