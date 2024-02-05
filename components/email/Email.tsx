"use client";
import { useState } from "react";

import { LoadingSpinner } from "../loading/LoadingSpinner";
import "./email.css";
import axios from "axios";
const Email = () => {
  const [email, setEmail] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const handleClick = async () => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    console.log(`${process.env.API_URL}/subscribtion`);
    setLoading(true);
    if (!email || email.includes(".com") === false || !emailRegex.test(email)) {
      setLoading(false);
      setError("Please insert a correct email !");
      return setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      try {
        fetch(`${process.env.API_URL}/subscription`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email }),
        });
        setError("");
        setSuccess("You have been subscribed to our email list");
        setEmail("");
        setLoading(false);
        return setTimeout(() => {
          setSuccess("");
        }, 5000);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="bg-Email h-[400px] max-w-[100vw] flex items-center justify-center">
      <div className="pt-[50px] md:pt-[150px] container md:w-[45%]  w-[90%] text-center ">
        <h1 className="text-white font-semibold text-[18px] md:text-[28px]">
          Be the first to know about our latest flavors !
        </h1>
        <div className="flex flex-col md:flex-row max-w-[100%] justify-between relative items-center mt-2">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-[5px] grow px-2 hover:outline-none] py-[5px] w-[80%] lg:w-[70%] focus:outline-none font-medium  shadow-[0px_7px_10px_0px_#00000024] "
          />

          <button
            onClick={handleClick}
            className="bg-white flex items-center justify-center rounded-[5px] md:ml-2 px-[30px] py-[5px] w-[50%] lg:w-[30%] shadow-[0px_7px_10px_0px_#00000024] mt-[10px] md:mt-0  "
          >
            {loading && <LoadingSpinner style="w-4 h-4 mr-2" />}
            Subscribe{" "}
          </button>
          {error && (
            <p className="mt-2 text-red-700 font-medium absolute bottom-[-30px]">
              {error}
            </p>
          )}
          {success && (
            <p className="mt-2  text-green-700 font-medium absolute md:bottom-[-30px] bottom-[-50px]">
              {success}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Email;
