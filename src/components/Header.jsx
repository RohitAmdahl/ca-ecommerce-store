import React from "react";
import MainHeader from "../style/MainHeader";
import Navbar from "./Navbar";
import AppLogo from "./AppLogo";

const Header = () => {
  return (
    <MainHeader>
      <AppLogo />
      <Navbar />
    </MainHeader>
  );
};

export default Header;
