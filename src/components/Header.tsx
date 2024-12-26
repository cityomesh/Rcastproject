"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      <header
        className={`fixed top-0 left-0 w-full z-10 shadow-md transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-white py-3" : "bg-white py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-left text-black font-bold">
            <Image
              src="/Rcast.png"
              alt="logo"
              width={isScrolled ? 150 : 200}
              height={isScrolled ? 60 : 80}
              className="rounded-lg transition-all duration-500 ease-in-out"
            />
          </div>

          <div className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-3xl cursor-pointer" />
            ) : (
              <FaBars className="text-3xl cursor-pointer" />
            )}
          </div>

          <ul
            className={`absolute text-[18px] md:static top-16 left-0 w-full bg-white md:w-auto md:flex md:items-center md:space-x-6 text-blue-900 font-semibold transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/technology">Technology</Link>
            </li>
            <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/iptvs">IPTV vs OTT</Link>
            </li>
            <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/iptvcable">IPTV vs Cable TV</Link>
            </li>
            <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/smartconnect">Smart Connect</Link>
            </li>
            <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/smarttv">Smart Apps</Link>
            </li>
            <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/about">About</Link>
            </li>
            {/* <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/partners">Partners</Link>
            </li> */}
            <li className="cursor-pointer hover:text-[#F7961E] py-2 px-4 md:py-0 md:px-0">
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Home;
