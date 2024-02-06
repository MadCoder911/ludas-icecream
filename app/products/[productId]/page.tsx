"use client";
import Image from "next/image";

import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
import { getCart, setCart } from "@/utils/setCart";
import Link from "next/link";
import { toast } from "react-toastify";
interface PageProps {
  params: {
    productId: string;
  };
}

const page = ({ params }: PageProps) => {
  const [data, setData] = useState<FeaturedProduct>();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImg, setActiveImg] = useState<string>("");
  useEffect(() => {
    setLoading(true);
    async function getProduct(id: string): Promise<FeaturedProduct> {
      console.log(`${process.env.API_URL}/products?id=${id}`);
      const product = await fetch(`${process.env.API_URL}/products?id=${id}`, {
        next: { revalidate: 1000 },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          return data;
        });
      setData(product[0]);
      setActiveImg(product[0].product_page_pics[0]);

      return product;
    }
    getProduct(params.productId);
    setLoading(false);
  }, []);

  const sectionStyle = {
    backgroundImage: `url("${data?.background_pic}")`,
  };
  return (
    <div
      className="min-h-[100vh] flex justify-center  relative  lg:items-start bg-cover bg-no-repeat"
      style={sectionStyle}
    >
      {loading || !data ? (
        <div className="w-[100%] h-[100vh] flex items-center justify-center">
          <LoadingSpinner style="w-[50px] h-[50px]" />
        </div>
      ) : (
        <div className="container w-[100%] my-[150px]  flex justify-between   flex-wrap lg:flex-nowrap ">
          <div className="image-selector mr-[50px] flex justify-center items-center w-[100%]">
            <div className="component">
              <Image
                src={activeImg}
                alt={data?.id}
                width={475.32}
                height={513}
                className="lg:min-w-[475.32px] max-w-[330px] lg:min-h-[513px]"
              />
              <div className="flex gap-[15px] mt-[15px]  w-[100%] justify-center lg:justify-start mb-[20px]">
                {data?.product_page_pics.map((pic, i) => {
                  return (
                    <Image
                      onClick={() => setActiveImg(pic)}
                      key={i}
                      src={pic}
                      alt={data?.id}
                      width={475.32}
                      height={513}
                      className="lg:min-w-[110px] max-w-[80px] max-h-[90px] lg:min-h-[119px] cursor-pointer"
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="right-side w-fit">
            <h1 className="font-bold text-white text-[25px] lg:w-[60%] w-[100%] mb-[20px]">
              {data?.name}
            </h1>
            {data?.product_page_description?.map((desc, i: number) => {
              return (
                <p
                  key={i}
                  className="text-white mb-[15px]  lg:w-[70%] w-[100%]"
                >
                  {desc}
                </p>
              );
            })}
            <div className="text-white">
              <h1 className="font-semibold text-[19px] mb-[10px]">
                Nutrition facts
              </h1>
              <p>
                <span className="font-bold">
                  {data.nutrition_facts.protein}g
                </span>{" "}
                <span className="font-semibold">protein</span>
              </p>
              <p>
                <span className="font-bold">{data.nutrition_facts.carb}g</span>{" "}
                <span className="font-semibold">carbs</span>
              </p>
              <p>
                <span className="font-bold">{data.nutrition_facts.fats}g</span>{" "}
                <span className="font-semibold">fat</span>
              </p>
              <p>
                <span className="font-bold">
                  {data.nutrition_facts.calories}
                </span>{" "}
                <span className="font-semibold">calories</span>
              </p>
            </div>
            <p className="text-[20px] text-white mt-[50px]">Price</p>
            <p className="text-white text-[20px] font-semibold mb-[20px]">
              {data?.price_after} EGP
            </p>
            <div className="flex justify-between gap-[10px] lg:w-[50%] w-[100%] mb-[20px]">
              <span className="bg-white px-2 py-2 rounded-[16px] font-medium grow ">
                Quantity
              </span>
              <input
                className="bg-white px-2 py-2 rounded-[16px] font-medium w-[50%] focus:outline-none"
                type="number"
                name={data?.id}
                id={data?.id}
                placeholder="1"
                value={quantity}
                onChange={(e) => {
                  e.preventDefault();
                  setQuantity(Number(e.target.value));
                }}
              />
            </div>
            <div className="flex flex-col gap-[20px] ">
              <button
                onClick={() => {
                  toast.success("Product added to cart");

                  const item = getCart().find(
                    (item: CartObj) => item.name === data?.name
                  );
                  if (!item || item === undefined) {
                    setCart(
                      {
                        name: data.name,
                        id: data.id,
                        price: data.price_after,
                        picture: data.cart_pic,
                        quantity: quantity,
                      },
                      "new"
                    );
                  } else {
                    setCart(
                      {
                        name: data.name,
                        id: data.id,
                        price: data.price_after,
                        picture: data.cart_pic,
                        quantity: quantity,
                      },
                      "inc"
                    );
                  }
                }}
                className={` shadow-[0px_7px_10px_0px_#00000024] ${`bg-${data?.id}`} w-[100%] lg:w-[50%] rounded-[8px] text-white font-medium hover:scale-105 transition-all ease-in-out py-[10px] text-[17px]`}
              >
                Add to Cart
              </button>
              <Link
                href={"/cart"}
                onClick={() =>
                  setCart(
                    {
                      name: data.name,
                      id: data.id,
                      price: data.price_after,
                      picture: data.cart_pic,
                      quantity: quantity,
                    },
                    "new"
                  )
                }
                className={` shadow-[0px_7px_10px_0px_#00000024] flex justify-center bg-white w-[100%] lg:w-[50%] rounded-[8px] text-black font-medium hover:scale-105 transition-all ease-in-out py-[10px] text-[17px]`}
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
