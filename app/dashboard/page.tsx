"use client";
import { useEffect } from "react";
import axios from "axios";
const page = () => {
  console.log(document.cookie.split(";"));
  useEffect(() => {
    try {
      axios({
        method: "post",
        url: process.env.API_URL + "/subscription",
        withCredentials: true,
        headers: { "Content-Type": "application/json", credentials: "include" },
        data: JSON.stringify({ email: "x" }),
      });

      return;
    } catch (error) {}
  }, []);
  return <div>page</div>;
};
export default page;
