"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Download,
  ArrowRight,
  ShieldCheck,
  Check,
  CheckCircle2,
} from "lucide-react";

export default function ProductHero() {
  const [activeImage, setActiveImage] = useState(0);

  const gallery = [
    {
      src: "/in-can-preservatives/can image.png",
      alt: "GuardExo BT 20 front canister view",
    },
    {
      src: "/in-can-preservatives/can image.png",
      alt: "GuardExo BT 20 angle view",
    },
    {
      src: "/in-can-preservatives/can image.png",
      alt: "GuardExo BT 20 warehouse view",
    },
  ];

  const checklist = [
    "20% w/w Active BIT",
    "Works Across a Wide pH Range",
    "Heat-Stable & Non-Volatile",
    "Zero Formaldehyde",
    "Low Dose",
    "SDS/TDS/COA with Every Batch",
  ];

  const keyFigures = [
    { value: "20%", label: "Active BIT" },
    { value: "pH 4–12", label: "Working Range" },
    { value: "0.05–0.25%", label: "Typical Dose" },
    { value: "24 M", label: "Shelf Life" },
    { value: "25–1k kg", label: "Pack Size" },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        {/* 2-Column Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Product Gallery */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {/* Main Stage */}
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[540px] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-white border border-neutral-200/80 shadow-md">
              <Image
                src={gallery[activeImage].src}
                alt={gallery[activeImage].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />

              {/* Tag Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-lg text-xs font-extrabold uppercase tracking-wider text-[#101E10] shadow-sm border border-neutral-200">
                IN-CAN PRESERVATIVE
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {gallery.map((thumb, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 sm:h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-white ${
                    activeImage === idx
                      ? "border-[#101E10] ring-2 ring-[#C6F19D]"
                      : "border-neutral-200 hover:border-black/40 opacity-80 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={thumb.src}
                    alt={thumb.alt}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative & Technical Specifications Summary */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Badges */}
            <div className="flex items-center gap-3">
              <span className="bg-[#C6F19D] text-[#101E10] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                IN-CAN PRESERVATIVE
              </span>
              <span className="text-xs font-mono font-bold text-black/60 bg-neutral-100 px-3 py-1 rounded-md border border-neutral-200">
                CAS 2634-33-5
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#101E10] leading-tight">
              GuardExo BT 20 — 20% BIT In–Can Preservative
            </h1>

            <p className="text-lg text-black/85 font-medium leading-relaxed">
              Broad-spectrum, formaldehyde-free protection for water-based paints, adhesives,
              emulsions, and industrial fluids.
            </p>

            <p className="text-sm sm:text-base text-black/75 font-normal leading-relaxed">
              A ready-to-use 20% solution of 1,2-benzisothiazolin-3-one (BIT), preventing
              bacteria, yeast, and mould from spoiling water-based formulations in the can, the drum,
              or the warehouse. A small dose, usually 0.05% to 0.25%, keeps products fresh for its
              full shelf life.
            </p>

            {/* Six-point Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span className="text-sm font-semibold text-[#101E10]">{item}</span>
                </div>
              ))}
            </div>

            {/* Green Key-Figures Bar */}
            <div className="bg-[#EEFBE2] rounded-2xl p-4 sm:p-5 grid grid-cols-2 sm:grid-cols-5 gap-4 text-center my-2 border border-[#C6F19D]/50">
              {keyFigures.map((fig, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-lg sm:text-xl font-extrabold text-[#101E10] leading-tight">
                    {fig.value}
                  </span>
                  <span className="text-[11px] font-medium text-black/70 pt-0.5">
                    {fig.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs: Dark Request a Quote button + Download TDS & Request Sample text links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3.5 px-8 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md active:scale-98"
              >
                Request a Quote
              </a>

              <a
                href="#specs"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors"
              >
                Download TDS
                <ArrowRight size={16} />
              </a>

              <a
                href="#inquiry"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors"
              >
                Request Sample
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
