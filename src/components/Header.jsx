import React from "react";
import MainHeader from "../style/MainHeader";
// import { NavLink } from "react-router-dom";
// import logo from "../images/logo.png";
import SearchBar from "./SearchBar";
import Navbar from "./Navbar";
import { BsHandbag } from "react-icons/bs";
import AppLogo from "./AppLogo";

const Header = () => {
  // const [text, setText] = useState("");
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   searchText(text);
  // };
  return (
    <MainHeader>
      <AppLogo />
      <Navbar />
    </MainHeader>
  );
};

export default Header;
