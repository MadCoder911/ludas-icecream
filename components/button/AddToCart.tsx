"use client";

import { setCart } from "@/utils/setCart";

const AddToCart = ({
  product_color,
  product_id,
  product_name,
  price,
  picture,
}: {
  product_name: string;
  product_color: string;
  product_id: string;
  price: number;
  picture: string;
}) => {
  const buttonStyle = {
    backgroundColor: `${product_color}`,
  };
  console.log(product_color);
  return (
    <button
      onClick={() =>
        setCart(
          {
            name: product_name,
            id: product_id,
            price: price,
            picture: picture,
            quantity: 1,
          },
          ""
        )
      }
      className={` w-[100%]  hover:scale-110 transition-all ease-in-out rounded-[5px] text-center  text-white  shadow-[0px_7px_10px_0px_#00000024 ${product_color}`}
    >
      Add to Cart
    </button>
  );
};
export default AddToCart;
