"use client";
import { useState } from "react";
import "./contact.css";
const page = () => {
  //state
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({ name: "", email: "", message: "" });
  //handle change
  const handleChange = (item: string, value: string) => {
    setFormData({ ...formData, [item]: value });
  };
  //handle submit
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <main className="bg-contact min-h-[100vh] flex justify-center ">
      <div className="container ">
        <h1 className="text-white font-semibold relative w-[100%] mb-[50px] my-[120px] text-[30px] flex justify-center md:justify-start">
          Contact Us
          <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
        </h1>
        <form className="flex flex-col gap-[20px] flex-wrap justify-center md:justify-start mb-[80px] ">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full name"
            className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none"
            value={formData.name}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email / Phone"
            className="rounded-[5px] py-[7px] px-2 font-semibold focus:outline-none"
            value={formData.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            placeholder="Message"
            className="rounded-[5px] px-2 py-[7px] font-semibold focus:outline-none"
            value={formData.message}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          ></textarea>
          <button
            type="button"
            className="bg-cookie py-2  text-white font-medium rounded-[5px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
            onClick={(e) => handleSubmit(e)}
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};
export default page;
