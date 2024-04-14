import React from "react";
import Image from "next/image";
import chickBowl from "@/public/chicken-bowl.svg";

const NotFoundAnyMerchant = () => {
  return (
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
  );
};

export default NotFoundAnyMerchant;
