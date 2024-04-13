"use client";

import React from "react";
import NavBar from "@/app/components/NavBar";
import { CartContextProvider } from "@/app/context/CartContext";
import CuisineCategorySection from "@/app/components/CuisineCategorySection";
import Footer from "@/app/components/Footer";

const Page = () => {
  return (
    <>
      <CartContextProvider>
        <NavBar addressNavbarProp={true} />
        <CuisineCategorySection />
      </CartContextProvider>
      <Footer />
    </>
  );
};

export default Page;
