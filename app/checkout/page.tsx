"use client";
import "./checkout.css";
import Image from "next/image";
import { getCart, clearCart } from "@/utils/setCart";
import Link from "next/link";
import { useEffect, useState } from "react";
import { orderValidation } from "@/utils/validation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
const page = () => {
  const router = useRouter();
  const [currentCart, setCurrentCart] = useState<CartObj[]>([]);
  const [total, setTotal] = useState(10);
  const [shipping, setShipping] = useState(60);
  const [orderInfo, setOrderInfo] = useState<OrderObj>({
    email: "",
    first_name: "",
    last_name: "",
    address: "",
    apartment: "",
    city: "",
    governrate: "",
    postal_code: "",
    phone: "",
    order: [{ name: "s", id: "", price: "", picture: "", quantity: "" }],
  });
  const [loading, setLoading] = useState<boolean>(false);

  const updateCart = () => {
    const items = getCart();
    setCurrentCart(items);
  };

  useEffect(() => {
    const items = getCart();
    setCurrentCart(items);
  }, []);
  useEffect(() => {
    if (currentCart) {
      setTotal(
        currentCart.reduce(
          (acc: number, item: CartObj) => acc + item.price * item.quantity,
          0
        )
      );
      setOrderInfo({ ...orderInfo, order: getCart() });
    }
  }, [currentCart]);
  //

  const handleClick = async () => {
    setLoading(true);
    console.log(orderInfo);
    if (orderValidation(orderInfo) !== true) {
      setLoading(false);
      toast.error(orderValidation(orderInfo));
    } else {
      try {
        fetch(`${process.env.API_URL}/orders`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderInfo),
        });
        toast.success("Your order has been placed");
        setOrderInfo({
          email: "",
          first_name: "",
          last_name: "",
          address: "",
          apartment: "",
          city: "",
          governrate: "",
          postal_code: "",
          phone: "",
          order: getCart(),
        });
        setLoading(false);
        clearCart();
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } catch (error) {
        toast.error("An error has occured");
      }
    }
  };
  if (!currentCart || currentCart.length === 0) {
    return (
      <main className="bg-checkout min-h-[100vh] flex justify-center ">
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
      </main>
    );
  } else
    return (
      <main className="bg-checkout min-h-[100vh] flex justify-center ">
        {currentCart.length !== 0 ? (
          <div className="container ">
            <h1 className="text-white  font-semibold relative w-[100%] mb-[50px] my-[120px] text-[30px] flex justify-center md:justify-start">
              Checkout
              <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
            </h1>
            <div className="flex pt-[50px] flex-col   gap-[70px] flex-wrap justify-center md:justify-start mb-[80px] ">
              {/* flex */}
              <div className="flex lg:flex-row flex-col-reverse justify-between gap-[30px]">
                <form action="" className="lg:w-[40%] w-[100%]">
                  <h1 className="font-semibold text-[25px] text-white w-[100%] text-center mb-[30px]">
                    Contact Info
                  </h1>
                  <div className="flex flex-col w-[100%] mb-[20px]">
                    <input
                      type="email"
                      placeholder="Email"
                      value={orderInfo.email}
                      onChange={(e) =>
                        setOrderInfo({ ...orderInfo, email: e.target.value })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                  </div>
                  <div className="flex justify-between mb-[20px] gap-[20px]">
                    <input
                      type="name"
                      placeholder="First Name"
                      value={orderInfo.first_name}
                      onChange={(e) =>
                        setOrderInfo({
                          ...orderInfo,
                          first_name: e.target.value,
                        })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                    <input
                      type="name"
                      placeholder="Last Name"
                      value={orderInfo.last_name}
                      onChange={(e) =>
                        setOrderInfo({
                          ...orderInfo,
                          last_name: e.target.value,
                        })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                  </div>
                  <div className="flex justify-between mb-[20px]">
                    <input
                      type="name"
                      placeholder="Address"
                      value={orderInfo.address}
                      onChange={(e) =>
                        setOrderInfo({ ...orderInfo, address: e.target.value })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                  </div>
                  <div className="flex justify-between mb-[20px]">
                    <input
                      type="name"
                      placeholder="Apartment No"
                      value={orderInfo.apartment}
                      onChange={(e) =>
                        setOrderInfo({
                          ...orderInfo,
                          apartment: e.target.value,
                        })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                  </div>
                  <div className="flex justify-between mb-[20px] gap-[20px]">
                    <input
                      type="name"
                      placeholder="City"
                      value={orderInfo.city}
                      onChange={(e) =>
                        setOrderInfo({ ...orderInfo, city: e.target.value })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Governrate"
                      value={orderInfo.governrate}
                      onChange={(e) =>
                        setOrderInfo({
                          ...orderInfo,
                          governrate: e.target.value,
                        })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                    <input
                      type="email"
                      placeholder="Postal Code"
                      value={orderInfo.postal_code}
                      onChange={(e) =>
                        setOrderInfo({
                          ...orderInfo,
                          postal_code: e.target.value,
                        })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                  </div>
                  <div className="flex justify-between mb-[20px]">
                    <input
                      type="email"
                      placeholder="Phone"
                      value={orderInfo.phone}
                      onChange={(e) =>
                        setOrderInfo({ ...orderInfo, phone: e.target.value })
                      }
                      className="rounded-[8px] px-4 py-4 w-[100%] outline-none"
                    />
                  </div>
                  <div className="w-[100%] flex lg:justify-end justify-center mb-[200px]">
                    <div className="box relative text-white bg-[#ffffff25] rounded-[16px] px-[42px] py-[30px] w-[100%]">
                      <div className="flex justify-between w-[100%] text-[18px] pb-[10px]">
                        <p>Price:</p>
                        <p>{total} EGP</p>
                      </div>
                      <div className="flex justify-between w-[100%] text-[18px]">
                        <p>Shipping Fee:</p>
                        <p>{shipping} EGP</p>
                      </div>

                      <div className="flex justify-between w-[100%] relative  mt-[30px] text-[25px] font-bold">
                        <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] top-[-10px]"></span>
                        <p>Total:</p>
                        <p>{total + shipping} EGP</p>
                      </div>
                      <Link
                        onClick={(e) => {
                          e.preventDefault();

                          handleClick();
                        }}
                        href="/checkout"
                        className={` shadow-[0px_7px_10px_0px_#00000024] flex justify-center items-center absolute bottom-[-90px] left-[50%] translate-x-[-50%] bg-cookies w-[100%] rounded-[8px] text-white font-semibold hover:scale-105 transition-all ease-in-out py-[10px] text-[20px]`}
                      >
                        {loading && (
                          <LoadingSpinner style="w-[17px] mr-[8px]" />
                        )}{" "}
                        Place Order
                      </Link>
                    </div>
                  </div>
                </form>
                <div className=" relative  text-white lg:w-[50%] w-[100%] lg:mb-0 mb-[60px] ">
                  <h1 className="font-semibold text-[25px] text-white  w-[100%] text-center mb-[30px]">
                    Order Summary
                  </h1>
                  <div className=" relative flex flex-col mb-[100px]">
                    <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
                    <div className="flex justify-between">
                      <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px] ">
                        Item
                      </p>
                      <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px] ">
                        Quantity
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[80px]">
                    {currentCart.map((item: CartObj, i: number) => {
                      return (
                        <div
                          className=" flex justify-between  h-[50px]"
                          key={i}
                        >
                          <div className="div text-white flex items-start justify-start  w-[50%] font-semibold">
                            <Image
                              width={80}
                              height={80}
                              src={item.picture}
                              alt="pack"
                              className="max-w-[80px] mr-[10px]  rounded-8px"
                            />
                            <p className="text-[12px] sm:text-[16px]  md:block">
                              {item.name} Protein Ice Cream
                            </p>
                          </div>
                          <div className="div text-white  font-semibold flex items-start justify-center text-start  w-[25%]">
                            <p className="text-[12px] sm:text-[16px]">
                              {item.quantity}
                            </p>
                          </div>
                        </div>
                      );
                    })}
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
