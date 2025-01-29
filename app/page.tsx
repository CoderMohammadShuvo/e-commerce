import Banner from "@/components/Home/Banner";
import NewArrival from "@/components/Home/NewArrival";
import ProductSet1 from "@/components/Home/ProductSet1";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Navbar />
        <Banner />
        <ProductSet1 />
        <NewArrival />
      </main>
      <footer className="w-full bg-[#246400] text-white p-8">
          <div className="w-1/3 mx-auto text-center flex flex-col justify-center gap-4">
            <p className="text-2xl font-medium ">Subscribe to our Newslater</p>
            <div className="cursor-pointer p-2 border-2 border-white flex justify-between items-center">
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
              <p>terms of Service</p>
            </div>
            <div>
              <h1 className="text-xl font-bold">Our Policies</h1>
              <p>Privacy policy</p>
              <p>Refund policy</p>
              <p>terms of Service</p>
            </div>
          </div>
      </footer>
    </div>
  );
}
