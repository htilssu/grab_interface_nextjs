import React, {useState} from 'react';
import {Card} from "@mui/material";
import {FaMinus, FaPlus, FaTrashCan} from "react-icons/fa6";

const FoodCard = () => {
    const [quantity, setQuantity] = useState<number>(0)

    function decreaseQuantity() {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    function increaseQuantity() {
        setQuantity(quantity + 1)
    }

    const FoodQuantityControl = () => {
        if(quantity > 0){
            return (
                <div style={
                    {
                        transition: 'all 0.3s',
                    }
                } className={'py-1 px-2 border-[1px] border-gray-400 rounded-3xl'}>
                    <div className={'flex items-center gap-1'}>
                        <button onClick={decreaseQuantity}>
                            {quantity >1 ? <FaMinus className={'text-gray-400'}/> : <FaTrashCan className={'text-gray-400'} /> }
                        </button>
                        <span>{quantity}</span>
                        <button onClick={increaseQuantity}><FaPlus className={'text-gray-400'}/></button>
                    </div>
                </div>
            );
        } else {
            return (
                <div style={
                    {
                        transition: 'all 0.3s',
                    }
                }  className={'rounded-full bg-green-500 p-2 flex items-center justify-center'}>
                    <button onClick={increaseQuantity} className={'w-5 h-5 text-white p-1'}>
                        <FaPlus className={'w-full h-full'}/>
                    </button>
                </div>
            )
        }
    };

    return (
        <div className={'md:w-1/3 w-full p-2'}>
            <div
                className={"rounded bg-white border-[1px] hover:border-green-500 border-transparent relative overflow-hidden"}>
                <div className={'flex'}>
                    <div className={'flex p-3'}>
                        <div className={'w-[120px] h-[120px] shrink-0'}>
                            <img className={'object-cover rounded-md w-full h-full'} alt={'banh mi'}
                                 src={'/banhmi.webp'}/>
                        </div>
                        <div className={'p-3 flex flex-col justify-between'}>
                            <h1>Bún đậu mắm tôm siêu khắm</h1>
                            <div className={'flex items-center justify-between'}>
                                <div>140đ</div>
                                <div>
                                    <FoodQuantityControl/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`absolute ${quantity !== 0 ? "" : "hidden"} right-[-1px] h-[101%] bg-green-500 w-1 border-none shrink-0`}></div>
                </div>

            </div>
        </div>
    );
};


export default FoodCard;