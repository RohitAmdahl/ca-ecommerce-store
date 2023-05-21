import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Index from "../components/layout/home/Index";
import Herosection from "../style/MainCard";
import productsCards from "../components/layout/product/ProductsCard";

const Home = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  const filterProducts = products.filter((items) => {
    return items.tags[0] === "electronics" || items.tags[0] === "shoes";
  });
  console.log(filterProducts);
  return (
    <>
      <div>
        <Index />
      </div>
      {products?.length > 0 ? (
        <Herosection>
          {products.map((product) => (
            <productsCards key={product.id} cards={product} />
          ))}
        </Herosection>
      ) : (
        <div className="">
          <h1>No products found according to your search</h1>
        </div>
      )}
      <div>
        <productsCards />
      </div>
    </>
  );
};

export default Home;
