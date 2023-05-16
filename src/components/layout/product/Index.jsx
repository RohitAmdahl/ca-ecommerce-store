import React from "react";
import Group from "../../../images/group.jpg";
import Wrapper from "../../../style/Wrapper";

const Index = () => {
  return (
    <>
      <Wrapper>
        <div className="hero-section">
          <p className="hero-hedding">
            For members : free shipping over 300nok any location in Norway.
          </p>
          <img
            src={Group}
            alt="group of model presenting the ecommerce website"
            className="hero-img"
          />
        </div>
      </Wrapper>
    </>
  );
};

export default Index;
