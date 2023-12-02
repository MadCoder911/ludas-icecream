import Link from "next/link";
import hero from "../../assets/hero.svg";
import Navbar from "../navbar/Navbar";
import "./hero.css";

const Hero = () => {
  return (
    <div className=" h-[100vh] backgroundSetting  max-w-[100vw] relative">
      <div className="absolute  top-[30%] translate-y-[-50%] left-[50%] translate-x-[-50%] flex flex-col justify-center items-center">
        <h1 className="text-white font-bold md:text-[45px] md:w-[600px] w-[300px] text-[30px] text-center ">
          The best place to buy protein ice cream
        </h1>
        <Link
          href={"/products"}
          className="bg-white w-[200px] flex items-center justify-center h-[50px] rounded-[10px] mt-[20px] font-normal shadow-[0px_7px_10px_4px_#00000024] text-[20px] hover:scale-105 transition-all ease-in-out"
        >
          Order Now
        </Link>
      </div>
    </div>
  );
};
export default Hero;
