import Image from "next/image";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import { PiShoppingCart } from "react-icons/pi";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className="container absolute hidden top-0 left-[50%] translate-x-[-50%] md:flex justify-between items-center h-[120px] z-10">
      <a href="/">
        {" "}
        <Image src={logo} width={150} height={86} alt="logo" />
      </a>

      <ul className="flex justify-between items-center text-white text-[20px]">
        <li className="mx-[20px] px-[20px] cursor-pointer hover:scale-105 transition-all ease-in-out">
          <a href="/">Home</a>
        </li>
        <li className="mx-[20px] px-[20px] cursor-pointer hover:scale-105 transition-all ease-in-out">
          <a href="/products">Shop</a>
        </li>
        <li className="mx-[20px] px-[20px] cursor-pointer hover:scale-105 transition-all ease-in-out">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="flex justify-between">
        <a href="#">
          <AiOutlineSearch className="w-[25px] h-[25px] text-white mx-[10px] cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a>
        <a href="#">
          <PiShoppingCart className="w-[25px] h-[25px] text-white  mx-[10px] cursor-pointer hover:scale-110 transition-all ease-in-out" />
        </a>
      </div>
    </div>
  );
};
export default Navbar;
