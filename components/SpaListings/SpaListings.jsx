import React from "react";
import {
  BadgeCheck,
  Image as ImageIcon,
  MessageSquareText
} from "lucide-react";
import tookaImg from "../../assets/tookaMockup.jpeg";
import Image from "next/image";

function SpaListings() {
  const features = [
    {
      icon: BadgeCheck,
      title: "Verification Badge",
      description:
        "Guaranteeing that the business is real, license-holding, and follows safety standards."
    },
    {
      icon: ImageIcon,
      title: "Real Photography",
      description:
        "No stock photos. See exactly what the lobby, treatment room, and facilities look like."
    },
    {
      icon: MessageSquareText,
      title: "Verified Reviews",
      description:
        "Read authentic feedback only from customers who have actually completed a booking."
    }
  ];
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Image
            src={tookaImg}
            alt="Spa Listing"
            className=" object-contain rounded-4xl"
          />
          {/* Phone Mockup */}
          {/* <div className="flex justify-center">
            <div className="relative flex h-[400px] w-full max-w-md items-center justify-center rounded-3xl border border-[#EAD3C7] bg-[#F5DCCD] p-8 shadow-sm">
           
              <div className="relative h-[250px] w-[130px] rounded-[30px] border-[5px] border-[#222] bg-white shadow-xl">
               
                <div className="absolute left-1/2 top-2 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />

                <div className="h-full overflow-hidden rounded-[22px]">
                  <Image
                    src="/images/spa-room.jpg"
                    alt="Spa Listing"
                    className="h-[110px] w-full object-cover"
                  />

                  <div className="p-2">
                    <div className="text-xs font-semibold">4.8 ★</div>

                    <div className="mt-2 h-2 rounded bg-gray-200" />
                    <div className="mt-1 h-2 w-3/4 rounded bg-gray-200" />

                    <div className="mt-3 h-10 rounded bg-gray-100" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Content */}
          <div>
            <h2 className="max-w-md font-montserrat text-4xl font-bold leading-tight text-[#111827]">
              What You'll Find on Every Spa Listing
            </h2>

            <div className="mt-8 space-y-5">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF4EC]">
                      <Icon size={22} className="text-orange-500" />
                    </div>

                    <div>
                      <h3 className="font-semibold font-poppins text-[#111827]">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-poppins leading-relaxed text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpaListings;
