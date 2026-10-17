"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const APPLICATIONS_LIST = [
  {
    id: "paints",
    num: "01",
    name: "Paints and coatings",
    image: "/images/product-application-paint.jpg",
    description:
      "Emulsion paints, primers, distempers, putty, and texture finishes. BT 20 stops malodour, headspace gas build-up, and viscosity loss in the can even when stored across humid tropical seasons. Highly stable during high-speed pigment grinding cycles.",
    dosage: "0.10% – 0.25% w/w",
  },
  {
    id: "emulsions",
    num: "02",
    name: "Polymer emulsions and latex",
    image: "/images/industry-chemicals.png",
    description:
      "Pure acrylic, styrene-acrylic, VAE, and PVAc binder emulsions. Eliminates anaerobic bacterial degradation that causes coagulum formation and viscosity collapse in bulk storage vessels.",
    dosage: "0.05% – 0.15% w/w",
  },
  {
    id: "adhesives",
    num: "03",
    name: "Adhesives and sealants",
    image: "/images/product-application-paint.jpg",
    description:
      "Starch-based, dextrin, PVA, and synthetic dispersion glues. Guards against enzymatic hydrolysis of organic thickeners and microbial putrefaction in sealed packaging.",
    dosage: "0.10% – 0.20% w/w",
  },
  {
    id: "construction",
    num: "04",
    name: "Construction chemicals",
    image: "/images/industry-chemicals.png",
    description:
      "Concrete admixtures, tile grouts, ready-to-use skim coats, and joint compounds. Retains sustained bactericidal efficacy in elevated calcium hydroxide environments up to pH 12.0.",
    dosage: "0.08% – 0.20% w/w",
  },
  {
    id: "inks",
    num: "05",
    name: "Printing inks",
    image: "/images/product-application-paint.jpg",
    description:
      "Water-based flexographic and gravure inks. Prevents bacterial slime formation in closed inking loops and protects fountain solution reservoirs from fungal slime.",
    dosage: "0.05% – 0.15% w/w",
  },
  {
    id: "paper",
    num: "06",
    name: "Paper and pulp coatings",
    image: "/images/industry-chemicals.png",
    description:
      "Starch slurries, calcium carbonate dispersions, and pigmented paper topcoats. Stable under continuous high-shear pumping and elevated mill temperatures.",
    dosage: "0.05% – 0.12% w/w",
  },
  {
    id: "cleaners",
    num: "07",
    name: "Home and industrial cleaners",
    image: "/images/product-application-paint.jpg",
    description:
      "Neutral to alkaline liquid detergents, fabric softeners, and surface cleaners. Compatible with anionic, non-ionic, and amphoteric surfactant systems.",
    dosage: "0.05% – 0.10% w/w",
  },
  {
    id: "metalworking",
    num: "08",
    name: "Metalworking fluids",
    image: "/images/industry-chemicals.png",
    description:
      "Water-soluble cutting oils and semi-synthetic machining emulsions. Prevents bacterial biomass clogging of coolant nozzles and suppresses hydrogen sulfide off-gassing.",
    dosage: "0.10% – 0.25% w/w",
  },
  {
    id: "textiles",
    num: "09",
    name: "Textile and leather finishes",
    image: "/images/product-application-paint.jpg",
    description:
      "Spin finishes, textile sizing agents, and leather fatliquor emulsions. Neutral color ensures zero discoloration on sensitive white and pastel substrates.",
    dosage: "0.08% – 0.18% w/w",
  },
  {
    id: "agrochemicals",
    num: "10",
    name: "Agrochemical slurries",
    image: "/images/industry-chemicals.png",
    description:
      "Suspension concentrates (SC) and flowable seed treatment formulations. Preserves organic suspension aids and xanthan gum rheology modifiers over multi-year warehouse storage.",
    dosage: "0.05% – 0.15% w/w",
  },
];

export default function ProductApplications() {
  const [selectedApp, setSelectedApp] = useState(0);
  const current = APPLICATIONS_LIST[selectedApp];

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            APPLICATIONS & INDUSTRIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
            Wherever a water–based product needs to stay fresh.
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
            GuardExo BT 20 is specified globally across demanding continuous chemical facilities.
            Select an industry below to review dosage norms and product synergy:
          </p>
        </div>

        {/* 2-Column Interactive Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: 10 Selectable Buttons */}
          <div className="lg:col-span-6 flex flex-col gap-2">
            {APPLICATIONS_LIST.map((app, idx) => {
              const isSelected = selectedApp === idx;
              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setSelectedApp(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl flex items-center justify-between gap-4 border transition-all cursor-pointer ${
                    isSelected
                      ? "bg-[#C6F19D] border-[#A8E272] text-[#101E10] font-bold shadow-xs"
                      : "bg-white border-neutral-200/90 hover:bg-[#FAF9F7] text-black/80 font-medium"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-md bg-[#101E10] text-white text-xs font-semibold font-sans flex-none">
                      {app.num}
                    </span>
                    <span className="text-sm sm:text-base">
                      {app.name}
                    </span>
                  </div>

                  <ArrowRight
                    size={18}
                    className={`transition-transform flex-none ${
                      isSelected ? "translate-x-1 text-[#101E10]" : "text-black/30"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Application Card */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 bg-white rounded-[28px] overflow-hidden border border-neutral-200 shadow-md flex flex-col">
            {/* Visual Header */}
            <div className="relative w-full h-[280px] sm:h-[320px] bg-[#101E10]">
              <Image
                src={current.image}
                alt={current.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C6F19D]">
                  Application Focus
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {current.name}
                </h3>
              </div>
            </div>

            {/* Description & Dosage Info */}
            <div className="p-7 sm:p-8 flex flex-col gap-6">
              <p className="text-sm sm:text-base text-black/80 font-normal leading-relaxed">
                {current.description}
              </p>

              {/* Dosage Metric Box */}
              <div className="bg-neutral-50 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-neutral-200">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                    TYPICAL INDUSTRY DOSAGE
                  </span>
                  <span className="text-2xl font-extrabold text-[#101E10]">
                    {current.dosage}
                  </span>
                </div>

                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors w-fit group"
                >
                  Discuss this application
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
