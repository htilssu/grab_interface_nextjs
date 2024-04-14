import React, { useEffect, useState } from "react";
import cuisineBackGroundImage from "../../public/placeholder_restaurant.jpg";
import chickBowl from "../../public/chicken-bowl.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import SearchSection from "@/app/components/SearchSection";
import { cuisineData } from "@/app/dummyData";
import _ from "lodash";
import Image from "next/image";
import axios from "axios";
import { FoodSearchResult } from "@/app/api/food/search/route";
import { CategorySearchResult } from "@/app/api/food/category/route";
import MerchantCard from "@/app/components/MerchantCard";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const key = Object.keys(cuisineData);

const CuisineCategorySection = () => {
  const [selected, setSelected] = useState("");
  const [searchText, setSearchText] = useState("");
  const [shopData, setShopData] = useState<
    FoodSearchResult | CategorySearchResult
  >();

  const params = useParams();
  const router = useRouter();

  /*useEffect(() => {
    if (!params || params.slug.length != 2) {
      router.push("/not-found");
    }
    if (params.slug) {
      setSelected(params.slug);
    }
  }, [params,]);*/

  useEffect(() => {
    if (searchText !== "") {
      axios
        .post(origin + "/api/food/search", {
          latlng: "10.816304365441667,106.71102025644655",
          keyword: searchText,
          offset: 0,
          pageSize: 32,
          countryCode: "VN",
        })
        .then((res) => {
          setShopData(res.data);
        })
        .catch((err) => {
          setShopData(undefined);
        });
    }
  }, [searchText]);

  useEffect(() => {
    if (selected !== "") {
      axios
        .get(
          origin +
            `/api/food/category?latlng=10.816304365441667,106.71102025644655&categoryShortcutID=${selected}&offset=0&pageSize=32&countryCode=VN`,
        )
        .then((res) => {
          setShopData(res.data);
        })
        .catch(() => {
          setShopData(undefined);
        });
    }
  }, [selected]);

  return (
    <div className={"md:mt-[88px] mt-[50px] p-5 md:px-40 md:pt-10"}>
      <div>
        <SearchSection setSearch={setSearchText} />

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

        {!shopData && (
          <div>
            <div
              className={
                "flex mt-10 md:py-28 text-center items-center justify-center flex-col"
              }
            >
              <Image src={chickBowl} alt={"chick-bowl"} />
              <h1 className={"font-bold mt-5"}>
                Rất tiếc, hiện không có nhà hàng nào
              </h1>
              <p className={"text-gray-600"}>
                Vui lòng làm mới trang để giải quyết sự cố.
              </p>
            </div>
          </div>
        )}

        {shopData && (
          <div className={"flex items-stretch mt-5 flex-wrap"}>
            {_.map(
              shopData.searchResult.searchMerchants as [],
              (value: any, index) => {
                return (
                  <div className={"md:w-1/4 md:p-2 sm:w-1/2 w-full"}>
                    <MerchantCard
                      merchant={{
                        name: value.address.name,
                        estimatedDeliveryTime: value.estimatedDeliveryTime,
                        ...value.merchantBrief,
                      }}
                    />
                  </div>
                );
              },
            )}
          </div>
        )}
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
  setSelected,
}: CuisineCategoryItemProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        setSelected(cuisine.id);
      }}
    >
      <Link
        scroll={false}
        href={`/cuisines/${cuisine.name.toLowerCase().replaceAll(" ", "-")}/${cuisine.id}`}
      >
        <div
          className={`relative overflow-hidden hover:cursor-pointer rounded-xl border-[3px] hover:border-green-600 border-transparent`}
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
      </Link>
      {/*<div
        onClick={() => {
          router.push(
            `/cuisines/${cuisine.name.toLowerCase().replaceAll(" ", "-")}/${cuisine.id}`,
          );
        }}
      >
        <div
          className={`relative overflow-hidden hover:cursor-pointer rounded-xl border-[3px] hover:border-green-600 border-transparent`}
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
      </div>*/}
    </div>
  );
};

export default CuisineCategorySection;
