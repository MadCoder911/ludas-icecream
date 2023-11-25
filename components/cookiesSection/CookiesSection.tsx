import Image from "next/image";
import cookiesBg from "../../assets/cookiesSectionBg.png";
import cookieTitle from "../../assets/cookiesTitle.png";
import logo from "../../assets/logo.png";
import "./cookies.css";
const CookiesSection = () => {
  return (
    <div className=" h-[100vh] w-[100vw] bg-pic relative">
      <Image
        src={cookieTitle}
        alt="cookie Title"
        className=" absolute top-[50px] left-[50%] translate-x-[-50%]"
      />
      <div className=" flex  pt-[200px]">
        <div>
          <Image src={logo} width={150} height={86} alt="logo" />
          <h1>Cookies & Cream</h1>
        </div>
        <div>
          <p>Test</p>
        </div>
      </div>
    </div>
  );
};
export default CookiesSection;
