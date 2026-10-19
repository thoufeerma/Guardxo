"use client";

import React from "react";
import { ArrowRight, Thermometer, ShieldCheck, Clock, PackageCheck } from "lucide-react";

export const EIGHT_ROW_SPECS = [
  { parameter: "Active Ingredient", specification: "1,2-benzisothiazolin-3-one (BIT)" },
  { parameter: "CAS Registry Number", specification: "2634-33-5" },
  { parameter: "Active Content Assay", specification: "20.0% w/w (min. 19.5% by HPLC)" },
  { parameter: "Physical Appearance", specification: "Clear yellow to light brown aqueous solution" },
  { parameter: "pH (as supplied, 25°C)", specification: "11.0 – 13.5" },
  { parameter: "Effective In-Use pH Window", specification: "Approx. 4.0 – 12.0" },
  { parameter: "Specific Gravity (20°C)", specification: "1.12 – 1.16 g/cm³" },
  { parameter: "Thermal Decomposition Limit", specification: "Stable up to 100°C (short-term to 120°C)" },
];

export default function ProductSpecifications() {
  return (
    <section id="specs" className="w-full bg-white py-20 lg:py-28 border-t border-neutral-200/80 scroll-mt-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Header with Top-Right TDS Link & No Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              TECHNICAL SPECIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
              Properties, dosage and storage
            </h2>
          </div>

          <a
            href="#inquiry"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors group w-fit pb-1"
          >
            Download full Technical Dossier (TDS)
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* 2-Column Layout: 8-Row Table on Left & 2 Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 8-Row Specification Table */}
          <div className="lg:col-span-7 overflow-hidden rounded-[24px] border border-neutral-300 shadow-xs">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-sm sm:text-base">
                <thead className="bg-[#101E10] text-[#C6F19D] uppercase text-xs font-bold tracking-wider">
                  <tr>
                    <th className="py-4 px-6 sm:px-7 w-2/5">Parameter</th>
                    <th className="py-4 px-6 sm:px-7 w-3/5">Specification Benchmark</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 bg-white font-medium">
                  {EIGHT_ROW_SPECS.map((spec, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-[#F5F4F2] transition-colors"
                    >
                      <td className="py-3.5 px-6 sm:px-7 font-bold text-[#101E10]">
                        {spec.parameter}
                      </td>
                      <td className="py-3.5 px-6 sm:px-7 text-black/80 font-normal">
                        {spec.specification}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Two Bento Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1: Green Recommended Dose Card with Progress Bar, Hexagons & ASTM/ISO Note */}
            <div className="bg-[#C6F19D] rounded-[24px] p-7 sm:p-8 text-[#101E10] relative overflow-hidden flex flex-col gap-5 shadow-xs">
              {/* Hexagon Pattern */}
              <div
                className="absolute -right-6 -bottom-6 w-44 h-44 opacity-25 pointer-events-none bg-[url('/images/technical-expertise-hexagons.svg')] bg-no-repeat bg-contain"
              />

              <div className="flex flex-col gap-1 relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#101E10]/70">
                  Recommended Dose Range
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#101E10]">
                  0.05% – 0.25% <span className="text-base font-bold text-[#101E10]/70">w/w</span>
                </span>
                <span className="text-xs text-[#101E10]/80 font-medium pt-1">
                  (0.5 kg to 2.5 kg per 1,000 kg finished formulation)
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative z-10 flex flex-col gap-1.5 pt-1">
                <div className="w-full bg-[#101E10]/15 h-3 rounded-full overflow-hidden p-0.5">
                  <div className="bg-[#101E10] h-full rounded-full w-[65%]" />
                </div>
                <div className="flex justify-between text-[11px] font-bold text-[#101E10]/70">
                  <span>0.05% Min</span>
                  <span>0.15% Typical</span>
                  <span>0.25% Max</span>
                </div>
              </div>

              {/* ASTM / ISO Note */}
              <p className="text-xs text-[#101E10]/90 font-medium leading-relaxed relative z-10 pt-1 border-t border-[#101E10]/15">
                Evaluated and confirmed under <span className="font-bold">ASTM E2180</span> and <span className="font-bold">ISO 22196</span> preservative challenge assays.
              </p>
            </div>

            {/* Card 2: Safe Handling & Storage with Four Tiles */}
            <div className="bg-[#F5F4F2] rounded-[24px] p-7 sm:p-8 flex flex-col gap-5 border border-neutral-200/80 shadow-xs">
              <h3 className="text-xl font-bold text-[#101E10]">
                Safe Handling & Storage
              </h3>

              <div className="grid grid-cols-2 gap-3.5">
                {/* Tile 1 */}
                <div className="bg-white rounded-xl p-4 flex flex-col gap-1 border border-neutral-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#5AB900]">
                    <Thermometer size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
                      Temp
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-[#101E10]">
                    5°C to 40°C
                  </span>
                  <span className="text-[11px] text-black/60 font-medium">
                    Store above freezing
                  </span>
                </div>

                {/* Tile 2 */}
                <div className="bg-white rounded-xl p-4 flex flex-col gap-1 border border-neutral-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#5AB900]">
                    <ShieldCheck size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
                      Location
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-[#101E10]">
                    Cool Shaded
                  </span>
                  <span className="text-[11px] text-black/60 font-medium">
                    Well-ventilated hall
                  </span>
                </div>

                {/* Tile 3 */}
                <div className="bg-white rounded-xl p-4 flex flex-col gap-1 border border-neutral-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#5AB900]">
                    <PackageCheck size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
                      Packaging
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-[#101E10]">
                    Original Seal
                  </span>
                  <span className="text-[11px] text-black/60 font-medium">
                    Keep tightly closed
                  </span>
                </div>

                {/* Tile 4 */}
                <div className="bg-white rounded-xl p-4 flex flex-col gap-1 border border-neutral-200 shadow-2xs">
                  <div className="flex items-center gap-2 text-[#5AB900]">
                    <Clock size={16} />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#101E10]">
                      Validity
                    </span>
                  </div>
                  <span className="text-base sm:text-lg font-extrabold text-[#101E10]">
                    24 Months
                  </span>
                  <span className="text-[11px] text-black/60 font-medium">
                    From batch DOM
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
