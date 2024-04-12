import React, { useState } from "react";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import defaultImage from "../../public/com.webp";
import Image from "next/image";

export type FoodCardProps = {
  ID: string;
  name: string;
  available: boolean;
  priceInMinorUnit: number;
  imgHref?: string;
  description: string;
  modifierGroups: Array<{
    ID: string;
    name: string;
    available: boolean;
    selectionType: number;
    selectionRangeMax: number;
    modifiers: Array<{
      ID: string;
      name: string;
      available: boolean;
      sortOrder: number;
      priceV2: {
        amountDisplay: string;
        amountInMinor?: number;
      };
      CustomisedData: {
        Name: {
          Value: {
            en: string;
          };
        };
      };
      priceInMinorUnit?: number;
    }>;
    CustomisedData: {
      Name: {
        Value: {
          en: string;
        };
      };
    };
  }>;
  sortOrder: number;
  discountedPriceInMin: number;
  priceV2: {
    amountInMinor: number;
    amountDisplay: string;
  };
  discountedPriceV2: {
    amountInMinor: number;
    amountDisplay: string;
  };
  metadata: string;
  recommendationSource: number;
  itemAttributes: {
    displayedTexts: {};
  };
  discoveryMetadata: {
    discovery: {
      requestID: string;
      service: string;
      method: string;
      discoverID: string;
    };
  };
  takeawayPriceInMin: number;
  discountedTakeawayPriceInMin: number;
  merchantID: string;
  thumbImages: Array<string>;
  images: Array<string>;
  imgHrefFallback: string;
};

const FoodCard = (food: FoodCardProps, props: any) => {
  console.log(props);
  const [quantity, setQuantity] = useState<number>(0);

  function decreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  const FoodQuantityControl = () => {
    if (quantity > 0) {
      return (
        <div
          style={{
            transition: "all 0.3s",
          }}
          className={"py-1 px-2 border-[1px] border-gray-400 rounded-3xl"}
        >
          <div className={"flex items-center gap-1"}>
            <button onClick={decreaseQuantity}>
              {quantity > 1 ? (
                <FaMinus className={"text-gray-400"} />
              ) : (
                <FaTrashCan className={"text-gray-400"} />
              )}
            </button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>
              <FaPlus className={"text-gray-400"} />
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            transition: "all 0.3s",
          }}
          className={
            "rounded-full bg-green-500 p-2 flex items-center justify-center"
          }
        >
          <button
            onClick={increaseQuantity}
            className={"w-5 h-5 text-white p-1"}
          >
            <FaPlus className={"w-full h-full"} />
          </button>
        </div>
      );
    }
  };

  return (
    <div
      className={
        "flex flex-shrink items-stretch lg:w-1/3 md:w-1/2 sm:w-1/2 w-full p-2"
      }
    >
      <div
        className={
          "rounded w-full h-full bg-white border-[1px] hover:border-green-500 border-transparent relative overflow-hidden"
        }
      >
        <div className={"h-full"}>
          <div className={"flex h-full p-3 items-stretch"}>
            <div className={"w-[120px] h-[120px] shrink-0 mr-5"}>
              <Image
                height={150}
                width={150}
                className={"object-cover rounded-md w-full h-full"}
                alt={"banh mi"}
                src={food.imgHref ? food.imgHref : defaultImage}
              />
            </div>

            <div className={"flex flex-col justify-between flex-shrink w-full"}>
              <div>
                <h1 className={""}>{food.name}</h1>
                <div className={"text-gray-500 mt-3 text-sm"}>
                  {food?.description}
                </div>
              </div>
              <div className={"flex items-center justify-between mt-5"}>
                <div>{food.priceV2.amountDisplay} đ</div>
                <div>
                  <FoodQuantityControl />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute ${quantity !== 0 ? "" : "hidden"} right-[-1px] h-[101%] bg-green-500 w-1 top-0`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
