"use client";

import Banner from "@/app/components/Banner";
import banner from "@/public/VN-new-3.jpg";
import PromotionSection from "@/app/components/PromotionSection";
import CuisineSection from "@/app/components/CuisineSection";
import BottomBanner from "@/app/components/BottomBanner";
import NavBar from "@/app/components/NavBar";
import React from "react";
import Footer from "@/app/components/Footer";
import QuestionSection from "@/app/components/QuestionSection";
import { homeData } from "@/app/dummyData";
import { CartContextProvider } from "@/app/context/CartContext";

export default function Page() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <Banner className="object-cover w-full h-[375px]" banner={banner} />
        <hr className={"mt-32 border-gray-300"} />
        <PromotionSection
          className={"mt-28 py-5 px-5 md:px-40"}
          promotion={homeData.promotions}
        />
        <CuisineSection />
        <QuestionSection />
        <BottomBanner />
        <Footer />
      </CartContextProvider>
    </>
  );
}
