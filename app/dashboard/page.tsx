"use client";
import { useEffect } from "react";
import axios from "axios";
import DesktopNav from "@/components/dashboard/DesktopNav";
const page = () => {
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
      <DesktopNav />
    </div>
  );
};
export default page;
