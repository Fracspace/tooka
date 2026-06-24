import React from "react";
import { ShieldCheck, Wallet, CalendarDays } from "lucide-react";
import img4 from "../../assets/img4.png";
import Image from "next/image";

function TookaDifference() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl font-montserrat font-bold text-slate-900">
            The Tooka Difference
          </h2>

          <p className="mt-4 font-poppins text-lg text-slate-500">
            We combine high-end technology with the art of relaxation to bring
            you the finest wellness network.
          </p>
        </div>

        {/* Top Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7B267]">
              <ShieldCheck size={24} className="text-[#7A4700]" />
            </div>

            <h3 className="mb-4 font-montserrat text-2xl font-bold text-slate-900">
              Verified Partners
            </h3>

            <p className="leading-relaxed font-poppins text-slate-500">
              Every spa on our platform undergoes a rigorous quality
              verification process to ensure exceptional experiences.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFD43B]">
              <Wallet size={24} className="text-[#8A6A00]" />
            </div>

            <h3 className="mb-4 font-montserrat text-2xl font-bold text-slate-900">
              Transparent Pricing
            </h3>

            <p className="leading-relaxed font-poppins text-slate-500">
              No hidden charges. Compare prices, services, and offers before
              making a booking.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4ADE80]">
              <CalendarDays size={24} className="text-[#166534]" />
            </div>

            <h3 className="mb-4 font-montserrat text-2xl font-bold text-slate-900">
              Instant Booking
            </h3>

            <p className="leading-relaxed font-poppins text-slate-500">
              Real-time availability and quick confirmations. Book your wellness
              session in seconds.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Variety Card */}
          <div className="overflow-hidden rounded-[32px] shadow-sm">
            <div className="grid h-full md:grid-cols-2">
              {/* Content */}
              <div className="bg-[#A45A00] p-10 text-white">
                <h3 className="mb-5 text-4xl font-montserrat font-bold">
                  Unmatched Variety
                </h3>

                <p className="max-w-sm font-poppins text-white/90">
                  From traditional Ayurvedic therapies to luxury wellness
                  experiences, discover hundreds of curated spa treatments
                  across the city.
                </p>
              </div>
              {/* Image */}
              <div className="relative min-h-[260px]">
                <Image
                  src={img4}
                  alt="Wellness"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Users Card */}
          <div className="rounded-[32px] bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center">
              {/* Avatars */}
              <div className="flex -space-x-3">
                <img
                  src="https://i.pravatar.cc/100?img=1"
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-white"
                />

                <img
                  src="https://i.pravatar.cc/100?img=2"
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-white"
                />

                <img
                  src="https://i.pravatar.cc/100?img=3"
                  alt=""
                  className="h-12 w-12 rounded-full border-2 border-white"
                />

                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-orange-400 text-sm font-bold text-white">
                  +15k
                </div>
              </div>
            </div>

            <h3 className="mb-3 font-montserrat text-3xl font-bold text-slate-900">
              Join 15,000+ Happy Users
            </h3>

            <p className="text-slate-500 font-poppins">
              Become part of one of the fastest-growing wellness communities and
              discover trusted spa experiences near you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TookaDifference;
