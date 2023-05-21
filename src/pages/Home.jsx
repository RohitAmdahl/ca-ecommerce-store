import React from "react";
import Index from "../components/layout/home/Index";
// import { AppContext, useContext } from "../context/ProductContext";
import { useGlobalProductContext } from "../context/ProductContext";
const Home = () => {
  const { myName } = useGlobalProductContext();

  // const data = {
  //   name: "kumar",
  // };

  return (
    <>
      {myName}
      <Index />
    </>
  );
};

export default Home;
