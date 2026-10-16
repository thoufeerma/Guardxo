"use client";

import React from "react";
import {
  Wind,
  Leaf,
  Scale,
  Flame,
  AlertTriangle,
  Biohazard,
  Droplets,
  Bug,
  Gauge,
} from "lucide-react";

export default function ProductOverview() {
  const issues = [
    { label: "Go sour", icon: AlertTriangle, color: "text-amber-700 bg-amber-50 border-amber-200" },
    { label: "Smell bad", icon: Biohazard, color: "text-rose-700 bg-rose-50 border-rose-200" },
    { label: "Lose thickness", icon: Droplets, color: "text-blue-700 bg-blue-50 border-blue-200" },
    { label: "Grow surface mould", icon: Bug, color: "text-emerald-700 bg-emerald-50 border-emerald-200" },
    { label: "Container gas pressure", icon: Gauge, color: "text-purple-700 bg-purple-50 border-purple-200" },
  ];

  const features = [
    {
      icon: Wind,
      title: "Non-volatile",
      description:
        "Stays within the liquid product instead of vaporizing into the air during storage, providing sustained long-term protection.",
    },
    {
      icon: Leaf,
      title: "Formaldehyde-free",
      description:
        "Zero formaldehyde or formaldehyde-releasing donors. Helps manufacturers achieve stringent low-VOC and global green-label compliance.",
    },
    {
      icon: Scale,
      title: "Handles alkaline products",
      description:
        "Retains maximum biocidal efficacy across a wide pH range of 4.0 to 12.0. Ideal for highly alkaline polymer emulsions and plasters.",
    },
    {
      icon: Flame,
      title: "Heat-stable up to 100°C",
      description:
        "Withstands elevated processing temperatures without chemical thermal breakdown. Can be introduced directly during high-shear grind cycles.",
    },
  ];

  return (
    <section className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Header & Narrative */}
        <div className="flex flex-col gap-5 max-w-4xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            OVERVIEW
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
            What is GuardExo BT 20?
          </h2>
          <p className="text-base sm:text-lg text-black/85 font-normal leading-relaxed">
            GuardExo BT 20 is an in-can preservative engineered for long-term liquid stabilization.
            It acts as an impenetrable shield for water-based products during critical warehouse shelf
            time and distribution logistics before application.
          </p>
          <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
            The active substance is <span className="font-bold text-[#101E10]">1,2-benzisothiazolin-3-one (BIT)</span>,
            one of the world&apos;s most proven preservation chemistries. GuardExo BT 20 delivers this
            in an ultra-stable 20% liquid solution in dipropylene glycol and water, eliminating cumbersome
            solid powder handling, toxic dust inhalation risks, or complex plant dissolving steps.
          </p>
        </div>

        {/* Unprotected Risks Strip */}
        <div className="bg-white rounded-[24px] p-6 sm:p-8 border border-neutral-200/80 shadow-xs flex flex-col gap-4">
          <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-black/70">
            Water-based batches face these failure risks when left unprotected:
          </span>

          <div className="flex flex-wrap items-center gap-3">
            {issues.map((issue, idx) => {
              const Icon = issue.icon;
              return (
                <div
                  key={idx}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold border ${issue.color} shadow-2xs`}
                >
                  <Icon size={16} />
                  {issue.label}
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Feature Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-[24px] p-7 flex flex-col justify-between gap-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#C6F19D] text-[#101E10] flex items-center justify-center flex-none group-hover:scale-105 transition-transform">
                  <Icon size={24} />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold text-[#101E10] leading-snug">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-black/75 font-normal leading-relaxed">
                    {feat.description}
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
