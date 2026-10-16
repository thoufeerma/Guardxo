import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F5F4F2] pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Hero Photography with Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply">
        <Image
          src="/images/hero-bg.png"
          alt="Molecular biocide laboratory synthesis"
          fill
          sizes="100vw"
          className="object-cover object-right-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F4F2] via-[#F5F4F2]/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl flex flex-col gap-8">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C4EF9C]/40 border border-[#B9AEFF]/30 w-fit backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#101E10] animate-pulse" />
            <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#101E10]">
              SPECIALITY CHEMICAL SOLUTIONS
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-[#101E10] leading-[1.12] tracking-tight">
            Protection engineered at the{" "}
            <span className="relative inline-block px-2 sm:px-3 py-0.5 mx-1 bg-[#C6F19D] rounded-xl text-[#101E10]">
              molecular
            </span>{" "}
            level.
          </h1>

          {/* Subtitle Narrative */}
          <p className="text-base sm:text-lg lg:text-[18px] text-black/80 max-w-2xl leading-relaxed font-normal">
            <strong className="font-semibold text-[#101E10]">GuardExo</strong> — the biocides & preservatives brand of{" "}
            <strong className="font-semibold text-[#101E10]">Chemtiver Speciality</strong> — safeguards paints, coatings,
            construction chemicals and water systems against microbial attack, so every batch performs exactly as it was
            formulated to.
          </p>

          {/* Dual Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#featured-products"
              className="inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-7 py-3.5 rounded-xl font-bold text-base transition-all transform hover:-translate-y-0.5 shadow-lg active:translate-y-0"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#inquiry"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-[#211A2B] border border-[#DFD7DD] px-6 py-3.5 rounded-xl font-bold text-base transition-all shadow-sm hover:shadow"
            >
              <FileText size={18} className="text-[#101E10]/70" />
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
