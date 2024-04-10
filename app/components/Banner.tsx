import styled from "styled-components";
import {MdPlace} from "react-icons/md";
import {TfiTarget} from "react-icons/tfi";

const BannerFormStyle = styled.h1`
    line-height: 4rem !important;
`

const Banner = ({banner, className}: { banner: string, className?: string}) => {
    return (
        <div className="relative w-full">
            <img alt="banner" className={className ? className : "object-cover"} src={banner}/>

            <div
                className={"absolute w-1/4 font-bold p-5 border-[1px] border-gray-200 rounded bg-white left-[13%] top-2/3"}>
                <h2 className={"text-3xl text-start"}>Good Afternoon</h2>
                <BannerFormStyle>
                    <h1 className="text-4xl text-start">Where should we deliver your food today?</h1>
                </BannerFormStyle>
                <div className={"mt-5"}>
                    <div className={"border-gray-400 border-[1px] flex items-center rounded py-1 px-3"}>
                        <MdPlace className={"h-full w-5 text-red-600"}/>
                        <input className="border-none text-gray-700 font-normal w-full h-10 p-3 focus:border-none outline-none"
                               placeholder={"Nhập địa chỉ của bạn"}/>
                        <div className={"rounded-full bg-gray-100 p-1"}>
                            <TfiTarget className={"text-green-600"}/>
                        </div>
                    </div>
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