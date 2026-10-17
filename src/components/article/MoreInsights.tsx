"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const MORE_INSIGHTS_DATA = [
  {
    category: "TECHNICAL INSIGHTS",
    date: "11 MAR 2025",
    title: "CMIT/MIT and BIT in water-based paints: what to know",
    excerpt:
      "Comparative stability matrix evaluating chloromethylisothiazolinone vs benzisothiazolinone in elevated alkaline acrylic systems.",
    href: "/news",
  },
  {
    category: "TECHNICAL INSIGHTS",
    date: "02 MAR 2025",
    title: "Signs your emulsion paint is losing preservative protection",
    excerpt:
      "Early-stage degradation indicators: viscosity decay, micro-gas accumulation, discoloration, and rapid challenge test protocols to restore stability.",
    href: "/news",
  },
  {
    category: "REGULATORY",
    date: "24 FEB 2025",
    title: "What a COA, TDS and SDS tell you about a batch",
    excerpt:
      "Deconstructing chemical certificates for biocide procurement: active percentage thresholds, impurity profiles, and toxicological safety data.",
    href: "/news",
  },
];

export default function MoreInsights() {
  return (
    <section className="w-full bg-white py-20 lg:py-28 border-t border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              KEEP READING
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#101E10] leading-tight">
              More from GuardExo Insights.
            </h2>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] group w-fit"
          >
            View all insights
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {MORE_INSIGHTS_DATA.map((item, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-neutral-50 rounded-[24px] p-7 flex flex-col justify-between gap-6 border border-neutral-200/80 transition-all hover:shadow-sm group"
            >
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="bg-[#C6F19D]/70 text-[#101E10] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-black/60">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-black/75 font-normal leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors"
                >
                  Read article
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
