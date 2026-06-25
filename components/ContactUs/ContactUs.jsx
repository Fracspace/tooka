"use client";

import React from "react";

import { Mail, MapPin, Clock3, Send } from "lucide-react";

export default function ContactUs() {
  return (
    <section className="bg-[#F8F8F8] py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-16 rounded-xl bg-[#F6EEDD] px-6 py-14 text-center">
          <h2 className="text-4xl font-montserrat font-bold text-[#111827]">
            Get in Touch
          </h2>

          <p className="mx-auto font-poppins mt-4 max-w-2xl text-gray-600">
            We're here to ensure your wellness journey is seamless. Whether you
            have a question about our services or need help with a booking, our
            team is ready to assist.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="mb-8 text-2xl font-montserrat font-semibold text-gray-900">
              Send us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-montserrat text-sm font-medium text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg font-poppins border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-montserrat text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg font-poppins border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-montserrat text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg font-poppins border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-montserrat font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-lg font-poppins border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400"
                />
              </div>

              <div>
                <label className="mb-2 block font-montserrat text-sm font-medium text-gray-700">
                  Query / Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full rounded-lg font-poppins border border-gray-200 px-4 py-3 outline-none transition focus:border-orange-400"
                />
              </div>

              <button
                onClick={(e) => e.preventDefault()}
                type="submit"
                className="inline-flex cursor-pointer font-poppins items-center gap-2 rounded-lg bg-[#F59E0B] px-8 py-3 font-medium text-white shadow-md transition hover:bg-[#D97706]"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                  <Mail className="text-orange-500" size={22} />
                </div>

                <div>
                  <p className="text-xs font-montserrat font-semibold uppercase tracking-wide text-orange-500">
                    Support Email
                  </p>

                  <h4 className="mt-1 font-poppins font-semibold text-gray-900">
                    hello@tooka.com
                  </h4>

                  <p className="mt-1 font-poppins text-sm text-gray-500">
                    Expected response within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                  <MapPin className="text-orange-500" size={22} />
                </div>

                <div>
                  <p className="text-xs font-montserrat font-semibold uppercase tracking-wide text-orange-500">
                    Office Address
                  </p>

                  <h4 className="mt-1 font-poppins font-semibold text-gray-900">
                    500034,Road No 12, Banjara Hills, Hyderabad
                  </h4>

                  <p className="mt-1 font-poppins text-sm text-gray-500">
                    Telangana, India
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50">
                  <Clock3 className="text-orange-500" size={22} />
                </div>

                <div>
                  <p className="text-xs font-montserrat font-semibold uppercase tracking-wide text-orange-500">
                    Operating Hours
                  </p>

                  <h4 className="mt-1 font-poppins font-semibold text-gray-900">
                    Open Daily
                  </h4>

                  <p className="mt-1 font-poppins text-sm text-gray-500">
                    10:00 AM – 10:00 PM
                  </p>

                  <p className="text-sm font-poppins text-gray-500">
                    Available for live support and bookings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
