"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";

export default function InCanHero() {
  return (
    <section className="w-full bg-white pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Key Value Props */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C4EF9C]/40 border border-[#B9AEFF]/30 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#101E10] animate-pulse" />
              <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#101E10]">
                IN-CAN PRESERVATIVES
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#101E10] leading-[1.12] tracking-tight">
              In–Can Preservatives for Water–Based Products
            </h1>

            <p className="text-lg sm:text-xl text-black/80 font-normal leading-relaxed max-w-2xl">
              Prevent bacterial foul-outs, viscosity loss and container bloating across your entire
              supply chain with GuardExo&apos;s proven wet-state preservation chemistries.
            </p>

            {/* 3 Metric Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none">
                  <Clock size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#101E10]">48-Hour Dispatch</span>
                  <span className="text-[11px] text-black/60">Sample kits ready</span>
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none">
                  <Sparkles size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#101E10]">Zero Formaldehyde</span>
                  <span className="text-[11px] text-black/60">Low-VOC & SVHC free</span>
                </div>
              </div>

              <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none">
                  <Award size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#101E10]">REACH & BPR</span>
                  <span className="text-[11px] text-black/60">Global compliance</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
              <a
                href="#products-range"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3.5 px-8 rounded-xl font-bold text-base transition-all shadow-md active:scale-98"
              >
                Explore Product Range
                <ArrowRight size={18} />
              </a>

              <a
                href="#inquiry"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-100 text-[#101E10] border border-neutral-300 py-3.5 px-8 rounded-xl font-bold text-base transition-all shadow-xs"
              >
                Request Technical Advice
              </a>
            </div>
          </div>

          {/* Right Column: Visual Stage */}
          <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] lg:h-[500px] rounded-[28px] overflow-hidden bg-white border border-neutral-200/80 shadow-lg">
            <Image
              src="/in-can-preservatives/can image.png"
              alt="GuardExo BT 20P In-Can Preservatives Canister"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />

            {/* Floating Quality Assurance Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-neutral-200 shadow-md flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#101E10] text-[#C6F19D] flex items-center justify-center flex-none">
                <ShieldCheck size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#101E10] uppercase tracking-wider">
                  Industrial Biocidal Integrity
                </span>
                <span className="text-[11px] text-black/70">
                  Formulated at Chemtiver Speciality Gurugram manufacturing complex.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
