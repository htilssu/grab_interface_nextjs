import { useState } from "react";
import MerchantCard from "./MerchantCard";
import { Swiper, SwiperSlide } from "swiper/react";

const MerchantSection = ({
  className,
  promotion,
}: {
  className?: string;
  promotion?: {
    openHours: {
      thu: string;
      tue: string;
      displayedHours: string;
      wed: string;
      sat: string;
      fri: string;
      sun: string;
      mon: string;
      open: boolean;
    };
    specialItemType: null;
    address: string;
    city: string;
    hasPromo: boolean;
    estimatedDeliveryTime: number;
    latitude: number;
    rating: number;
    description: string;
    cuisine: string[];
    promoDescription: string;
    photoSmallHref: string;
    closedText: string;
    distanceInKm: number;
    photoHref: string;
    name: string;
    iconHref: string;
    isIntegrated: boolean;
    id: string;
    closingSoonText: string;
    longitude: number;
  }[];
}) => {
  const [count] = useState(Array.from({ length: 10 }));

  return (
    <div className={className}>
      <div className={"overflow-hidden"}>
        <h2 className={"text-start text-3xl font-bold"}>
          Ưu đãi GrabFood tại{" "}
          <span className={"text-green-600"}>Tp. Hồ Chí Minh</span>
        </h2>

        <Swiper
          className={"mt-10 items-stretch"}
          direction={"horizontal"}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          slidesPerView={4}
          spaceBetween={"10"}
        >
          {promotion?.map((value, index) => {
            return (
              <SwiperSlide key={index}>
                <MerchantCard merchant={value} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className={"mt-8"}>
          <button
            style={{
              transition: "all .5s",
            }}
            className={
              "text-gray-700 font-bold hover:text-green-600 w-full bg-transparent border-[1px] border-gray-700 hover:border-green-600 px-4 py-2 rounded-md mt-4"
            }
          >
            Xem thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantSection;
