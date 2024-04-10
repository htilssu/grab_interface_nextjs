import {useState} from "react";
import FoodCard from "./FoodCard.tsx";

const FoodSection = ({className}: {
    className?: string
}) => {
    const [count] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    return (
        <div className={className}>
            <div className={"overflow-hidden"}>
                <h2 className={"text-start text-3xl font-bold"}>Ưu đãi GrabFood tại <span className={"text-green-600"}>Tp. Hồ Chí Minh</span>
                </h2>

                <div className={"flex gap-2 mt-10"}>
                    {count.map((_, index) => {
                        return (
                            <div key={index}>
                                <FoodCard/>
                            </div>
                        )
                    })}
                </div>
                <div className={"mt-8"}>
                    <button style={{
                        transition: "all .5s",
                    }} className={"text-gray-700 font-bold hover:text-green-600 w-full bg-transparent border-[1px] border-gray-700 hover:border-green-600 px-4 py-2 rounded-md mt-4"}>Xem thêm</button>
                </div>
            </div>
        </div>
    );
};

export default FoodSection;