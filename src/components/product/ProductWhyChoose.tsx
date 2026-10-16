"use client";

import React from "react";
import { ShieldCheck, Thermometer, Sparkles, Droplet, Award } from "lucide-react";

export default function ProductWhyChoose() {
  const benefits = [
    {
      icon: ShieldCheck,
      title: "Broad-spectrum bacterial control",
      description:
        "Highly effective against Gram-negative motile rods (Pseudomonas, Burkholderia) and Gram-positive vegetative colonies, preventing enzymatic breakdown of polymers.",
    },
    {
      icon: Thermometer,
      title: "High pH & Thermal Resilience",
      description:
        "Operates reliably across the entire pH 4.0 to 12.0 continuum and withstands temperatures up to 100°C during high-speed grinding without chemical decomposition.",
    },
    {
      icon: Sparkles,
      title: "Zero Formaldehyde & Low VOC",
      description:
        "Does not emit formaldehyde or volatile secondary amines. Formulators achieve Blue Angel, Nordic Swan, and LEED compliance with ease.",
    },
    {
      icon: Droplet,
      title: "Immediate Homogeneous Dissolution",
      description:
        "Pre-dissolved in a dedicated dipropylene glycol carrier matrix. Integrates smoothly into mixing tanks with zero lump formation or excessive aeration.",
    },
    {
      icon: Award,
      title: "Batch-to-Batch HPLC Purity",
      description:
        "Manufactured in our dedicated Gurugram facility under ISO 9001:2015 quality controls with validated active assays certified on every Certificate of Analysis.",
    },
  ];

  return (
    <section className="w-full bg-[#101E10] py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#5AB900]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#C6F19D]">
            WHY GUARDEXO BT 20
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
            Why manufacturers choose GuardExo BT 20
          </h2>
          <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
            Key formulation benefits that protect product shelf life, save costly batch reworks,
            and pass the most demanding commercial customer audits.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="bg-[#182618] border border-white/10 rounded-[24px] p-7 sm:p-8 flex flex-col justify-between gap-6 hover:border-[#5AB900]/50 transition-all shadow-md group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none group-hover:scale-105 transition-transform">
                  <Icon size={24} />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#C6F19D] transition-colors leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-300 font-normal leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
