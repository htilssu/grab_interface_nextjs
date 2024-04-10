import logo from "../assets/logo-grabfood-white2.svg";
import testAvt from "../assets/react.svg";
import greenLogo from "../assets/logo-grabfood2.svg";
import {useEffect, useState} from "react";
import {CiShoppingBasket} from "react-icons/ci";
import {Avatar} from "@mui/material";
import {RiArrowDropDownLine} from "react-icons/ri";


const NavBar = () => {
    const [isScrollDown, setIsScrollDown] = useState(false)
    const scrollStyle = !isScrollDown ? "text-green-500 bg-white" : "bg-green-500 text-white"

    function handleNavBarScrollDown() {
        if (window.scrollY > 0) {
            setIsScrollDown(true)
        } else {
            setIsScrollDown(false)
        }
    }


    useEffect(() => {
        window.addEventListener('scroll', handleNavBarScrollDown);

        // Clean up the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleNavBarScrollDown);
        };
    }, []);

    return (
        <div
             style={
                 {
                     transition: "background-color 0.5s",
                     zIndex: 1000,
                 }
             }
             className={`fixed top-0 w-full h-[88px] ${!isScrollDown ? "bg-gradient-to-b from-[#00000066] to-transparent" : "bg-white shadow-lg"}`}>
            <div className={"flex justify-between items-center h-full px-40"}>
                <div className={"text-2xl w-36 font-bold"}>
                    <img alt="logo" src={isScrollDown ? greenLogo : logo}/>
                </div>
                <div className={"flex space-x-4"}>
                    <button
                        className={`${scrollStyle} h-10 w-10 p-2 rounded`}>
                        <CiShoppingBasket
                            className={`w-full h-full font-bold`}/>
                    </button>
                    <Avatar className={`border-2 ${isScrollDown && "border-green-500"} ${scrollStyle} bg-transparent`} src={testAvt}/>
                    <button
                        className={`${scrollStyle} flex gap-2 items-center justify-center h-10 p-2 rounded`}>
                        VI

                        <RiArrowDropDownLine className={"h-full"}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;