"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Scale,
  Flame,
  Wind,
  Leaf,
  Layers,
  Sparkles,
  Download,
  FileText,
  Award,
  Factory,
  Clock,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

export default function ProductWhyChoose() {
  const [activeToggle, setActiveToggle] = useState<"benefits" | "chemtiver">("benefits");

  const productBenefits = [
    {
      title: "Broad-spectrum Control",
      description:
        "Highly effective against Gram-negative motile rods (Pseudomonas, Burkholderia) and Gram-positive vegetative colonies, protecting formulations from batch foul-outs.",
      icon: ShieldCheck,
      isGreen: true,
    },
    {
      title: "Handles Alkaline Products",
      description:
        "Retains maximum biocidal efficacy across a wide pH range of 4.0 to 12.0. Ideal for highly alkaline polymer emulsions, mortars, and mineral finishes.",
      icon: Scale,
      isGreen: false,
    },
    {
      title: "Heat-stable",
      description:
        "Withstands elevated processing temperatures up to 100°C without chemical breakdown. Safe for direct addition during high-speed grinding cycles.",
      icon: Flame,
      isGreen: false,
    },
    {
      title: "Non-volatile",
      description:
        "Stays within the liquid product instead of evaporating into headspace air, guaranteeing sustained preservative activity across years of storage.",
      icon: Wind,
      isGreen: false,
    },
    {
      title: "Formaldehyde-free",
      description:
        "Zero formaldehyde or formaldehyde-releasing donors. Helps manufacturers achieve stringent low-VOC and global eco-label accreditations.",
      icon: Leaf,
      isGreen: false,
    },
    {
      title: "Works with Amines",
      description:
        "Chemically stable in formulations containing secondary and tertiary amines, without degradation or discoloration over time.",
      icon: Layers,
      isGreen: false,
    },
    {
      title: "Blends Well",
      description:
        "Fully miscible in water and glycols. Disperses homogeneously without excessive shear, air entrapment, or phase separation.",
      icon: Sparkles,
      isGreen: false,
    },
  ];

  const chemtiverBenefits = [
    {
      title: "Gurugram Manufacturing",
      description:
        "Direct production in our specialized synthesis plant, ensuring robust batch traceability and verified chemical purity.",
      icon: Factory,
      isGreen: true,
    },
    {
      title: "48-Hour Sample Dispatch",
      description:
        "Evaluation samples with lot-specific documentation dispatched directly to formulators within two business days.",
      icon: Clock,
      isGreen: false,
    },
    {
      title: "HPLC Assay Verification",
      description:
        "Every batch is analytically validated with HPLC chromatography assays before release from our quality control facility.",
      icon: FlaskConical,
      isGreen: false,
    },
    {
      title: "ISO 9001:2015 Accredited",
      description:
        "Strict quality management standards govern raw material qualification, blending consistency, and packaging security.",
      icon: Award,
      isGreen: false,
    },
    {
      title: "Full Regulatory Dossiers",
      description:
        "REACH, BPR readiness, TDS, SDS, and GHS-compliant transport documentation provided for domestic and export compliance.",
      icon: FileText,
      isGreen: false,
    },
    {
      title: "Direct Technical Guidance",
      description:
        "Analytical chemists available directly to troubleshoot plant hygiene, compatibility trials, and minimum inhibitory dosing.",
      icon: ShieldCheck,
      isGreen: false,
    },
    {
      title: "Reliable Supply Chain",
      description:
        "Buffer stocks maintained on Delhi–Jaipur highway with rapid road and sea freight access to export gateways.",
      icon: CheckCircle2,
      isGreen: false,
    },
  ];

  const cards = activeToggle === "benefits" ? productBenefits : chemtiverBenefits;

  return (
    <section className="w-full bg-[#101E10] py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Hexagon Pattern at top-right of dark section */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none bg-[url('/images/technical-expertise-hexagons.svg')] bg-no-repeat bg-right-top bg-contain"
      />

      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12 relative z-10">
        {/* Header with Title and Toggle at Top-Right (No Subtitle) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight">
            Why choose GuardExo BT 20
          </h2>

          {/* Toggle at Top-Right */}
          <div className="flex items-center bg-[#182618] border border-white/10 p-1.5 rounded-2xl w-fit">
            <button
              type="button"
              onClick={() => setActiveToggle("benefits")}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeToggle === "benefits"
                  ? "bg-[#C6F19D] text-[#101E10] shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Product benefits
            </button>
            <button
              type="button"
              onClick={() => setActiveToggle("chemtiver")}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeToggle === "chemtiver"
                  ? "bg-[#C6F19D] text-[#101E10] shadow-sm"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Why buy from Chemtiver
            </button>
          </div>
        </div>

        {/* 7-Card Bento Layout: Light-coloured cards, first card green with hexagon artwork, icons in black squares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isGreen = card.isGreen;

            return (
              <div
                key={idx}
                className={`rounded-[24px] p-7 flex flex-col justify-between gap-6 transition-all relative overflow-hidden shadow-sm ${
                  isGreen
                    ? "bg-[#C6F19D] text-[#101E10] xl:col-span-2"
                    : "bg-[#F5F4F2] text-[#101E10]"
                }`}
              >
                {/* Hexagon artwork overlay on first green card */}
                {isGreen && (
                  <div
                    className="absolute -right-8 -bottom-8 w-52 h-52 opacity-25 pointer-events-none bg-[url('/images/technical-expertise-hexagons.svg')] bg-no-repeat bg-contain"
                  />
                )}

                {/* Icon inside black square */}
                <div className="w-11 h-11 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center flex-none shadow-xs">
                  <Icon size={20} />
                </div>

                <div className="flex flex-col gap-2 relative z-10">
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#101E10] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-black/75 font-normal leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Documents Bar */}
        <div className="bg-[#182618] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-2">
          <div className="flex items-center gap-3">
            <span className="text-sm font-bold uppercase tracking-wider text-[#C6F19D]">
              Documents
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="text-xs sm:text-sm text-white/70">
              Download technical files for regulatory and formulation approval
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-bold text-white">
            <a
              href="#specs"
              className="inline-flex items-center gap-1.5 hover:text-[#C6F19D] transition-colors"
            >
              Technical Data Sheet ↓
            </a>
            <span className="text-white/20">|</span>
            <a
              href="#specs"
              className="inline-flex items-center gap-1.5 hover:text-[#C6F19D] transition-colors"
            >
              Safety Data Sheet ↓
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/80">
              Certificate of Analysis (with every batch)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
