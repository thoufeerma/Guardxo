"use client";

import React from "react";
import { AlertCircle, Biohazard, Droplets, Gauge } from "lucide-react";

export default function WhatIsInCan() {
  const failureModes = [
    {
      icon: Biohazard,
      title: "Bacterial Foul-Out & Odor",
      description:
        "Anaerobic and aerobic bacteria multiply rapidly, metabolizing organic binders and producing noxious hydrogen sulfide and organic acid odors.",
      accent: "border-rose-300 bg-rose-50/60 text-rose-900",
      iconColor: "text-rose-600 bg-rose-100",
    },
    {
      icon: Droplets,
      title: "Viscosity Breakdown",
      description:
        "Microbial enzymes rapidly cleave cellulosic (HEC), starch, and associative polyurethane thickeners, reducing thick paints to watery sludge.",
      accent: "border-amber-300 bg-amber-50/60 text-amber-900",
      iconColor: "text-amber-600 bg-amber-100",
    },
    {
      icon: Gauge,
      title: "Can Bloating & Rupture",
      description:
        "Metabolic CO2, methane, and hydrogen gas generation creates internal container pressure, bulging tin lids and triggering hazardous warehouse leaks.",
      accent: "border-purple-300 bg-purple-50/60 text-purple-900",
      iconColor: "text-purple-600 bg-purple-100",
    },
    {
      icon: AlertCircle,
      title: "Phase Separation & Curdling",
      description:
        "Microbial destruction of emulsifier envelopes disrupts electrostatic balance, resulting in irreversible pigment settling and batch rejection.",
      accent: "border-blue-300 bg-blue-50/60 text-blue-900",
      iconColor: "text-blue-600 bg-blue-100",
    },
  ];

  return (
    <section className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Header & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
              What is an in–can preservative?
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 text-base sm:text-lg text-black/80 font-normal leading-relaxed">
            <p>
              In-can biocides are specialized antimicrobial chemical compounds formulated directly
              into water-based liquid systems to inhibit bacterial and fungal contamination during
              manufacture, packaging, warehouse storage, and consumer shelf life.
            </p>
            <p>
              Aqueous formulations—such as paints, polymer emulsions, and adhesives—provide an ideal
              nutrient-rich environment for airborne and waterborne microbes. Without a reliable,
              non-volatile in-can active, contaminating bacteria proliferate exponentially, causing
              severe batch degradation before the product ever reaches the end contractor.
            </p>
          </div>
        </div>

        {/* 4 Failure Modes */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-[#101E10]">
              Catastrophic failure modes in unprotected water–based batches:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {failureModes.map((mode, idx) => {
              const Icon = mode.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-[24px] p-7 border flex flex-col justify-between gap-5 transition-all shadow-xs ${mode.accent}`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-none ${mode.iconColor}`}>
                    <Icon size={22} />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold leading-snug">
                      {mode.title}
                    </h4>
                    <p className="text-xs sm:text-sm font-normal leading-relaxed opacity-90">
                      {mode.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
