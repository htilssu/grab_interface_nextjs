"use client";

import React from "react";
import NavBar from "@/app/components/NavBar";
import FoodShop from "@/app/components/FoodShop";
import Footer from "@/app/components/Footer";
import BottomBanner from "@/app/components/BottomBanner";
import { CartContextProvider } from "@/app/context/CartContext";

const Page = () => {
  return (
    <div>
      <CartContextProvider>
        <NavBar addressNavbarProp={true} />
        <FoodShop />
        <BottomBanner />
        <Footer />
      </CartContextProvider>
    </div>
  );
};

export default Page;
