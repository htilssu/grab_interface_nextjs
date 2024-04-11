import {MdPlace} from "react-icons/md";
import {TfiTarget} from "react-icons/tfi";
import Image, {StaticImageData} from "next/image";
import AddressInput from "@/app/components/AddressInput";


const Banner = ({banner, className}: { banner: StaticImageData, className?: string }) => {
    return (
        <div className="relative w-full">
            <Image alt="banner" className={className ? className : "object-cover"} src={banner.src}/>

            <div
                className={"absolute w-1/4 font-bold p-5 border-[1px] border-gray-200 rounded bg-white left-[13%] top-2/3"}>
                <h2 className={"text-3xl text-start"}>Good Afternoon</h2>

                <h1 className="text-4xl text-start">Where should we deliver your food today?</h1>

                <div className={"mt-5"}>
                    <AddressInput/>
                </div>
                <button
                    style={{
                        transition: "background-color 0.5s"
                    }}
                    className={"mt-5 w-full rounded-md text-white hover:bg-green-500 bg-green-600 p-3"}>
                    Tìm Kiếm
                </button>
            </div>
        </div>
    );
};

export default Banner;