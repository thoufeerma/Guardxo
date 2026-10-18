import React from "react";
import Image from "next/image";

const HELP_CARDS = [
  {
    num: "01",
    title: "Protect Products",
    text: "Prevent microbial contamination in wet-state formulations and applied films.",
  },
  {
    num: "02",
    title: "Extend Shelf Life",
    text: "Improve in-can stability, storage life and product integrity across climates.",
  },
  {
    num: "03",
    title: "Ensure Performance",
    text: "Maintain viscosity, colour, odour and batch-to-batch consistency.",
  },
  {
    num: "04",
    title: "Technical Expertise",
    text: "Recommend the right chemistry, dosage and application protocol for your system.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="relative w-full bg-[#101E10] text-white py-20 lg:py-28 overflow-hidden">
      {/* Background Honeycomb Chemistry Visual provided by user */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/Home-page/how we help background.png"
          alt="How We Help Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Narrative & Recall Guarantee */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <span className="text-[14px] font-semibold tracking-wider uppercase text-[#C6F19D]">
                How We Help
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight">
              From first trial to final batch
            </h2>
            <p className="text-base text-white/80 font-normal leading-relaxed">
              Industrial biocide integration is not simply an additive choice; it is insurance against
              systemic batch recall, gas buildup, viscosity loss, and plant-wide biofilm outbreaks.
            </p>

            {/* Zero Recalls Callout Card (white card, no shield icon) matching Figma */}
            <div className="mt-4 bg-white text-[#101E10] rounded-2xl p-6 border border-neutral-200 shadow-sm flex flex-col gap-2">
              <h6 className="text-[18px] font-bold tracking-wide">
                ZERO RECALLS LOGGED
              </h6>
              <p className="text-sm text-black/75 leading-relaxed font-normal">
                Consistent chemical assay verification guarantees uninterrupted supply chain security.
              </p>
            </div>
          </div>

          {/* Right Column 2x2 Grid of 4 Cards - All Light Green (#C6F19D) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HELP_CARDS.map((card) => (
              <div
                key={card.num}
                className="bg-[#C6F19D] text-[#101E10] rounded-[24px] p-7 flex flex-col justify-between gap-6 transition-all duration-300 hover:scale-[1.02] shadow-sm"
              >
                <div className="flex items-center gap-3">
                  {/* Number Badge: dark, rounded rectangle with white regular font numbers inline with title */}
                  <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#101E10] text-white text-xs font-semibold font-sans flex-none">
                    {card.num}
                  </span>
                  <h5 className="text-[20px] font-bold text-[#101E10] tracking-tight">
                    {card.title}
                  </h5>
                </div>
                <p className="text-[15px] leading-relaxed text-black/85 font-normal">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
