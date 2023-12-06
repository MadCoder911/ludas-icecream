import ProductCard from "@/components/product-card/ProductCard";
import "./products.css";
async function getAllProducts(): Promise<FeaturedProduct[]> {
  const products = await fetch(`${process.env.API_URL}/products/`, {
    next: { revalidate: 1000 },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  return products;
}
const page = async () => {
  const res = await getAllProducts();
  return (
    <main className="bg-Products min-h-[100vh] flex justify-center ">
      <div className="container ">
        <h1 className="text-white font-semibold mb-[50px] my-[120px] text-[30px] flex justify-center md:justify-start">
          Products
        </h1>
        <div className="flex gap-[120px] flex-wrap justify-center md:justify-start mb-[80px] ">
          {res.map((item, i: number) => {
            const {
              name,
              products_page_description,
              id,
              price_after,
              home_pic,
              background_pic,
            } = item;

            return (
              <ProductCard
                key={i}
                product_color={`bg-${id}`}
                product_title={name}
                product_description={products_page_description}
                product_id={id}
                price={price_after}
                picture={home_pic}
                background={background_pic}
              />
            );
          })}
          {/* <ProductCard
            product_color="bg-brownie"
            product_title={"Chocolate Brownies"}
            product_description={
              "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. "
            }
            product_id="brownies"
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
            product_id="biscuit"
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
            product_id="vanilla"
            price={210}
            picture={"https://i.imgur.com/jCGWIH1.png"}
            background={"https://i.imgur.com/WrhWvXE.png"}
          /> */}
        </div>
      </div>
    </main>
  );
};
export default page;
