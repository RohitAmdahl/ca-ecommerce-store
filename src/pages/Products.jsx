import React, { useState, useEffect } from "react";
import Index from "../components/layout/product/Index";

// import ProductComp from "../components/layout/product/Index";
const url = `https://api.noroff.dev/api/v1/online-shop/`;
console.log(url);
const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        console.log(response);
        const data = await response.json();

        console.log(data);
        setItems(data);
        //
        setIsLoading(false);
        //
      } catch (error) {
        setIsLoading(false);
        setIsError(false);
      }
    }
    getData();
  }, [isError]);
  if (isLoading) {
    return <div>Loading posts</div>;
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <>
      <div>
        {items.map((cards) => (
          <Index key={cards.id} cards={cards} />
        ))}
      </div>
    </>
  );
};

export default Products;
