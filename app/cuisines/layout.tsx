"use client";
import React from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { CartContextProvider } from "@/app/context/CartContext";
import CuisineCategorySection from "@/app/components/CuisineCategorySection";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <CartContextProvider>
        <NavBar addressNavbarProp={true} />
        <CuisineCategorySection />
        {children}
        <Footer />
      </CartContextProvider>
    </div>
  );
};

export default Layout;
