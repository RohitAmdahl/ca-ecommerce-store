import React from "react";
// import { CartContext } from "../context/CartContext";
import CartProducts from "../components/layout/cart/CartProducts";
const Cart = () => {
  // const { addToCart } = useContext(CartContext);
  // console.log(useContext(CartContext));
  return (
    <div>
      <h1>
        <CartProducts />
      </h1>
    </div>
  );
};

export default Cart;
