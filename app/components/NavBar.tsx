import logo from "../../public/logo-grabfood-white2.svg";
import greenLogo from "../../public/logo-grabfood2.svg";
import { useEffect, useState } from "react";
import { CiShoppingBasket } from "react-icons/ci";
import { Avatar, Badge } from "@mui/material";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavbarContext } from "@/app/context/NavBarContext";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/app/context/CartContext";
import _ from "lodash";
import AddressInput from "@/app/components/AddressInput";

const NavBar = ({ addressNavbarProp }: { addressNavbarProp?: boolean }) => {
  const { addressNavbar } = useNavbarContext();
  const [isScrollDown, setIsScrollDown] = useState(false);
  const { cartItem, total } = CartContext();

  const scrollStyle =
    !isScrollDown && !addressNavbarProp
      ? "text-green-500 bg-white"
      : "bg-green-500 text-white";

  function handleNavBarScrollDown() {
    if (window.scrollY > 0) {
      setIsScrollDown(true);
    } else {
      setIsScrollDown(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleNavBarScrollDown);

    return () => {
      window.removeEventListener("scroll", handleNavBarScrollDown);
    };
  }, []);

  if (addressNavbar || addressNavbarProp) {
    return (
      <div
        style={{
          transition: "background-color 0.5s",
          zIndex: 1000,
        }}
        className={`fixed top-0 w-full md:h-[88px] h-[60px] ${!isScrollDown && addressNavbar ? "sm:bg-gradient-to-b sm:from-[#00000066] sm:to-transparent bg-white sm:bg-transparent" : "bg-white"}`}
      >
        <div
          className={"flex justify-between items-center h-full p-5 md:px-40"}
        >
          <Link scroll={false} href={"/"}>
            <div>
              <Image
                className={"p-5 md:p-1"}
                height={150}
                width={150}
                alt="logo"
                src={greenLogo.src}
              />
            </div>
          </Link>
          <AddressInput className={"md:px-2 hidden lg:flex"} />
          <div className={"flex space-x-4 items-center"}>
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              badgeContent={
                cartItem.length > 0 && (
                  <>
                    <div
                      className={
                        "rounded-full border-[1px] p-2 bg-white h-5 border-green-600 flex items-center justify-center"
                      }
                    >
                      {_.reduce(
                        cartItem,
                        (sum, item) => sum + item.quantity,
                        0,
                      )}
                    </div>
                  </>
                )
              }
            >
              <button
                className={`${scrollStyle} items-center gap-1 flex h-8 md:h-10 p-2 rounded`}
              >
                <CiShoppingBasket className={`w-full h-full font-bold`} />
                {total !== 0 && (
                  <div className={"text-sm hidden sm:flex"}>
                    <span className={"text-nowrap font-medium"}>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(total)}
                    </span>
                  </div>
                )}
              </button>
            </Badge>
            <Avatar
              className={`border-2 w-8 h-8 md:h-10 md:w-10 ${isScrollDown && "border-green-500"} ${scrollStyle}`}
            />
            <button
              className={`${scrollStyle} flex gap-2 text-sm items-center justify-center h-8 w-8 md:h-10 md:w-10 p-2 rounded`}
            >
              VI
              <RiArrowDropDownLine className={"h-full"} />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          transition: "background-color 0.5s",
          zIndex: 1000,
        }}
        className={`fixed top-0 w-full md:h-[88px] h-[50px] ${!isScrollDown ? "sm:bg-gradient-to-b sm:from-[#00000066] sm:to-transparent bg-white sm:bg-transparent" : "bg-white shadow-lg"}`}
      >
        <div
          className={"flex justify-between items-center h-full p-5 md:px-40"}
        >
          <Link scroll={false} className={"w-36"} href={"/"}>
            <div className={"text-2xl w-36 font-bold hidden sm:block"}>
              <Image alt="logo" src={isScrollDown ? greenLogo : logo} />
            </div>
            <div className={"sm:hidden block p-5"}>
              <Image alt="logo" src={greenLogo} />
            </div>
          </Link>
          <div className={"flex space-x-4 items-center"}>
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              badgeContent={
                cartItem.length > 0 && (
                  <>
                    <div
                      className={
                        "rounded-full border-[1px] p-2 bg-white h-5 border-green-600 flex items-center justify-center"
                      }
                    >
                      {_.reduce(
                        cartItem,
                        (sum, item) => sum + item.quantity,
                        0,
                      )}
                    </div>
                  </>
                )
              }
            >
              <button
                className={`${scrollStyle} items-center gap-1 flex h-8 md:h-10 p-2 rounded`}
              >
                <CiShoppingBasket className={`w-full h-full font-bold`} />
                {total !== 0 && (
                  <div className={"text-sm hidden sm:flex"}>
                    <span className={"text-nowrap font-medium"}>
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(total)}
                    </span>
                  </div>
                )}
              </button>
            </Badge>
            <Avatar
              className={`border-2 w-8 h-8 md:h-10 md:w-10 ${isScrollDown && "border-green-500"} ${scrollStyle}`}
            />
            <button
              className={`${scrollStyle} flex gap-2 text-sm items-center justify-center h-8 w-8 md:h-10 md:w-10 p-2 rounded`}
            >
              VI
              <RiArrowDropDownLine className={"h-full"} />
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
