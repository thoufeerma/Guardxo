import React from "react";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Background Video from Figma */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center lg:justify-end">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover lg:object-contain lg:object-right opacity-90 lg:opacity-100"
        >
          <source src="/Home-page/Home-hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-8 lg:gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[360px] sm:min-h-[420px] lg:min-h-[460px]">
          {/* Left Column Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8 bg-white/70 lg:bg-transparent backdrop-blur-xs lg:backdrop-blur-none p-4 sm:p-6 lg:p-0 rounded-2xl">
            {/* Tag Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C4EF9C]/40 border border-[#B9AEFF]/30 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#101E10] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#101E10]">
                SPECIALITY CHEMICAL SOLUTIONS
              </span>
            </div>

            {/* Main Headline - breaks exactly into 2 lines matching Figma */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] xl:text-[66px] font-extrabold text-[#101E10] leading-[1.14] tracking-tight">
              Protection engineered at<br />
              the <span className="relative inline-block px-2 sm:px-3 py-0.5 mx-1 bg-[#C6F19D] rounded-xl text-[#101E10]">molecular</span> level.
            </h1>

            {/* Subtitle Narrative */}
            <p className="text-base sm:text-lg lg:text-[18px] text-black/80 max-w-2xl leading-relaxed font-normal">
              <strong className="font-semibold text-[#101E10]">GuardExo</strong> — the biocides & preservatives brand of{" "}
              <strong className="font-semibold text-[#101E10]">Chemtiver Speciality</strong> — safeguards paints, coatings,
              construction chemicals and water systems against microbial attack, so every batch performs exactly as it was
              formulated to.
            </p>
          </div>

          {/* Right Column: Empty column allowing the rotating molecule video to take center stage */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" />
        </div>

        {/* Buttons placed at bottom-right of the Hero section matching Figma */}
        <div className="flex flex-wrap items-center justify-start lg:justify-end gap-4 pt-2">
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
    </section>
  );
}
