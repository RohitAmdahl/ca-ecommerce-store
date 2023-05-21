import React, { useState, useEffect } from "react";
import Index from "../components/layout/product/Index";
import SearchBar from "../components/SearchBar";
import Herosection from "../style/MainCard";

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

        const response = await fetch(`${url}`);
        const data = await response.json();

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
  }, []);
  if (isLoading) {
    return (
      <div>
        <h1>Loading products.....</h1>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <>
      <SearchBar />
      {items?.length > 0 ? (
        <Herosection>
          {items.map((cards) => (
            <Index key={cards.id} cards={cards} />
          ))}
        </Herosection>
      ) : (
        <div className="">
          <h1>No products found according to your search</h1>
        </div>
      )}
    </>
  );
};

export default Products;
