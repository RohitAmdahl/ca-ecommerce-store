import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/products" element={<Products />} />
        <Route index path="/contact" element={<Contact />} />
        <Route index path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
