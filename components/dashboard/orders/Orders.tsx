"use client";
import { useEffect, useState } from "react";
import Layout from "../Layout";
import axios from "axios";
import { toast } from "react-toastify";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
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
              onClick={() => setStatusFilter("all")}
            >
              All Orders
            </button>
            <button
              className={`${
                statusFilter === "pending" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => setStatusFilter("pending")}
            >
              Pending
            </button>
            <button
              className={`${
                statusFilter === "processing" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => setStatusFilter("processing")}
            >
              Processing
            </button>
            <button
              className={`${
                statusFilter === "shipping" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => setStatusFilter("shipping")}
            >
              Shipping
            </button>
            <button
              className={`${
                statusFilter === "completed" ? "font-bold " : ""
              } hover:scale-110 transition-all ease-in-out`}
              onClick={() => setStatusFilter("completed")}
            >
              Completed
            </button>
          </div>
          <div className="bg-white rounded-[5px] p-[20px] shadow-[0px_4px_10px_3px_#00000032] mt-[40px]">
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
            <div className="flex flex-col gap-[30px] mt-[30px] max-h-[calc(100vh-370px)] overflow-scroll">
              {filteredOrders?.length < 1
                ? ""
                : filteredOrders?.map((order: OrderObj, i) => {
                    const total = order.order.reduce(
                      (acc: number, item: any) =>
                        acc + item.price * item.quantity,
                      0
                    );

                    return (
                      <div className="flex gap-[0px]  w-[100%]" key={i}>
                        <p className="font-bold  flex justify-start w-[calc(100%/6)]">
                          {order.first_name}
                        </p>
                        <p className="font-bold  flex justify-start w-[calc(100%/6)]">
                          {order.phone}
                        </p>
                        <p className="font-bold  flex justify-start w-[calc(100%/6)]">
                          9/10 @ 10:55
                        </p>
                        <p className="font-bold  flex justify-start w-[calc(100%/6)]">
                          {total} LE
                        </p>
                        <p className="font-bold  flex justify-start w-[calc(100%/6)]">
                          {order.status}
                        </p>
                        <button className="bg-black text-white shadow-[0px_2px_10px_0px_#0000007d]  px-[20px] py-[5px] rounded-[3px] h-fit hover:bg-white hover:text-black transition-all ease-in-out">
                          Actions
                        </button>
                      </div>
                    );
                  })}
            </div>
          </div>
        </>
      </Layout>
    );
  }
};
export default Orders;
