import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductsCards from "../components/layout/product/ProductsCard";
import Herosection from "../style/MainCard";
const Products = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Herosection>
        {products.map((product) => {
          return <ProductsCards key={product.id} product={product} />;
        })}
      </Herosection>
    </>
  );
};

export default Products;
