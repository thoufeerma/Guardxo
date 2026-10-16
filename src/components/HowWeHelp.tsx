import React from "react";
import { ShieldCheck } from "lucide-react";

const HELP_CARDS = [
  {
    num: "01",
    title: "Protect Products",
    text: "Prevent microbial contamination in wet-state formulations and applied films.",
    highlight: false,
  },
  {
    num: "02",
    title: "Extend Shelf Life",
    text: "Improve in-can stability, storage life and product integrity across climates.",
    highlight: false,
  },
  {
    num: "03",
    title: "Ensure Performance",
    text: "Maintain viscosity, colour, odour and batch-to-batch consistency.",
    highlight: true,
  },
  {
    num: "04",
    title: "Technical Expertise",
    text: "Recommend the right chemistry, dosage and application protocol for your system.",
    highlight: false,
  },
];

export default function HowWeHelp() {
  return (
    <section className="relative w-full bg-[#101E10] text-white py-20 lg:py-28 overflow-hidden">
      {/* Abstract Molecular Background Watermark Accent */}
      <div className="absolute -left-20 top-20 w-[480px] h-[480px] rounded-full bg-[#5AB900]/5 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 w-[480px] h-[480px] rounded-full bg-[#C6F19D]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Narrative & Recall Guarantee */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-white/90">
              How We Help
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white leading-tight">
              From first trial to final batch
            </h2>
            <p className="text-base text-white/80 font-normal leading-relaxed">
              Industrial biocide integration is not simply an additive choice; it is insurance against
              systemic batch recall, gas buildup, viscosity loss, and plant-wide biofilm outbreaks.
            </p>

            {/* Zero Recalls Callout Card */}
            <div className="mt-4 bg-[#F5F4F2] text-[#101E10] rounded-2xl p-6 border border-[#DFD7DD] shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <ShieldCheck size={22} className="text-[#5AB900]" />
                <h6 className="text-[18px] font-bold tracking-wide">
                  ZERO RECALLS LOGGED
                </h6>
              </div>
              <p className="text-sm text-black/75 leading-relaxed font-normal">
                Consistent chemical assay verification guarantees uninterrupted supply chain security.
              </p>
            </div>
          </div>

          {/* Right Column 2x2 Grid of 4 Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HELP_CARDS.map((card) => (
              <div
                key={card.num}
                className={`rounded-[24px] p-7 flex flex-col justify-between gap-6 transition-all duration-300 hover:scale-[1.02] shadow-lg ${
                  card.highlight
                    ? "bg-[#C6F19D] text-[#101E10]"
                    : "bg-white text-[#211A2B]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono font-bold text-sm px-2.5 py-1 rounded-md ${
                      card.highlight
                        ? "bg-[#101E10] text-[#C6F19D]"
                        : "bg-[#101E10]/5 text-[#101E10]"
                    }`}
                  >
                    {card.num}
                  </span>
                  <h5 className="text-[20px] font-bold text-[#211A2B] tracking-tight">
                    {card.title}
                  </h5>
                </div>
                <p
                  className={`text-[15px] leading-relaxed ${
                    card.highlight ? "text-black/85" : "text-black/75"
                  }`}
                >
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
