"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const page = () => {
  const [loginInfo, setLoginInfo] = useState<{
    username: string;
    password: string;
  }>({ username: "", password: "" });
  const router = useRouter();
  // console.log(document.cookie);
  const login = async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: process.env.API_URL + "/login",
        withCredentials: true,
        headers: { "Content-Type": "application/json", credentials: "include" },
        data: JSON.stringify(loginInfo),
      });

      document.cookie = `access_token=${data.token}`;
      toast.success("You have been logged in.");

      router.push("/dashboard");

      return;
    } catch (error) {
      toast.error("Incorrect username or password.");
    }
  };
  return (
    <div className="bg-cookies  h-[100vh]  p-4 flex justify-center">
      <main className="bg-contact h-[100%] lg:w-[30%] w-[95%] flex justify-center items-center ">
        <div className="container shadow-[0px_7px_10px_0px_#00000024] bg-cookies rounded-[8px] py-5 px-4 h-fit ">
          <h1 className="text-white font-semibold relative w-[100%] mb-[50px]  text-[30px] text-center flex justify-center ">
            Ludas Ice-Cream Admin Panel
          </h1>
          <form className="flex flex-col gap-[20px] flex-wrap justify-center md:justify-start mb-[80px] ">
            <input
              type="text"
              name="username"
              id="username"
              value={loginInfo.username}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, username: e.target.value })
              }
              placeholder="username"
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo({ ...loginInfo, password: e.target.value })
              }
              className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none shadow-[0px_7px_10px_0px_#00000024]"
            />

            <button
              onClick={() => login()}
              type="button"
              className="bg-[#4FBBFB]  py-2 flex justify-center items-center text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
export default page;
