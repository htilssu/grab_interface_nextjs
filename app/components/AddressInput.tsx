import React from "react";
import { MdPlace } from "react-icons/md";
import { TfiTarget } from "react-icons/tfi";

const AddressInput = ({ className }: { className?: string }) => {
  return (
    <div>
      <div
        className={`border-gray-400 border-[1px] flex items-center rounded ${className}`}
      >
        <MdPlace className={"h-full w-5 text-red-600"} />
        <input
          className="border-none text-gray-700 md:text-sm font-normal w-full h-10 p-3 focus:border-none outline-none"
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
