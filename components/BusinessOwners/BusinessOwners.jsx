import React from "react";
import { Search, CalendarPlus, ClipboardCheck, Sparkles } from "lucide-react";

function BusinessOwners() {
  const steps = [
    {
      icon: Search,
      title: "Discover",
      description:
        "Search for top-rated spas and wellness centers near your location."
    },
    {
      icon: CalendarPlus,
      title: "Select",
      description:
        "Browse full menus, compare prices, and check real-time availability."
    },
    {
      icon: ClipboardCheck,
      title: "Book",
      description:
        "Pick your date, time, and therapist. Confirm your booking instantly."
    },
    {
      icon: Sparkles,
      title: "Relax",
      description:
        "Arrive at the spa, enjoy your treatment, and leave feeling rejuvenated."
    }
  ];
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Booking Bliss in 4 Simple Steps
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-[#E5D4C4] md:block" />

          <div className="grid gap-12 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="relative text-center">
                  {/* Icon Box */}
                  <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-md">
                    <Icon size={28} className="text-[#A35A00]" />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {index + 1}. {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-500">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessOwners;
