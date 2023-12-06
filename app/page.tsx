import CookiesSection from "@/components/cookiesSection/CookiesSection";
import Hero from "@/components/hero/Hero";
import Email from "@/components/email/Email";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
async function getData(): Promise<FeaturedProduct[]> {
  const featuredProducts = await fetch(`${process.env.API_URL}/products/`, {
    next: { revalidate: 1000 },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });

  return featuredProducts;
}
export default async function Home() {
  const res = await getData();

  return (
    <>
      <main>
        <Hero />
        {!res ? (
          <LoadingSpinner style="w-8 h-8 " />
        ) : (
          res.map((product, index: number) => {
            if (product.featured === false) return;
            return (
              <CookiesSection
                key={index}
                id={product.id}
                name={product.name}
                title={product.title_img}
                short_description={product.short_description}
                long_description={product.long_description}
                price_before={product.price_before}
                price_after={product.price_after}
                home_pic={product.home_pic}
              />
            );
          })
        )}
        <Email />
      </main>
    </>
  );
}
