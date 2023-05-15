import React from "react";

import Header from "../components/Header"; // change import to be correct
import Footer from "../components/Footer"; // change import to be correct
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
