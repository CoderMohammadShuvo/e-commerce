"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../components/Images/logo-ecommerce.png";
import hamburger from "../components/images/ham-burger.png";
import close from "../components/images/close.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const navOptions = [
    { id: 1, title: "NEW ARRIVAL", link: "/new-arrival" },
    { id: 1, title: "Polo Shirt", link: "/polo-shirt" },
    { id: 1, title: "Shirt", link: "/shirt" },
    { id: 1, title: "Winter", link: "/winter" },
    { id: 1, title: "Jeans", link: "/jeans" },
    { id: 1, title: "Panjabi", link: "/panjabi" },
    { id: 1, title: "Combo", link: "/combo" },
  ];

  return (
    <main className="text-white">
      <div>
        <nav className="w-full bg-[#246400] fixed top-0 left-0 right-0 z-10">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            {/* LOGO----- */}
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href={"/"}>
                  <Image width={50} src={Logo} alt="logo" />
                </Link>
                {/* HAMBURGER----BUTTON ---FOR ----MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus: border-gray-400"
                    onClick={() => setNavbar(!navbar)}
                  ></button>
                  {navbar ? (
                    <Image
                      width={40}
                      alt="ham-burger"
                      src={close}
                      className="  border-2 rounded-xl"
                    />
                  ) : (
                    <Image
                      width={20}
                      alt="ham-burger"
                      src={hamburger}
                      className="focus:border-none active:border-none"
                    />
                  )}
                </div>
              </div>
            </div>
            {/* MENU---OPTIONS---- */}
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              } `}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                {navOptions.map((item) => (
                  <li
                    key={item.id}
                    className="text-sm text-white py-6 md:mx-6 text-center border-b-2 md:border-b-0 hover:text-yellow-300 "
                  >
                    <Link href={item.link} onClick={() => setNavbar(!navbar)}>
                      {" "}
                      {item.title}{" "}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* BUTTONS----- */}
            <div className="flex gap-6 pb-4 md:pb-0">
              <Select>
                <SelectTrigger className="w-[180px] border-gray-600">
                  <SelectValue placeholder="Bangla" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Bangla">Bangla</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                </SelectContent>
              </Select>
              <button className="relative px-4 py-2 rounded-lg text-white bg-transparent overflow-hidden before:absolute before:inset-0 before:rounded-lg before:border before:border-transparent before:[border-image-source:radial-gradient(56.59%_603.28%_at_50%_50%,_#FFFF00_0%,_#FFFF00_31.17%,_rgba(255,_255,_0,_0)_100%)] before:[border-image-slice:1] before:backdrop-blur-sm">
                <span className="relative z-10">Sign in</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}