"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileText,
  Download,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function ProductHero() {
  const [activeImage, setActiveImage] = useState(0);

  const gallery = [
    {
      src: "/images/product-bt20-canister.jpg",
      alt: "GuardExo BT 20 front canister view",
    },
    {
      src: "/images/product-bt20-canister.jpg",
      alt: "GuardExo BT 20 angle view",
    },
    {
      src: "/images/product-bt20-canister.jpg",
      alt: "GuardExo BT 20 warehouse view",
    },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-16 lg:pt-14 lg:pb-24 border-b border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-black/60 pb-6">
          <Link href="/" className="hover:text-[#5AB900] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link
            href="/#categories"
            className="hover:text-[#5AB900] transition-colors"
          >
            In-Can Preservatives
          </Link>
          <span>/</span>
          <span className="text-[#101E10] font-bold">GuardExo BT 20</span>
        </div>

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
          <div className="lg:col-span-6 flex flex-col gap-7">
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

            {/* Dosage & Properties Metric Box */}
            <div className="bg-white border border-neutral-300 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                  TYPICAL INDUSTRY DOSAGE
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#101E10]">
                  0.05% – 0.25% <span className="text-sm font-normal text-black/60">w/w</span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101E10] bg-white px-3 py-1.5 rounded-lg border border-neutral-200 shadow-2xs">
                  <ShieldCheck size={14} className="text-[#5AB900]" />
                  Zero VOC
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101E10] bg-white px-3 py-1.5 rounded-lg border border-neutral-200 shadow-2xs">
                  <CheckCircle2 size={14} className="text-[#5AB900]" />
                  pH 4.0 – 12.0
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
              <a
                href="#inquiry"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3.5 px-6 rounded-xl font-bold text-base transition-all shadow-md active:scale-98"
              >
                Request Sample
                <ArrowRight size={18} />
              </a>

              <a
                href="#inquiry"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#101E10] border border-neutral-300 py-3.5 px-6 rounded-xl font-bold text-base transition-all shadow-xs"
              >
                Request Quote
              </a>
            </div>

            {/* Document Downloads Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold text-[#101E10]">
              <a
                href="#specs"
                className="inline-flex items-center gap-1.5 hover:text-[#5AB900] transition-colors p-2 rounded-lg bg-white border border-neutral-200 shadow-2xs"
              >
                <Download size={14} />
                Download TDS (PDF)
              </a>
              <a
                href="#specs"
                className="inline-flex items-center gap-1.5 hover:text-[#5AB900] transition-colors p-2 rounded-lg bg-white border border-neutral-200 shadow-2xs"
              >
                <FileText size={14} />
                Download SDS (PDF)
              </a>
              <a
                href="#specs"
                className="inline-flex items-center gap-1.5 hover:text-[#5AB900] transition-colors p-2 rounded-lg bg-white border border-neutral-200 shadow-2xs"
              >
                <ShieldCheck size={14} />
                Download COA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
