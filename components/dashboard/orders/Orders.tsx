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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setLoading(true);
    const token = Cookies.get("access_token");
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
    <Layout>
      <LoadingSpinner style="w-[200px] h-[200px]" />
    </Layout>;
  } else if (!loading) {
    return (
      <Layout>
        <>
          <div>
            <h1 className="font-semibold text-[28px]">Orders</h1>
            <p className="text-[12px] font-semibold mt-[5px]">
              {orders?.length} orders found
            </p>
          </div>
          <div className="flex  gap-[80px] w-[100%] mt-[35px]">
            <button className="font-bold  hover:scale-110 transition-all ease-in-out ">
              All Orders
            </button>
            <button className="  hover:scale-110 transition-all ease-in-out ">
              Pending
            </button>
            <button className="  hover:scale-110 transition-all ease-in-out ">
              Processing
            </button>
            <button className="  hover:scale-110 transition-all ease-in-out ">
              Shipping
            </button>
            <button className="  hover:scale-110 transition-all ease-in-out ">
              Completed
            </button>
          </div>
          <div className="bg-white rounded-[5px] p-[20px] shadow-[0px_4px_10px_3px_#00000032] mt-[40px]">
            <div className="title flex  gap-[80px] w-[100%]">
              <p className=" flex justify-start w-[75px]">Customer</p>
              <p className=" flex justify-start w-[75px]">Phone</p>
              <p className=" flex justify-start w-[75px]">Date</p>
              <p className=" flex justify-start w-[75px]">Price</p>
              <p className=" flex justify-start w-[75px]">Payment Method</p>
              <p className=" flex justify-start w-[75px]">Status</p>
            </div>
            <div className="flex flex-col gap-[30px] mt-[30px] max-h-[calc(100vh-370px)] overflow-scroll">
              {orders?.map((order: OrderObj) => {
                return (
                  <div className="flex gap-[80px]  w-[100%]">
                    <p className="font-bold  flex justify-start w-[75px]">
                      {order.first_name}
                    </p>
                    <p className="font-bold  flex justify-start w-[75px]">
                      {order.phone}
                    </p>
                    <p className="font-bold  flex justify-start w-[75px]">
                      9/10 @ 10:55
                    </p>
                    <p className="font-bold  flex justify-start w-[75px]">
                      90 LE
                    </p>
                    <p className="font-bold  flex justify-start w-[75px]">
                      Cash
                    </p>
                    <p className="font-bold  flex justify-start w-[75px]">
                      {order.status}
                    </p>
                    <button className="bg-black text-white  px-[20px] py-[5px] rounded-[3px] h-fit">
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
