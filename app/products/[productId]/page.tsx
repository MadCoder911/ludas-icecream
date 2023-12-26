"use client";
import Image from "next/image";
import {
  Item,
  cookies,
  brownies,
  vanilla,
  biscuit,
} from "../../../api-mock-data/products";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
import { setCart } from "@/utils/setCart";
interface PageProps {
  params: {
    productId: string;
  };
}

const page = ({ params }: PageProps) => {
  const [data, setData] = useState<FeaturedProduct>();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    setLoading(true);
    async function getProduct(id: string): Promise<FeaturedProduct> {
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
      className="min-h-[100vh] flex justify-center relative  lg:items-start bg-cover bg-no-repeat"
      style={sectionStyle}
    >
      {loading || !data ? (
        <LoadingSpinner style="w-[50px] h-[50px] absolute top-[50%] " />
      ) : (
        <div className="container w-[100%] my-[150px]  flex justify-between   flex-wrap lg:flex-nowrap ">
          <div className="image-selector mr-[50px] flex justify-center items-center w-[100%]">
            <div className="component">
              <Image
                src={data?.cart_pic}
                alt={data?.id}
                width={475.32}
                height={513}
                className="lg:min-w-[475.32px] max-w-[330px] lg:min-h-[513px]"
              />
              <div className="flex gap-[15px] mt-[15px]  w-[100%] justify-center lg:justify-start mb-[20px]">
                {data?.product_page_pics.map((pic, i) => {
                  return (
                    <Image
                      key={i}
                      src={pic}
                      alt={data?.id}
                      width={475.32}
                      height={513}
                      className="lg:min-w-[110px] max-w-[80px] max-h-[90px] lg:min-h-[119px]"
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
                className={` shadow-[0px_7px_10px_0px_#00000024] ${`bg-${data?.id}`} w-[100%] lg:w-[50%] rounded-[8px] text-white font-medium hover:scale-105 transition-all ease-in-out py-[10px] text-[17px]`}
              >
                Add to Cart
              </button>
              <button
                className={` shadow-[0px_7px_10px_0px_#00000024] bg-white w-[100%] lg:w-[50%] rounded-[8px] text-black font-medium hover:scale-105 transition-all ease-in-out py-[10px] text-[17px]`}
              >
                Buy now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
