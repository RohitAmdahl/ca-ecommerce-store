import React from "react";
import Group from "../../../images/group.jpg";
import Wrapper from "../../../style/Wrapper";
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
      </Wrapper>
    </>
  );
};

export default Index;
