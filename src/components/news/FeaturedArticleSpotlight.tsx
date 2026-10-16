"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedArticleSpotlight() {
  return (
    <section id="featured-article" className="w-full bg-white py-20 lg:py-28 border-t border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Editorial Photography */}
          <div className="lg:col-span-6 relative w-full h-[360px] sm:h-[460px] rounded-[24px] overflow-hidden shadow-lg bg-[#101E10]">
            <Image
              src="/images/news-featured-hero.png"
              alt="Technical laboratory testing and biocide formulation"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column: Narrative & Meta */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              FEATURED ARTICLE
            </span>

            <div className="flex items-center gap-3">
              <span className="bg-[#C6F19D] text-[#101E10] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                FORMULATION
              </span>
              <span className="text-xs font-semibold text-black/60">
                18 Mar 2025 · 8 min read
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
              Choosing between in-can and dry-film preservatives
            </h2>

            <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
              How to assess wet-state bacterial risks versus applied film fungal/algal threats in
              demanding climates. A comprehensive guide for paint and construction chemical
              formulators navigating regulatory thresholds and climatic humidity.
            </p>

            {/* Author Attribution */}
            <div className="flex items-center gap-3 pt-2">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-black/10 flex-none bg-[#C6F19D]">
                <Image
                  src="/images/news-author-avatar.png"
                  alt="GuardExo Technical Team"
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-bold text-[#101E10]">
                GuardExo Technical Team
              </span>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <a
                href="/news/choosing-between-in-can-and-dry-film-preservatives"
                className="w-fit inline-flex items-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] px-7 py-3.5 rounded-xl font-bold text-base transition-all shadow-md active:scale-95"
              >
                Read full article
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
