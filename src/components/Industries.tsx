"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface IndustryItem {
  num: string;
  name: string;
  headline: string;
  description: string;
}

const INDUSTRIES: IndustryItem[] = [
  {
    num: "01",
    name: "Paints & Coatings",
    headline: "Paints & Architectural Coatings",
    description:
      "Water-based paints require rigorous in-can bio-stabilizers to prevent fungal bloom, viscosity decay, and foul odors across humid distribution channels.",
  },
  {
    num: "02",
    name: "Construction Materials",
    headline: "Construction Materials & Plasters",
    description:
      "Exterior facades, renders, and joint compounds demand leach-resistant dry-film fungicides capable of withstanding intense monsoon weathering.",
  },
  {
    num: "03",
    name: "Construction Chemicals",
    headline: "Construction Chemicals",
    description:
      "Construction chemical formulations are vulnerable to microbial contamination during storage and application, affecting shelf life and performance.",
  },
  {
    num: "04",
    name: "Adhesives",
    headline: "Polymer Adhesives & Sealants",
    description:
      "High-solids PVA slurries, starch resins, and latex glues require low-odor, zero-VOC biocides that ensure long open times and bond integrity.",
  },
  {
    num: "05",
    name: "Agriculture",
    headline: "Agricultural Formulations",
    description:
      "Agrochemical suspensions and seed treatment concentrates benefit from selective bactericides that protect active ingredients without phytotoxic reactions.",
  },
  {
    num: "06",
    name: "Inks",
    headline: "Printing Inks & Resins",
    description:
      "Flexographic and packaging inks need swift antimicrobial protection that won't disrupt dye solubility, drying rate, or fountain solution pH balance.",
  },
  {
    num: "07",
    name: "Water Treatment",
    headline: "Industrial Recirculating Water",
    description:
      "Rapid-action non-oxidizing microbiocides prevent sulfate-reducing bacterial fouling, algae growth, and corrosive biofilm buildup in cooling systems.",
  },
];

export default function Industries() {
  const [selectedIdx, setSelectedIdx] = useState(2); // Default to Construction Chemicals matching Figma
  const activeIndustry = INDUSTRIES[selectedIdx];

  return (
    <section id="industries" className="w-full bg-white py-20 lg:py-28 border-t border-[#EDE7EC]">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
            One brand. Seven demanding industries.
          </h2>
        </div>

        {/* 2-Column Interactive Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: List of 7 Industries */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            {INDUSTRIES.map((ind, idx) => {
              const isSelected = selectedIdx === idx;
              return (
                <button
                  key={ind.num}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#C6F19D]/50 text-[#101E10] shadow-sm font-bold"
                      : "bg-transparent hover:bg-neutral-50 text-[#101E10]/80"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-semibold ${
                        isSelected ? "text-[#5AB900]" : "text-black/50"
                      }`}
                    >
                      {ind.num}
                    </span>
                    <span
                      className={`text-base sm:text-lg ${
                        isSelected ? "font-bold text-[#101E10]" : "font-medium"
                      }`}
                    >
                      {ind.name}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className={`transition-transform ${
                      isSelected
                        ? "text-[#5AB900] translate-x-1"
                        : "text-black/30"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Photographic Preview Card with Glassmorphic Overlay */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[460px] rounded-[24px] overflow-hidden shadow-xl bg-[#C6F19D]">
            <Image
              src="/images/industry-chemicals.png"
              alt={activeIndustry.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-500"
            />
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Glassmorphic Overlay Box */}
            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl glass-card shadow-2xl flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#5AB900]">
                Sector Focus
              </span>
              <h5 className="text-xl sm:text-2xl font-bold text-[#101E10]">
                {activeIndustry.headline}
              </h5>
              <p className="text-sm text-black/85 leading-relaxed font-normal">
                {activeIndustry.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
