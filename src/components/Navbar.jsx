import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "../style/Nav";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  return (
    <Nav>
      <div className="menuIcon">
        <ul className="navbar-list nav-underline">
          <li>
            <NavLink className="navbar-links" to="/">
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="navbar-links" to="/about">
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink className="navbar-links" to="/product">
              Product
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links" to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-links cart-trolley--link" to="/cart">
              <BsHandbag />
              <span className="cart-total--item">10</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
