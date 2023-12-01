import "./footer.css";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { LiaPhoneSolid } from "react-icons/lia";
import { SlEnvolope, SlArrowRight } from "react-icons/sl";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="bg-Footer flex items-center justify-center">
      <div className="container relative">
        <div className="flex justify-between flex-wrap  lg:flex-nowrap mt-[100px] gap-[20px] lg:gap-[60px] mb-[100px] text-white">
          <div className="flex flex-col basis-[100%] items-center lg:items-start font-thin">
            <h1 className="text-[25px] font-semibold mb-[20px]">Contact</h1>
            <div className="flex items-center ">
              <LiaPhoneSolid className="w-[24px] h-[24px] mr-[8px]" /> +20
              1140808862
            </div>
            <div className="flex items-center mt-[15px] ">
              <SlEnvolope className="w-[24px] h-[24px] mr-[8px]" />
              Ludas@icecream.com
            </div>
          </div>
          <div className="flex flex-col  items-center mt-[20px] lg:mt-[0px] font-thin">
            <Image src={logo} alt="logo" className="w-[150px] mb-[20px]" />
            <p className="">
              Made with the finest ingredients, our ice cream is not only tasty
              but also nutritious. Treat yourself to a guilt-free dessert and
              support local vendors. Add to your cart now!
            </p>
          </div>
          <div className=" flex flex-col basis-[100%] font-thin items-center lg:items-end ">
            <h1 className="text-[25px] font-semibold mb-[20px]">Newsletter</h1>
            <p className="mb-[10px]">
              Be the first to know about our latest flavors !
            </p>
            <div className="relative w-[100%] mb-[10px]">
              <input
                type="text"
                placeholder="Email"
                className="px-2 py-1 w-[100%] rounded-[5px] hover:outline-none focus:outline-none text-black"
              />
              <button>
                <SlArrowRight className="absolute  text-black top-[50%] translate-y-[-50%] right-[10px] w-[20px] h-[20px]" />
              </button>
            </div>
            <p>We don’t spam, we send offers instead !</p>
          </div>
        </div>
        <div className="absolute bottom-[50px] left-[50%] translate-x-[-50%] lg:left-0 lg:translate-x-0 flex text-white">
          <a href="#" className="mr-[10px]">
            <FaTiktok className="w-[20px]  h-[25px]" />
          </a>
          <a href="#">
            <FaInstagram className="w-[20px] h-[25px]" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
