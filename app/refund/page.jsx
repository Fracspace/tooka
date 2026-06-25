import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import RefundPolicy from "@/components/RefundPolicy/RefundPolicy";
import React from "react";

function refund() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <RefundPolicy />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default refund;
