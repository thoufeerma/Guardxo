"use client";

import React from "react";
import Image from "next/image";
import { Search, ArrowRight } from "lucide-react";

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
      date: "14 MAR 2025",
      title: "Chemtiver Expands Analytical Synthesis Lab Capacity in Gurugram",
      href: "#press",
    },
    {
      date: "28 FEB 2025",
      title: "GuardExo Publishes 2025 Biocide Regulatory & Compliance Dossier",
      href: "#press",
    },
    {
      date: "12 JAN 2025",
      title: "New Technical Study on In-Can Emulsion Preservation Under Tropical Humidity",
      href: "#press",
    },
  ];

  return (
    <section className="w-full bg-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* Left Column: Headline, Search, Filter Pills */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              {/* NEWS & INSIGHTS Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECFAE0] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#101E10]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#101E10]">
                  NEWS & INSIGHTS
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[62px] font-extrabold text-[#101E10] leading-[1.08] tracking-tight">
                Insights and<br className="hidden sm:inline" />
                {" "}updates from the<br className="hidden sm:inline" />
                {" "}GuardExo team.
              </h1>

              {/* Description */}
              <p className="text-[15px] sm:text-base text-gray-700 font-medium leading-relaxed max-w-[520px]">
                Company announcements, technical insights, regulatory changes and product updates for
                manufacturers who rely on biocides and preservatives.
              </p>
            </div>

            {/* Search & Categories */}
            <div className="flex flex-col gap-5">
              {/* Search Input */}
              <div className="relative w-full max-w-[520px]">
                <Search
                  size={18}
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <input
                  type="text"
                  placeholder="Search articles, press and updates..."
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-[#F9FAFB] border border-gray-200 focus:border-[#101E10] rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#101E10] text-[#101E10] placeholder:text-gray-400 transition-all shadow-2xs"
                />
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap items-center gap-2 max-w-[620px]">
                {CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => onSelectCategory(cat)}
                      className={`px-3.5 py-1.5 rounded-[8px] text-xs sm:text-[13px] transition-all cursor-pointer border-0 ${
                        isActive
                          ? "bg-[#C6F19D] text-[#101E10] font-semibold shadow-xs"
                          : "bg-[#F3F4F6] text-[#101E10] font-medium hover:bg-gray-200"
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
          <div className="lg:col-span-6 relative bg-[#ECFAE0] rounded-[24px] sm:rounded-[28px] lg:rounded-[32px] p-8 sm:p-10 lg:p-12 flex flex-col justify-between overflow-hidden shadow-xs min-h-[500px]">
            {/* Background Graphic with Hexagons matching shared image */}
            <Image
              src="/images/news-latest-card-bg.png"
              alt="Hexagons pattern"
              fill
              className="object-cover object-right-bottom pointer-events-none select-none z-0"
              priority
            />

            {/* Header */}
            <div className="flex items-center justify-between relative z-10 mb-8 sm:mb-10">
              <span className="bg-white text-[#101E10] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] shadow-2xs">
                LATEST
              </span>
              <a
                href="#press"
                className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#101E10] hover:text-[#5AB900] group transition-colors"
              >
                View all press
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>

            {/* 3 Featured Press Items */}
            <div className="flex flex-col gap-9 sm:gap-11 lg:gap-12 relative z-10">
              {latestPress.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group flex items-start justify-between gap-6 transition-all"
                >
                  <div className="flex flex-col gap-1.5 flex-1 pr-2">
                    <span className="text-xs font-semibold text-[#101E10]/70 uppercase tracking-wider">
                      {item.date}
                    </span>
                    <h3 className="text-lg sm:text-[19px] lg:text-[20px] font-bold text-[#101E10] group-hover:text-[#5AB900] leading-snug transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  {/* Dark squircle arrow button matching Figma 48x48 rounded-16px */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-[16px] bg-[#101E10] text-[#C6F19D] flex items-center justify-center flex-none transition-transform group-hover:scale-105 shadow-xs mt-1">
                    <ArrowRight size={18} strokeWidth={2.2} />
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
