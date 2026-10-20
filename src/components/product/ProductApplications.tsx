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
  },
  {
    id: "emulsions",
    num: "02",
    name: "Polymer emulsions and latex",
    image: "/images/product-application-paint.jpg",
    description:
      "Pure acrylic, styrene-acrylic, VAE, and PVAc binder emulsions. Eliminates anaerobic bacterial degradation that causes coagulum formation and viscosity collapse in bulk storage vessels.",
  },
  {
    id: "adhesives",
    num: "03",
    name: "Adhesives and sealants",
    image: "/images/product-application-paint.jpg",
    description:
      "Starch-based, dextrin, PVA, and synthetic dispersion glues. Guards against enzymatic hydrolysis of organic thickeners and microbial putrefaction in sealed packaging.",
  },
  {
    id: "construction",
    num: "04",
    name: "Construction chemicals",
    image: "/images/product-application-paint.jpg",
    description:
      "Concrete admixtures, tile grouts, ready-to-use skim coats, and joint compounds. Retains sustained bactericidal efficacy in elevated calcium hydroxide environments up to pH 12.0.",
  },
  {
    id: "inks",
    num: "05",
    name: "Printing inks",
    image: "/images/product-application-paint.jpg",
    description:
      "Water-based flexographic and gravure inks. Prevents bacterial slime formation in closed inking loops and protects fountain solution reservoirs from fungal slime.",
  },
  {
    id: "paper",
    num: "06",
    name: "Paper and pulp coatings",
    image: "/images/product-application-paint.jpg",
    description:
      "Starch slurries, calcium carbonate dispersions, and pigmented paper topcoats. Stable under continuous high-shear pumping and elevated mill temperatures.",
  },
  {
    id: "cleaners",
    num: "07",
    name: "Home and industrial cleaners",
    image: "/images/product-application-paint.jpg",
    description:
      "Neutral to alkaline liquid detergents, fabric softeners, and surface cleaners. Compatible with anionic, non-ionic, and amphoteric surfactant systems.",
  },
  {
    id: "metalworking",
    num: "08",
    name: "Metalworking fluids",
    image: "/images/product-application-paint.jpg",
    description:
      "Water-soluble cutting oils and semi-synthetic machining emulsions. Prevents bacterial biomass clogging of coolant nozzles and suppresses hydrogen sulfide off-gassing.",
  },
  {
    id: "textiles",
    num: "09",
    name: "Textile and leather finishes",
    image: "/images/product-application-paint.jpg",
    description:
      "Spin finishes, textile sizing agents, and leather fatliquor emulsions. Neutral color ensures zero discoloration on sensitive white and pastel substrates.",
  },
  {
    id: "agrochemicals",
    num: "10",
    name: "Agrochemical slurries",
    image: "/images/product-application-paint.jpg",
    description:
      "Suspension concentrates (SC) and flowable seed treatment formulations. Preserves organic suspension aids and xanthan gum rheology modifiers over multi-year warehouse storage.",
  },
];

export default function ProductApplications() {
  const [selectedApp, setSelectedApp] = useState(0);
  const current = APPLICATIONS_LIST[selectedApp];

  return (
    <section className="w-full bg-white py-20 lg:py-28 border-t border-neutral-200/80">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            APPLICATIONS & INDUSTRIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
            Wherever a water–based product needs to stay fresh.
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-medium leading-relaxed">
            GuardExo BT 20 is specified globally across demanding chemical formulations.
            Select an industry below to review compatibility and performance:
          </p>
        </div>

        {/* 2-Column Interactive Navigator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Light grey filled rows, semibold black text, black arrows, green selected row label */}
          <div className="lg:col-span-6 flex flex-col gap-2.5">
            {APPLICATIONS_LIST.map((app, idx) => {
              const isSelected = selectedApp === idx;
              return (
                <button
                  key={app.id}
                  type="button"
                  onClick={() => setSelectedApp(idx)}
                  className="w-full flex items-center justify-between py-3.5 px-5 sm:px-6 rounded-2xl text-left bg-[#F5F4F2] hover:bg-[#ECEBE8] transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <span
                      className={`text-sm font-medium w-6 flex-none ${
                        isSelected ? "text-[#5AB900] font-bold" : "text-neutral-400"
                      }`}
                    >
                      {app.num}
                    </span>
                    <span
                      className={`text-[15px] sm:text-base ${
                        isSelected
                          ? "font-bold text-[#5AB900]"
                          : "font-semibold text-[#101E10]"
                      }`}
                    >
                      {app.name}
                    </span>
                  </div>

                  <ArrowRight
                    size={18}
                    className="flex-none text-[#101E10]"
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Paint-brush photo inside light grey container with frosted caption card without APPLICATION FOCUS */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 bg-[#F5F4F2] rounded-[28px] p-4 sm:p-5 shadow-xs">
            <div className="relative w-full h-[420px] sm:h-[480px] rounded-[22px] overflow-hidden bg-[#101E10]">
              <Image
                src="/images/product-application-paint.jpg"
                alt={current.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />

              {/* Frosted Caption Card Positioned Over Photo */}
              <div className="absolute inset-x-5 bottom-5 sm:inset-x-6 sm:bottom-6 bg-white/80 backdrop-blur-md rounded-[20px] p-6 shadow-xl border border-white/60 flex flex-col items-start text-left gap-2 pointer-events-none">
                <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10] tracking-tight">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-[14px] text-neutral-800 leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
