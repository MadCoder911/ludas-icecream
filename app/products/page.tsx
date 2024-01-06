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
              cart_pic,
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
                cart_pic={cart_pic}
                product_color={id}
                product_title={name}
                product_description={products_page_description}
                product_id={id}
                price={price_after}
                picture={home_pic}
                background={background_pic}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
export default page;
