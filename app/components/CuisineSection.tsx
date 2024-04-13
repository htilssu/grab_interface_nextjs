import React, { useState } from "react";
import CuisineItem from "@/app/components/CategoryItem";
import { categoryData } from "@/app/dummyData";

const CuisineSection = () => {
  const [category] = useState(categoryData);

  return (
    <div className={"md:px-40 sm:px-20 p-5 mt-10"}>
      <h1 className={"text-md md:text-3xl font-bold"}>
        There&apos;s something for everyone!
      </h1>

      <div className="">
        <div className={"flex flex-wrap"}>
          {category.map((item, index) => {
            return <CuisineItem category={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CuisineSection;
