"use client";

import { ArrowRight, Thermometer, Lock, Calendar, Info } from "lucide-react";

function SunIcon({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

export const EIGHT_ROW_SPECS = [
  { parameter: "Active Ingredient", specification: "1,2-benzisothiazolin-3-one (BIT)" },
  { parameter: "CAS Registry", specification: "2634-33-5" },
  { parameter: "Active Content", specification: "20.0% w/w (min. 19.5%)" },
  { parameter: "Appearance", specification: "Clear yellow to light brown liquid" },
  { parameter: "pH (as supplied, 25 °C)", specification: "11.0 – 13.5" },
  { parameter: "Effective pH Range in Use", specification: "Approx. 4.0 – 12.0" },
  { parameter: "Specific Gravity (25 °C)", specification: "1.13 – 1.15 g/cm³" },
  { parameter: "Shelf Life", specification: "24 months in unopened drum" },
];

export default function ProductSpecifications() {
  return (
    <section id="specs" className="w-full bg-white py-14 sm:py-16 lg:py-20 border-t border-neutral-200/80 scroll-mt-24">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10">
        {/* Header with Top-Right TDS Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#5AB900]">
              TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#101E10] leading-tight tracking-tight">
              Properties, dosage and storage
            </h2>
          </div>

          <a
            href="#inquiry"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors group w-fit pb-1"
          >
            <span>Download full Technical Dossier (TDS)</span>
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* 2-Column Layout: Table on Left & Two Bento Cards on Right with Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: 8-Row Specification Table matching exact height of right side */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <div className="h-full rounded-[20px] sm:rounded-[24px] border border-neutral-300/80 bg-white overflow-hidden flex flex-col shadow-2xs">
              {/* Header */}
              <div className="bg-[#101E10] text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase flex items-stretch border-b border-white/10 flex-none">
                <div className="w-[42%] sm:w-[40%] py-3.5 sm:py-4 px-4 sm:px-6 border-r border-white/15 flex items-center">
                  PARAMETER
                </div>
                <div className="w-[58%] sm:w-[60%] py-3.5 sm:py-4 px-4 sm:px-6 flex items-center">
                  SPECIFICATION BENCHMARK
                </div>
              </div>

              {/* 8 Rows distributing height equally to match right cards */}
              <div className="flex-1 flex flex-col divide-y divide-neutral-200/60">
                {EIGHT_ROW_SPECS.map((spec, idx) => (
                  <div
                    key={idx}
                    className={`flex-1 min-h-[44px] flex items-stretch text-xs sm:text-[13.5px] ${
                      idx % 2 === 1 ? "bg-[#F9F9F8]" : "bg-white"
                    }`}
                  >
                    <div className="w-[42%] sm:w-[40%] py-2.5 sm:py-3 px-4 sm:px-6 border-r border-neutral-200/80 flex items-center font-semibold text-[#101E10] break-words">
                      {spec.parameter}
                    </div>
                    <div className="w-[58%] sm:w-[60%] py-2.5 sm:py-3 px-4 sm:px-6 flex items-center font-medium text-neutral-800 break-words">
                      {spec.specification}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Two Bento Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 justify-between">
            {/* Card 1: Green Recommended Dose Card with uploaded background image */}
            <div className="bg-[#EBF7DC] bg-[url('/images/RECOMMENDED%20DOSE%20RANGE.png')] bg-cover bg-right rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 text-[#101E10] relative overflow-hidden flex flex-col gap-4 border border-[#D4F0B7]/60 shadow-2xs">
              <div className="flex flex-col gap-1 relative z-10">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#101E10]">
                  RECOMMENDED DOSE RANGE
                </span>
                <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#101E10] tracking-tight leading-none pt-1">
                  0.05% – 0.25%
                </h3>
                <p className="text-xs sm:text-[13px] font-medium text-[#101E10] pt-0.5">
                  20% by weight in the final formulation.
                </p>
              </div>

              <p className="text-xs sm:text-[13px] text-[#101E10]/90 font-medium leading-relaxed relative z-10">
                Water-based paints: 0.10% to 0.25% by weight (1 to 2.5 kg per metric tonne), which delivers 200 to 500 ppm of pure active BIT protection.
              </p>

              {/* Progress Bar: Sleek white track with dark fill */}
              <div className="w-full bg-white/90 h-2 sm:h-2.5 rounded-full overflow-hidden relative z-10">
                <div className="bg-[#101E10] h-full rounded-full w-[38%]" />
              </div>

              {/* White Callout Box with Info Icon */}
              <div className="bg-white rounded-xl sm:rounded-2xl py-3 px-3.5 sm:px-4 flex items-center gap-2.5 shadow-2xs border border-neutral-200/50 relative z-10">
                <Info size={16} className="text-[#101E10] flex-none" />
                <span className="text-xs sm:text-[12.5px] text-[#101E10] font-medium leading-tight">
                  Confirm final operational level with an ASTM/ISO challenge test before plant scale-up.
                </span>
              </div>
            </div>

            {/* Card 2: Safe Handling & Storage with 4-Column Horizontal Tiles */}
            <div className="bg-[#F5F4F2] rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 flex flex-col gap-3.5 border border-neutral-200/60 shadow-2xs">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#101E10]">
                SAFE HANDLING & STORAGE
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {/* Tile 1 */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex flex-col gap-1 border border-neutral-200/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#101E10]">
                    <Thermometer size={15} className="text-[#101E10] flex-none" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#101E10] whitespace-nowrap">
                      5 °C to 40 °C
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium leading-tight">
                    Optimal storage temp
                  </span>
                </div>

                {/* Tile 2 */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex flex-col gap-1 border border-neutral-200/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#101E10]">
                    <SunIcon size={15} className="text-[#101E10] flex-none" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#101E10] whitespace-nowrap">
                      Cool, shaded
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium leading-tight">
                    Avoid direct sunlight
                  </span>
                </div>

                {/* Tile 3 */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex flex-col gap-1 border border-neutral-200/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#101E10]">
                    <Lock size={15} className="text-[#101E10] flex-none" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#101E10] whitespace-nowrap">
                      Original seal
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium leading-tight">
                    Closed container
                  </span>
                </div>

                {/* Tile 4 */}
                <div className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex flex-col gap-1 border border-neutral-200/60 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#101E10]">
                    <Calendar size={15} className="text-[#101E10] flex-none" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#101E10] whitespace-nowrap">
                      24 Months
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-500 font-medium leading-tight">
                    Certified stability
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
