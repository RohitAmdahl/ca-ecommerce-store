import React from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Index";
import Detailpage from "./pages/Detailpage";
import PageNotFound from "./pages/PageNotFound";

// import { ThemeProvider } from "styled-components";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/detailPage/:id" element={<Detailpage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
