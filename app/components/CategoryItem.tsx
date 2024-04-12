import React from "react";
import { Card, CardContent, CardMedia } from "@mui/material";
import { CategoryType } from "@/app/components/Category";

type CategoryItemProps = {
  category: CategoryType;
};

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <div className={"md:w-1/4 w-full sm:w-1/2 p-3"}>
      <Card className={"hover:cursor-pointer"}>
        <CardMedia component={"img"} src={category.img} />
        <CardContent>
          <h1 className={"md:text-xl text-md font-bold"}>{category.name}</h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryItem;
