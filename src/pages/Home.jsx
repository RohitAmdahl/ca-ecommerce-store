import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import Index from "../components/layout/home/Index";
import Herosection from "../style/MainCard";
import ProductsCards from "../components/layout/product/ProductsCard";

const Home = () => {
  const { products } = useContext(ProductContext);

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
      {products?.length > 0 ? (
        <Herosection>
          {products.map((product) => {
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
