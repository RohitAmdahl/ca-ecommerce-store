import React, { useState, useEffect } from "react";

// import ProductComp from "../components/layout/product/Index";
const url = `https://api.noroff.dev/api/v1/online-shop/`;
const Products = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function getData() {
      try {
        isError(false);
        setIsLoading(true);

        const res = await fetch(url);
        console.log(res);
        const json = await res.json();
        console.log(json);

        setItems(json);
        //

        setIsLoading(false);
        //
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
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
        {items.map((post) => (
          <div>
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
