import Banner from "@/components/Home/Banner";
import NewArrival from "@/components/Home/NewArrival";
import ProductSet1 from "@/components/Home/ProductSet1";
import Navbar from "@/components/Navbar";
import Image from "next/image";


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
            </div>
          </div>
      </footer>
    </div>
  );
}
