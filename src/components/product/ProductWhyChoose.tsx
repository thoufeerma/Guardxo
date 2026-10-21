"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Thermometer,
  Lock,
  Leaf,
  Droplet,
  Download,
  FileText,
  Award,
  Factory,
  Clock,
  FlaskConical,
  CheckCircle2,
} from "lucide-react";

function InterlockingCirclesIcon({ className, size = 22 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="8.5" cy="12" r="5" />
      <circle cx="15.5" cy="12" r="5" />
    </svg>
  );
}

export default function ProductWhyChoose() {
  const [activeToggle, setActiveToggle] = useState<"benefits" | "chemtiver">("benefits");

  const productBenefits = [
    {
      title: "Broad–spectrum control",
      description:
        "Strong against bacteria, including Pseudomonas, plus yeasts and many fungi in the can.",
      icon: ShieldCheck,
      isGreen: true,
    },
    {
      title: "Handles alkaline products",
      description:
        "Works in high–pH paints and emulsions where some other biocides break down.",
      icon: FlaskConical,
      isGreen: false,
    },
    {
      title: "Heat-stable",
      description:
        "Survives hot processing steps, so you can dose early in production.",
      icon: Thermometer,
      isGreen: false,
    },
    {
      title: "Non–volatile",
      description:
        "Stays in the product instead of escaping into the air, giving long protection.",
      icon: Lock,
      isGreen: false,
    },
    {
      title: "Formaldehyde–free",
      description:
        "No formaldehyde or formaldehyde releasers. Helps you meet low–VOC and green–label goals.",
      icon: Leaf,
      isGreen: false,
    },
    {
      title: "Works with amines",
      description:
        "Stable in amine-neutralised systems, common in paints and emulsions.",
      icon: Droplet,
      isGreen: false,
    },
    {
      title: "Blends well",
      description:
        "Can be paired with MIT, CMIT/MIT or dry–film fungicides when you need wider or faster action.",
      icon: InterlockingCirclesIcon,
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
      {/* Top-Right Hexagon Artwork from Why choose GuardExo BT 20.png */}
      <div className="absolute top-0 right-0 w-full max-w-[1024px] h-[342px] pointer-events-none select-none z-0">
        <Image
          src="/images/Why choose GuardExo BT 20.png"
          alt="Why choose GuardExo BT 20 background hexagons"
          fill
          className="object-contain object-right-top"
          priority
        />
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10 lg:gap-12 relative z-10">
        {/* Header with Title and Toggle at Top-Right (No Subtitle) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white leading-tight tracking-tight">
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

        {/* 7-Card Bento Layout: 4 columns, Top row: 2+1+1, Bottom row: 1+1+1+1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 items-stretch">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            const isGreen = card.isGreen;

            return (
              <div
                key={idx}
                className={`rounded-[24px] p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[240px] gap-6 transition-all relative overflow-hidden shadow-sm ${
                  isGreen
                    ? "bg-[#C6F19D] bg-[url('/images/broad%20spectrum%20control.png')] bg-cover bg-right text-[#101E10] md:col-span-2 lg:col-span-2"
                    : "bg-[#F5F4F2] text-[#101E10] col-span-1"
                }`}
              >
                {/* Icon inside black rounded container */}
                <div className="w-12 h-12 rounded-[14px] bg-[#101E10] text-[#76D127] flex items-center justify-center flex-none shadow-xs">
                  <Icon size={22} />
                </div>

                <div className="flex flex-col gap-2 relative z-10 mt-auto">
                  <h3 className="text-xl sm:text-[22px] font-bold text-[#101E10] leading-snug tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13.5px] lg:text-[14px] text-neutral-800 font-medium leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Documents Bar: Segmented Pill matching Figma design exactly */}
        <div className="w-full bg-white rounded-2xl sm:rounded-[20px] overflow-hidden flex flex-col md:flex-row items-stretch shadow-md border border-white/10 mt-2">
          {/* Segment 1: Documents */}
          <div className="bg-[#C6F19D] text-[#101E10] px-7 lg:px-9 py-3.5 sm:py-4.5 flex items-center justify-center font-bold text-sm sm:text-base flex-none tracking-tight">
            Documents
          </div>

          {/* Segment 2: Technical Data Sheet */}
          <a
            href="#specs"
            className="bg-white hover:bg-neutral-50 text-[#101E10] px-6 py-3.5 sm:py-4.5 flex-1 flex items-center justify-center gap-2 font-bold text-sm sm:text-base border-t md:border-t-0 md:border-l border-neutral-200 transition-colors group"
          >
            <span>Technical Data Sheet</span>
            <Download size={17} strokeWidth={2.4} className="text-[#101E10] transition-transform group-hover:translate-y-0.5" />
          </a>

          {/* Segment 3: Safety Data Sheet */}
          <a
            href="#specs"
            className="bg-white hover:bg-neutral-50 text-[#101E10] px-6 py-3.5 sm:py-4.5 flex-1 flex items-center justify-center gap-2 font-bold text-sm sm:text-base border-t md:border-t-0 md:border-l border-neutral-200 transition-colors group"
          >
            <span>Safety Data Sheet</span>
            <Download size={17} strokeWidth={2.4} className="text-[#101E10] transition-transform group-hover:translate-y-0.5" />
          </a>

          {/* Segment 4: Certificate of Analysis with WITH EVERY BATCH badge */}
          <div className="bg-white text-[#101E10] px-6 py-3.5 sm:py-4.5 flex-1 flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base border-t md:border-t-0 md:border-l border-neutral-200">
            <span>Certificate of Analysis</span>
            <span className="bg-[#C6F19D] text-[#101E10] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-sm">
              WITH EVERY BATCH
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
