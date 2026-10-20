import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProductHero from "@/components/product/ProductHero";
import ProductOverview from "@/components/product/ProductOverview";
import ProductSpecifications from "@/components/product/ProductSpecifications";
import ProductApplications from "@/components/product/ProductApplications";
import ProductWhyChoose from "@/components/product/ProductWhyChoose";
import ProductFAQ from "@/components/product/ProductFAQ";
import RelatedProducts from "@/components/article/RelatedProducts";
import ConsultationCTA from "@/components/news/ConsultationCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GuardExo BT 20 — 20% BIT In-Can Preservative | Chemtiver Speciality",
  description:
    "Comprehensive technical specifications, recommended in-can dosages, application compatibility, and safety documentation for GuardExo BT 20 (20% 1,2-benzisothiazolin-3-one solution).",
  keywords: [
    "GuardExo BT 20",
    "20% BIT preservative",
    "1,2-benzisothiazolin-3-one",
    "CAS 2634-33-5",
    "in-can biocide for paints",
    "water-based emulsion preservation",
    "formaldehyde-free biocide",
    "Chemtiver Speciality products",
  ],
};

export default function ProductDetailPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#C6F19D] selection:text-[#101E10]">
      {/* 01 Navigation Bar */}
      <Navbar activePage="Product Detail" />

      {/* 02 Product Hero Showcase with Gallery, Specs & CTAs */}
      <ProductHero />

      {/* 03 What is GuardExo BT 20 & Core Benefits Bento Grid */}
      <ProductOverview />

      {/* 04 Technical Specifications Table per Accredited Standards */}
      <ProductSpecifications />

      {/* 05 Applications & Industries Interactive Navigator */}
      <ProductApplications />

      {/* 06 Why Choose GuardExo BT 20 Bento Grid */}
      <ProductWhyChoose />

      {/* 07 Frequently Asked Questions Accordion & Support Box */}
      <ProductFAQ />

      {/* 08 Related Chemical Products Grid */}
      <RelatedProducts
        tag="RELATED PRODUCTS"
        title="Products related to GuardExo BT 20"
        viewAllHref="/#featured-products"
        viewAllText="View all products"
      />

      {/* 09 Technical Consultation & Sample Inquiry Form */}
      <ConsultationCTA />

      {/* 10 Global Footer */}
      <Footer />
    </main>
  );
}
