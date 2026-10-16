import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactFormSection from "@/components/contact/ContactFormSection";
import DirectContactWays from "@/components/contact/DirectContactWays";
import ContactLocationMap from "@/components/contact/ContactLocationMap";
import CustomInquiryBanner from "@/components/CustomInquiryBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact GuardXO — Biocides & Industrial Preservatives | Chemtiver Speciality",
  description:
    "Connect with the technical and sales team at GuardXO (Chemtiver Speciality Pvt. Ltd.) in Gurugram, India. Direct phone lines, sales inquiries, and technical formulation consultation for industrial biocides and preservatives.",
  keywords: [
    "Contact GuardXO",
    "Chemtiver Speciality contact",
    "biocide supplier Gurugram",
    "industrial preservatives enquiry",
    "in-can preservatives technical support",
    "dry film biocide quote",
  ],
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F4F2] selection:bg-[#C6F19D] selection:text-[#101E10]">
      {/* 01 Navigation Bar */}
      <Navbar activePage="Contact" />

      {/* 02 Contact Form & Direct Inquiries Hero */}
      <ContactFormSection />

      {/* 03 Direct Contact Channels (Phone, Email, Hours) */}
      <DirectContactWays />

      {/* 04 Location & Gurugram Facility Map */}
      <ContactLocationMap />

      {/* 05 Custom Requirement Banner */}
      <CustomInquiryBanner />

      {/* 06 Global GuardXO / Chemtiver Footer */}
      <Footer />
    </main>
  );
}
