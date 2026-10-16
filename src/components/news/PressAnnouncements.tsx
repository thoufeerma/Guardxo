"use client";

import React from "react";
import { ArrowUpRight, Newspaper, FileText } from "lucide-react";

export const PRESS_RELEASES = [
  {
    day: "14",
    monthYear: "MAR 2025",
    tag: "CORPORATE",
    title: "Chemtiver Commissioning High-Capacity Synthesis Unit in Gurugram",
    description:
      "Expanded reactor capacity doubles production for GuardExo BT series to meet growing Southeast Asian industrial coating demands.",
  },
  {
    day: "28",
    monthYear: "FEB 2025",
    tag: "COMPLIANCE",
    title:
      "GuardExo Establishes Comprehensive Export Verification Protocol for Middle East Shipments",
    description:
      "Standardized ISO/IEC 17025 accredited active ingredient profiling integrated into all export dispatch documentation.",
  },
  {
    day: "15",
    monthYear: "JAN 2025",
    tag: "R&D MILESTONE",
    title:
      "Successful Validation of Synergistic Biocide Matrices for Tropical Exterior Wall Coatings",
    description:
      "Independent field tests reveal zero fungal breakthrough over 24 months in extreme high-precipitation coastal climates.",
  },
  {
    day: "03",
    monthYear: "DEC 2024",
    tag: "COMMERCIAL",
    title:
      "Strategic Raw Material Sourcing Agreements Secured for 2025 Production Cycles",
    description:
      "Guaranteed uninterrupted active availability for key isothiazolinone precursor chemistries across all regional manufacturing lines.",
  },
  {
    day: "18",
    monthYear: "NOV 2024",
    tag: "ACCREDITATION",
    title:
      "Chemtiver Speciality Renews ISO 9001:2015 & ISO 14001:2015 Certifications",
    description:
      "Zero non-conformities noted during the annual multi-site surveillance audit conducted at the Gurugram synthesizing complex.",
  },
];

export default function PressAnnouncements() {
  return (
    <section id="press" className="w-full bg-white py-20 lg:py-28 border-t border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column Narrative */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              PRESS & ANNOUNCEMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#101E10] leading-tight">
              Official company announcements.
            </h2>
            <p className="text-base text-black/80 font-normal leading-relaxed max-w-md">
              Press releases, facility milestones, and executive regulatory statements from GuardExo
              and Chemtiver Speciality Pvt. Ltd.
            </p>

            <a
              href="mailto:press@chemtiver.com"
              className="w-fit inline-flex items-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-95"
            >
              Media Enquiries
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Right Column: 5 Stacked Press Release Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            {PRESS_RELEASES.map((press, idx) => (
              <div
                key={idx}
                className="group bg-[#F5F4F2] hover:bg-[#F0EFEA] border border-neutral-200/80 rounded-2xl p-6 sm:p-7 flex items-start gap-6 transition-all hover:shadow-sm"
              >
                {/* Date Box */}
                <div className="flex flex-col items-center justify-center bg-white rounded-xl px-4 py-3 min-w-[72px] sm:min-w-[84px] border border-neutral-200 flex-none shadow-xs">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#101E10] leading-none">
                    {press.day}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-black/60 pt-1">
                    {press.monthYear}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#C6F19D]/60 text-[#101E10] text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md">
                      {press.tag}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors leading-snug">
                    {press.title}
                  </h3>
                  <p className="text-sm text-black/75 font-normal leading-relaxed">
                    {press.description}
                  </p>
                </div>

                {/* Action Icon */}
                <div className="hidden sm:flex w-10 h-10 rounded-xl bg-white text-[#101E10] group-hover:bg-[#101E10] group-hover:text-[#C6F19D] items-center justify-center flex-none transition-all mt-1">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
