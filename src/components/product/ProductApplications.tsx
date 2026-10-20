"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export const APPLICATIONS_LIST = [
  {
    id: "paints",
    num: "01",
    name: "Paints and coatings",
    dosage: "0.10% – 0.25% w/w",
    description:
      "Emulsion paints, primers, distempers, putty, and texture finishes. BT 20 stops malodour, headspace gas build-up, and viscosity loss in the can even when stored across humid seasons. Highly stable during high-speed pigment grinding cycles.",
  },
  {
    id: "emulsions",
    num: "02",
    name: "Polymer emulsions and latex",
    dosage: "0.05% – 0.15% w/w",
    description:
      "Pure acrylic, styrene-acrylic, VAE, and PVAc binder emulsions. Eliminates anaerobic bacterial degradation that causes coagulum formation and viscosity collapse in bulk storage vessels.",
  },
  {
    id: "adhesives",
    num: "03",
    name: "Adhesives and sealants",
    dosage: "0.05% – 0.20% w/w",
    description:
      "Starch-based, dextrin, PVA, and synthetic dispersion glues. Guards against enzymatic hydrolysis of organic thickeners and microbial putrefaction in sealed packaging.",
  },
  {
    id: "construction",
    num: "04",
    name: "Construction chemicals",
    dosage: "0.08% – 0.25% w/w",
    description:
      "Concrete admixtures, tile grouts, ready-to-use skim coats, and joint compounds. Retains sustained bactericidal efficacy in elevated calcium hydroxide environments up to pH 12.0.",
  },
  {
    id: "inks",
    num: "05",
    name: "Printing inks",
    dosage: "0.05% – 0.15% w/w",
    description:
      "Water-based flexographic and gravure inks. Prevents bacterial slime formation in closed inking loops and protects fountain solution reservoirs from fungal slime.",
  },
  {
    id: "paper",
    num: "06",
    name: "Paper and pulp coatings",
    dosage: "0.05% – 0.20% w/w",
    description:
      "Starch slurries, calcium carbonate dispersions, and pigmented paper topcoats. Stable under continuous high-shear pumping and elevated mill temperatures.",
  },
  {
    id: "cleaners",
    num: "07",
    name: "Home and industrial cleaners",
    dosage: "0.05% – 0.15% w/w",
    description:
      "Neutral to alkaline liquid detergents, fabric softeners, and surface cleaners. Compatible with anionic, non-ionic, and amphoteric surfactant systems.",
  },
  {
    id: "metalworking",
    num: "08",
    name: "Metalworking fluids",
    dosage: "0.10% – 0.25% w/w",
    description:
      "Water-soluble cutting oils and semi-synthetic machining emulsions. Prevents bacterial biomass clogging of coolant nozzles and suppresses hydrogen sulfide off-gassing.",
  },
  {
    id: "textiles",
    num: "09",
    name: "Textile and leather finishes",
    dosage: "0.05% – 0.20% w/w",
    description:
      "Spin finishes, textile sizing agents, and leather fatliquor emulsions. Neutral color ensures zero discoloration on sensitive white and pastel substrates.",
  },
];

export default function ProductApplications() {
  const [selectedApp, setSelectedApp] = useState(0);
  const current = APPLICATIONS_LIST[selectedApp];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-12">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-xs sm:text-[13px] font-bold tracking-wider uppercase text-[#5AB900]">
            APPLICATIONS &amp; INDUSTRIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#101E10] leading-tight tracking-tight">
            Wherever a water–based product needs to stay fresh.
          </h2>
          <p className="text-sm sm:text-base text-black/80 font-medium leading-relaxed">
            GuardExo BT 20 is specified globally across demanding continuous chemical facilities. Select an industry below to review dosage norms and product synergy:
          </p>
        </div>

        {/* 2-Column Interactive Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: 9 Numbered Rows exactly matching Figma design */}
          <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3">
            {APPLICATIONS_LIST.map((app, idx) => {
              const isSelected = selectedApp === idx;
              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setSelectedApp(idx)}
                  className={`w-full flex items-center justify-between py-3.5 sm:py-4 px-5 sm:px-6 rounded-[14px] sm:rounded-[16px] text-left transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#E4F7C8] text-[#428B00] shadow-2xs"
                      : "bg-[#F5F4F2] hover:bg-[#ECEBE8] text-[#101E10]"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      className={`text-sm sm:text-base font-bold flex-none w-6 ${
                        isSelected ? "text-[#428B00]" : "text-neutral-400"
                      }`}
                    >
                      {app.num}
                    </span>
                    <span
                      className={`text-sm sm:text-[15px] ${
                        isSelected
                          ? "font-bold text-[#428B00]"
                          : "font-bold text-[#101E10]"
                      }`}
                    >
                      {app.name}
                    </span>
                  </div>

                  <ArrowRight
                    size={18}
                    className={`flex-none transition-transform ${
                      isSelected
                        ? "text-[#428B00] translate-x-0.5"
                        : "text-[#101E10]/70"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Video Card + Bottom Dosage Strip matching Figma */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 flex flex-col gap-4">
            {/* Top Video Stage with Centered Caption Overlay Card */}
            <div className="relative w-full min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#101E10] flex items-center justify-center p-6 sm:p-8 shadow-xs border border-neutral-200/60">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="/Product-detail/APPLICATIONS%20%26%20INDUSTRIES.mp4"
                  type="video/mp4"
                />
                <source
                  src="/Product-detail/APPLICATIONS & INDUSTRIES.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />

              {/* Centered Frosted Caption Card Over Video */}
              <div className="relative z-10 max-w-md w-full bg-[#F5F4F2]/92 backdrop-blur-md rounded-[20px] p-6 sm:p-7 shadow-lg border border-white/60 flex flex-col gap-2.5 pointer-events-none">
                <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10] tracking-tight">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-[13.5px] text-neutral-800 leading-relaxed font-medium">
                  {current.description}
                </p>
              </div>
            </div>

            {/* Bottom Card: Typical Industry Dosage + Discuss Link */}
            <div className="bg-[#F5F4F2] rounded-[20px] sm:rounded-[24px] p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-neutral-200/50 shadow-2xs">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500">
                  TYPICAL INDUSTRY DOSAGE
                </span>
                <span className="text-2xl sm:text-[28px] font-bold text-[#101E10] tracking-tight">
                  {current.dosage}
                </span>
              </div>

              <a
                href="#inquiry"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors group"
              >
                <span>Discuss this application</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
