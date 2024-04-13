import React, { useEffect, useState } from "react";
import cuisineBackGroundImage from "../../public/placeholder_restaurant.jpg";
import chickBowl from "../../public/chicken-bowl.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchSection from "@/app/components/SearchSection";
import { cuisineData } from "@/app/dummyData";
import _ from "lodash";
import Image from "next/image";
import axios from "axios";

const key = Object.keys(cuisineData);

const CuisineCategorySection = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios
      .post(
        "https://portal.grab.com/foodweb/v2/search",
        {
          latlng: "10.816304365441667,106.71102025644655",
          keyword: "gà ta",
          offset: 0,
          pageSize: 32,
          countryCode: "VN",
        },
        {
          headers: {
            host: "portal.grab.com",
          },
        },
      )
      .then((r) => {
        console.log(r.data);
      });
  }, [selected]);

  return (
    <div className={"md:mt-[88px] mt-[50px] p-5 md:pt-10"}>
      <div className={"px-5 md:px-40"}>
        <SearchSection />

        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          direction={"horizontal"}
          className={"mt-10"}
          slidesPerView={1}
          spaceBetween={10}
        >
          {_.map(key, (value, index) => {
            // @ts-ignore
            return (
              <SwiperSlide key={index}>
                <CuisineCategoryItem
                  isSelected={selected === value}
                  setSelected={setSelected}
                  cuisine={(cuisineData as any)[value]}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div>
          <div
            className={
              "flex mt-10 md:py-28 items-center justify-center flex-col"
            }
          >
            <Image src={chickBowl} alt={"chick-bowl"} />
            <h1 className={"font-bold"}>
              Rất tiếc, hiện không có nhà hàng nào
            </h1>
            <p className={"text-gray-600"}>
              Vui lòng làm mới trang để giải quyết sự cố.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

type CuisineCategory = {
  id: string;
  name: string;
  description: string;
  index: number;
};

interface CuisineCategoryItemProps {
  cuisine: CuisineCategory;
  setSelected: (id: string) => void;
  isSelected: boolean;
}

const CuisineCategoryItem = ({
  cuisine,
  isSelected,
  setSelected,
}: CuisineCategoryItemProps) => {
  return (
    <div
      onClick={() => {
        setSelected(cuisine.id);
      }}
    >
      <div
        className={`relative overflow-hidden rounded-md ${isSelected && "border-[1px] border-green-600"}`}
      >
        <Image src={cuisineBackGroundImage} alt={"cuisine"} />
        <div
          className={
            "absolute z-0 top-0 left-0 w-full h-full bg-black opacity-50"
          }
        ></div>
        <div
          className={
            "absolute z-10 text-white flex justify-center items-center top-0 left-0 w-full h-full"
          }
        >
          {cuisine.name}
        </div>
      </div>
    </div>
  );
};

export default CuisineCategorySection;
