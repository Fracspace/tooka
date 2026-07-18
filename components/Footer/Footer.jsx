import React from "react";
import Link from "next/link";
// import { Globe, Instagram, Youtube, Send } from "lucide-react";
import logoImg from "../../assets/logo1.png";
import Image from "next/image";

function Footer() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <footer className="bg-[#FAF7F5] border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className=" font-bold text-[#B26B00]">
              <Image
                src={logoImg}
                alt="logo img"
                className="w-[30vw] md:w-[12vw] h-[8vh]"
              />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
              Connecting people to world-class wellness experiences through
              simple, trusted booking.
            </p>

            {/* <div className="mt-6 flex items-center gap-4">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                 <Globe size={16} /> 
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                 <Instagram size={16} /> 
              </Link>

              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-orange-200 text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                 <Youtube size={16} /> 
              </Link>
            </div> */}
          </div>

          {/* Company */}
          <div className="">
            <h3 className="mb-5 text-sm font-semibold text-gray-900">
              Company
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link href="#discover" className="hover:text-orange-500">
                  Discover
                </Link>
              </li>

              <li>
                <Link href="#whyus" className="hover:text-orange-500">
                  Why Us
                </Link>
              </li>

              <li>
                <Link href="#aboutus" className="hover:text-orange-500">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="">
            <h3 className="mb-5 text-sm font-semibold text-gray-900">
              Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="/terms" className="hover:text-orange-500">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="/privacy" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="/refund" className="hover:text-orange-500">
                  Refund & Cancellation Policy
                </a>
              </li>

              <li>
                <a href="contact" className="hover:text-orange-500">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="">
            <h3 className="mb-5 text-sm font-semibold text-gray-900">
              Newsletter
            </h3>

            <p className="mb-4 text-sm text-gray-600">
              Get wellness tips and exclusive offers directly in your inbox.
            </p>

            <div className="flex overflow-hidden rounded-lg border border-gray-300 bg-white">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-3 text-sm outline-none"
              />

              <button className="flex cursor-pointer items-center justify-center bg-orange-500 pl-2 pr-2 text-white transition hover:bg-orange-600">
                {/* <Send size={16} />  */}
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-500 md:flex-col">
            <p>© 2026 Tooka Wellness. All rights reserved.</p>
            <p>Co-Powered By METROPODZ LIVING PRIVATE LIMITED</p>

            <div className="flex items-center gap-2">
              {/* <span>English (US)</span> */}
              {/* <Globe size={14} /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
