"use client";

import React, { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";

interface NewsHeroProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const CATEGORIES = [
  "All",
  "Technical Insights",
  "Company News",
  "Regulatory",
  "Industry News",
  "Product Updates",
];

export default function NewsHero({
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
}: NewsHeroProps) {
  const latestPress = [
    {
      date: "14 Mar 2025",
      title: "Chemtiver Expands Analytical Synthesis Lab Capacity in Gurugram",
      href: "#press",
    },
    {
      date: "28 Feb 2025",
      title: "GuardExo Publishes 2025 Biocide Regulatory & Compliance Dossier",
      href: "#press",
    },
    {
      date: "12 Jan 2025",
      title: "New Technical Study on In-Can Emulsion Preservation Under Tropical Humidity",
      href: "#press",
    },
  ];

  return (
    <section className="w-full bg-white pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-neutral-200/70">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Headline, Search, Filter Pills */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C4EF9C]/40 border border-[#B9AEFF]/30 w-fit backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[#101E10] animate-pulse" />
                <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-[#101E10]">
                  NEWS & INSIGHTS
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-[#101E10] leading-[1.12] tracking-tight">
                Insights and updates from the GuardExo team.
              </h1>

              <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed max-w-2xl">
                Company announcements, technical insights, regulatory changes and product updates for
                manufacturers who rely on biocides and preservatives.
              </p>
            </div>

            {/* Search Input */}
            <div className="flex flex-col gap-5">
              <div className="relative w-full max-w-xl">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search articles, press and updates..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-[#F5F4F2] border border-black/20 focus:border-[#101E10] rounded-xl pl-12 pr-4 py-3.5 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#101E10]/15 text-[#101E10] placeholder:text-black/40 transition-all"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2.5">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => onSelectCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#C6F19D] text-[#101E10] shadow-sm font-bold"
                          : "bg-[#F5F4F2] hover:bg-neutral-200/70 text-black/80"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Latest Press Callout Card */}
          <div className="lg:col-span-5 relative bg-[#C6F19D]/30 border border-[#C6F19D] rounded-[24px] p-8 sm:p-10 flex flex-col gap-8 shadow-sm overflow-hidden">
            {/* Watermark shape */}
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-[#5AB900]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between relative z-10">
              <span className="bg-white text-[#101E10] text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-md shadow-xs">
                Latest
              </span>
              <a
                href="#press"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] group"
              >
                View all press
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>

            {/* 3 Featured Press Items */}
            <div className="flex flex-col divide-y divide-[#101E10]/15 relative z-10">
              {latestPress.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group py-5 first:pt-0 last:pb-0 flex items-start justify-between gap-4 transition-all"
                >
                  <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-semibold text-black/60 uppercase tracking-wide">
                      {item.date}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#101E10] group-hover:text-[#5AB900] leading-snug transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/70 group-hover:bg-[#101E10] text-[#101E10] group-hover:text-[#C6F19D] flex items-center justify-center flex-none transition-all mt-1">
                    <ArrowUpRight size={16} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
