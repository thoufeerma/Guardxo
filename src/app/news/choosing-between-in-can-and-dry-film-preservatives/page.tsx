import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ArticleHeader from "@/components/article/ArticleHeader";
import ArticleBody from "@/components/article/ArticleBody";
import RelatedProducts from "@/components/article/RelatedProducts";
import MoreInsights from "@/components/article/MoreInsights";
import ConsultationCTA from "@/components/news/ConsultationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Choosing between in-can and dry-film preservatives — Technical Guide | GuardXO",
  description:
    "How to assess wet-state bacterial risks versus applied film fungal/algal threats in demanding climates. A comprehensive guide for paint and construction chemical formulators from GuardXO and Chemtiver Speciality.",
  keywords: [
    "in-can preservatives",
    "dry-film biocide",
    "BIT vs CMIT MIT",
    "paint biocide dosage",
    "emulsion preservation guide",
    "OIT fungicide",
    "GuardXO BT 20P",
  ],
};

export default function ArticleDetailPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#C6F19D] selection:text-[#101E10]">
      {/* 01 Navigation Bar */}
      <Navbar activePage="Article" />

      {/* 02 Article Header, Metadata, and Full-Bleed Hero Image */}
      <ArticleHeader />

      {/* 03 Article Content with Alerts, Visuals, Comparison Matrix, and Sticky Sidebar */}
      <ArticleBody />

      {/* 04 Related Chemical Products for Formulators */}
      <RelatedProducts />

      {/* 05 More Insights from GuardExo */}
      <MoreInsights />

      {/* 06 Technical Consultation & Sample Inquiry Form */}
      <ConsultationCTA />

      {/* 07 Global Footer */}
      <Footer />
    </main>
  );
}
