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
  tags: string[];
  thumbnail: string;
  link: string;
}

export const INCAN_RANGE_PRODUCTS: InCanProductItem[] = [
  {
    id: "bt-20",
    name: "GuardExo BT 20",
    category: "BIT",
    description: "Flagship 20% BIT aqueous glycol solution for paints, coatings and alkaline polymer emulsions.",
    tags: ["20% Active BIT", "pH 4.0 – 12.0"],
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "bt-20p",
    name: "GuardExo BT 20P",
    category: "BIT",
    description: "20% BIT in propylene glycol carrier for low-VOC paints and aqueous colorants.",
    tags: ["BIT in PG", "Zero VOC"],
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "cmt-15",
    name: "GuardExo CMT 15",
    category: "CMIT/MIT",
    description: "1.5% CMIT/MIT fast-acting broad-spectrum bactericide for process waters and mineral slurries.",
    tags: ["CMIT/MIT 1.5%", "Fast Kill"],
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "mbt",
    name: "GuardExo MBT",
    category: "Blends",
    description: "Synergistic BIT + MIT dual-active solution delivering rapid knockdown and long-term protection.",
    tags: ["BIT + MIT Blend", "Broad Spectrum"],
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "bct-10",
    name: "GuardExo BCT 10",
    category: "Blends",
    description: "Optimized BIT + CMIT/MIT combination formulated for robust preservation in challenging manufacturing plants.",
    tags: ["BIT + CMIT/MIT", "Plant Defense"],
    thumbnail: "/in-can-preservatives/can image.png",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "fmt",
    name: "GuardExo FMT",
    category: "Blends",
    description: "Specialized headspace and wet-state biocide blend for warm, humid warehouse and bulk storage vessels.",
    tags: ["Headspace Protection", "Anti-Gassing"],
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
        {/* Header & Filter Chips */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              PRODUCT RANGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
              Our In–Can Preservative Range
            </h2>
            <p className="text-base text-black/80 font-normal leading-relaxed">
              Industrial-grade wet-state biocides engineered for consistent long-term product preservation.
            </p>
          </div>

          {/* Filter Chips: All (6), BIT (2), CMIT/MIT (1), Blends (3) */}
          <div className="flex flex-wrap items-center gap-2 bg-[#F5F4F2] p-1.5 rounded-2xl w-fit">
            <button
              type="button"
              onClick={() => setActiveFilter("All")}
              className={`py-2 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === "All"
                  ? "bg-white text-[#101E10] shadow-xs"
                  : "text-black/60 hover:text-[#101E10]"
              }`}
            >
              All (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("BIT")}
              className={`py-2 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === "BIT"
                  ? "bg-white text-[#101E10] shadow-xs"
                  : "text-black/60 hover:text-[#101E10]"
              }`}
            >
              BIT (2)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("CMIT/MIT")}
              className={`py-2 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === "CMIT/MIT"
                  ? "bg-white text-[#101E10] shadow-xs"
                  : "text-black/60 hover:text-[#101E10]"
              }`}
            >
              CMIT/MIT (1)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter("Blends")}
              className={`py-2 px-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === "Blends"
                  ? "bg-white text-[#101E10] shadow-xs"
                  : "text-black/60 hover:text-[#101E10]"
              }`}
            >
              Blends (3)
            </button>
          </div>
        </div>

        {/* Compact Grey Rows */}
        <div className="flex flex-col gap-3">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#F5F4F2] hover:bg-[#ECEBE8] rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all group"
            >
              {/* Thumbnail and Info */}
              <div className="flex items-center gap-4 sm:gap-5 flex-1 min-w-0">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-white flex-none border border-neutral-200/80 shadow-2xs">
                  <Image
                    src={prod.thumbnail}
                    alt={prod.name}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-[#101E10] leading-snug">
                      {prod.name}
                    </h3>
                    <div className="flex items-center gap-1.5">
                      {prod.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-white px-2 py-0.5 rounded text-[11px] font-semibold text-[#101E10] border border-neutral-200 shadow-2xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-black/75 truncate max-w-2xl">
                    {prod.description}
                  </p>
                </div>
              </div>

              {/* View Product Link */}
              <div className="flex items-center md:pl-4 flex-none">
                <Link
                  href={prod.link}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] group-hover:translate-x-1 transition-all"
                >
                  View product →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
