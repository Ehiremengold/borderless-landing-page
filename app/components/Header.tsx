"use client";
import Image from "next/image";
import logo from "@/public/assets/icons/logo.png";
import menuIcon from "@/public/assets/icons/menu.png";
import { useState, useEffect } from "react";
import Hero from "./Hero";

const Header = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menu]);

  return (
    <header className="h-3/4 bg-header-gradient pt-14 pb-20">
      <nav className="bg-white rounded-xl p-4 w-11/12 sm:w-4/5 mx-auto flex items-center justify-between">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <ul className="md:flex hidden gap-8 font-semibold">
          {["Home", "Features", "Pricing", "Help"].map((item, index) => {
            return (
              <li key={index} className={`${index !== 0 ? "text-black" : "text-slate-500" }`}>
                {item}
              </li>
            );
          })}
        </ul>

        <div className="flex gap-5">
          <button className="ring-1 px-3 py-1 rounded-lg ring-slate-600 text-red-900 font-medium">
            Login
          </button>
          <button
            className="rounded-lg px-3 py-1 bg-slate-800 font-medium text-white"
            onClick={() => setMenu(!menu)}
          >
            <Image className="md:hidden" src={menuIcon} alt="" />
            <span className="hidden md:inline">Join Borderless</span>
          </button>
        </div>
      </nav>
      {/* mobile nav */}
      <nav
        className={`z-50 ${
          menu ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"
        } transition-all ease-in-out duration-300 fixed bg-white h-1/2 w-3/4 top-40 right-5 rounded-lg`}
      >
        <ul className="flex flex-col justify-center items-center h-full place-items-center gap-8 font-semibold">
          {["Home", "Features", "Pricing", "Help"].map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  index !== 0 ? "text-black" : "text-slate-500"
                }  text-2xl cursor-pointer`}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* <Hero /> */}
    </header>
  );
};
export default Header;
