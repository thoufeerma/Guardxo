import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import InCanHero from "@/components/incan/InCanHero";
import WhatIsInCan from "@/components/incan/WhatIsInCan";
import InCanProductRange from "@/components/incan/InCanProductRange";
import Industries from "@/components/Industries";
import InCanFAQ from "@/components/incan/InCanFAQ";
import ConsultationCTA from "@/components/news/ConsultationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "In-Can Preservatives for Water-Based Products — GuardXO | Chemtiver Speciality",
  description:
    "Explore GuardExo's complete portfolio of in-can preservatives (BIT and CMIT/MIT chemistries) engineered to prevent bacterial foul-out, foul odor, and viscosity loss in water-based paints, coatings, adhesives, and emulsions.",
  keywords: [
    "in-can preservatives",
    "water-based biocide",
    "BIT 20 preservative",
    "CMIT MIT in-can chemistry",
    "paint biocides manufacturer",
    "industrial preservatives India",
    "Gurugram chemical manufacturing",
  ],
};

export default function InCanPreservativesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#C6F19D] selection:text-[#101E10]">
      {/* 01 Navigation Bar */}
      <Navbar activePage="In-Can Preservatives" />

      {/* 02 In-Can Preservatives Hero Showcase */}
      <InCanHero />

      {/* 03 What is an In-Can Preservative & 4 Failure Modes */}
      <WhatIsInCan />

      {/* 04 Complete In-Can Product Portfolio Range */}
      <InCanProductRange />

      {/* 05 One Brand. Seven Demanding Industries */}
      <Industries />

      {/* 06 In-Can Preservation FAQs */}
      <InCanFAQ />

      {/* 07 Technical Consultation & Sample Inquiry Form */}
      <ConsultationCTA />

      {/* 08 Global Footer */}
      <Footer />
    </main>
  );
}
