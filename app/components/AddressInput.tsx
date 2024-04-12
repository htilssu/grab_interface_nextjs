import React from "react";
import { MdPlace } from "react-icons/md";
import { TfiTarget } from "react-icons/tfi";

const AddressInput = () => {
  return (
    <div>
      <div
        className={
          "border-gray-400 border-[1px] flex items-center rounded md:py-1 px-2 md:px-3"
        }
      >
        <MdPlace className={"h-full w-5 text-red-600"} />
        <input
          className="border-none text-gray-700 font-normal w-full h-10 p-3 focus:border-none outline-none"
          placeholder={"Nhập địa chỉ của bạn"}
        />
        <div className={"rounded-full bg-gray-100 p-1"}>
          <TfiTarget className={"text-green-600"} />
        </div>
      </div>
    </div>
  );
};

export default AddressInput;
