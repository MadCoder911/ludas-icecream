import Image from "next/image";
import logo from "../../assets/logo.png";
interface ProductCard {
  product_color: string;
  product_title: string;
  product_description: string;
  price: number;
  picture: string;
  background: string;
}
const ProductCard = ({
  product_color,
  product_title,
  product_description,
  price,
  picture,
  background,
}: ProductCard) => {
  const sectionStyle = {
    backgroundImage: `url("${background}")`,
  };
  return (
    <div
      style={sectionStyle}
      className="w-[240px] h-[420px] bg-cover relative shadow-[0px_7px_10px_0px_#00000024] rounded-[8px] px-[20px] py-[20px] text-white"
    >
      <Image
        src={picture}
        alt="pack"
        className="absolute right-[-110px] cursor-pointer hover:scale-110 transition-all ease-in-out"
        width={324}
        height={348}
      />
      <Image src={logo} alt="logo" className="w-[100px] " />
      <p className="mt-[20px] font-semibold max-w-[60%] text-[16px]">
        {product_title}
      </p>
      <p className="mt-[10px] font-light text-[14px] max-w-[70%]">
        {product_description}
      </p>
      <p className="mt-[25px] font-light text-[18px]">Price</p>
      <p className="font-semibold text-[18px]">{price} EGP</p>
      <div className="w-[100%] flex flex-col items-center mt-[10px]">
        <button
          className={`${product_color} w-[100%] hover:scale-110 transition-all ease-in-out rounded-[5px] text-center  text-white  shadow-[0px_7px_10px_0px_#00000024]`}
        >
          Add to Cart
        </button>
        <button className="w-[100%] hover:scale-110 transition-all ease-in-out rounded-[5px] text-center text-black bg-white mt-[10px] shadow-[0px_7px_10px_0px_#00000024]">
          Buy Now
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
