import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const AppLogo = () => {
  return (
    <NavLink to="/">
      <div className="logo-div">
        <img src={logo} alt="website logo" className="logo" />
      </div>
    </NavLink>
  );
};

export default AppLogo;
