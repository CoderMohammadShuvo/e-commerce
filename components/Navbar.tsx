"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../components/Images/logo-ecommerce.png";
import hamburger from "../components/Images/ham-burger.png";
import close from "../components/Images/close.png";
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
    { id: 2, title: "Polo Shirt", link: "/polo-shirt" },
    { id: 3, title: "Shirt", link: "/shirt" },
    { id: 4, title: "Winter", link: "/winter" },
    { id: 5, title: "Jeans", link: "/jeans" },
    { id: 6, title: "Panjabi", link: "/panjabi" },
    { id: 7, title: "Combo", link: "/combo" },
  ];

  return (
    <nav className="w-full bg-[#246400] fixed top-0 left-0 right-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-3 md:py-5 md:px-8 mx-auto lg:max-w-7xl">
        {/* LOGO */}
        <Link href="/">
          <Image width={50} height={50} src={Logo} alt="logo" priority />
        </Link>

        {/* HAMBURGER MENU */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setNavbar(!navbar)}
          aria-label="Toggle navigation"
        >
          <Image width={30} height={30} src={navbar ? close : hamburger} alt="menu-icon" />
        </button>

        {/* NAVIGATION MENU */}
        <div
          className={`absolute top-16 left-0 w-full bg-[#246400] transition-all duration-300 ease-in-out md:static md:w-auto md:flex md:items-center md:space-x-6 
            ${navbar ? "block" : "hidden md:flex"}`}
        >
          <ul className="flex flex-col items-center space-y-4 py-6 md:flex-row md:space-y-0 md:space-x-6 md:py-0">
            {navOptions.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  className="text-white text-sm hover:text-yellow-300"
                  onClick={() => setNavbar(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* LANGUAGE & SIGN IN BUTTON */}
        <div className="hidden md:flex items-center gap-6">
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
  );
}
