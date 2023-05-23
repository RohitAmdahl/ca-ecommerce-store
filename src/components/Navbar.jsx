import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "../style/Nav";
import { BsHandbag } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState();

  return (
    <Nav>
      <div className={menuIcon ? "navbar active " : "navbar"}>
        <ul className="navbar-list nav-underline active">
          <li>
            <NavLink
              className="navbar-links"
              onClick={() => setMenuIcon(false)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink className="navbar-links" to="/about">
              About
            </NavLink>
          </li> */}
          <li>
            <NavLink
              className="navbar-links"
              onClick={() => setMenuIcon(false)}
              to="/product"
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-links"
              onClick={() => setMenuIcon(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navbar-links cart-trolley--link"
              onClick={() => setMenuIcon(false)}
              to="/cart"
            >
              <BsHandbag />
              <span className="cart-total--item">10</span>
            </NavLink>
          </li>
        </ul>
        {/* meanu icon button open and close */}
        <div className="mobile-navbar-btn">
          <RxHamburgerMenu
            name="menu-outline"
            onClick={() => setMenuIcon(true)}
            className="mobile-nav-icon"
          />
          <AiOutlineClose
            onClick={() => setMenuIcon(false)}
            name="menu-outline"
            className="mobile-nav-icon close-outline"
          />
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;
