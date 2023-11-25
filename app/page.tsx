import CookiesSection from "@/components/cookiesSection/CookiesSection";
import Hero from "@/components/hero/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <CookiesSection />
      </main>
    </>
  );
}
