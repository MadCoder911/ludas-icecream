import Image from "next/image";
import cookiesBg from "../../assets/cookiesSectionBg.png";
import cookieTitle from "../../assets/cookiesTitle.png";
import logo from "../../assets/logo.png";
import cookiePack from "../../assets/cookiePack.png";
import "./cookies.css";
import Seperator from "../seperator/Seperator";
import { FunctionComponent } from "react";
const CookiesSection: FunctionComponent<Section> = () => {
  return (
    <div className=" h-[1080px] max-w-[100vw] flex justify-center bg-pic relative overflow-visible">
      <Image
        src={cookieTitle}
        alt="cookie Title"
        className=" absolute top-[110px] w-[480px] left-[50%] translate-x-[-50%]"
      />
      <div className=" flex container pt-[270px]  justify-between text-white">
        <div className="w-[34%]">
          <Image src={logo} width={150} height={86} alt="logo" />
          <h1 className="my-[10px] font-[600] text-[25px]">Cookies & Cream</h1>
          <h2 className="my-[10px] font-[600] text-[17px]">
            Indulge in the deliciousness of our protein-packed ice cream.
          </h2>
          <p className="mt-[20px]">
            Made with the finest ingredients, our ice cream is not only tasty
            but also nutritious. Treat yourself to a guilt-free dessert and
            support local vendors. Add to your cart now!
          </p>
        </div>
        <div>
          <Image src={cookiePack} alt="Cookie pack" className="max-w-[400px]" />
          <p className="my-[10px] font-[600] text-[17px] mt-[30px]">
            Luda’s Cookies & Cream - Protein Ice Cream
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
