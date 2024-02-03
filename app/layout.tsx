import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import MobileNav from "@/components/mobilenav/MobileNav";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const inter = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Ludas Ice-Cream",
  description: "We offer the best quality, protein rich Ice cream in Egypt",
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
        <ToastContainer
          position="top-center"
          autoClose={1000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
