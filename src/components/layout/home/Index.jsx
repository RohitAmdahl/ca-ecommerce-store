import React from "react";
import Group from "../../../images/group.jpg";
import Wrapper from "../../../style/Wrapper";
const Index = () => {
  return (
    <>
      <Wrapper>
        <div className="hero-section">
          <p>For members : free shipping over 300nok any location in Norway.</p>
          <img src={Group} alt="img" />
        </div>
      </Wrapper>
    </>
  );
};

export default Index;
