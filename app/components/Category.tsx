import React, {useState} from 'react';
import CategoryItem from "@/app/components/CategoryItem";

export type CategoryType = {
    name: string,
    img: string
}
const dummyCategory: CategoryType[] = [
    {
        name: "Bánh mì",
        img: "/banhmi.webp"
    },
    /*{
        name: "Bún/Phở",
        img: "/bunpho.webp"
    },*/
    {
        name: "Cơm",
        img: "/com.webp"
    },
   /* {
        name: "Gà",
        img: "/ga.webp"
    },
    {
        name: "Hải sản",
        img: "/haisan.webp"
    },
    {
        name: "Kem",
        img: "/kem.webp"
    },
    {
        name: "Mì",
        img: "/mi.webp"
    },*/
    {
        name: "Cháo",
        img: "/chao.webp"
    },
    {
        name: "Hủ tiếu",
        img: "/hutieu.webp"
    },
]

const Category = () => {

    const [category, setCategory] = useState([...dummyCategory,...dummyCategory])

    return (
        <div className={"md:px-40 sm:px-20 p-5 mt-10"}>
            <h1 className={"text-md md:text-3xl font-bold"}>
                There&apos;s something for everyone!
            </h1>

            <div className="">
                <div className={"flex flex-wrap"}>
                    {category.map((item, index) => {
                        return (
                            <CategoryItem category={item} key={index}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Category;