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
    headline: "Paints & Coatings",
    description:
      "Water-based paints require rigorous in-can bio-stabilizers to prevent fungal bloom, viscosity decay, and foul odors across humid distribution channels.",
  },
  {
    num: "02",
    name: "Construction Materials",
    headline: "Construction Materials",
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
    headline: "Adhesives",
    description:
      "High-solids PVA slurries, starch resins, and latex glues require low-odor, zero-VOC biocides that ensure long open times and bond integrity.",
  },
  {
    num: "05",
    name: "Agriculture",
    headline: "Agriculture",
    description:
      "Agrochemical suspensions and seed treatment concentrates benefit from selective bactericides that protect active ingredients without phytotoxic reactions.",
  },
  {
    num: "06",
    name: "Inks",
    headline: "Inks",
    description:
      "Flexographic and packaging inks need swift antimicrobial protection that won't disrupt dye solubility, drying rate, or fountain solution pH balance.",
  },
  {
    num: "07",
    name: "Water Treatment",
    headline: "Water Treatment",
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
          {/* Left Column: List of 7 Industry Rows in Rounded Boxes matching Figma */}
          <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3">
            {INDUSTRIES.map((ind, idx) => {
              const isSelected = selectedIdx === idx;

              return (
                <button
                  key={ind.num}
                  type="button"
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-full flex items-center justify-between py-3.5 px-5 sm:px-6 rounded-2xl text-left transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-[#E2F7C5] shadow-xs"
                      : "bg-[#F4F3F0] hover:bg-[#EAE8E3]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      className={`text-sm font-medium w-6 flex-none ${
                        isSelected ? "text-[#5AB900]" : "text-neutral-400"
                      }`}
                    >
                      {ind.num}
                    </span>
                    <span
                      className={`text-[15px] sm:text-base ${
                        isSelected
                          ? "font-bold text-[#5AB900]"
                          : "font-semibold text-black"
                      }`}
                    >
                      {ind.name}
                    </span>
                  </div>
                  <ArrowRight
                    size={18}
                    className={`flex-none transition-transform ${
                      isSelected ? "text-[#5AB900] translate-x-1" : "text-black"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Photo/Video with Centered Caption Card matching Figma */}
          <div className="lg:col-span-6 relative w-full h-[420px] sm:h-[480px] rounded-[28px] overflow-hidden shadow-lg bg-[#101E10]">
            <video
              key={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              poster="/images/industry-chemicals.png"
              className="w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Centered Caption Card (without SECTOR FOCUS label) matching Figma */}
            <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 pointer-events-none">
              <div className="bg-white/70 backdrop-blur-md rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 shadow-xl border border-white/50 flex flex-col items-start text-left gap-2.5 max-w-md w-full">
                <h5 className="text-xl sm:text-[22px] font-bold text-[#101E10] tracking-tight">
                  {activeIndustry.headline}
                </h5>
                <p className="text-xs sm:text-[14px] text-neutral-800 leading-relaxed font-normal">
                  {activeIndustry.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
