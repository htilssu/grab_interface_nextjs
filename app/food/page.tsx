"use server";
import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import axios from "axios";
import { Merchant } from "@/Grab";
import MerchantPage from "@/app/components/MerchantPage";
import { redirect } from "next/navigation";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const data = await axios
    .get(`https://portal.grab.com/foodweb/v2/merchants/${searchParams["q"]}`)
    .catch(() => {
      redirect("/not-found");
    });

  return {
    title: (data.data as { merchant: Merchant }).merchant.name,
  };
}
const Page = async ({ params, searchParams }: Props) => {
  const data = await axios
    .get(`https://portal.grab.com/foodweb/v2/merchants/${searchParams["q"]}`)
    .catch(() => {
      redirect("/not-found");
    });

  return (
    <>
      <MerchantPage merchant={data!.data.merchant} />
    </>
  );
};

export default Page;
