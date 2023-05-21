import React from "react";
import Group from "../../../images/group.jpg";
import Wrapper from "../../../style/Wrapper";
import Button from "../../../style/Button";
import { NavLink } from "react-router-dom";
// import Products from "../../../pages/Products";
const Index = () => {
  return (
    <>
      <Wrapper>
        <p className="hero-hedding">
          For members : free shipping over 300nok any location in Norway.
        </p>
        <div className="hero-poster">
          <img
            className="hero-img"
            src={Group}
            alt="group of model presenting the ecommerce website"
          />
        </div>
        <div className="btn">
          <Button className=" shop-btn ">
            <NavLink to="/product">shop now </NavLink>
          </Button>
        </div>

        <div>{/* {filterp} */}</div>
      </Wrapper>
    </>
  );
};

export default Index;
