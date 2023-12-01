"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { PiShoppingCart } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
const MobileNav = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <>
      <div className="sticky top-0 z-[9999] bg-[#33a1d8] flex items-center h-[50px] w-[100%] md:hidden shadow-[0px_5px_20px_10px_#00000024]">
        <div className=" flex justify-between items-center w-[100%] mx-[20px]">
          <Image src={logo} alt="Logo" className=" w-[90px] " />
          <button
            onClick={() => {
              console.log(openNav);
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
        className={`absolute transition-all ease-in-out duration-500 md:hidden z-[999] bg-[#33a1d8] h-[50vh] w-[100%] ${
          openNav && "top-[50px]"
        } ${!openNav && "top-[-500px]"}`}
      >
        <div className="mx-[20px]">
          <ul className="w-[100%] mt-[20px] flex flex-col items-center gap-[60px] text-white text-[20px]">
            <li className=" cursor-pointer hover:scale-105 transition-all ease-in-out">
              <a href="#">Home</a>
            </li>
            <li className=" cursor-pointer hover:scale-105 transition-all ease-in-out">
              <a href="#">Shop</a>
            </li>
            <li className="] cursor-pointer hover:scale-105 transition-all ease-in-out">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex w-[100%] items-center justify-center mt-[60px]">
            <a href="#">
              <AiOutlineSearch className="w-[25px] h-[25px] text-white mx-[30px] cursor-pointer hover:scale-110 transition-all ease-in-out" />
            </a>
            <a href="#">
              <PiShoppingCart className="w-[25px] h-[25px] text-white  mx-[30px] cursor-pointer hover:scale-110 transition-all ease-in-out" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default MobileNav;
