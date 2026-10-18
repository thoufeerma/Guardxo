import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConsultationCTA from "@/components/news/ConsultationCTA";
import RelatedProducts from "@/components/article/RelatedProducts";
import { query, initializeDatabase } from "@/lib/db";
import { PRODUCTS_CATALOGUE } from "@/lib/products-data";
import {
  Check,
  Download,
  ArrowRight,
  ShieldCheck,
  FlaskConical,
  Layers,
  Thermometer,
  Boxes,
  FileText,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

async function getProductBySlug(slug: string) {
  try {
    await initializeDatabase();
    const res = await query(
      "SELECT * FROM products WHERE slug = $1 OR id = $1 LIMIT 1",
      [slug]
    );
    if (res.rows.length > 0) {
      return res.rows[0];
    }
  } catch (err) {
    console.warn("DB query error in [slug] page, falling back:", err);
  }

  // Fallback to static catalog
  const fallback = PRODUCTS_CATALOGUE.find((p) => p.slug === slug);
  if (fallback) {
    return {
      id: fallback.id,
      num: fallback.num,
      grade: fallback.grade,
      slug: fallback.slug,
      family: fallback.family,
      target_application: fallback.targetApplication,
      description: fallback.description,
      active_ingredient: "Active Biocide Chemistry",
      cas_number: "Certified Technical Grade",
      features: [
        "Broad-spectrum microbicide protection",
        "Formulated for industrial wet-state stability",
        "High compatibility with neutral and alkaline emulsions",
      ],
      dosage_guide: "0.10% – 0.25% w/w",
      ph_stability: "pH 2.0 – 12.0",
      temperature_limit: "Up to 80°C",
      appearance: "Clear to pale yellow liquid",
      packaging: "25kg carboys / 200kg drums / 1,000kg IBCs",
      image_url: "/in-can-preservatives/can image.png",
      badge: fallback.badge || "Standard Grade",
    };
  }

  return null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | GuardXO",
    };
  }

  return {
    title: `${product.grade} — ${product.family} | GuardXO`,
    description: product.description || product.target_application,
  };
}

export default async function DynamicProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  let featuresList: string[] = [];
  if (Array.isArray(product.features)) {
    featuresList = product.features;
  } else if (typeof product.features === "string") {
    try {
      featuresList = JSON.parse(product.features);
    } catch {
      featuresList = [product.features];
    }
  }

  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-[#C6F19D] selection:text-[#101E10]">
      {/* 01 Navigation Bar */}
      <Navbar activePage="Product Detail" />

      {/* 02 Breadcrumb Ribbon */}
      <section className="w-full bg-white border-b border-[#EDE7EC] py-3.5 px-6 lg:px-12 text-xs">
        <div className="max-w-[1520px] mx-auto flex items-center gap-2 text-[#101E10]/60">
          <Link href="/" className="hover:text-[#101E10]">
            Home
          </Link>
          <span>/</span>
          <Link href="/in-can-preservatives" className="hover:text-[#101E10]">
            {product.family}
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#101E10]">{product.grade}</span>
        </div>
      </section>

      {/* 03 Hero Showcase */}
      <section className="w-full bg-[#101E10] text-white py-16 lg:py-24">
        <div className="max-w-[1520px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Chemistry & Metadata */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-[#C2EC9A] text-[#101E10] text-xs font-extrabold uppercase px-3 py-1 rounded-full">
                {product.family}
              </span>
              {product.badge && (
                <span className="bg-white/10 text-[#C6F19D] text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                  {product.badge}
                </span>
              )}
              {product.cas_number && (
                <span className="font-mono text-xs text-white/70">
                  CAS: {product.cas_number}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {product.grade}
            </h1>

            {product.active_ingredient && (
              <p className="text-base sm:text-lg text-[#C6F19D] font-semibold">
                {product.active_ingredient}
              </p>
            )}

            <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
              {product.description || product.target_application}
            </p>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50 uppercase font-semibold">
                  Recommended Dosage
                </span>
                <span className="text-sm font-bold text-white">
                  {product.dosage_guide || "0.05% – 0.25% w/w"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50 uppercase font-semibold">
                  pH Range
                </span>
                <span className="text-sm font-bold text-white">
                  {product.ph_stability || "pH 2.0 – 12.0"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs text-white/50 uppercase font-semibold">
                  Thermal Limit
                </span>
                <span className="text-sm font-bold text-white">
                  {product.temperature_limit || "Up to 100°C"}
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={`/contact#inquiry?grade=${encodeURIComponent(product.grade)}`}
                className="inline-flex items-center justify-center bg-[#C2EC9A] hover:bg-[#b0e67e] text-[#101E10] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg transition-transform active:scale-95"
              >
                <span>Request Commercial Sample</span>
                <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl text-sm font-semibold border border-white/10 transition-colors"
              >
                <span>Contact Formulation Chemist</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Container */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/5 border border-white/10 p-8 flex items-center justify-center backdrop-blur-md shadow-2xl">
              <div className="relative w-full h-full">
                <Image
                  src={product.image_url || "/in-can-preservatives/can image.png"}
                  alt={product.grade}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 Technical Characteristics Bento */}
      <section className="w-full bg-white py-20 px-6 lg:px-12 border-t border-[#EDE7EC]">
        <div className="max-w-[1520px] mx-auto flex flex-col gap-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#5AB900]">
              TECHNICAL ASSAY & SPECIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#101E10] mt-1">
              Engineered Physicochemical Profile
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#101E10] flex items-center justify-center text-[#C6F19D]">
                <FlaskConical size={20} />
              </div>
              <span className="text-xs font-semibold text-[#101E10]/50 uppercase">
                Physical Form
              </span>
              <span className="text-base font-bold text-[#101E10]">
                {product.appearance || "Clear amber fluid"}
              </span>
              <p className="text-xs text-[#101E10]/70">
                Homogeneous solution designed for immediate dispersibility in aqueous matrices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#101E10] flex items-center justify-center text-[#C6F19D]">
                <Thermometer size={20} />
              </div>
              <span className="text-xs font-semibold text-[#101E10]/50 uppercase">
                Processing Range
              </span>
              <span className="text-base font-bold text-[#101E10]">
                {product.temperature_limit || "Up to 100°C"}
              </span>
              <p className="text-xs text-[#101E10]/70">
                Maintains biocide potency under heavy milling and exothermic pigment dispersion.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#101E10] flex items-center justify-center text-[#C6F19D]">
                <ShieldCheck size={20} />
              </div>
              <span className="text-xs font-semibold text-[#101E10]/50 uppercase">
                Chemical Stability
              </span>
              <span className="text-base font-bold text-[#101E10]">
                {product.ph_stability || "pH 2.0 – 12.0"}
              </span>
              <p className="text-xs text-[#101E10]/70">
                Resistant against microbial hydrolysis and amine neutralization.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EDE7EC] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#101E10] flex items-center justify-center text-[#C6F19D]">
                <Boxes size={20} />
              </div>
              <span className="text-xs font-semibold text-[#101E10]/50 uppercase">
                Packaging Volumes
              </span>
              <span className="text-base font-bold text-[#101E10]">
                {product.packaging || "25kg / 200kg / 1,000kg"}
              </span>
              <p className="text-xs text-[#101E10]/70">
                Delivered in UN-certified drums and intermediate bulk containers (IBC).
              </p>
            </div>
          </div>

          {/* Key Benefits List */}
          {featuresList.length > 0 && (
            <div className="bg-white p-8 rounded-3xl border border-[#EDE7EC] shadow-sm flex flex-col gap-6">
              <h3 className="text-lg font-bold text-[#101E10]">
                Formulation Highlights & Antimicrobial Properties
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {featuresList.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C2EC9A] text-[#101E10] flex items-center justify-center flex-none mt-0.5">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="text-sm text-[#101E10]/85 font-medium leading-relaxed">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 05 Related Products */}
      <RelatedProducts />

      {/* 06 Inquiry & Consultation CTA */}
      <ConsultationCTA />

      {/* 07 Global Footer */}
      <Footer />
    </main>
  );
}
