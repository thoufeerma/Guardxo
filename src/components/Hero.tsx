import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white pt-6 pb-12 sm:pb-16 lg:pt-10 lg:pb-16 xl:pt-12 xl:pb-20">
      {/* Background Molecule Animation & Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-end">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-bg.png"
          className="w-full h-full object-cover lg:object-contain lg:object-right opacity-90 lg:opacity-100"
        >
          <source src="/Home-page/Home-hero.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col justify-between min-h-[440px] sm:min-h-[480px] lg:min-h-[500px] xl:min-h-[530px]">
        {/* Content Container */}
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6 max-w-3xl">
          {/* Tag Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7F9D7] border border-[#D5ECC4] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#172516]" />
            <span className="text-xs sm:text-[12.5px] font-semibold tracking-wider uppercase text-[#172516]">
              SPECIALITY CHEMICAL SOLUTIONS
            </span>
          </div>

          {/* Main Headline - exactly 2 lines matching reference design */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[68px] 2xl:text-[74px] font-extrabold text-[#101E10] leading-[1.1] tracking-tight">
            <span className="block whitespace-normal sm:whitespace-nowrap">
              Protection engineered at
            </span>
            <span className="block mt-1 sm:mt-1.5">
              the{" "}
              <span className="inline-block px-2.5 sm:px-3 py-0.5 mx-0.5 bg-[#C5F09C] rounded-lg text-[#101E10] align-baseline">
                molecular
              </span>{" "}
              level.
            </span>
          </h1>

          {/* Subtitle Narrative - clean normal weight font matching reference */}
          <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-[#222222] max-w-[480px] lg:max-w-[500px] leading-relaxed font-normal">
            GuardExo — the biocides & preservatives brand of Chemtiver Speciality — safeguards paints, coatings, construction chemicals and water systems against microbial attack, so every batch performs exactly as it was formulated to.
          </p>
        </div>

        {/* Buttons placed at bottom-right of the Hero section matching reference design */}
        <div className="flex flex-wrap items-center justify-start lg:justify-end gap-3.5 pt-8 lg:pt-0">
          <Link
            href="#featured-products"
            className="inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1a301a] text-[#C2EC9A] px-6 sm:px-7 py-3 rounded-xl font-bold text-sm sm:text-[15px] tracking-wide transition-all shadow-xs active:scale-95"
          >
            Explore Products
          </Link>

          <Link
            href="#inquiry"
            className="inline-flex items-center justify-center bg-white hover:bg-neutral-50 text-[#101E10] border border-neutral-300 px-6 sm:px-7 py-3 rounded-xl font-bold text-sm sm:text-[15px] tracking-wide transition-all shadow-xs active:scale-95"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
