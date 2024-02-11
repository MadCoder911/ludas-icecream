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
import { FaRegEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { json } from "stream/consumers";

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
  const [edit, setEdit] = useState<string>("");
  const [triggerReload, setTriggerReload] = useState("");
  const router = useRouter();
  //
  //
  //
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
  //
  //
  //
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
        setStatusFilter("all");
      })
      .catch((error) => {
        if (error.response.status === 401 || 404) {
          toast.error("Unauthorized, please login");
          setTimeout(() => {
            router.push("/login");
          }, 1000);
          return;
        }
      });
  }, [triggerReload]);
  //
  //
  //
  const findTotal = () => {
    const total = orderInfo?.order.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    );
    return total;
  };
  //
  //
  //
  const handleOrderEdit = async () => {
    setEdit("");

    const token = Cookies.get("access_token");
    axios({
      method: "put",
      url: process.env.API_URL + "/orders",
      withCredentials: true,
      data: JSON.stringify(orderInfo),

      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        toast.success("Order successfully updated !");
        setTriggerReload(Math.random().toString());
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error("Unauthorized, please login");
          setTimeout(() => {
            router.push("/login");
          }, 1000);
          return;
        }
      });
  };
  //
  //
  //
  const handleOrderDelete = async (id: string) => {
    setEdit("");

    const token = Cookies.get("access_token");
    axios({
      method: "delete",
      url: process.env.API_URL + "/orders",
      withCredentials: true,
      data: JSON.stringify({ _id: id }),

      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        toast.success("Order successfully deleted !");
        setTriggerReload(Math.random().toString());
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error("Unauthorized, please login");
          setTimeout(() => {
            router.push("/login");
          }, 1000);
          return;
        }
      });
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
                setTriggerReload("X");
                setEdit("");
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
                // setTriggerReload("X");
                setEdit("");
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
                // setTriggerReload("X");
                setEdit("");
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
                // setTriggerReload("X");
                setEdit("");
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
                // setTriggerReload("X");
                setEdit("");
                setShowOrderInfo(false);
                setStatusFilter("completed");
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
                          orderId={order?._id!}
                          handleOrderDelete={handleOrderDelete}
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
                onClick={() => {
                  setShowOrderInfo(false);
                  setEdit("");
                }}
              >
                {" "}
                <IoIosArrowBack className="text-black  text-[30px] font-bold" />
              </button>{" "}
              <div className="flex">
                <div>
                  {/* name */}
                  <div className="flex items-center">
                    <p className="mr-[10px] font-semibold w-[120px]">Name:</p>
                    <input
                      type="text"
                      disabled
                      value={orderInfo?.first_name + " " + orderInfo?.last_name}
                      className="border-[1px] border-black bg-white rounded-[3px]  w-[250px] px-2 focus:outline-none"
                    />
                  </div>
                  {/* phone */}
                  <div className="flex items-center mt-[12px]">
                    <p className="mr-[10px] font-semibold w-[120px]">Phone:</p>
                    <input
                      type="text"
                      value={orderInfo?.phone}
                      onChange={(e) => {
                        if (orderInfo !== undefined) {
                          setOrderInfo({ ...orderInfo, phone: e.target.value });
                        }
                      }}
                      disabled={edit === "phone" ? false : true}
                      className="border-[1px] border-black bg-white rounded-[3px]  w-[250px] px-2"
                    />
                    <button
                      onClick={() => {
                        if (edit !== "phone") {
                          setEdit("phone");
                        } else {
                          setEdit("");
                        }
                      }}
                    >
                      <FaRegEdit className="ml-[10px] text-gray-400 text-[13px]" />
                    </button>
                    <button onClick={() => handleOrderEdit()}>
                      <TiTick
                        className={`text-[20px]  text-green-600 ml-[5px] ${
                          edit === "phone" ? "" : "invisible"
                        }`}
                      />
                    </button>
                  </div>
                  {/* email */}
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] items-center font-semibold w-[120px]">
                      Email:
                    </p>
                    <input
                      onChange={(e) => {
                        if (orderInfo !== undefined) {
                          setOrderInfo({ ...orderInfo, email: e.target.value });
                        }
                      }}
                      type="text"
                      value={orderInfo?.email}
                      disabled={edit === "email" ? false : true}
                      className="border-[1px] border-black bg-white rounded-[3px] px-2 w-[250px]"
                    />
                    <button
                      onClick={() => {
                        if (edit !== "email") {
                          setEdit("email");
                        } else {
                          setEdit("");
                        }
                      }}
                    >
                      <FaRegEdit className="ml-[10px] text-gray-400 text-[13px]" />
                    </button>
                    <button onClick={() => handleOrderEdit()}>
                      <TiTick
                        className={`text-[20px]  text-green-600 ml-[5px] ${
                          edit === "email" ? "" : "invisible"
                        }`}
                      />
                    </button>
                  </div>
                  {/* address */}
                  <div className="flex items-end mt-[12px]">
                    <p className="mr-[10px] font-semibold w-[120px]">
                      Address:
                    </p>
                    <textarea
                      onChange={(e) => {
                        if (orderInfo !== undefined) {
                          setOrderInfo({
                            ...orderInfo,
                            address: e.target.value,
                          });
                        }
                      }}
                      value={orderInfo?.address}
                      disabled={edit === "address" ? false : true}
                      rows={4}
                      className="border-[1px] border-black bg-white rounded-[3px] px-2 w-[250px] h-fit "
                    />
                    <button
                      onClick={() => {
                        if (edit !== "address") {
                          setEdit("address");
                        } else {
                          setEdit("");
                        }
                      }}
                    >
                      <FaRegEdit className="ml-[10px] text-gray-400 text-[13px]" />
                    </button>
                    <button onClick={() => handleOrderEdit()}>
                      <TiTick
                        className={`text-[20px]  text-green-600 ml-[5px] ${
                          edit === "address" ? "" : "invisible"
                        }`}
                      />
                    </button>
                  </div>
                  {/* apartment */}
                  <div className="flex items-center mt-[12px]">
                    <p className="mr-[10px] font-semibold w-[120px]">
                      Apartment:
                    </p>
                    <input
                      onChange={(e) => {
                        if (orderInfo !== undefined) {
                          setOrderInfo({
                            ...orderInfo,
                            apartment: e.target.value,
                          });
                        }
                      }}
                      type="text"
                      value={orderInfo?.apartment}
                      disabled={edit === "apartment" ? false : true}
                      className="border-[1px] border-black bg-white rounded-[3px] px-2 w-[250px]"
                    />
                    <button
                      onClick={() => {
                        if (edit !== "apartment") {
                          setEdit("apartment");
                        } else {
                          setEdit("");
                        }
                      }}
                    >
                      <FaRegEdit className="ml-[10px] text-gray-400 text-[13px]" />
                    </button>
                    <button onClick={() => handleOrderEdit()}>
                      <TiTick
                        className={`text-[20px]  text-green-600 ml-[5px] ${
                          edit === "apartment" ? "" : "invisible"
                        }`}
                      />
                    </button>
                  </div>
                  {/* city */}
                  <div className="flex items-center mt-[12px]">
                    <p className="mr-[10px] font-semibold w-[120px]">City:</p>
                    <input
                      onChange={(e) => {
                        if (orderInfo !== undefined) {
                          setOrderInfo({ ...orderInfo, city: e.target.value });
                        }
                      }}
                      type="text"
                      value={orderInfo?.city}
                      disabled={edit === "city" ? false : true}
                      className="border-[1px] border-black bg-white rounded-[3px] px-2 w-[250px]"
                    />
                    <button
                      onClick={() => {
                        if (edit !== "city") {
                          setEdit("city");
                        } else {
                          setEdit("");
                        }
                      }}
                    >
                      <FaRegEdit className="ml-[10px] text-gray-400 text-[13px]" />
                    </button>
                    <button onClick={() => handleOrderEdit()}>
                      <TiTick
                        className={`text-[20px]  text-green-600 ml-[5px] ${
                          edit === "city" ? "" : "invisible"
                        }`}
                      />
                    </button>
                  </div>
                  {/* governorate */}
                  <div className="flex items-center mt-[12px]">
                    <p className="mr-[10px] font-semibold w-[120px]">
                      Governorate:
                    </p>
                    <input
                      onChange={(e) => {
                        if (orderInfo !== undefined) {
                          setOrderInfo({
                            ...orderInfo,
                            governrate: e.target.value,
                          });
                        }
                      }}
                      type="text"
                      value={orderInfo?.governrate}
                      disabled={edit === "governorate" ? false : true}
                      className="border-[1px] border-black bg-white rounded-[3px] px-2 w-[250px]"
                    />
                    <button
                      onClick={() => {
                        if (edit !== "governorate") {
                          setEdit("governorate");
                        } else {
                          setEdit("");
                        }
                      }}
                    >
                      <FaRegEdit className="ml-[10px] text-gray-400 text-[13px]" />
                    </button>
                    <button onClick={() => handleOrderEdit()}>
                      <TiTick
                        className={`text-[20px]  text-green-600 ml-[5px] ${
                          edit === "governorate" ? "" : "invisible"
                        }`}
                      />
                    </button>
                  </div>
                  {/* postal code */}
                  <div className="flex mt-[12px]">
                    <p className="mr-[10px] items-center font-semibold w-[120px]">
                      Postal Code:
                    </p>
                    <input
                      onChange={(e) => {
                        if (orderInfo !== undefined) {
                          setOrderInfo({
                            ...orderInfo,
                            postal_code: e.target.value,
                          });
                        }
                      }}
                      type="text"
                      value={orderInfo?.postal_code}
                      disabled={edit === "postal" ? false : true}
                      className="border-[1px] border-black bg-white rounded-[3px] px-2 w-[250px]"
                    />
                    <button
                      onClick={() => {
                        if (edit !== "postal") {
                          setEdit("postal");
                        } else {
                          setEdit("");
                        }
                      }}
                    >
                      <FaRegEdit className="ml-[10px] text-gray-400 text-[13px]" />
                    </button>
                    <button onClick={() => handleOrderEdit()}>
                      <TiTick
                        className={`text-[20px]  text-green-600 ml-[5px] ${
                          edit === "postal" ? "" : "invisible"
                        }`}
                      />
                    </button>
                  </div>
                  {/* order time */}
                  <div className="flex items-center mt-[12px]">
                    <p className="mr-[10px] font-semibold w-[120px]">
                      Order Time:
                    </p>
                    <input
                      type="text"
                      value={orderInfo?.time}
                      disabled
                      className="border-[1px] border-black bg-white rounded-[3px] px-2 w-[250px]"
                    />
                  </div>
                  {/* status */}
                  <div className="flex items-center mt-[12px]">
                    <p className="mr-[10px] font-semibold w-[120px] focus:outline-none outline-none">
                      Status:
                    </p>
                    <select
                      onChange={(e) => {
                        if (orderInfo !== undefined) {
                          setOrderInfo({
                            ...orderInfo,
                            status: e.target.value,
                          });
                        }
                      }}
                      className="w-[250px] border-[1px] border-black rounded-[5px] px-23"
                      disabled={edit === "status" ? false : true}
                    >
                      <option disabled selected>
                        {orderInfo?.status}
                      </option>
                      <option value={"pending"}>Pending</option>
                      <option value={"processing"}>Processing</option>
                      <option value={"shipping"}>Shipping</option>
                      <option value={"completed"}>Completed</option>
                    </select>
                    <button
                      onClick={() => {
                        if (edit !== "status") {
                          setEdit("status");
                        } else {
                          setEdit("");
                        }
                      }}
                    >
                      <FaRegEdit className="ml-[10px] text-gray-400 text-[13px]" />
                    </button>
                    <button onClick={() => handleOrderEdit()}>
                      <TiTick
                        className={`text-[20px]  text-green-600 ml-[5px] ${
                          edit === "status" ? "" : "invisible"
                        }`}
                      />
                    </button>
                  </div>
                  {/* price */}
                  <div className="flex items-center mt-[12px]">
                    <p className="mr-[10px] font-semibold w-[120px]">Price:</p>
                    <input
                      disabled
                      type={"number"}
                      className="border-[1px] border-black bg-white rounded-[3px] px-2 w-[250px]"
                      value={findTotal()}
                    />
                  </div>
                </div>
                <div className="ml-[130px]">
                  <h1 className="font-bold text-[24px]">Order:</h1>
                  {orderInfo?.order.map((item) => {
                    return (
                      <div className="flex justify-between border-[1px] border-black rounded-[3px] p-2 w-[350px] m-[15px] ml-0">
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
