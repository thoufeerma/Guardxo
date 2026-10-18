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

interface IndustriesProps {
  videoSrc?: string;
}

export default function Industries({
  videoSrc = "/Home-page/industries we serve.mp4",
}: IndustriesProps = {}) {
  const [selectedIdx, setSelectedIdx] = useState(2); // Default Construction Chemicals (index 2)
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
          {/* Left Column: List of 7 Industry Rows */}
          <div className="lg:col-span-6 flex flex-col gap-3">
            {INDUSTRIES.map((ind, idx) => {
              const isSelected = selectedIdx === idx;
              const isConstructionChemicals = ind.name === "Construction Chemicals";
              const labelColor =
                isSelected && isConstructionChemicals
                  ? "text-[#5AB900]"
                  : isSelected
                  ? "text-[#101E10]"
                  : "text-black";

              return (
                <button
                  key={ind.num}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full flex items-center justify-between p-4 px-5 rounded-2xl text-left transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-[#C6F19D] border-[#A8E272] shadow-xs font-bold"
                      : "bg-white border-neutral-200/80 hover:bg-neutral-50 text-black shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-md bg-[#101E10] text-white text-xs font-semibold font-sans flex-none">
                      {ind.num}
                    </span>
                    <span className={`text-base sm:text-lg font-semibold ${labelColor}`}>
                      {ind.name}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className={`flex-none transition-transform ${
                      isSelected ? "text-[#101E10] translate-x-1" : "text-black/40"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Video Preview Card with Centered Caption */}
          <div className="lg:col-span-6 relative w-full h-[420px] sm:h-[480px] rounded-[28px] overflow-hidden shadow-lg bg-[#101E10]">
            <video
              key={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {/* Dark gradient for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Centered Caption Card (without SECTOR FOCUS label) matching Figma */}
            <div className="absolute inset-x-6 bottom-6 p-6 sm:p-7 rounded-2xl glass-card shadow-2xl flex flex-col items-center text-center gap-2">
              <h5 className="text-xl sm:text-2xl font-bold text-[#101E10]">
                {activeIndustry.headline}
              </h5>
              <p className="text-sm text-black/85 leading-relaxed font-normal max-w-lg">
                {activeIndustry.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
