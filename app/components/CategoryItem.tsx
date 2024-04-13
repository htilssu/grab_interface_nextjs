import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import Link from "next/link";

type CategoryItemProps = {
  category: CategoryType;
};

export type CategoryType = {
  name: string;
  imageURL: string;
  description: string;
  shortcutID: string;
  imageURLFallback: string;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className={"md:w-1/4 w-full sm:w-1/2 p-3"}>
      <Link href={"/cuisines"}>
        <Card className={"hover:cursor-pointer"}>
          <CardMedia component={"img"} src={category.imageURL} />
          <CardContent>
            <h1 className={"md:text-xl text-md font-bold"}>{category.name}</h1>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default CategoryItem;
