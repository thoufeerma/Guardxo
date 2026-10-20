"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Check,
  Microscope,
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
    {
      line1: "20% w/w active BIT (CAS",
      line2: "2634-33-5)",
    },
    {
      line1: "Works wide pH range",
      line2: "(approx. 4 to 12)",
    },
    {
      line1: "Heat-stable & non-volatile",
      line2: "active",
    },
    {
      line1: "Zero formaldehyde or",
      line2: "releasers",
    },
    {
      line1: "Low dose, cost-effective",
      line2: "stability",
    },
    {
      line1: "SDS, TDS & COA with every",
      line2: "batch",
    },
  ];

  const keyFigures = [
    { value: "20%", label: "Active BIT" },
    { value: "pH 4–12", label: "Range" },
    { value: "0.05–0.25%", label: "Typical Dose" },
    { value: "24 M", label: "Shelf Life" },
    { value: "25–1k kg", label: "Pack Size" },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200/80">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
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
          <div className="lg:col-span-6 flex flex-col gap-5">
            {/* Badges */}
            <div className="flex items-center gap-3">
              <span className="bg-[#E4F7C8] text-[#101E10] text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                IN-CAN PRESERVATIVE
              </span>
              <span className="text-xs font-mono font-bold text-neutral-800">
                CAS 2634-33-5
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#101E10] leading-[1.12] tracking-tight">
              GuardExo BT 20 — 20% BIT<br />In–Can Preservative
            </h1>

            <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
              Broad-spectrum, formaldehyde-free protection for water-based paints,
              adhesives, emulsions, and industrial fluids.
            </p>

            <p className="text-xs sm:text-[14px] text-neutral-600 font-normal leading-relaxed">
              GuardExo BT 20 is a ready-to-use 20% solution of 1,2-benzisothiazolin-3-one (BIT), from
              Chemtiver Speciality. It stops bacteria, yeast, and mould from spoiling water-based
              products while they sit in the can, the drum, or the warehouse. A small dose, usually 0.05%
              to 0.25%, keeps a product fresh for its full shelf life.
            </p>

            {/* Six-point Checklist (3-column grid matching Figma screenshot) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 gap-y-3.5 pt-1">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-[#B8F086] text-[#101E10] flex items-center justify-center flex-none mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <div className="text-[12px] sm:text-[13px] leading-snug text-[#101E10] font-normal">
                    <span>{item.line1}</span>
                    <br />
                    <span>{item.line2}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Green Key-Figures Bar */}
            <div className="bg-[#E4F7C8] rounded-[20px] py-4 px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center my-1 border-0 shadow-none">
              {keyFigures.map((fig, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-xl sm:text-[22px] font-bold text-[#101E10] leading-tight">
                    {fig.value}
                  </span>
                  <span className="text-[11px] sm:text-xs font-normal text-[#101E10] pt-1">
                    {fig.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs: Dark Request a Quote button + Download TDS & Request Sample text links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center bg-[#101E10] hover:bg-[#1a2e1a] text-[#C6F19D] py-3 px-7 rounded-[14px] font-bold text-sm transition-all shadow-xs active:scale-98"
              >
                Request a Quote
              </a>

              <a
                href="#specs"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors"
              >
                <FileText size={18} />
                <span>Download TDS</span>
              </a>

              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#101E10] hover:text-[#5AB900] transition-colors"
              >
                <Microscope size={18} />
                <span>Request Sample</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
