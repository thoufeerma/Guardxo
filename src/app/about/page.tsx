import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import OurJourney from "@/components/about/OurJourney";
import AboutTechnicalExpertise from "@/components/about/AboutTechnicalExpertise";
import QualityManufacturing from "@/components/about/QualityManufacturing";
import CertificationsCompliance from "@/components/about/CertificationsCompliance";
import AboutStatsStrip from "@/components/about/AboutStatsStrip";
import AboutWhyUs from "@/components/about/AboutWhyUs";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About GuardXO — Biocides & Preservatives Manufacturer | Chemtiver Speciality",
  description:
    "Learn about GuardExo, the biocides and preservatives brand of Chemtiver Speciality Pvt. Ltd. Discover our journey, technical expertise, Gurugram manufacturing facilities, and quality standards.",
  keywords: [
    "About GuardXO",
    "Chemtiver Speciality",
    "biocide manufacturer Gurugram",
    "preservatives chemical plant India",
    "ISO 9001 biocide facility",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F4F2] selection:bg-[#C6F19D] selection:text-[#101E10]">
      {/* 01 Navigation Bar */}
      <Navbar activePage="About" />

      {/* 02 About Hero Section */}
      <AboutHero />

      {/* 03 Who We Are & Mission / Vision */}
      <WhoWeAre />

      {/* 04 Our Journey & Milestones */}
      <OurJourney />

      {/* 05 Technical Expertise Pillars */}
      <AboutTechnicalExpertise />

      {/* 06 Quality Assurance & Manufacturing */}
      <QualityManufacturing />

      {/* 07 Certifications & Compliance */}
      <CertificationsCompliance />

      {/* 08 Stats & Metrics Strip */}
      <AboutStatsStrip />

      {/* 09 Why Choose Us Bento Grid */}
      <AboutWhyUs />

      {/* 10 Final Technical Consultation & Inquiry Form */}
      <InquiryForm />

      {/* 11 Footer & Accreditations */}
      <Footer />
    </main>
  );
}
