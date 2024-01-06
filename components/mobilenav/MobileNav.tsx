"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCart } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
const MobileNav = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const pathname = usePathname();

  const changeBgColor = () => {
    if (pathname.includes("brownies")) {
      return "bg-brownie";
    } else if (pathname.includes("biscuit")) {
      return "bg-biscuit";
    } else if (pathname.includes("vanilla")) {
      return "bg-vanilla";
    } else return "bg-[#33a1d8]";
  };
  if (pathname == "/login" || pathname === "/dashboard") {
    return;
  } else {
    return (
      <>
        <div
          className={`${changeBgColor()} absolute top-0 z-[9999]  flex items-center h-[50px] w-[100%] md:hidden shadow-[0px_5px_20px_10px_#00000024]`}
        >
          <div className=" flex justify-between items-center w-[100%] mx-[20px]">
            <Link href="/">
              <Image src={logo} alt="Logo" className=" w-[90px] " />
            </Link>
            <button
              onClick={() => {
                setOpenNav(!openNav);
              }}
            >
              {!openNav ? (
                <RxHamburgerMenu className=" h-[23px] w-[23px] text-white " />
              ) : (
                <IoMdClose className=" h-[23px] w-[23px] text-white " />
              )}
            </button>
          </div>
        </div>
        <div
          className={`absolute transition-all ease-in-out duration-500 md:hidden z-[999] ${changeBgColor()} h-[50vh] w-[100%] shadow-[0px_50px_50px_50px_#00000071] ${
            openNav && "top-[50px]"
          } ${!openNav && "top-[-500px]"}`}
        >
          <div className="mx-[20px]">
            <ul className="w-[100%] mt-[20px] flex flex-col items-center gap-[60px] text-white text-[20px]">
              <li className=" cursor-pointer hover:scale-105 transition-all ease-in-out">
                <Link href="/">Home</Link>
              </li>
              <li className=" cursor-pointer hover:scale-105 transition-all ease-in-out">
                <Link href="/products">Shop</Link>
              </li>
              <li className=" cursor-pointer hover:scale-105 transition-all ease-in-out">
                <Link href="#">Contact</Link>
              </li>
            </ul>
            <div className="flex w-[100%] items-center justify-center mt-[60px]">
              <Link href="#">
                <AiOutlineSearch className="w-[25px] h-[25px] text-white mx-[30px] cursor-pointer hover:scale-110 transition-all ease-in-out" />
              </Link>
              <Link href="/cart">
                <PiShoppingCart className="w-[25px] h-[25px] text-white  mx-[30px] cursor-pointer hover:scale-110 transition-all ease-in-out" />
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
};
export default MobileNav;
