import React from "react";
import MainHeader from "../style/MainHeader";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import Button from "../style/Button";
import Navbar from "./Navbar";
import { BsHandbag } from "react-icons/bs";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <div className="logo-div">
          <img src={logo} alt="website logo" className="logo" />
        </div>
      </NavLink>
      <div className="form-div">
        <form onSubmit="" className="form">
          <div className="search-bar">
            <input
              onChange=""
              className="search-input"
              type="text"
              placeholder="Search..."
            />
            <Button type="submit">Search</Button>
            {/* <button className=""></button> */}
          </div>
        </form>
        <div className="form-div">
          <BsHandbag />
          <span>0</span>
        </div>
      </div>
      <Navbar />
    </MainHeader>
  );
};

export default Header;
