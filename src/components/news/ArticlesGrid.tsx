"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

interface ArticlesGridProps {
  searchQuery?: string;
  activeCategory?: string;
}

export interface Article {
  id: string;
  image: string;
  category: string;
  filterCategory: string; // for matching hero filter
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
}

export const ARTICLES_DATA: Article[] = [
  {
    id: "in-can-vs-dry-film",
    image: "/news insight/Choosing between incan and dryfilm preservatives.jpg",
    category: "TECHNICAL INSIGHTS",
    filterCategory: "Technical Insights",
    date: "18 Mar 2025",
    readTime: "6 min read",
    title: "Choosing between in-can and dry-film preservatives",
    excerpt:
      "Understand the kinetic divergence between wet-state bacterial remediation in storage vessels and exterior coating film resistance against algae and fungi.",
  },
  {
    id: "cmit-mit-bit-paints",
    image: "/news insight/CMITMIT and BIT in water-based.jpg",
    category: "FORMULATION",
    filterCategory: "Technical Insights",
    date: "11 Mar 2025",
    readTime: "8 min read",
    title: "CMIT/MIT and BIT in water-based paints: what to know",
    excerpt:
      "Comparative stability matrix evaluating chloromethylisothiazolinone vs benzisothiazolinone in elevated alkaline acrylic dispersions and architectural coatings.",
  },
  {
    id: "emulsion-paint-preservative-protection",
    image: "/news insight/Signs your emulsion paint is losing.jpg",
    category: "QUALITY ASSURANCE",
    filterCategory: "Technical Insights",
    date: "02 Mar 2025",
    readTime: "5 min read",
    title: "Signs your emulsion paint is losing preservative protection",
    excerpt:
      "Early-stage degradation indicators: viscosity decay, micro-gas accumulation, discoloration, and rapid challenge test protocols to restore microbiological stability.",
  },
  {
    id: "coa-tds-sds-batch-analysis",
    image: "/news insight/What a COA, TDS and SDS tell you.jpg",
    category: "REGULATORY",
    filterCategory: "Regulatory",
    date: "24 Feb 2025",
    readTime: "7 min read",
    title: "What a COA, TDS and SDS tell you about a batch",
    excerpt:
      "Deconstructing chemical certificates for biocide procurement: active percentage thresholds, impurity profiles, and toxicological classifications.",
  },
  {
    id: "construction-chemicals-microbial-growth",
    image: "/news insight/Preventing microbial growth in.jpg",
    category: "APPLICATIONS",
    filterCategory: "Industry News",
    date: "16 Feb 2025",
    readTime: "6 min read",
    title: "Preventing microbial growth in construction chemicals",
    excerpt:
      "Formulating durable concrete admixtures, tile adhesives, and grouting polymers with high calcium tolerance and sustained thermal stability.",
  },
  {
    id: "dosage-basics-in-can-preservation",
    image: "/news insight/Dosage basics for in-can.jpg",
    category: "TECHNICAL GUIDE",
    filterCategory: "Technical Insights",
    date: "08 Feb 2025",
    readTime: "4 min read",
    title: "Dosage basics for in-can preservation",
    excerpt:
      "Preventing over-dosing costs and under-dosing recalls: how to establish Minimum Inhibitory Concentrations (MIC) in local plant production loops.",
  },
];

export default function ArticlesGrid({
  searchQuery = "",
  activeCategory = "All",
}: ArticlesGridProps) {
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Filter articles based on search and category
  const filteredArticles = ARTICLES_DATA.filter((article) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      article.filterCategory === activeCategory ||
      article.category.toLowerCase() === activeCategory.toLowerCase();

    return matchesSearch && matchesCategory;
  });

  const sortedArticles = [...filteredArticles].sort((a, b) => {
    if (sortOrder === "newest") {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  return (
    <section id="articles" className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
        {/* Header Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              LATEST ARTICLES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#101E10] leading-tight">
              Technical insights and industry perspectives.
            </h2>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center gap-4 bg-white border border-black/15 px-4 py-2.5 rounded-xl text-sm font-semibold text-[#101E10] hover:border-[#101E10] transition-colors cursor-pointer shadow-xs"
            >
              <span>Sort: {sortOrder === "newest" ? "Newest" : "Oldest"}</span>
              <ChevronDown
                size={16}
                className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-neutral-200 rounded-xl shadow-lg z-20 py-1 overflow-hidden">
                <button
                  type="button"
                  onClick={() => {
                    setSortOrder("newest");
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#F5F4F2] transition-colors cursor-pointer ${
                    sortOrder === "newest" ? "font-bold text-[#5AB900]" : "text-black/80"
                  }`}
                >
                  Newest First
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSortOrder("oldest");
                    setDropdownOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-[#F5F4F2] transition-colors cursor-pointer ${
                    sortOrder === "oldest" ? "font-bold text-[#5AB900]" : "text-black/80"
                  }`}
                >
                  Oldest First
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 3x2 Grid */}
        {sortedArticles.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center text-black/60 flex flex-col items-center gap-2">
            <p className="text-lg font-bold text-[#101E10]">No articles found</p>
            <p className="text-sm">Try clearing your search query or selecting a different category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article) => (
              <article
                key={article.id}
                className="group bg-[#EEFBE2] rounded-[24px] overflow-hidden border-0 shadow-none hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with Badge */}
                  <div className="relative w-full h-[240px] overflow-hidden bg-[#101E10]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-md text-[11px] font-bold tracking-wider text-[#101E10] uppercase shadow-xs">
                      {article.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex flex-col gap-3">
                    <span className="text-xs font-semibold text-black/60 uppercase tracking-wide">
                      {article.date} · {article.readTime}
                    </span>
                    <h3 className="text-xl sm:text-[22px] lg:text-[24px] font-bold text-[#101E10] group-hover:text-[#5AB900] leading-snug transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-black/75 font-normal leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
                  <a
                    href="/news/choosing-between-in-can-and-dry-film-preservatives"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors"
                  >
                    Read article
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
