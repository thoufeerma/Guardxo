import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    num: "01",
    sub: "WET-STATE PRESERVATION",
    title: "In-Can Preservatives",
    image: "/images/category-incan.png",
    video: "/Home-page/explore our product solutions/In-Can Preservatives.mp4",
    highlightBadge: "LIQUID STABILITY",
    description:
      "Wet-state protection for water-based formulations. Prevents in-can spoilage, gassing, odour and viscosity loss during production and storage.",
    tags: ["PAINTS", "EMULSIONS", "ADHESIVES", "INKS"],
    bgClass: "bg-[#C6F19D]",
  },
  {
    num: "02",
    sub: "PROCESS LOOP DEFENSE",
    title: "Industrial Biocides",
    image: "/images/category-biocides.png",
    video: "/Home-page/explore our product solutions/industrial biocide.mp4",
    highlightBadge: "BIOFILM ERADICATION",
    description:
      "Fast-acting, broad-spectrum control of bacteria, fungi and algae in process waters, cooling systems and industrial formulations.",
    tags: ["WATER TREATMENT", "COOLING TOWERS", "PROCESS SYSTEM"],
    bgClass: "bg-[#C6F19D]/30 border border-[#C6F19D]/50",
  },
  {
    num: "03",
    sub: "SURFACE ANTIFUNGAL",
    title: "Dry-Film Preservatives",
    image: "/images/category-dryfilm.png",
    video: "/Home-page/explore our product solutions/dry film pesticides.mp4",
    highlightBadge: "LEACH RESISTANT",
    description:
      "Long-term protection of applied films against fungal and algal growth — engineered for exterior coatings in humid and tropical climates.",
    tags: ["EXTERIOR PAINTS", "RENDERS", "SEALANTS"],
    bgClass: "bg-[#C6F19D]/30 border border-[#C6F19D]/50",
  },
];

export default function ProductCategories() {
  return (
    <section id="categories" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        {/* Section Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              Our Product Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
              Explore our product solutions
            </h2>
          </div>
          <Link
            href="#featured-products"
            className="inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
          >
            View All Products
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* 3 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.num}
              className={`${cat.bgClass} rounded-[24px] p-8 flex flex-col justify-between gap-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex flex-col gap-6">
                {/* Top Subtitle */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-black/80 uppercase">
                    {cat.sub}
                  </span>
                </div>

                {/* Title with inline dark rounded rectangle number badge */}
                <h3 className="text-2xl sm:text-[32px] font-bold text-[#101E10] leading-tight flex items-center gap-3">
                  <span className="bg-[#101E10] text-white text-xs font-semibold px-2.5 py-1 rounded-md font-sans flex-none">
                    {cat.num}
                  </span>
                  <span>{cat.title}</span>
                </h3>

                {/* Visual Frame with Video & Floating Badge */}
                <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-white">
                  {cat.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    >
                      <source src={cat.video} type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold text-[#101E10] shadow-sm uppercase tracking-wider">
                    {cat.highlightBadge}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-black/80 font-normal leading-relaxed">
                  {cat.description}
                </p>

                {/* Target Application Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/85 backdrop-blur-xs text-[#101E10] text-xs font-semibold px-2.5 py-1 rounded shadow-xs uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <Link
                href="#inquiry"
                className="inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:underline group pt-2"
              >
                Know more
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
