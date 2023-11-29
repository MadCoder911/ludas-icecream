import CookiesSection from "@/components/cookiesSection/CookiesSection";
import Hero from "@/components/hero/Hero";
import Image from "next/image";
import browniesTitle from "../assets/brownies/browniesTitle.png";
import cookiesTitle from "../assets/cookies/cookiesTitle.png";
import biscuitTitle from "../assets/lotus/lotusTitle.png";
import vanillaTitle from "../assets/vanilla/vanillaTitle.png";
import Email from "@/components/email/Email";
export default function Home() {
  return (
    <>
      <main>
        <Hero />

        <CookiesSection
          id="cookies"
          name={"Cookies& Cream"}
          title={
            <Image
              src={cookiesTitle}
              alt="cookies&cream"
              className=" absolute top-[50px] md:top-[110px]  w-[330px] md:w-[480px] left-[50%] translate-x-[-50%]"
            />
          }
          short_description={
            "Indulge in the deliciousness of our protein-packed ice cream"
          }
          long_description={
            "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. Treat yourself to a guilt-free dessert and support local vendors. Add to your cart now!"
          }
          price_before={250}
          price_after={200}
        />
        <CookiesSection
          id="brownies"
          name={"Chocolate Brownies"}
          title={
            <Image
              src={browniesTitle}
              alt="brownies"
              className=" absolute top-[50px] md:top-[110px]  w-[330px] md:w-[480px] left-[50%] translate-x-[-50%]"
            />
          }
          short_description={
            "Indulge in the deliciousness of our protein-packed ice cream"
          }
          long_description={
            "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. Treat yourself to a guilt-free dessert and support local vendors. Add to your cart now!"
          }
          price_before={250}
          price_after={200}
        />
        <CookiesSection
          id="biscuit"
          name={"Buttery Biscuit"}
          title={
            <Image
              src={biscuitTitle}
              alt="cookies&cream"
              className=" absolute top-[50px] md:top-[110px]  w-[330px] md:w-[480px] left-[50%] translate-x-[-50%]"
            />
          }
          short_description={
            "Indulge in the deliciousness of our protein-packed ice cream."
          }
          long_description={
            "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. Treat yourself to a guilt-free dessert and support local vendors. Add to your cart now!"
          }
          price_before={250}
          price_after={200}
        />
        <CookiesSection
          id="vanilla"
          name={"Vanilla"}
          title={
            <Image
              src={vanillaTitle}
              alt="cookies&cream"
              className=" absolute top-[50px] md:top-[110px]  w-[330px] md:w-[480px] left-[50%] translate-x-[-50%]"
            />
          }
          short_description={
            "Indulge in the deliciousness of our protein-packed ice cream."
          }
          long_description={
            "Made with the finest ingredients, our ice cream is not only tasty but also nutritious. Treat yourself to a guilt-free dessert and support local vendors. Add to your cart now!"
          }
          price_before={250}
          price_after={200}
        />
        <Email />
      </main>
    </>
  );
}
