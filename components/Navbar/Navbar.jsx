"use client";

import React, { useState } from "react";

import Link from "next/link";
import Logo from "../../assets/logo.png";
import Image from "next/image";

function Navbar() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };
  const [selected, setSelected] = useState();
  return (
    <div className="w-full px-4 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-gray-200 bg-[#F8F5F3] px-8 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="logo"
            className="w-[40vw] h-[8vh] md:w-[14vw] md:h-[10vh]"
          />
          {/* <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#F59E0B]">
            <span className="text-lg font-bold text-white">✦</span>
          </div> */}

          {/* <span className="text-4xl font-bold text-[#8B5A00]">Tooka</span> */}
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="#discover"
            onClick={(e) => {
              e.preventDefault();
              setSelected("discover");
              scrollToSection("discover");
            }}
            className="relative font-montserrat text-sm  text-gray-500 hover:text-gray-800"
          >
            Discover
            {/* {selected == "discover" && (
              <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#C97A00]" />
            )} */}
          </Link>

          <Link
            href="#whyus"
            onClick={(e) => {
              e.preventDefault();
              setSelected("whyus");
              scrollToSection("whyus");
            }}
            className="text-sm font-montserrat  text-gray-500 transition hover:text-gray-800"
          >
            Why Us
            {/* {selected == "whyus" && (
              <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#C97A00]" />
            )} */}
          </Link>

          <Link
            href="#aboutus"
            onClick={(e) => {
              e.preventDefault();
              setSelected("aboutus");
              scrollToSection("aboutus");
            }}
            className="text-sm font-montserrat  text-gray-500 transition hover:text-gray-800"
          >
            About Us
            {/* {selected == "aboutus" && (
              <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#C97A00]" />
            )} */}
          </Link>

          {/* <Link
            href="/partners"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-800"
          >
            Partners
          </Link> */}
        </nav>

        {/* CTA */}
        <button
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className="cursor-pointer font-montserrat rounded-full bg-[#F59E0B] px-4 py-2 ml-4 md:px-6 md:py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Partner with us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
