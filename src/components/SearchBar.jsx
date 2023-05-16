import React from "react";
import Button from "../style/Button";
import MainHeader from "../style/MainHeader";
import { useState } from "react";

const SearchBar = ({ searchText }) => {
  const [text, setText] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <MainHeader>
      <div className="form-div">
        <form className="form" onSubmit={onSubmit}>
          <div className="search-bar">
            <input
              onChange={(e) => setText(e.target.value)}
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
