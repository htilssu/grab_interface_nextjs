import React from "react";
import { CiShoppingTag } from "react-icons/ci";

interface VoucherTagProps {
  voucher?: string;
}

const VoucherTag = ({ voucher }: VoucherTagProps) => {
  return (
    <div className={"flex items-center md:text-sm text-base gap-3"}>
      <CiShoppingTag className={"w-6 h-6 text-green-600"} />
      <span className={"text-sm"}>{voucher}</span>
    </div>
  );
};

export default VoucherTag;
