import React from "react";
import Button from "../style/Button";
import MainHeader from "../style/MainHeader";

const SearchBar = () => {
  return (
    <MainHeader>
      <div className="form-div">
        <form className="form">
          <div className="search-bar">
            <input
              className="search-input"
              type="text"
              placeholder="Search..."
            />
            <Button type="submit">Search</Button>
          </div>
        </form>
      </div>
    </MainHeader>
  );
};

export default SearchBar;
