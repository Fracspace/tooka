"use client"

import Image from "next/image";
import { CircleCheck } from "lucide-react";
import tookaPartnerImg from "../../assets/partnerbannerImg.png";
import { useRouter } from "next/navigation";

const features = [
  "0% Listing Fees",
  "Smart Analytics",
  "24/7 Support",
  "CRM Included"
];

export default function PartnerWithUs() {
   const router = useRouter();
  return (
    <section className="px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#33302f] px-6 py-10 shadow-xl md:px-10 lg:px-14 lg:py-14">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[2px] text-[#ff9800]">
              For Business Owners
            </p>

            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Grow Your Spa Business
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-300">
              Streamline your operations, reach thousands of new customers, and
              manage bookings with ease. Join the Tooka Partner Network today.
            </p>

            {/* Features */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CircleCheck
                    size={18}
                    className="text-[#ff9800]"
                    strokeWidth={2.5}
                  />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button onClick={()=>router.push('https://portal.tooka.app/')} className="mt-10 cursor-pointer rounded-xl bg-[#f59e0b] px-8 py-4 font-semibold text-[#2b2b2b] transition hover:bg-[#e68a00]">
              Partner With Us
            </button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-full max-w-[380px] overflow-hidden rounded-[28px] shadow-2xl md:h-[420px] md:max-w-[420px]">
              <Image
                src={tookaPartnerImg}
                alt="Spa Partner"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
