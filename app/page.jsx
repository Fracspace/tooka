import BottomBanner from "@/components/BottomBanner/BottomBanner";
import ContactUs from "@/components/ContactUs/ContactUs";
import CuratedExperiences from "@/components/CuratedExperiences/CuratedExperiences";
import Footer from "@/components/Footer/Footer";
import HeroSection from "@/components/HeroSection/HeroSection";
import MobileAppBanner from "@/components/MobileAppBanner/MobileAppBanner";
import Navbar from "@/components/Navbar/Navbar";
import PartnerWithUs from "@/components/PartnerWithUs/PartnerWithUs";
import SpaListings from "@/components/SpaListings/SpaListings";
import TookaDifference from "@/components/TookaDifference/TookaDifference";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <div className="fixed w-[100vw] z-100">
        <Navbar />
      </div>

      <div id="discover">
        <HeroSection />
      </div>

      <div id="whyus">
        <TookaDifference />
      </div>

      <div>
        <CuratedExperiences />
      </div>

      <div id="aboutus">
        <SpaListings />
      </div>

      <div>
        <PartnerWithUs />
      </div>

      <div>
        <MobileAppBanner />
      </div>

      <div id="contact">
        <ContactUs />
      </div>

      {/* <div>
        <BottomBanner />
      </div> */}

      <Footer />
    </section>
  );
}
