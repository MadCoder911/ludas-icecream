import ProductCard from "@/components/product-card/ProductCard";
import "./products.css";

const page = () => {
  return (
    <main className="bg-Products min-h-[100vh] flex justify-center ">
      <div className="container w-[100%] mt-[150px]">
        <h1 className="text-white font-semibold mb-[50px] text-[30px] flex justify-center md:justify-start">
          Products
        </h1>
        <div className="flex gap-[120px] flex-wrap justify-center md:justify-start mb-[100px]">
          <ProductCard
            product_color="bg-cookie"
            product_title={"Chocolate Brownies"}
            product_description={
              "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. "
            }
            price={200}
            picture={"https://i.imgur.com/mxK6jUD.png"}
            background={"https://i.imgur.com/3cNh8JS.png"}
          />
          <ProductCard
            product_color="bg-brownie"
            product_title={"Chocolate Brownies"}
            product_description={
              "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. "
            }
            price={210}
            picture={"https://i.imgur.com/WxM1REy.png"}
            background={"https://i.imgur.com/wE7WgdX.png"}
          />
          <ProductCard
            product_color="bg-biscuit"
            product_title={"Buttery Biscuit"}
            product_description={
              "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. "
            }
            price={210}
            picture={"https://i.imgur.com/XZExl5Q.png"}
            background={"https://i.imgur.com/4XoASap.png"}
          />
          <ProductCard
            product_color="bg-vanilla"
            product_title={"Vanilla"}
            product_description={
              "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. "
            }
            price={210}
            picture={"https://i.imgur.com/jCGWIH1.png"}
            background={"https://i.imgur.com/WrhWvXE.png"}
          />
        </div>
      </div>
    </main>
  );
};
export default page;
