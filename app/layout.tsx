import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MobileNav from "@/components/mobilenav/MobileNav";

const inter = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Ludas Ice-Cream",
  description: "Ludas protein ice cream",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white">
      <body className={`${inter.className} bg-white relative`}>
        <Navbar />
        <MobileNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
