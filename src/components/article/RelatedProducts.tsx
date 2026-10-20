"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export const RELATED_PRODUCTS_DATA = [
  {
    category: "IN-CAN PRESERVATIVE",
    title: "GuardExo BT 20P",
    description: "Used in Paints & Coatings, Architectural Emulsions, and Polymer Dispersions.",
    tags: ["BIT 20% IN PG", "ZERO VOC"],
    href: "/#featured-products",
  },
  {
    category: "IN-CAN PRESERVATIVE",
    title: "GuardExo CMT 15",
    description: "Used in Adhesives, Construction Chemicals, Inks, and Water Reducible Coatings.",
    tags: ["CMIT/MIT 1.5% AQUEOUS", "HIGH SHOCK RESIST"],
    href: "/#featured-products",
  },
  {
    category: "DRY-FILM PRESERVATIVE",
    title: "GuardExo BT 10 MW",
    description: "Used in Exterior Masonry, Textured Façade Finishes, and Plaster Formulations.",
    tags: ["BIT + OIT DISPERSION", "ALGAL DEFENSE"],
    href: "/#featured-products",
  },
  {
    category: "INDUSTRIAL BIOCIDE",
    title: "GuardExo CMT 14",
    description: "Used in Cooling Water Loops, Recirculating Systems, and Industrial Rinses.",
    tags: ["BROAD SPECTRUM BACTERICIDE", "FAST ACTING"],
    href: "/#featured-products",
  },
];

interface RelatedProductsProps {
  tag?: string;
  title?: string;
  viewAllHref?: string;
  viewAllText?: string;
}

export default function RelatedProducts({
  tag = "RELATED PRODUCTS",
  title = "Products related to this article.",
  viewAllHref = "/news",
  viewAllText = "View all insights",
}: RelatedProductsProps) {
  return (
    <section className="w-full bg-[#F5F4F2] py-16 lg:py-24 border-t border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[13px] sm:text-[14px] font-bold tracking-wider uppercase text-[#5AB900]">
              {tag}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#101E10] leading-tight tracking-tight">
              {title}
            </h2>
          </div>

          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] group w-fit pb-1"
          >
            <span>{viewAllText}</span>
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* 4 Cards Grid - White cards with subtle borders on grey section background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {RELATED_PRODUCTS_DATA.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-6 sm:p-7 flex flex-col justify-between gap-6 hover:shadow-md transition-all group border border-neutral-200/80 shadow-2xs"
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                  {product.category}
                </span>

                <h3 className="text-xl sm:text-2xl font-bold text-[#101E10] group-hover:text-[#5AB900] transition-colors">
                  {product.title}
                </h3>

                <p className="text-sm text-black/75 font-normal leading-relaxed">
                  {product.description}
                </p>

                {/* Tags with enhanced font weight */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {product.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#C6F19D] text-[#101E10] text-[10.5px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col gap-3 pt-3 border-t border-neutral-100">
                <Link
                  href={product.href}
                  className="w-full text-center bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3 rounded-xl font-bold text-sm transition-all shadow-xs"
                >
                  View Product
                </Link>

                <a
                  href="#inquiry"
                  className="inline-flex items-center justify-center gap-1 text-xs font-bold text-[#101E10] hover:text-[#5AB900] transition-colors"
                >
                  Request a quote
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
