import Banner from "@/components/Home/Banner";
import NewArrival from "@/components/Home/NewArrival";
import ProductSet1 from "@/components/Home/ProductSet1";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { GrYoutube } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";
export default function Home() {
  return (
    <div className="min-h-screen ">
      <main className="">
        <Navbar />
        <Banner />
        <ProductSet1 />
        <NewArrival />
        <footer className="w-full bg-[#246400] text-white p-12 grid grid-cols-1 gap-10">
          <div className="w-1/4 mx-auto text-center flex flex-col justify-center gap-4">
            <p className="text-2xl font-medium ">Subscribe to our Newslater</p>
            <div className="cursor-pointer p-2 border border-white flex justify-between items-center">
              <p>Email</p>
              <FaArrowRight />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-12 w-5/6 mx-auto">
            <div>
              <h1 className="text-xl font-bold">Our Policies</h1>
              <p>Privacy policy</p>
              <p>Refund policy</p>
              <p>terms of Service</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">About us</h1>
              <p>Our mission</p>
              <p>Our vision</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">Our Slogan</h1>
              <p>Fashion That Defines You and boost confidence</p>
            </div>
          </div>
          {/* SOCIAL---- */}
          <div className="w-1/3 mx-auto text-center flex gap-4 justify-center">
             <BsFacebook />
             <GrYoutube />
          </div>
          {/* LANGUAGE---- */}
          <div className="w-5/6 mx-auto">
            <p>Language</p>
            <div className="cursor-pointer p-2 border border-white flex justify-between items-center w-[180px] my-2">
              <p>English</p>
              <IoIosArrowDown />
            </div>
            <p>© 2025, Captain Fashion Bd Powered by Shopify</p>
          </div>
      </footer>
      </main>
      
    </div>
  );
}
