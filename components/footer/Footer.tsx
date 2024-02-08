"use client";
import "./footer.css";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { LiaPhoneSolid } from "react-icons/lia";
import { SlEnvolope, SlArrowRight } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Footer = () => {
  const [email, setEmail] = useState<string>();
  const [error, setError] = useState<string>();
  const [success, setSuccess] = useState<string>();
  const pathname = usePathname();

  const handleClick = async () => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    console.log(JSON.stringify({ email: email }));
    if (!email || email.includes(".com") === false || !emailRegex.test(email)) {
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
        return setTimeout(() => {
          setSuccess("");
        }, 5000);
      } catch (error) {
        console.error(error);
      }
    }
  };
  if (pathname == "/login" || pathname.includes("/dashboard")) {
    return;
  } else {
    return (
      <div className="bg-Footer flex items-center justify-center">
        <div className="container relative">
          <div className="flex justify-between flex-wrap  lg:flex-nowrap mt-[100px] gap-[20px] lg:gap-[60px] mb-[100px] text-white">
            <div className="flex flex-col basis-[100%] items-center lg:items-start font-thin">
              <h1 className="text-[25px] font-semibold mb-[20px]">Contact</h1>
              <div className="flex items-center no-underline">
                <LiaPhoneSolid className="w-[24px] h-[24px] mr-[8px] no-underline" />{" "}
                <span className="no-underline">+20 1140808862</span>
              </div>
              <div className="flex items-center mt-[15px] no-underline ">
                <SlEnvolope className="w-[24px] h-[24px] mr-[8px]" />
                <span className="no-underline">Ludas@icecream.com</span>
              </div>
            </div>
            <div className="flex flex-col  items-center mt-[20px] lg:mt-[0px] font-thin">
              <Image src={logo} alt="logo" className="w-[150px] mb-[20px]" />
              <p className="">
                Made with the finest ingredients, our ice cream is not only
                tasty but also nutritious. Treat yourself to a guilt-free
                dessert and support local vendors. Add to your cart now!
              </p>
            </div>
            <div className=" flex flex-col basis-[100%] font-thin items-center lg:items-end ">
              <h1 className="text-[25px] font-semibold mb-[20px]">
                Newsletter
              </h1>
              <p className="mb-[10px]">
                Be the first to know about our latest flavors !
              </p>
              <div className="relative w-[100%] mb-[10px]">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-2 py-1 w-[100%] rounded-[5px] hover:outline-none focus:outline-none text-black relative"
                />
                <button
                  onClick={handleClick}
                  className="absolute  text-black top-[50%] translate-y-[-50%] right-[10px] w-[20px] h-[20px]"
                >
                  <SlArrowRight />
                </button>
              </div>
              <div className="h-fit">
                {error && (
                  <p className=" text-red-700 font-medium  bottom-[-25px]">
                    {error}
                  </p>
                )}
                {success && (
                  <p className="  text-green-700 font-medium  bottom-[-25px]">
                    {success}
                  </p>
                )}
              </div>
              <p>We don’t spam, we send offers instead !</p>
            </div>
          </div>
          <div className="absolute bottom-[50px] left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0 flex text-white">
            <Link
              href="https://www.tiktok.com/@ludas_icecream"
              target="_blank"
              className="mr-[15px] no-underline"
            >
              <FaTiktok className="w-[20px]  h-[25px]" />
            </Link>
            <Link
              className="no-underline"
              href="https://www.instagram.com/ludas_icecream/"
              target="_blank"
            >
              <FaInstagram className="w-[20px] h-[25px]" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
};
export default Footer;
