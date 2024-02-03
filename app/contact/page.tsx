"use client";
import { useState } from "react";
import "./contact.css";
import { type } from "os";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
const page = () => {
  //state
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<{
    name: string;
    contact_method: string;
    message: string;
  }>({ name: "", contact_method: "", message: "" });
  //handle change
  const handleChange = (item: string, value: string) => {
    setFormData({ ...formData, [item]: value });
  };
  //handle submit

  const handleSubmit = async () => {
    setLoading(true);
    if (
      !formData.name ||
      typeof formData.name !== "string" ||
      !formData.contact_method ||
      !formData.message
    ) {
      setLoading(false);
      setError(true);
      setSuccess(false);
      return setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      try {
        fetch(`${process.env.API_URL}/messages`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        setError(false);
        setSuccess(true);
        setFormData({ name: "", contact_method: "", message: "" });
        setLoading(false);
        return setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <main className="bg-contact min-h-[100vh] flex justify-center ">
      <div className="container ">
        <h1 className="text-white font-semibold relative w-[100%] mb-[50px] my-[120px] text-[30px] flex justify-center md:justify-start">
          Contact Us
          <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
        </h1>
        <form className="flex flex-col gap-[20px] flex-wrap relative justify-center md:justify-start mb-[80px] ">
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
            value={formData.contact_method}
            onChange={(e) => handleChange("contact_method", e.target.value)}
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
          {error && (
            <p className="text-red-700 absolute bottom-[45px]">
              Please fill all the input fields correctly !
            </p>
          )}
          {success && (
            <p className="text-green-700 absolute bottom-[45px]">
              Your message has been recieved, we will contact you shortly.
            </p>
          )}
          <button
            type="button"
            className="bg-cookies py-2 flex justify-center text-white font-medium rounded-[5px] mt-[20px] shadow-[0px_7px_10px_0px_#00000024] hover:scale-105 transition-all ease-in-out"
            onClick={handleSubmit}
          >
            {loading && <LoadingSpinner style="w-4 h-4 mr-2" />}
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};
export default page;
