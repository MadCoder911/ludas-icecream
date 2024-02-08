"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import DesktopNav from "@/components/dashboard/DesktopNav";
import Orders from "@/components/dashboard/orders/Orders";
import Products from "@/components/dashboard/products/Products";
import Sales from "@/components/dashboard/sales/Sales";
import Messages from "@/components/dashboard/messages/Messages";
import Accounts from "@/components/dashboard/accounts/Accounts";
import Expenses from "@/components/dashboard/expenses/Expenses";

const page = () => {
  const [activeTab, setActiveTab] = useState<string>("orders");
  useEffect(() => {
    try {
      axios({
        method: "get",
        url: process.env.API_URL + "/subscription",
        withCredentials: true,
        headers: { "Content-Type": "application/json", credentials: "include" },
        data: JSON.stringify({ email: "x" }),
      });
      return;
    } catch (error) {}
  }, []);
  return (
    <div className="flex">
      <DesktopNav activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "orders" && <Orders />}
      {activeTab === "products" && <Products />}
      {activeTab === "sales" && <Sales />}
      {activeTab === "messages" && <Messages />}
      {activeTab === "accounts" && <Accounts />}
      {activeTab === "expenses" && <Expenses />}
    </div>
  );
};
export default page;
