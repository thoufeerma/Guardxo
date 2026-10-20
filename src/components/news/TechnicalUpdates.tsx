"use client";

import React from "react";
import Image from "next/image";
import { FlaskConical, ShieldCheck, FileText, ArrowRight } from "lucide-react";

export default function TechnicalUpdates() {
  const updateColumns = [
    {
      category: "Product Update",
      icon: FlaskConical,
      items: [
        {
          date: "10 MAR 2025",
          title: "GuardExo BT 20P Reformulation for Low-VOC Compliance",
          excerpt:
            "Upgraded active carrier matrix reducing free volatile organic content by 40% while preserving benchmark antimicrobial efficacy.",
          tags: ["PAINTS & COATINGS", "CONSTRUCTION CHEMICALS"],
        },
        {
          date: "04 DEC 2024",
          title: "Intermediate Bulk Container (IBC) Packaging Option Introduced",
          excerpt:
            "Standardized 1000kg UN-approved container options available for GuardExo CMT 15 industrial water cooling circuits.",
          tags: [],
        },
      ],
    },
    {
      category: "Regulatory Change",
      icon: ShieldCheck,
      items: [
        {
          date: "22 FEB 2025",
          title: "EU BPR Active Substance Review Milestone for Isothiazolinones",
          excerpt:
            "Updated documentation guidelines, hazard statement protocols, and specific packaging concentration limits.",
          tags: [],
        },
        {
          date: "18 JAN 2025",
          title: "BIS Standard Formulation Harmonization Guidelines for Biocides",
          excerpt:
            "New conformity declaration formats released for chemical preservatives manufactured within Indian industrial hubs.",
          tags: [],
        },
      ],
    },
    {
      category: "Technical Bulletin",
      icon: FileText,
      items: [
        {
          date: "28 NOV 2024",
          title: "Elevated pH Compatibility Matrix for Carbamate Fungicides",
          excerpt:
            "Laboratory analytical data reviewing hydrolysis kinetics of IPBC across alkaline mortar and skim coat formulations.",
          tags: [],
        },
        {
          date: "15 JAN 2025",
          title: "Microbiological In-Can Headspace Testing Protocol TB-2025-01",
          excerpt:
            "Recommended swab, incubation, and vapor-phase inoculation procedures to resolve intermittent spore contamination.",
          tags: ["ADHESIVES", "CONSTRUCTION CHEMICALS"],
        },
      ],
    },
  ];

  return (
    <section className="w-full bg-[#101E10] py-20 lg:py-28 relative overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#5AB900]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Hexagon pattern at top-right matching Figma & shared artwork */}
      <div className="absolute -top-20 sm:-top-28 lg:-top-36 -right-16 sm:-right-20 lg:-right-16 w-[480px] sm:w-[580px] lg:w-[680px] xl:w-[720px] pointer-events-none select-none z-0 opacity-75">
        <Image
          src="/images/updates-hexagons.svg"
          alt="Hexagon pattern"
          width={650}
          height={631}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {updateColumns.map((col, colIdx) => {
            const Icon = col.icon;
            return (
              <div
                key={colIdx}
                className="flex flex-col gap-6"
              >
                {/* Column Title Header */}
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {col.category}
                  </h3>
                </div>

                {/* Items in Column */}
                <div className="flex flex-col gap-4">
                  {col.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="bg-[#F5F4F2] rounded-2xl p-6 sm:p-7 flex flex-col justify-between gap-6 text-[#101E10] hover:bg-[#FAF9F6] transition-colors group shadow-2xs"
                    >
                      <div className="flex flex-col gap-2">
                        <span className="text-xs font-bold text-black/60 uppercase tracking-wider">
                          {item.date}
                        </span>
                        <h4 className="text-lg sm:text-[19px] font-bold text-[#101E10] group-hover:text-[#5AB900] leading-snug transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-black/75 font-normal leading-relaxed">
                          {item.excerpt}
                        </p>
                      </div>

                      <div className="flex flex-col gap-3">
                        {/* Tags */}
                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((t, tIdx) => (
                              <span
                                key={tIdx}
                                className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#C6F19D] text-[#101E10] px-2.5 py-1 rounded-[5px]"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Detail Link */}
                        <a
                          href="#inquiry"
                          className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors w-fit"
                        >
                          Detail
                          <ArrowRight
                            size={14}
                            strokeWidth={2.2}
                            className="transition-transform group-hover:translate-x-0.5"
                          />
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
