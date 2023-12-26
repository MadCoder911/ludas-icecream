import Image from "next/image";
import logo from "../../assets/logo.png";
import Link from "next/link";
import { setCart } from "@/utils/setCart";
import AddToCart from "../button/AddToCart";
interface ProductCard {
  cart_pic: string;
  product_color: string;
  product_title: string;
  product_description: string;
  product_id: string;
  price: number;
  picture: string;
  background: string;
}
const ProductCard = ({
  cart_pic,
  product_color,
  product_title,
  product_description,
  product_id,
  price,
  picture,
  background,
}: ProductCard) => {
  const sectionStyle = {
    backgroundImage: `url("${background}")`,
    backgroundColor: `${product_color}`,
  };

  return (
    <div
      style={sectionStyle}
      className="w-[240px] h-[420px] bg-cover relative shadow-[0px_7px_10px_0px_#00000024] rounded-[8px] px-[20px] py-[20px] text-white"
    >
      <Image
        src={picture}
        alt="pack"
        className="absolute md:right-[-45px] right-[-40px] cursor-pointer hover:scale-110 transition-all ease-in-out w-[130px] h-[144px] rotate-[-12deg]  "
        width={324}
        height={348}
      />
      <Image src={logo} alt="logo" className="w-[100px] " />
      <p className="mt-[20px] font-semibold max-w-[60%] text-[20px]">
        {product_title}
      </p>
      <p className="mt-[10px] font-light text-[13px] lg:text-[14px] max-w-[60%] lg:max-w-[70%]">
        {product_description}
      </p>
      <p className="mt-[25px] font-light text-[18px]">Price</p>
      <p className="font-semibold text-[18px]">{price} EGP</p>
      <div className="w-[100%] flex flex-col items-center mt-[10px]">
        <AddToCart
          product_color={product_color}
          product_name={product_title}
          product_id={product_id}
          price={price}
          picture={cart_pic}
        />
        <Link
          href={`/products/${product_id}`}
          className="w-[100%] hover:scale-110 transition-all ease-in-out rounded-[5px] text-center text-black bg-white mt-[10px] shadow-[0px_7px_10px_0px_#00000024]"
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
