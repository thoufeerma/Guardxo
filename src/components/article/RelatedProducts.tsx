"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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

export default function RelatedProducts() {
  return (
    <section className="w-full bg-[#F5F4F2] py-20 lg:py-28 border-t border-neutral-200/80">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              RELATED PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#101E10] leading-tight">
              Products related to this article.
            </h2>
          </div>

          <Link
            href="/#featured-products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#101E10] hover:text-[#5AB900] group w-fit"
          >
            View all products
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {RELATED_PRODUCTS_DATA.map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-6 sm:p-7 flex flex-col justify-between gap-6 border border-neutral-200 shadow-xs hover:shadow-md transition-all group"
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

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {product.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="bg-[#C6F19D]/70 text-[#101E10] text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded"
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
