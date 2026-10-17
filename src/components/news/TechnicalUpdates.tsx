"use client";

import React from "react";
import { Package, ShieldCheck, FileSpreadsheet, ArrowUpRight } from "lucide-react";

export default function TechnicalUpdates() {
  const updateColumns = [
    {
      category: "Product Update",
      icon: Package,
      items: [
        {
          date: "10 Mar 2025",
          title: "GuardExo BT 20P Reformulation for Low-VOC Compliance",
          excerpt:
            "Upgraded active carrier matrix reducing free volatile organic content by 40% while preserving benchmark antimicrobial efficacy.",
          tags: ["Paints & Coatings", "Construction Chemicals"],
        },
        {
          date: "04 Dec 2024",
          title: "Intermediate Bulk Container (IBC) Packaging Option Introduced",
          excerpt:
            "Standardized 1000kg UN-approved container options available for GuardExo CMT 15 industrial water cooling circuits.",
          tags: ["Industrial Biocides"],
        },
      ],
    },
    {
      category: "Regulatory Change",
      icon: ShieldCheck,
      items: [
        {
          date: "22 Feb 2025",
          title: "EU BPR Active Substance Review Milestone for Isothiazolinones",
          excerpt:
            "Updated documentation guidelines, hazard statement protocols, and specific packaging concentration limits for export compliance.",
          tags: ["BPR Compliance", "EU Dossier"],
        },
        {
          date: "18 Jan 2025",
          title: "BIS Standard Formulation Harmonization Guidelines for Biocides",
          excerpt:
            "New conformity declaration formats released for chemical preservatives manufactured within Indian industrial hubs.",
          tags: ["BIS Standard", "National Harmonization"],
        },
      ],
    },
    {
      category: "Technical Bulletin",
      icon: FileSpreadsheet,
      items: [
        {
          date: "28 Nov 2024",
          title: "Elevated pH Compatibility Matrix for Carbamate Fungicides",
          excerpt:
            "Laboratory analytical data reviewing hydrolysis kinetics of IPBC across alkaline mortar and skim coat formulations.",
          tags: ["Dry-Film", "Alkaline Chemistry"],
        },
        {
          date: "15 Jan 2025",
          title: "Microbiological In-Can Headspace Testing Protocol TB-2025-01",
          excerpt:
            "Recommended swab, incubation, and vapor-phase inoculation procedures to resolve intermittent spore contamination.",
          tags: ["Adhesives", "In-Can Preservation"],
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#101E10] py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5AB900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#C6F19D]">
            UPDATES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight">
            Product, regulatory and technical updates.
          </h2>
          <p className="text-base text-gray-300 font-normal leading-relaxed">
            Stay informed about changes that affect your formulations, documentation and compliance.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {updateColumns.map((col, colIdx) => {
            const Icon = col.icon;
            return (
              <div
                key={colIdx}
                className="bg-[#1c2c1c] border border-white/10 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between gap-8 shadow-xl"
              >
                {/* Column Title Header */}
                <div className="flex items-center gap-3.5 pb-2 border-b border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {col.category}
                  </h3>
                </div>

                {/* Items in Column */}
                <div className="flex flex-col gap-6 flex-1 justify-between">
                  {col.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-white/95 rounded-2xl p-6 flex flex-col justify-between gap-4 text-[#101E10] hover:bg-white transition-colors group shadow-sm"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-semibold text-black/60 uppercase tracking-wide">
                          {item.date}
                        </span>
                        <h4 className="text-base sm:text-lg font-bold text-[#101E10] group-hover:text-[#5AB900] leading-snug transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-black/75 font-normal leading-relaxed line-clamp-3">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-2 pt-2 border-t border-black/10">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {item.tags.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-bold uppercase tracking-wider bg-[#C6F19D]/60 text-[#101E10] px-2 py-0.5 rounded"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        {/* Detail Link */}
                        <a
                          href="#inquiry"
                          className="inline-flex items-center gap-1 text-xs font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors flex-none"
                        >
                          Detail
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
