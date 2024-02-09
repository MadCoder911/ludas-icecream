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
  const [filteredOrders, setFilteredOrders] = useState<[OrderObj]>();
  const [loading, setLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string>("pending");
  const router = useRouter();
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
  useEffect(() => {
    // if (statusFilter === "all") {
    //   setFilteredOrders(orders);
    // } else {
    const filteredStatus = orders?.filter((item) => item.status === "pending");
    console.log(filteredStatus, "x");
    // }
  }, [statusFilter]);
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
            <button
              className="font-bold  hover:scale-110 transition-all ease-in-out "
              onClick={() => setStatusFilter("all")}
            >
              All Orders
            </button>
            <button
              className="  hover:scale-110 transition-all ease-in-out "
              onClick={() => setStatusFilter("pending")}
            >
              Pending
            </button>
            <button
              className="  hover:scale-110 transition-all ease-in-out "
              onClick={() => setStatusFilter("processing")}
            >
              Processing
            </button>
            <button
              className="  hover:scale-110 transition-all ease-in-out "
              onClick={() => setStatusFilter("shipping")}
            >
              Shipping
            </button>
            <button
              className="  hover:scale-110 transition-all ease-in-out "
              onClick={() => setStatusFilter("completed")}
            >
              Completed
            </button>
          </div>
          <div className="bg-white rounded-[5px] p-[20px] shadow-[0px_4px_10px_3px_#00000032] mt-[40px]">
            <div className="flex  gap-[0px] w-[100%]">
              <p className="flex justify-start w-[calc(100%/6)]">Customer</p>
              <p className="flex justify-start w-[calc(100%/6)]">Phone</p>
              <p className="flex justify-start w-[calc(100%/6)]">Date</p>
              <p className="flex justify-start w-[calc(100%/6)]">Price</p>
              <p className="flex justify-start w-[calc(100%/6)]">Status</p>
            </div>
            <div className="flex flex-col gap-[30px] mt-[30px] max-h-[calc(100vh-370px)] overflow-scroll">
              {orders?.map((order: OrderObj) => {
                const total = order.order.reduce(
                  (acc: number, item: any) => acc + item.price * item.quantity,
                  0
                );

                return (
                  <div className="flex gap-[0px]  w-[100%]">
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
