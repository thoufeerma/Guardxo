import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import ProductCategories from "@/components/ProductCategories";
import Glance from "@/components/Glance";
import HowWeHelp from "@/components/HowWeHelp";
import Industries from "@/components/Industries";
import Services from "@/components/Services";
import CustomInquiryBanner from "@/components/CustomInquiryBanner";
import FeaturedProductsTable from "@/components/FeaturedProductsTable";
import Testimonials from "@/components/Testimonials";
import WhyGuardExo from "@/components/WhyGuardExo";
import FAQ from "@/components/FAQ";
import InquiryForm from "@/components/InquiryForm";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F5F4F2] selection:bg-[#C6F19D] selection:text-[#101E10]">
      {/* 01 Navigation Bar */}
      <Navbar />

      {/* 02 Hero Section */}
      <Hero />

      {/* 03 Stats Strip */}
      <StatsStrip />

      {/* 04 Product Categories */}
      <ProductCategories />

      {/* 05 GuardExo at a Glance */}
      <Glance />

      {/* 06 How We Help */}
      <HowWeHelp />

      {/* 07 Industries We Serve */}
      <Industries />

      {/* 08 Our Services */}
      <Services />

      {/* 09 Custom Requirement Banner */}
      <CustomInquiryBanner />

      {/* 10 Featured Products Catalogue Matrix */}
      <FeaturedProductsTable />

      {/* 11 What Our Clients Say & Partner Profile */}
      <Testimonials />

      {/* 12 Why GuardExo Value Propositions */}
      <WhyGuardExo />

      {/* 13 Frequently Asked Questions */}
      <FAQ />

      {/* 14 Final Technical Inquiry Consultation Form */}
      <InquiryForm />

      {/* 15 Footer & Legal */}
      <Footer />
    </main>
  );
}
