import ContactUs from "@/components/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

function page() {
  return (
    <div>
      <Navbar />

      <div>
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
}

export default page;
