"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import { useRouter } from "next/navigation";

function HeroSection() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  const router = useRouter();
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-[#F9EED8] px-4 py-2">
              {/* <span className="text-xs font-poppins font-semibold uppercase tracking-wide text-[#B7791F]">
                ✨ Wellness Made Simple
              </span> */}
            </div>

            {/* Heading */}
            <h1 className=" max-w-[95vw] md:max-w-xl font-montserrat text-5xl font-bold leading-tight text-[#0F172A] lg:text-7xl">
              Discover the <span className="text-[#F59E0B]">best spas</span>
              <br />
              near you
            </h1>

            {/* Description */}
            <p className="mt-8 font-poppins max-w-[90vw] md:max-w-md text-lg leading-relaxed text-gray-500">
              Relax. Recharge. Rebook. Your premium gateway to curated self-care
              experiences, all in one place.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col md:flex-row md:flex-wrap gap-4">
              <button
                onClick={(e) => {
                  router.push("https://portal.tooka.app/");
                }}
                className="flex cursor-pointer w-[80vw] md:w-auto font-montserrat items-center gap-2 rounded-2xl bg-[#B86A00] px-8 py-4 font-semibold text-white transition hover:opacity-90"
              >
                Partner With Us
                <ArrowRight size={18} />
              </button>

              {/* <button className="rounded-2xl font-montserrat border border-gray-200 bg-white px-8 py-4 font-semibold text-gray-800 transition hover:bg-gray-50">
                Explore Services
              </button> */}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex justify-center">
            <div className="flex gap-6">
              {/* Left Column */}
              <div className="flex flex-col gap-4 pt-10">
                <div className="relative h-[330px] w-[230px] overflow-hidden rounded-[30px]">
                  <Image
                    src={img2}
                    alt="Spa Stones"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Rating Card */}
                <div className="flex items-center gap-4 rounded-3xl bg-white px-5 py-4 shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                    <Star size={18} className="fill-white text-white" />
                  </div>

                  <div>
                    <p className="font-semibold text-[#B86A00]">4.9/5 Rating</p>
                    <p className="text-sm font-montserrat text-gray-500">
                      Top-rated therapists
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="hidden md:block flex flex-col gap-4">
                <div className="relative h-[240px] w-[260px] overflow-hidden rounded-[30px]">
                  <Image
                    src={img1}
                    alt="Spa Bed"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative h-[240px] w-[260px] overflow-hidden rounded-[30px]">
                  <Image src={img3} alt="Yoga" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-[#F8EBCB] blur-[120px]" />
      </div>
    </section>
  );
}

export default HeroSection;
