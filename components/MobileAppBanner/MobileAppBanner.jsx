import Image from "next/image";
import appStoreIcon from "../../assets/appstore.png";
import playstoreIcon from "../../assets/playstore.png";
import Link from "next/link";
import appMockupImg from "../../assets/appMockup2.png";

export default function MobileAppBanner() {
  return (
    <section className="py-8 px-4">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[28px] bg-white shadow-xl border border-gray-100">
        <div className="grid items-center gap-10 p-6 md:p-10 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-[#FFF4E5] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#F59E0B]">
              📱 Mobile App
            </span>

            {/* Heading */}
            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#2C2C2C] md:text-5xl">
              Find & Book Spas
              <br />
              Nearby
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-md text-gray-500 leading-7">
              Discover top-rated spas in your neighborhood and secure your next
              appointment in seconds. Our app makes finding and booking wellness
              experiences completely hassle-free.
            </p>

            {/* Store Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="https://apps.apple.com/in/app/tooka-near-you/id6784173654">
                <Image
                  src={appStoreIcon}
                  alt="Download on App Store"
                  width={150}
                  height={48}
                  className="transition hover:scale-105"
                />
              </Link>

              <Link href="https://play.google.com/store/apps/details?id=com.fracspace.tooka&pcampaignid=web_share">
                <Image
                  src={playstoreIcon}
                  alt="Get it on Google Play"
                  width={150}
                  height={56}
                  className="transition hover:scale-105"
                />
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-[320px] w-full max-w-[420px] rounded-[26px] bg-[#FFE7D7] p-5 shadow-lg">
              <div className="relative h-full w-full overflow-hidden rounded-[20px]">
                <Image
                  src={appMockupImg}
                  alt="Mobile App Preview"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
