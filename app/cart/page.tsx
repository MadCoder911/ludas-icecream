import "./cart.css";
import image from "../../assets/brownies/browniesPack.png";
import Image from "next/image";
const page = () => {
  return (
    <main className="bg-cart min-h-[100vh] flex justify-center ">
      <div className="container ">
        <h1 className="text-white  font-semibold relative w-[100%] mb-[50px] my-[120px] text-[30px] flex justify-center md:justify-start">
          Your Cart
        </h1>
        <div className="flex relative justify-between text-white">
          <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px] ">
            Item
          </p>
          <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px]">
            Price
          </p>
          <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px]">
            Quantity
          </p>
          <p className="w-[25%] flex justify-center text-[12px] sm:text-[16px]">
            Subtotal
          </p>
          <span className="absolute w-[100%]  border-b-[2px] border-[#00000013] bottom-[-20px]"></span>
        </div>
        <div className="flex pt-[50px] flex-col   gap-[70px] flex-wrap justify-center md:justify-start mb-[80px] ">
          <div className=" flex justify-between h-[50px] ">
            <div className="div text-white flex items-center justify-center  w-[25%] font-medium">
              <Image
                src={image}
                alt="pack"
                className="max-w-[80px] mr-[10px] hidden md:block"
              />
              <p className="text-[12px] sm:text-[16px]">
                Luda’s Cookies & Cream
              </p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%]">
              <p className="text-[12px] sm:text-[16px]">190 EGP</p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%] font-bold">
              <p className="text-[13px] sm:text-[16px]">1</p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%]">
              <p className="text-[12px] sm:text-[16px]">100 EGP</p>
            </div>
          </div>
          <div className=" flex justify-between h-[50px] ">
            <div className="div text-white flex items-center justify-center  w-[25%] font-medium">
              <Image
                src={image}
                alt="pack"
                className="max-w-[80px] mr-[10px] hidden md:block"
              />
              <p className="text-[12px] sm:text-[16px]">
                Luda’s Cookies & Cream
              </p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%]">
              <p className="text-[12px] sm:text-[16px]">190 EGP</p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%] font-bold">
              <p className="text-[13px] sm:text-[16px]">1</p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%]">
              <p className="text-[12px] sm:text-[16px]">100 EGP</p>
            </div>
          </div>
          <div className=" flex justify-between h-[50px] ">
            <div className="div text-white flex items-center justify-center  w-[25%] font-medium">
              <Image
                src={image}
                alt="pack"
                className="max-w-[80px] mr-[10px] hidden md:block"
              />
              <p className="text-[12px] sm:text-[16px]">
                Luda’s Cookies & Cream
              </p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%]">
              <p className="text-[12px] sm:text-[16px]">190 EGP</p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%] font-bold">
              <p className="text-[13px] sm:text-[16px]">1</p>
            </div>
            <div className="div text-white flex items-start justify-center text-start  w-[25%]">
              <p className="text-[12px] sm:text-[16px]">100 EGP</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
