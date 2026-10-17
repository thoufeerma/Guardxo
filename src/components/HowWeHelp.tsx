import React from "react";

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

function HexagonPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="380"
      height="380"
      viewBox="0 0 380 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="hex-pattern"
          width="48"
          height="83.14"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M24 0 L48 13.86 L48 41.57 L24 55.43 L0 41.57 L0 13.86 Z M24 41.57 L48 55.43 L48 83.14 L24 97 L0 83.14 L0 55.43 Z"
            stroke="#5AB900"
            strokeWidth="1.2"
            strokeOpacity="0.32"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hex-pattern)" />
    </svg>
  );
}

export default function HowWeHelp() {
  return (
    <section className="relative w-full bg-[#101E10] text-white py-20 lg:py-28 overflow-hidden">
      {/* Hexagon Outline Patterns in top-right and bottom-left matching Figma */}
      <div className="absolute -top-12 -right-12 pointer-events-none opacity-85">
        <HexagonPattern />
      </div>
      <div className="absolute -bottom-12 -left-12 pointer-events-none opacity-85">
        <HexagonPattern />
      </div>

      <div className="relative z-10 max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Narrative & Recall Guarantee */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-[#233523] text-[#C6F19D] text-xs font-semibold font-sans">
                01
              </span>
              <span className="text-[14px] font-semibold tracking-wider uppercase text-white/90">
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
