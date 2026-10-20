"use client";

import React from "react";
import { ArrowRight, Thermometer, Sunset, Lock, Calendar, Info } from "lucide-react";

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
    <section id="specs" className="w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-neutral-200/80 scroll-mt-24">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 flex flex-col gap-8 sm:gap-10">
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

        {/* 2-Column Layout: Table on Left & Two Bento Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: 8-Row Specification Table with Zebra Striping */}
          <div className="lg:col-span-6 overflow-hidden rounded-[20px] border border-neutral-800/20 bg-white">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-[13.5px]">
                <thead className="bg-[#152215] text-white uppercase text-[11px] sm:text-xs font-bold tracking-wider">
                  <tr>
                    <th className="py-3.5 px-5 sm:px-6 w-5/12 border-r border-white/10">
                      Parameter
                    </th>
                    <th className="py-3.5 px-5 sm:px-6 w-7/12">
                      Specification Benchmark
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[#101E10]">
                  {EIGHT_ROW_SPECS.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 1 ? "bg-[#F5F4F2]" : "bg-white"}
                    >
                      <td className="py-3.5 px-5 sm:px-6 font-medium text-[#101E10]">
                        {spec.parameter}
                      </td>
                      <td className="py-3.5 px-5 sm:px-6 text-neutral-800 font-medium">
                        {spec.specification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Two Bento Cards */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Card 1: Green Recommended Dose Card with Progress Bar & Callout */}
            <div className="bg-[#EEFBE2] rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 text-[#101E10] relative overflow-hidden flex flex-col gap-4">
              {/* Hexagon Pattern Watermark */}
              <div
                className="absolute -right-8 -bottom-10 w-48 h-48 opacity-25 pointer-events-none bg-[url('/images/technical-expertise-hexagons.svg')] bg-no-repeat bg-contain"
              />

              <div className="flex flex-col gap-1 relative z-10">
                <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
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
              <div className="w-full bg-white h-2 sm:h-2.5 rounded-full overflow-hidden relative z-10">
                <div className="bg-[#101E10] h-full rounded-full w-[40%]" />
              </div>

              {/* White Callout Box with Info Icon */}
              <div className="bg-white rounded-xl sm:rounded-2xl py-3 px-3.5 sm:px-4 flex items-center gap-2.5 shadow-2xs relative z-10">
                <Info size={16} className="text-[#101E10] flex-none" />
                <span className="text-xs sm:text-[12.5px] text-[#101E10] font-medium leading-tight">
                  Confirm final operational level with an ASTM/ISO challenge test before plant scale-up.
                </span>
              </div>
            </div>

            {/* Card 2: Safe Handling & Storage with 4-Column Horizontal Tiles */}
            <div className="bg-[#F5F4F2] rounded-[20px] sm:rounded-[24px] p-6 sm:p-7 flex flex-col gap-3.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
                SAFE HANDLING & STORAGE
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {/* Tile 1 */}
                <div className="bg-white rounded-xl p-3 sm:p-3.5 flex flex-col gap-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#101E10]">
                    <Thermometer size={15} className="text-[#101E10] flex-none" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#101E10] whitespace-nowrap">
                      5 °C to 40 °C
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-600 font-medium leading-tight">
                    Optimal storage temp
                  </span>
                </div>

                {/* Tile 2 */}
                <div className="bg-white rounded-xl p-3 sm:p-3.5 flex flex-col gap-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#101E10]">
                    <Sunset size={15} className="text-[#101E10] flex-none" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#101E10] whitespace-nowrap">
                      Cool, shaded
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-600 font-medium leading-tight">
                    Avoid direct sunlight
                  </span>
                </div>

                {/* Tile 3 */}
                <div className="bg-white rounded-xl p-3 sm:p-3.5 flex flex-col gap-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#101E10]">
                    <Lock size={15} className="text-[#101E10] flex-none" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#101E10] whitespace-nowrap">
                      Original seal
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-600 font-medium leading-tight">
                    Closed container
                  </span>
                </div>

                {/* Tile 4 */}
                <div className="bg-white rounded-xl p-3 sm:p-3.5 flex flex-col gap-1 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-[#101E10]">
                    <Calendar size={15} className="text-[#101E10] flex-none" />
                    <span className="text-xs sm:text-[13px] font-bold text-[#101E10] whitespace-nowrap">
                      24 Months
                    </span>
                  </div>
                  <span className="text-[11px] text-neutral-600 font-medium leading-tight">
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
