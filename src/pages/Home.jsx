import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Index from "../components/layout/home/Index";
import Herosection from "../style/MainCard";
import ProductsCards from "../components/layout/product/ProductsCard";

const Home = () => {
  const { products } = useContext(ProductContext);
  // console.log(products);
  const filterProducts = products.filter((items) => {
    return items.tags[0] === "electronics" || items.tags[0] === "shoes";
  });
  console.log(filterProducts);
  return (
    <>
      {/* <Herosection>
        {products.map((product) => {
          return <ProductsCards key={product.id} product={product} />;
        })}
      </Herosection> */}
      <div>
        <Index />
      </div>
      {filterProducts?.length > 0 ? (
        <Herosection>
          {filterProducts.map((product) => {
            return <ProductsCards key={product.id} product={product} />;
          })}
        </Herosection>
      ) : (
        <h1>No products found according to your search</h1>
      )}
    </>
  );
};

export default Home;
