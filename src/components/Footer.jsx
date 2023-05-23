import React from "react";
import MainFooter from "../style/Footer";
import logo from "../images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <MainFooter>
      <div className="footer-logo">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="name">
        <p> &copy; Rohit.K.A {year}</p>
      </div>
    </MainFooter>
  );
};

export default Footer;
