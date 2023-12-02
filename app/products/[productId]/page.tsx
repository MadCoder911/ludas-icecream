import Image from "next/image";
import {
  Item,
  cookies,
  brownies,
  vanilla,
  biscuit,
} from "../../../api-mock-data/products";
interface PageProps {
  params: {
    productId: string;
  };
}

const page = ({ params }: PageProps) => {
  const product = params.productId;
  let data: Item = {};
  if (product === "cookies") {
    data = cookies;
  } else if (product === "brownies") {
    data = brownies;
  } else if (product === "vanilla") {
    data = vanilla;
  } else if (product === "biscuit") {
    data = biscuit;
  }
  const sectionStyle = {
    backgroundImage: `url("${data?.background}")`,
  };
  return (
    <div
      className="min-h-[100vh] flex justify-center  lg:items-start bg-cover bg-no-repeat"
      style={sectionStyle}
    >
      <div className="container w-[100%] my-[150px]  flex justify-between   flex-wrap lg:flex-nowrap ">
        <div className="image-selector mr-[50px] flex justify-center items-center w-[100%]">
          <div className="component">
            <Image
              src={data?.picture || "x"}
              alt={data?.product_title || "x"}
              width={475.32}
              height={513}
              className="lg:min-w-[475.32px] max-w-[330px] lg:min-h-[513px]"
            />
            <div className="flex gap-[15px] mt-[15px]  w-[100%] justify-center lg:justify-start mb-[20px]">
              <Image
                src={data?.picture || "x"}
                alt={data?.product_title || "x"}
                width={475.32}
                height={513}
                className="lg:min-w-[110px] max-w-[80px] max-h-[90px] lg:min-h-[119px]"
              />
              <Image
                src={data?.picture || "x"}
                alt={data?.product_title || "x"}
                width={475.32}
                height={513}
                className="lg:min-w-[110px] max-w-[80px] max-h-[90px] lg:min-h-[119px]"
              />
              <Image
                src={data?.picture || "x"}
                alt={data?.product_title || "x"}
                width={475.32}
                height={513}
                className="lg:min-w-[110px] max-w-[80px] max-h-[90px] lg:min-h-[119px]"
              />
            </div>
          </div>
        </div>
        <div className="right-side w-fit">
          <h1 className="font-bold text-white text-[25px] lg:w-[60%] w-[100%] mb-[20px]">
            {data.product_title}
          </h1>
          {data.product_description?.map((desc, i: number) => {
            return (
              <p key={i} className="text-white mb-[15px]  lg:w-[70%] w-[100%]">
                {desc}
              </p>
            );
          })}
          <p className="text-[20px] text-white mt-[50px]">Price</p>
          <p className="text-white text-[20px] font-semibold mb-[20px]">
            {data.price} EGP
          </p>
          <div className="flex justify-between gap-[10px] lg:w-[50%] w-[100%] mb-[20px]">
            <span className="bg-white px-2 py-2 rounded-[16px] font-medium grow ">
              Quantity
            </span>
            <input
              className="bg-white px-2 py-2 rounded-[16px] font-medium w-[50%] focus:outline-none"
              type="number"
              name={data.product_id}
              id={data.product_id}
              placeholder="1"
            />
          </div>
          <div className="flex flex-col gap-[20px] ">
            <button
              className={` shadow-[0px_7px_10px_0px_#00000024] ${data.product_color} w-[100%] lg:w-[50%] rounded-[8px] text-white font-medium hover:scale-105 transition-all ease-in-out py-[10px] text-[17px]`}
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
    </div>
  );
};
export default page;
