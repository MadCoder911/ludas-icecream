import Image from "next/image";

import cookieTitle from "../../assets/cookies/cookiesTitle.png";

import logo from "../../assets/logo.png";
import cookiePack from "../../assets/cookies/cookiePack.png";
import browniesPack from "../../assets/brownies/browniesPack.png";
import vanillaPack from "../../assets/vanilla/vanillapack.png";
import biscuitPack from "../../assets/lotus/lotusPack.png";
import "./cookies.css";
import Seperator from "../seperator/Seperator";
import { FunctionComponent } from "react";
interface Section {
  id: string;
  name: string;
  title: any;
  short_description: string;
  long_description: string;
  price_before: number;
  price_after: number;
}

const CookiesSection = ({
  id,
  name,
  title,
  short_description,
  long_description,
  price_before,
  price_after,
}: Section) => {
  return (
    <div
      className={`h-[1080px] max-w-[100vw] flex justify-center bg-Cookie relative overflow-visible ${
        id === "cookies" && "bg-cookie"
      } ${id === "brownies" && "bg-Brownies"} ${
        id === "biscuit" && "bg-Biscuit"
      } ${id === "vanilla" && "bg-Vanilla"}`}
    >
      {title}
      <div className=" md:flex container md:pt-[270px] pt-[220px] block md:justify-between text-white">
        <div className="md:w-[34%] w-[100%] ">
          <Image src={logo} width={150} height={86} alt="logo" />
          <h1 className="my-[10px] font-[600] text-[25px]">{name}</h1>
          <h2 className="my-[10px] font-[600] text-[17px]">
            {short_description}
          </h2>
          <p className="mt-[20px]">{long_description}</p>
        </div>
        <div className="flex flex-col justify-center items-center mt-[30px] md:block md:mt-0">
          {id === "brownies" && (
            <Image
              src={browniesPack}
              alt="Cookie pack"
              className="max-w-[300px]  md:max-w-[400px]"
            />
          )}
          {id === "vanilla" && (
            <Image
              src={vanillaPack}
              alt="Cookie pack"
              className="max-w-[300px]  md:max-w-[400px]"
            />
          )}
          {id === "biscuit" && (
            <Image
              src={biscuitPack}
              alt="Cookie pack"
              className="max-w-[300px]  md:max-w-[400px]"
            />
          )}
          {id === "cookies" && (
            <Image
              src={cookiePack}
              alt="Cookie pack"
              className="max-w-[300px]  md:max-w-[400px]"
            />
          )}
          <p className="my-[10px] font-[600] text-[17px] mt-[30px]">
            Luda’s {name} - Protein Ice Cream
          </p>
          <div className="flex font-[600] text-[17px]">
            <p>200 EGP</p>
            <p className="decoration-dashed ml-[10px]">250 EGP</p>
          </div>
          <button className="w-[100%] hover:scale-105 transition-all ease-in-out bg-white py-[5px] mt-[20px] text-black rounded-[5px] shadow-[0px_7px_10px_0px_#00000024]">
            Order Now
          </button>
        </div>
      </div>
      <Seperator />
    </div>
  );
};
export default CookiesSection;
