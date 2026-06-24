import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />
      <div>
        <PrivacyPolicy />
      </div>
      <Footer />
    </div>
  );
}

export default page;
