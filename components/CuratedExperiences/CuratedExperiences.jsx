"use client";

import Image from "next/image";
import React from "react";
import therapyOneImg from "../../assets/therapies/aromatherapy.png";
import deepTissueImg from "../../assets/therapies/deeptissue.png";
import totalImg from "../../assets/therapies/total.png";

const services = [
  {
    id: 1,
    title: "Deep Tissue Massage",
    duration: "60 mins",
    price: "₹1999",
    badge: "MOST POPULAR",
    badgeColor: "bg-orange-200 text-orange-800",
    image: deepTissueImg,
    description:
      "Targeted pressure for chronic muscle tension and profound relaxation."
  },
  {
    id: 2,
    title: "Aromatherapy Glow",
    duration: "75 mins",
    price: "₹2499",
    badge: "REJUVENATING",
    badgeColor: "bg-green-200 text-green-800",
    image: therapyOneImg,
    description:
      "Organic essential oils blended to restore your skin's natural radiance."
  },
  {
    id: 3,
    title: "Total Zen Package",
    duration: "120 mins",
    price: "₹3999",
    badge: "PREMIUM",
    badgeColor: "bg-yellow-200 text-yellow-800",
    image: totalImg,
    description:
      "A full-body journey combining steam, scrub, and hot stone therapy."
  }
];

function CuratedExperiences() {
  return (
    <section className="bg-[#FAF8F6] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-5xl font-montserrat font-bold text-slate-900">
              Curated Experiences
            </h2>

            <p className="mt-4 text-lg font-poppins text-slate-500">
              Select the perfect treatment for your rejuvenation needs.
            </p>
          </div>

          {/* Tabs */}
          {/* <div className="flex w-fit rounded-2xl bg-white p-2 shadow-sm">
            <button className="rounded-xl bg-[#FFF3E0] px-6 py-3 text-sm font-semibold text-[#A35A00]">
              Massage
            </button>

            <button className="px-6 py-3 text-sm font-semibold text-slate-600">
              Body Care
            </button>

            <button className="px-6 py-3 text-sm font-semibold text-slate-600">
              Packages
            </button>
          </div> */}
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden rounded-[32px] border border-[#EADFD3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-[260px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

                {/* Price */}
                {/* <div className="absolute font-poppins right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-[#A35A00] shadow">
                  {service.price}
                </div> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className={`rounded-full font-poppins px-3 py-1 text-xs font-bold ${service.badgeColor}`}
                  >
                    {service.badge}
                  </span>

                  <span className="text-sm font-poppins text-slate-500">
                    {service.duration}
                  </span>
                </div>

                <h3 className="text-3xl font-poppins font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[70px] font-poppins text-slate-500">
                  {service.description}
                </p>

                {/* <button className="mt-8 w-full font-poppins rounded-2xl bg-[#F3F0EE] py-4 font-semibold text-[#A35A00] transition hover:bg-[#EDE7E2]">
                  Learn More
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CuratedExperiences;
