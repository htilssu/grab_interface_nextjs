"use client";

import React, { ReactNode } from "react";
import NavBar from "@/app/components/NavBar";
import BottomBanner from "@/app/components/BottomBanner";
import Footer from "@/app/components/Footer";
import { CartContextProvider } from "@/app/context/CartContext";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <CartContextProvider>
        <NavBar addressNavbarProp={true} />
        {children}
        <BottomBanner />
        <Footer />
      </CartContextProvider>
    </div>
  );
};

export default Layout;
