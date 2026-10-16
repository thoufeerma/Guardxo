"use client";

import React from "react";
import { Download, FileText, ShieldAlert } from "lucide-react";

export const SPECIFICATIONS_BENCHMARKS = [
  { parameter: "Active Ingredient", specification: "1,2-benzisothiazolin-3-one (BIT)" },
  { parameter: "CAS Registry Number", specification: "2634-33-5" },
  { parameter: "Active Content Assay", specification: "20.0% w/w (min. 19.5% by HPLC)" },
  { parameter: "Physical Appearance", specification: "Clear yellow to light brown aqueous solution" },
  { parameter: "pH (as supplied, 25°C)", specification: "11.0 – 13.5" },
  { parameter: "Effective In-Use pH Window", specification: "Approx. 4.0 – 12.0" },
  { parameter: "Specific Gravity (20°C)", specification: "1.12 – 1.16 g/cm³" },
  { parameter: "Thermal Decomposition Limit", specification: "Stable up to 100°C (short-term grinding to 120°C)" },
  { parameter: "Flash Point", specification: "> 100°C (Non-flammable aqueous glycol carrier)" },
  { parameter: "Solubility Profile", specification: "Miscible in water in all proportions; soluble in glycols" },
  { parameter: "Recommended In-Can Dosage", specification: "0.05% – 0.25% w/w (0.5 – 2.5 kg per 1,000 kg finished batch)" },
  { parameter: "Standard Packaging Options", specification: "25 kg UN carboys, 200 kg HDPE drums, 1,000 kg IBC totes" },
  { parameter: "Shelf Life & Storage Condition", specification: "24 months when stored between 5°C and 40°C in original containers" },
];

export default function ProductSpecifications() {
  return (
    <section id="specs" className="w-full bg-white py-20 lg:py-28 border-t border-neutral-200/80 scroll-mt-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            TECHNICAL SPECIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
            Properties, dosage and storage
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
            Analytical benchmarks, chemical parameters, and operational boundaries tested per
            accredited quality standards.
          </p>
        </div>

        {/* Specifications Table */}
        <div className="w-full overflow-hidden rounded-[24px] border border-neutral-300 shadow-xs">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-[#101E10] text-[#C6F19D] uppercase text-xs font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-6 sm:px-8 w-1/3">Parameter</th>
                  <th className="py-4 px-6 sm:px-8 w-2/3">Specification Benchmark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 bg-white font-medium">
                {SPECIFICATIONS_BENCHMARKS.map((spec, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#F5F4F2] transition-colors"
                  >
                    <td className="py-4 px-6 sm:px-8 font-bold text-[#101E10]">
                      {spec.parameter}
                    </td>
                    <td className="py-4 px-6 sm:px-8 text-black/80 font-normal">
                      {spec.specification}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Bottom Download Bar */}
          <div className="bg-[#F5F4F2] p-6 sm:p-7 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-black/70">
              <ShieldAlert size={16} className="text-[#5AB900] flex-none" />
              <span>Full compliance dossiers and ISO Certificate of Analysis available for every production batch.</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-xs"
              >
                <Download size={14} />
                Technical Data Sheet (TDS)
              </a>
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 bg-white hover:bg-neutral-100 text-[#101E10] border border-neutral-300 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-2xs"
              >
                <FileText size={14} />
                Safety Data Sheet (SDS)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
