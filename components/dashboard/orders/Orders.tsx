"use client";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { toast } from "react-toastify";
import "./orders.css";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
import ActionsBtn from "./ActionsBtn";
import Input from "postcss/lib/input";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";

const Orders = () => {
  const [orders, setOrders] = useState<[OrderObj]>();
  const [filteredOrders, setFilteredOrders] = useState<[OrderObj]>([
    {
      email: "string",
      first_name: "string",
      last_name: "string",
      address: "string",
      apartment: "number",
      city: "string",
      governrate: "string",
      postal_code: "number",
      phone: "",
      order: [
        {
          name: "string",
          id: "string",
          price: "string",
          picture: "string",
          quantity: "string",
        },
      ],
      status: "string",
    },
  ]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showOrderInfo, setShowOrderInfo] = useState<boolean>(false);
  const [orderInfo, setOrderInfo] = useState<OrderObj>();
  const router = useRouter();
  useEffect(() => {
    if (statusFilter === "all") {
      if (orders !== undefined) {
        setFilteredOrders(orders);
      }
    } else {
      const filteredStatus = orders?.filter(
        (item) => item.status === statusFilter
      )!;
      if (filteredStatus !== undefined) {
        // @ts-ignore
        setFilteredOrders(filteredStatus);
      }
    }
  }, [statusFilter]);
  useEffect(() => {
    setLoading(true);
    const token = Cookies.get("access_token");
    console.log(token);
    axios({
      method: "get",
      url: process.env.API_URL + "/orders",
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        setLoading(false);
        setFilteredOrders(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        if (err.response.status === 403) {
          router.push("/login");
        } else if (err.response.status === 401) {
          router.push("/login");
        }
      });
  }, []);
  const findTotal = () => {
    const total = orderInfo?.order.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );
    return total;
  };
  if (loading) {
    return (
      <Layout style={"flex items-center mr-0 ml-0 mt-0"}>
        <LoadingSpinner style="w-[50px] h-[50px] absolute flex items-center left-[45%] fill-[#000000] " />
      </Layout>
    );
  } else if (!loading) {
    return (
      <Layout>
        <>
          <div>
            <h1 className="font-semibold text-[28px]">Orders</h1>
            <p className="text-[12px] font-semibold mt-[5px]">
              {filteredOrders?.length} orders found
            </p>
          </div>
          <div className="flex  gap-[80px] w-[100%] mt-[35px]">
            <button
              className={`${
                statusFilter === "all" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => {
                setStatusFilter("all");
                setShowOrderInfo(false);
              }}
            >
              All Orders
            </button>
            <button
              className={`${
                statusFilter === "pending" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => {
                setStatusFilter("pending");
                setShowOrderInfo(false);
              }}
            >
              Pending
            </button>
            <button
              className={`${
                statusFilter === "processing" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => {
                setStatusFilter("processing");
                setShowOrderInfo(false);
              }}
            >
              Processing
            </button>
            <button
              className={`${
                statusFilter === "shipping" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => {
                setStatusFilter("shipping");
                setShowOrderInfo(false);
              }}
            >
              Shipping
            </button>
            <button
              className={`${
                statusFilter === "completed" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => {
                setStatusFilter("completed");
                setShowOrderInfo(false);
              }}
            >
              Completed
            </button>
          </div>
          <div className="bg-white relative rounded-[5px] p-[20px] shadow-[0px_4px_10px_3px_#00000032] mt-[40px]">
            <div className="flex  gap-[0px] w-[100%]">
              {filteredOrders?.length < 1 ? (
                <p className="font-bold text-[24px]">No orders found</p>
              ) : (
                <>
                  <p className="flex justify-start w-[calc(100%/6)]">
                    Customer
                  </p>
                  <p className="flex justify-start w-[calc(100%/6)]">Phone</p>
                  <p className="flex justify-start w-[calc(100%/6)]">Date</p>
                  <p className="flex justify-start w-[calc(100%/6)]">Price</p>
                  <p className="flex justify-start w-[calc(100%/6)]">Status</p>
                </>
              )}
            </div>
            <div className="flex flex-col gap-[30px] mt-[30px] h-[calc(100vh-370px)] overflow-y-scroll pb-[120px]">
              {filteredOrders?.length < 1
                ? ""
                : filteredOrders?.map((order: OrderObj, i) => {
                    const total = order.order.reduce(
                      (acc: number, item: any) =>
                        acc + item.price * item.quantity,
                      0
                    );

                    return (
                      <div className="flex gap-[0px] w-[100%]" key={i}>
                        <p className="font-bold capitalize  flex justify-start w-[calc(100%/6)]">
                          {order.first_name}
                        </p>
                        <p className="font-bold capitalize  flex justify-start w-[calc(100%/6)]">
                          {order.phone}
                        </p>
                        <p className="font-bold  flex justify-start w-[calc(100%/6)]">
                          9/10 @ 10:55
                        </p>
                        <p className="font-bold capitalize  flex justify-start w-[calc(100%/6)]">
                          {total} LE
                        </p>
                        <p className="font-bold capitalize  flex justify-start w-[calc(100%/6)]">
                          {order.status}
                        </p>
                        <ActionsBtn
                          setOrderInfo={setOrderInfo}
                          order={order}
                          setShowOrderInfo={setShowOrderInfo}
                        />
                      </div>
                    );
                  })}
            </div>
            {/*  */}
            {/*  */}
            {/* Edit order UI */}
            <div
              className={`absolute scrollbar-hide overflow-scroll w-[100%] h-[100%] p-5 pt-[70px] bg-white top-0 left-0 ${
                showOrderInfo ? "block" : "hidden"
              }`}
            >
              <button
                className="absolute top-[15px] left-[20px] hover:scale-110"
                onClick={() => setShowOrderInfo(false)}
              >
                {" "}
                <IoIosArrowBack className="text-black  text-[30px] font-bold" />
              </button>{" "}
              <div className="flex">
                <div>
                  <div className="flex">
                    <p className="mr-[10px] w-[100px]">Name:</p>
                    <input
                      type="text"
                      value={orderInfo?.first_name + " " + orderInfo?.last_name}
                      disabled
                      className="border-[1px] bg-white rounded-[5px]  w-[250px] px-2"
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">Phone:</p>
                    <input
                      type="text"
                      value={orderInfo?.phone}
                      disabled
                      className="border-[1px] bg-white rounded-[5px]  w-[250px] px-2"
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">Email:</p>
                    <input
                      type="text"
                      value={orderInfo?.email}
                      disabled
                      className="border-[1px] bg-white rounded-[5px] px-2 w-[250px]"
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">Address:</p>
                    <textarea
                      value={orderInfo?.address}
                      disabled
                      rows={4}
                      className="border-[1px] bg-white rounded-[5px] px-2 w-[250px] h-fit "
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">Apartment:</p>
                    <input
                      type="text"
                      value={orderInfo?.apartment}
                      disabled
                      className="border-[1px] bg-white rounded-[5px] px-2 w-[250px]"
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">City:</p>
                    <input
                      type="text"
                      value={orderInfo?.city}
                      disabled
                      className="border-[1px] bg-white rounded-[5px] px-2 w-[250px]"
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">Governorate:</p>
                    <input
                      type="text"
                      value={orderInfo?.governrate}
                      disabled
                      className="border-[1px] bg-white rounded-[5px] px-2 w-[250px]"
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">Postal Code:</p>
                    <input
                      type="text"
                      value={orderInfo?.postal_code}
                      disabled
                      className="border-[1px] bg-white rounded-[5px] px-2 w-[250px]"
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">Order Time:</p>
                    <input
                      type="text"
                      value={orderInfo?.time}
                      disabled
                      className="border-[1px] bg-white rounded-[5px] px-2 w-[250px]"
                    />
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px] focus:outline-none outline-none">
                      Status:
                    </p>
                    <select className="w-[250px]">
                      <option disabled>{orderInfo?.status}</option>
                      <option value={"pending"}>Pending</option>
                      <option value={"processing"}>Processing</option>
                      <option value={"shipping"}>Shipping</option>
                      <option value={"completed"}>Completed</option>
                    </select>
                  </div>
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] w-[100px]">Price:</p>
                    <p>{findTotal()}</p>
                  </div>
                </div>
                <div className="ml-[100px]">
                  <h1 className="font-bold text-[24px]">Order:</h1>
                  {orderInfo?.order.map((item) => {
                    return (
                      <div className="flex justify-between border-[1px] rounded-[5px] p-2 w-[350px] m-[15px] ml-0">
                        <div>
                          <p>
                            <span className="font-semibold mr-[10px]">
                              Item:
                            </span>{" "}
                            {item.name}
                          </p>
                          <p>
                            <span className="font-semibold mr-[10px]">
                              Price:
                            </span>{" "}
                            {item.price}
                          </p>
                          <p>
                            <span className="font-semibold mr-[10px]">
                              Quantity:
                            </span>{" "}
                            {item.quantity}
                          </p>
                        </div>
                        <Image
                          src={item.picture}
                          alt={item.name}
                          width={90}
                          height={90}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      </Layout>
    );
  }
};
export default Orders;
