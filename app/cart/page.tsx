"use client";
import "./cart.css";
import image from "../../assets/brownies/browniesPack.png";
import Image from "next/image";
import { getCart, setCart } from "@/utils/setCart";
import Link from "next/link";
import { useEffect, useState } from "react";

const page = () => {
  const [currentCart, setCurrentCart] = useState<CartObj[]>([]);
  const updateCart = () => {
    const items = getCart();

    setCurrentCart(items);
  };
  useEffect(() => {
    const items = getCart();
    setCurrentCart(items);
  }, []);
  console.log(currentCart, "Cart");
  return (
    <main className="bg-cart min-h-[100vh] flex justify-center ">
      {currentCart.length !== 0 ? (
        <div className="container ">
          <h1 className="text-white  font-semibold relative w-[100%] mb-[50px] my-[120px] text-[30px] flex justify-center md:justify-start">
            Your Cart
          </h1>
          <div className="flex relative justify-between text-white">
            <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px] ">
              Item
            </p>
            <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px]">
              Price
            </p>
            <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px]">
              Quantity
            </p>
            <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px]">
              Subtotal
            </p>
            <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
          </div>
          <div className="flex pt-[50px] flex-col   gap-[70px] flex-wrap justify-center md:justify-start mb-[80px] ">
            {currentCart.map((item: CartObj, i: number) => {
              return (
                <div className=" flex justify-between h-[50px] " key={i}>
                  <div className="div text-white flex items-center justify-center  w-[25%] font-medium">
                    <Image
                      width={80}
                      height={80}
                      src={item.picture}
                      alt="pack"
                      className="max-w-[80px] mr-[10px]  rounded-8px"
                    />
                    <p className="text-[12px] sm:text-[16px] hidden md:block">
                      {item.name} Protein Ice Cream
                    </p>
                  </div>
                  <div className="div text-white flex items-start justify-center text-start  w-[25%]">
                    <p className="text-[12px] sm:text-[16px]">
                      {item.price} EGP
                    </p>
                  </div>
                  <div className="div text-white flex items-start justify-center text-start  w-[25%] font-semibold">
                    <p className="text-[13px] sm:text-[16px]">
                      <span
                        className="px-[10px] cursor-pointer"
                        onClick={() => {
                          setCart(item, "dec");
                          updateCart();
                        }}
                      >
                        -
                      </span>{" "}
                      {item.quantity}{" "}
                      <span
                        className="px-[10px] cursor-pointer"
                        onClick={() => {
                          setCart(item, "inc");
                          updateCart();
                        }}
                      >
                        +
                      </span>
                    </p>
                  </div>
                  <div className="div text-white flex items-start justify-center text-start  w-[25%]">
                    <p className="text-[12px] sm:text-[16px]">
                      {item.quantity * item.price} EGP
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-[100%] flex justify-end">
            <div>
              <div className="box text-white">
                <div className="flex">
                  <p>Price:</p>
                  <p>100 EGP</p>
                </div>
                <div className="flex">
                  <p>Shipping Fee:</p>
                  <p>100 EGP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[100%] flex flex-col items-center my-[300px]">
          <h1 className="text-white font-semibold text-[40px]">
            Your Cart Is Empty
          </h1>
          <Link
            href={"/products"}
            className="bg-cookies  text-white text-[20px font-medium px-2 py-1 rounded-[6px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-110 transition-all ease-in-out"
          >
            Browse Our Products
          </Link>
        </div>
      )}
    </main>
  );
};
export default page;
