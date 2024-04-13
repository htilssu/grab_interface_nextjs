import React, { useEffect, useState } from "react";
import { BiChevronRight } from "react-icons/bi";
import Distance from "@/app/components/Distance";
import Rating from "@/app/components/Rating";
import VoucherTag from "@/app/components/VoucherTag";
import FoodCard from "@/app/components/FoodCard";
import { styled, Tab, Tabs } from "@mui/material";
import { Events, Link, scrollSpy } from "react-scroll";
import { sampleShopData } from "@/app/dummyData";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: sampleShopData.merchant.name,
  };
}

const GrabTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#10e16c",
  },
});

const GrabTab = styled(Tab)(() => ({
  "&.Mui-selected": {
    color: "#10e16c",
  },
}));

interface FoodSectionProps {
  arraySection: string[];
}

const FoodShop = () => {
  // const sectionRefs = Array(5).fill(0).map(() => useRef<HTMLHeadingElement>(null));
  const [selected, setSelected] = useState(0);

  const FoodSection = ({ arraySection }: FoodSectionProps) => {
    function handleSelected(newValue: number) {
      setSelected(newValue);
    }

    return (
      <div>
        <GrabTabs
          variant={"scrollable"}
          value={selected}
          className={"flex justify-between"}
        >
          {arraySection.map((section, index) => {
            return (
              <GrabTab
                key={index}
                label={
                  <Link
                    classID={"text-green-500"}
                    spy={true}
                    activeClass={"text-green-500"}
                    onClick={() => handleSelected(index)}
                    to={index.toString()}
                    offset={-200}
                    smooth={true}
                    className={"text-center"}
                  >
                    {section}
                  </Link>
                }
              />
            );
          })}
        </GrabTabs>
      </div>
    );
  };

  useEffect(() => {
    Events.scrollEvent.register("", function (to, _) {
      setSelected(Number(to));
      scrollSpy.update();
    });

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, [selected]);

  return (
    <div className={"mt-[88px] pt-10 "}>
      <div className={"md:px-40 p-5 sm:p-10"}>
        <div className={"flex items-center text-sm gap-2"}>
          <a href={"/"} className={"text-sky-700"}>
            Trang Chủ
          </a>{" "}
          <BiChevronRight />{" "}
          <a href={"/"} className={"text-sky-700"}>
            Nhà Hàng
          </a>{" "}
          <BiChevronRight /> {sampleShopData.merchant.name}
        </div>
        <div>
          <h1 className={"text-3xl font-bold"}>
            {sampleShopData.merchant.name}
          </h1>
        </div>
        <div className={"mt-2"}>
          <p className={"text-gray-600"}>{sampleShopData.merchant.cuisine}</p>
        </div>
        <div className={"flex items-center gap-10 mt-2"}>
          <Rating rating={sampleShopData.merchant.rating} />
          <Distance
            className={"text-gray-600"}
            distance={{ time: "40 phút", distance: "8km" }}
          />
        </div>
        <div className={"flex"}>
          <div className={"w-1/2"}>
            <div className={"flex mt-2"}>
              <FoodShopStatus width={80} status={"open"} />
            </div>
            <div className={"mt-2"}>
              <VoucherTag voucher={"Ưu đãi đến 56k"} />
            </div>
          </div>
          <div className={"flex items-end"}>
            <span className={"text-sky-700 hover:cursor-pointer"}>
              Xem chi tiết
            </span>
          </div>
        </div>
      </div>
      <div
        className={
          "bg-white mt-10 sticky md:top-[87px] top-[50px] z-20 sm:p-5 md:px-40 shadow"
        }
      >
        <div>
          <FoodSection
            arraySection={sampleShopData.merchant.menu.categories.map(
              (value, index) => {
                return value.name;
              },
            )}
          />
        </div>
      </div>
      <div className={"md:px-40 p-5 py-20 bg-[#F7F7F7]"}>
        {sampleShopData.merchant.menu.categories.map((value, index) => {
          const foodData = value.items;

          return (
            <div id={index.toString()} key={index}>
              <h1 className={"text-3xl font-bold mt-5"}>{value.name}</h1>

              <div className={"flex flex-wrap mt-10"}>
                {foodData.map((food, index) => {
                  // @ts-ignore
                  return <FoodCard key={index} {...food} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

type FoodShopStatusProps = {
  status: "open" | "close";
  width?: number;
};

const FoodShopStatus = (props: FoodShopStatusProps) => {
  return (
    <div className={`w-[${props.width}px]`}>
      <div>
        <div
          className={`${props.status === "open" ? "bg-green-500 text-white" : "bg-red-500 text-gray-400"} py-1 px-2 rounded text-sm`}
        >
          {props.status === "open" ? "Opening" : "Closed"}
        </div>
      </div>
    </div>
  );
};

export default FoodShop;
