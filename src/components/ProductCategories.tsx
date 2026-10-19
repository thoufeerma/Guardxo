import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
    href: "/in-can-preservatives",
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
    bgClass: "bg-[#EEFBE2]",
    href: "/products/guardexo-bt-20",
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
    bgClass: "bg-[#EEFBE2]",
    href: "/news/choosing-between-in-can-and-dry-film-preservatives",
  },
];

export default function ProductCategories() {
  return (
    <section id="categories" className="w-full bg-white py-16 lg:py-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="flex flex-col gap-2.5">
            <span className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-[#5AB900]">
              OUR PRODUCT CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#101E10] leading-tight tracking-tight">
              Explore our product solutions
            </h2>
          </div>
          <Link
            href="#featured-products"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#101E10] hover:text-[#5AB900] group transition-colors"
          >
            View All Products
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* 3 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.num}
              className={`${cat.bgClass} rounded-[24px] sm:rounded-[28px] p-7 sm:p-8 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="flex flex-col gap-5">
                {/* Top Row: Number Badge on Left, Subtitle on Right */}
                <div className="flex items-center justify-between">
                  <span className="bg-[#101E10] text-white text-[12px] font-bold px-2.5 py-0.5 rounded-full font-sans">
                    {cat.num}
                  </span>
                  <span className="text-[11px] sm:text-[12px] font-semibold tracking-wider text-[#101E10] uppercase">
                    {cat.sub}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-[28px] lg:text-[30px] font-bold text-[#101E10] leading-tight tracking-tight">
                  {cat.title}
                </h3>

                {/* Visual Frame with Video/Image & Floating Badge */}
                <div className="relative w-full h-44 sm:h-48 rounded-2xl overflow-hidden bg-white shadow-2xs">
                  {cat.video ? (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster={cat.image}
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
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold text-[#101E10] shadow-xs uppercase tracking-wider">
                    {cat.highlightBadge}
                  </div>
                </div>

                {/* Description */}
                <p className="text-[13px] sm:text-[14px] text-[#101E10]/80 font-normal leading-relaxed">
                  {cat.description}
                </p>

                {/* Target Application Tags */}
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/90 backdrop-blur-xs text-[#101E10] text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-2xs uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <Link
                href={cat.href}
                className="inline-flex items-center gap-2 text-sm sm:text-[15px] font-bold text-[#101E10] hover:text-[#5AB900] group pt-2 transition-colors"
              >
                Know more
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
