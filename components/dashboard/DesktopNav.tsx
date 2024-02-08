import Image from "next/image";
import logo from "../../assets/black_logo.svg";
import Link from "next/link";
import { useState } from "react";
const DesktopNav = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: Function;
}) => {
  return (
    <div className="w-[250px] h-[100vh] rounded-tr-[50px] rounded-br-[50px] shadow-[10px_0px_20px_1px_#00000030]">
      <button onClick={() => setActiveTab("orders")}>
        <Image
          src={logo}
          alt="logo"
          height={149}
          width={176}
          className="ml-[10px]"
        />
      </button>
      <div className="flex flex-col items-start gap-[15px]">
        <button
          onClick={() => setActiveTab("orders")}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Orders
        </button>
        <button
          onClick={() => setActiveTab("products")}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Products
        </button>
        <button
          onClick={() => setActiveTab("sales")}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Sales
        </button>
        <button
          onClick={() => setActiveTab("messages")}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Messages
        </button>
        <button
          onClick={() => setActiveTab("accounts")}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Accounts
        </button>
        <button
          onClick={() => setActiveTab("expenses")}
          className="ml-[25px] font-semibold text-[18px] mt-[10px] hover:scale-110 transition-all ease-in-out"
        >
          Expenses tracker
        </button>
      </div>
    </div>
  );
};
export default DesktopNav;
