"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface InCanProductItem {
  id: string;
  name: string;
  category: "BIT" | "CMIT/MIT" | "Blends";
  description: string;
  primaryTag: string;
  secondaryTag: string;
  thumbnail: string;
  link: string;
}

export const INCAN_RANGE_PRODUCTS: InCanProductItem[] = [
  {
    id: "bt-20",
    name: "GuardExo BT 20",
    category: "BIT",
    description: "20% active formulation in glycol base for long-term wet-state stability",
    primaryTag: "Formaldehyde-free",
    secondaryTag: "Formaldehyde-free",
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "bt-20p",
    name: "GuardExo BT 20P",
    category: "BIT",
    description: "Solvent-free dispersion of BIT for zero-VOC architectural coatings",
    primaryTag: "BIT",
    secondaryTag: "Formaldehyde-free",
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "cmt-15",
    name: "GuardExo CMT 15",
    category: "CMIT/MIT",
    description: "1.5% active aqueous CMIT/MIT offering immediate microbicidal shock kill",
    primaryTag: "CMIT/MIT",
    secondaryTag: "Formaldehyde-free",
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "mbt",
    name: "GuardExo MBT",
    category: "Blends",
    description: "Synergistic BIT + MIT dual-active solution delivering rapid knockdown and long-term protection",
    primaryTag: "BIT + MIT",
    secondaryTag: "Formaldehyde-free",
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "bct-10",
    name: "GuardExo BCT 10",
    category: "Blends",
    description: "Optimized BIT + CMIT/MIT combination formulated for robust preservation in challenging manufacturing plants",
    primaryTag: "BIT + CMIT/MIT",
    secondaryTag: "Formaldehyde-free",
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "fmt",
    name: "GuardExo FMT",
    category: "Blends",
    description: "Specialized headspace and wet-state biocide blend for warm, humid warehouse and bulk storage vessels",
    primaryTag: "Headspace Protection",
    secondaryTag: "Formaldehyde-free",
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
];

export default function InCanProductRange() {
  const [activeFilter, setActiveFilter] = useState<"All" | "BIT" | "CMIT/MIT" | "Blends">("All");

  const filtered = INCAN_RANGE_PRODUCTS.filter((prod) => {
    if (activeFilter === "All") return true;
    return prod.category === activeFilter;
  });

  return (
    <section id="products-range" className="w-full bg-white py-20 lg:py-28 scroll-mt-24 border-t border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Header & Filter Chips matching Figma exactly */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-[#5AB900]">
              OUR RANGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight tracking-tight">
              Our in–can preservative range
            </h2>
            <p className="text-sm sm:text-base text-black/75 font-normal leading-relaxed pt-1 max-w-xl">
              Every GuardExo in-can preservative has its own page with full technical details, applications and documents. Select a product to learn more.
            </p>
          </div>

          {/* Standalone Filter Chips */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm transition-all cursor-pointer ${
                activeFilter === "All"
                  ? "bg-[#C6F19D] text-[#101E10] font-bold shadow-xs"
                  : "bg-[#F5F4F2] hover:bg-[#EAE8E3] text-[#101E10] font-medium"
              }`}
            >
              All (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("BIT")}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm transition-all cursor-pointer ${
                activeFilter === "BIT"
                  ? "bg-[#C6F19D] text-[#101E10] font-bold shadow-xs"
                  : "bg-[#F5F4F2] hover:bg-[#EAE8E3] text-[#101E10] font-medium"
              }`}
            >
              BIT (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("CMIT/MIT")}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm transition-all cursor-pointer ${
                activeFilter === "CMIT/MIT"
                  ? "bg-[#C6F19D] text-[#101E10] font-bold shadow-xs"
                  : "bg-[#F5F4F2] hover:bg-[#EAE8E3] text-[#101E10] font-medium"
              }`}
            >
              CMIT/MIT (1)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Blends")}
              className={`py-2 px-4 rounded-xl text-xs sm:text-sm transition-all cursor-pointer ${
                activeFilter === "Blends"
                  ? "bg-[#C6F19D] text-[#101E10] font-bold shadow-xs"
                  : "bg-[#F5F4F2] hover:bg-[#EAE8E3] text-[#101E10] font-medium"
              }`}
            >
              Blends (3)
            </button>
          </div>
        </div>

        {/* Product Rows List */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#F5F4F2] hover:bg-[#EFEFEA] rounded-[20px] p-6 sm:p-7 transition-all group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                {/* Left: Thumbnail + Title & Description */}
                <div className="md:col-span-6 lg:col-span-6 flex items-center gap-4 sm:gap-5 min-w-0">
                  <div className="relative w-16 h-16 sm:w-[72px] sm:h-[72px] flex-none rounded-xl overflow-hidden bg-neutral-100">
                    <Image
                      src={prod.thumbnail}
                      alt={prod.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col min-w-0">
                    <h3 className="text-xl sm:text-[21px] font-bold text-[#101E10] leading-snug">
                      {prod.name}
                    </h3>
                    <p className="text-sm sm:text-[14px] text-black/70 font-normal leading-relaxed mt-0.5 line-clamp-1">
                      {prod.description}
                    </p>
                  </div>
                </div>

                {/* Middle: Aligned Tags Column */}
                <div className="md:col-span-3 lg:col-span-4 flex items-center gap-2">
                  <span className="bg-[#C6F19D] text-[#101E10] px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap">
                    {prod.primaryTag}
                  </span>
                  <span className="bg-white text-[#101E10] px-2.5 py-1 rounded-md text-xs font-semibold border border-neutral-200/80 shadow-2xs whitespace-nowrap">
                    {prod.secondaryTag}
                  </span>
                </div>

                {/* Right: View product link */}
                <div className="md:col-span-3 lg:col-span-2 flex md:justify-end items-center">
                  <Link
                    href={prod.link}
                    className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-bold text-[#101E10] hover:text-[#5AB900] group-hover:translate-x-1 transition-all"
                  >
                    <span>View product</span>
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
