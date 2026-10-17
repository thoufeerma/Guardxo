import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import NewsContainer from "@/components/news/NewsContainer";
import PressAnnouncements from "@/components/news/PressAnnouncements";
import TechnicalUpdates from "@/components/news/TechnicalUpdates";
import FeaturedArticleSpotlight from "@/components/news/FeaturedArticleSpotlight";
import ConsultationCTA from "@/components/news/ConsultationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "News & Technical Insights — GuardXO Biocides & Preservatives | Chemtiver Speciality",
  description:
    "Explore the latest technical articles, chemical formulation guides, company announcements, and global regulatory updates from GuardXO and Chemtiver Speciality Pvt. Ltd.",
  keywords: [
    "GuardXO news",
    "biocide insights",
    "preservative technical articles",
    "isothiazolinone stability guide",
    "Chemtiver press releases",
    "EU BPR biocide compliance",
    "in-can preservatives dosage",
  ],
};

export default function NewsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#C6F19D] selection:text-[#101E10]">
      {/* 01 Navigation Bar */}
      <Navbar activePage="News" />

      {/* 02 Hero & Filterable Articles Grid */}
      <NewsContainer />

      {/* 03 Official Press Releases & Announcements */}
      <PressAnnouncements />

      {/* 04 Categorized Product, Regulatory & Technical Updates */}
      <TechnicalUpdates />

      {/* 05 Featured Article Spotlight Editorial */}
      <FeaturedArticleSpotlight />

      {/* 06 Technical Consultation & Inquiry Form */}
      <ConsultationCTA />

      {/* 07 Global GuardXO / Chemtiver Footer */}
      <Footer />
    </main>
  );
}
