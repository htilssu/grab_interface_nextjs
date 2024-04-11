import React, {useState} from 'react';
import {BiChevronRight} from "react-icons/bi";
import Distance from "@/app/components/Distance";
import Rating from "@/app/components/Rating";
import VoucherTag from "@/app/components/VoucherTag";
import FoodCard from "@/app/components/FoodCard";
import {Tab, Tabs} from "@mui/material";
import {Link} from "react-scroll";


const sample = ["Món Mới", "Món Nổi Bật", "Combo", "Đồ Uống", "Khuyến Mãi"]

const FoodShop = () => {
    // const sectionRefs = Array(5).fill(0).map(() => useRef<HTMLHeadingElement>(null));
    const [selected, setSelected] = useState(0)


    const FoodSection = ({arraySection,}: {
        arraySection: string[],
    }) => {

        function handleSelected(newValue: number) {
            setSelected(newValue)
        }



        return (
            <div>
                <Tabs variant={'fullWidth'} value={selected}>
                    {arraySection.map((section, index) => {
                        return (
                            <Tab key={index} label={
                                <Link classID={"text-green-500"} activeClass={"text-green-500"} onClick={() => handleSelected(index)} to={index.toString()} offset={-200} smooth={true}  className={'text-center'}>
                                    {section}
                                </Link>
                            } value={index}/>
                        )
                    })}
                </Tabs>
            </div>
        )
    }

    /*const checkSectionInView = () => {

        sectionRefs.forEach((ref, index) => {
            const rect = ref.current?.getBoundingClientRect();
            if (rect!.top <= 200 && rect!.top >= 100 && rect!.bottom <= window.innerHeight) {
                setSelected(index);
                return;
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkSectionInView);
        return () => {
            window.removeEventListener('scroll', checkSectionInView);
        };
    }, [selected, isTabSelected]);*/

    return (
        <div className={"mt-[88px] pt-10 "}>
            <div className={'md:px-40 p-5 sm:p-10'}>
                <div className={'flex items-center gap-2'}>
                    <a href={"/"} className={"text-sky-700"}>Trang Chủ</a> <BiChevronRight/> <a href={"/"}
                                                                                                className={"text-sky-700"}>Nhà
                    Hàng</a> <BiChevronRight/> Xôi Chú Ngọng - Đê La Thành
                </div>
                <div>
                    <h1 className={'text-3xl font-bold'}>Xôi Chú Ngọng - Đê La Thành</h1>
                </div>
                <div className={'mt-2'}><p className={'text-gray-600'}>Bánh Mì - Xôi</p></div>
                <div className={"flex items-center gap-10 mt-2"}>
                    <Rating rating={2.5}/>
                    <Distance className={'text-gray-600'} distance={{time: '40 phút', distance: '8km'}}/>
                </div>
                <div className={'flex'}>
                    <div className={'w-1/2'}>
                        <div className={'flex mt-2'}><FoodShopStatus width={80} status={"open"}/></div>
                        <div className={'mt-2'}><VoucherTag voucher={"Ưu đãi đến 56k"}/></div>
                    </div>
                    <div className={'flex items-end'}>
                        <span className={'text-sky-700 hover:cursor-pointer'}>Xem chi tiết</span>
                    </div>
                </div>
            </div>
            <div className={'bg-white mt-10 sticky top-[88px] z-20 px-40 shadow'}>
                <div>
                    <FoodSection arraySection={sample}/>
                </div>
            </div>
            <div className={'px-40 py-20 bg-[#F7F7F7]'}>
                {Array.from({length: 5}).map((_, index) => {
                    return (
                        <div key={index}>
                            {/*<h1 ref={sectionRefs[index]} className={'text-3xl font-bold mt-5'}>{sample[index]}</h1>*/}
                            <h1 id={index.toString()} className={'text-3xl font-bold mt-5'}>{sample[index]}</h1>

                            <div className={'flex flex-wrap mt-10'}>
                                <FoodCard/>
                                <FoodCard/>
                                <FoodCard/>
                                <FoodCard/>
                                <FoodCard/>
                                <FoodCard/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

type FoodShopStatusProps = {
    status: "open" | "close"
    width?: number
}

const FoodShopStatus = (props: FoodShopStatusProps) => {
    return (
        <div className={`w-[${props.width}px]`}>
            <div>
                <div
                    className={`${props.status === "open" ? "bg-green-500 text-white" : "bg-red-500 text-gray-400"} py-1 px-2 rounded text-sm`}>
                    {props.status === 'open' ? "Opening" : "Closed"}
                </div>
            </div>
        </div>
    );
}


export default FoodShop;