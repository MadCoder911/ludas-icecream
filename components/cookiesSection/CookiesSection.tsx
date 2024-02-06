import Image from "next/image";
import logo from "../../assets/logo.png";
import "./cookies.css";
import Seperator from "../seperator/Seperator";
import Link from "next/link";
interface Section {
  id: string;
  name: string;
  title: any;
  short_description: string;
  long_description: string;
  price_before: number;
  price_after: number;
  home_pic: string;
}

const CookiesSection = ({
  id,
  name,
  title,
  short_description,
  long_description,
  price_before,
  price_after,
  home_pic,
}: Section) => {
  return (
    <div
      className={`h-[1080px] max-w-[100vw] flex justify-center bg-Cookie relative overflow-visible ${
        id === "cookies" && "bg-cookie"
      } ${id === "brownies" && "bg-Brownies"} ${
        id === "biscuit" && "bg-Biscuit"
      } ${id === "vanilla" && "bg-Vanilla"} ${id === "strawberry" && "bg-Strawberry"}`}
    >
      <Image
        src={title}
        alt={id}
        width={330}
        height={200}
        className=" absolute top-[50px] md:top-[110px]  w-[330px] md:w-[480px] left-[50%] translate-x-[-50%]"
      />
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
          <Image
            src={home_pic}
            alt="Cookie pack"
            width={400}
            height={400}
            className="max-w-[300px]  md:max-w-[400px]"
          />
          <p className="my-[10px] font-[600] text-[17px] mt-[30px]">
            Luda’s {name} - Protein Ice Cream
          </p>
          <div className="flex font-[600] text-[17px]">
            <p>{price_after} EGP</p>
            <p className="decoration-dashed ml-[10px]">{price_before} EGP</p>
          </div>
          <Link
            href={`/products/${id}`}
            className="shadow-[0px_7px_10px_0px_#00000024] w-[100%] flex items-center justify-center bg-white text-black rounded-[5px] mt-[10px] py-1 hover:scale-105 transition-all  ease-in-out"
          >
            Order Now
          </Link>
        </div>
      </div>
      <Seperator />
    </div>
  );
};
export default CookiesSection;
