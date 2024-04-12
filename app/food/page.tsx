"use client";

import React from "react";
import NavBar from "@/app/components/NavBar";
import FoodShop from "@/app/components/FoodShop";
import Footer from "@/app/components/Footer";
import BottomBanner from "@/app/components/BottomBanner";

const Page = () => {
  return (
    <div>
      <NavBar addressNavbarProp={true} />
      <FoodShop />
      <BottomBanner />
      <Footer />
    </div>
  );
};

export default Page;
