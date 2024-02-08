"use client";
import Image from "next/image";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import { PiShoppingCart } from "react-icons/pi";
import Search from "./Search";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getCart } from "@/utils/setCart";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname == "/login" || pathname.includes("dashboard")) {
    return;
  } else {
    return (
      <div className="container absolute hidden top-0 left-[50%] translate-x-[-50%] md:flex justify-between items-center h-[120px] z-10">
        <Link href="/">
          {" "}
          <Image src={logo} width={150} height={86} alt="logo" />
        </Link>

        <ul className="flex justify-between items-center text-white text-[20px]">
          <li className="mx-[20px] px-[20px] cursor-pointer hover:scale-105 transition-all ease-in-out">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-[20px] px-[20px] cursor-pointer hover:scale-105 transition-all ease-in-out">
            <Link href="/products">Shop</Link>
          </li>
          <li className="mx-[20px] px-[20px] cursor-pointer hover:scale-105 transition-all ease-in-out">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <div className="flex justify-between">
          {/* <Search /> */}
          <Link href="/cart" className="relative">
            <PiShoppingCart className="w-[25px] h-[25px] text-white  mx-[10px] cursor-pointer hover:scale-110 transition-all ease-in-out" />
          </Link>
        </div>
      </div>
    );
  }
};
export default Navbar;
