import React from "react";

function BottomBanner() {
  return (
    <section className="relative overflow-hidden bg-[#f8f4ed] py-24">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        {/* App Icon */}
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 4L18 10H14V20H10V10H6L12 4Z" />
          </svg>
        </div>

        {/* Small Brand Name */}
        <p className="text-4xl font-light text-white/70 absolute top-16">
          Toka
        </p>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
          Ready to Relax?
        </h2>

        {/* Subtitle */}
        <p className="mt-3 text-lg text-slate-500">
          Wellness platform built for modern life.
        </p>

        {/* Description */}
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
          Join thousands of people who have found their peace through Toka.
          Download our app or browse online today.
        </p>

        <p className="mt-8 text-xs uppercase tracking-widest text-slate-300">
          Download the app on
        </p>

        {/* Store Buttons */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          {/* Apple */}
          <a
            href="#"
            className="group flex h-14 items-center gap-3 rounded-lg bg-black px-6 text-white transition hover:scale-105"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.6 12.5c0-2.1 1.7-3.2 1.8-3.3-1-1.5-2.5-1.7-3-1.7-1.3-.1-2.5.8-3.1.8-.6 0-1.5-.8-2.5-.8-1.3 0-2.5.7-3.2 1.8-1.4 2.4-.4 6 1 8 .7 1 1.5 2.1 2.6 2 .9 0 1.3-.6 2.5-.6s1.5.6 2.5.6c1 .1 1.7-1 2.4-2 .8-1.2 1.1-2.4 1.1-2.5-.1 0-2.1-.8-2.1-3.3z" />
            </svg>

            <div className="text-left">
              <p className="text-[10px] uppercase text-gray-400">
                Download on the
              </p>
              <p className="text-sm font-semibold">App Store</p>
            </div>
          </a>

          {/* Google */}
          <a
            href="#"
            className="group flex h-14 items-center gap-3 rounded-lg bg-black px-6 text-white transition hover:scale-105"
          >
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M21.8 12.2c0-.6-.1-1.1-.2-1.6H12v3h5.5c-.2 1.3-.9 2.4-2 3.2v2.7h3.2c1.9-1.8 3.1-4.4 3.1-7.3z"
              />
              <path
                fill="#34A853"
                d="M12 22c2.7 0 5- .9 6.7-2.5l-3.2-2.7c-.9.6-2 .9-3.5.9-2.7 0-5-1.8-5.8-4.2H2.8v2.7C4.5 19.8 8 22 12 22z"
              />
              <path
                fill="#FBBC05"
                d="M6.2 13.5c-.2-.6-.3-1.1-.3-1.7s.1-1.2.3-1.7V7.4H2.8C2.3 8.5 2 9.7 2 11s.3 2.5.8 3.6l3.4-1.1z"
              />
              <path
                fill="#EA4335"
                d="M12 6.3c1.5 0 2.8.5 3.8 1.5l2.8-2.8C17 3.4 14.7 2.5 12 2.5c-4 0-7.5 2.2-9.2 5.5l3.4 2.7c.8-2.4 3.1-4.4 5.8-4.4z"
              />
            </svg>

            <div className="text-left">
              <p className="text-[10px] uppercase text-gray-400">Get it on</p>
              <p className="text-sm font-semibold">Google Play</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default BottomBanner;
