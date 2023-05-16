import React, { useState, useEffect } from "react";
import Index from "../components/layout/product/Index";
import SearchBar from "../components/SearchBar";

// import ProductComp from "../components/layout/product/Index";
const url = `https://api.noroff.dev/api/v1/online-shop/`;
console.log(url);
const Products = () => {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
  }, [searchTerm]);
  if (isLoading) {
    return (
      <div>
        <h1>Loading posts.....</h1>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading data</div>;
  }
  return (
    <>
      {/* <div>
        {items.map((cards) => (
          <Index key={cards.id} cards={cards} />
        ))}
      </div> */}
      {/*  */}
      <SearchBar searchText={(text) => setSearchTerm(text)} />
      {items?.length > 0 ? (
        <div className="">
          {items.map((cards) => (
            <Index key={cards.id} cards={cards} />
          ))}
        </div>
      ) : (
        <div className="mx-auto text-center text-4xl font-bold">
          No items found
        </div>
      )}
      {/*  */}
    </>
  );
};

export default Products;
