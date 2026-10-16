"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { PRODUCTS_CATALOGUE, ProductGrade } from "@/lib/products-data";

export default function FeaturedProductsTable() {
  const [products, setProducts] = useState<ProductGrade[]>(PRODUCTS_CATALOGUE);
  const [selectedFamily, setSelectedFamily] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    // Attempt fetching live data from PostgreSQL API
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          // Map to standard format
          const mapped: ProductGrade[] = data.products.map((p: any) => ({
            id: p.id,
            num: p.num,
            grade: p.grade,
            family: p.family,
            targetApplication: p.target_application || p.targetApplication,
            description: p.description,
            slug: p.slug,
          }));
          setProducts(mapped);
        }
      })
      .catch((err) => {
        console.info("Using embedded catalogue data:", err);
      });
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesFamily =
      selectedFamily === "All" || p.family === selectedFamily;
    const matchesSearch =
      p.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.targetApplication.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFamily && matchesSearch;
  });

  const families = [
    "All",
    "In-Can Preservatives",
    "Industrial Biocides",
    "Dry Film Preservatives",
  ];

  return (
    <section id="featured-products" className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Header Ribbon */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              STANDARD ASSAYS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
              Featured Products
            </h2>
            <p className="text-base text-black/75 font-normal leading-relaxed">
              Certified industrial chemical formulations synthesized for acute bio-protection.
            </p>
          </div>

          <Link
            href="#inquiry"
            className="inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
          >
            View all products
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {families.map((fam) => (
              <button
                key={fam}
                onClick={() => setSelectedFamily(fam)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedFamily === fam
                    ? "bg-[#101E10] text-[#C2EC9A] shadow-sm"
                    : "bg-white text-black/70 hover:bg-neutral-100 border border-neutral-200"
                }`}
              >
                {fam}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
            />
            <input
              type="text"
              placeholder="Search grade or application..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-neutral-200 pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#5AB900]"
            />
          </div>
        </div>

        {/* Technical Catalogue Matrix Table */}
        <div className="w-full bg-white rounded-[24px] border border-[#DFD7DD] shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF8FA]/80 border-b border-[#DFD7DD] text-xs font-semibold tracking-wider text-black/70 uppercase">
                  <th className="py-5 px-6 w-16">#</th>
                  <th className="py-5 px-6">GRADE / CHEMISTRY</th>
                  <th className="py-5 px-6">PRODUCT FAMILY</th>
                  <th className="py-5 px-6">PRIMARY TARGET / APPLICATION</th>
                  <th className="py-5 px-6 text-right">DESTINATION ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE7EC] text-sm">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((prod) => (
                    <tr
                      key={prod.id}
                      className="hover:bg-[#C6F19D]/10 transition-colors group"
                    >
                      {/* Number */}
                      <td className="py-5 px-6 font-mono text-xs font-semibold text-black/60">
                        {prod.num}
                      </td>

                      {/* Grade */}
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-3">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#101E10]" />
                          <span className="font-bold text-[#101E10] text-[16px]">
                            {prod.grade}
                          </span>
                        </div>
                      </td>

                      {/* Family */}
                      <td className="py-5 px-6">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            prod.family === "In-Can Preservatives"
                              ? "bg-[#C6F19D]/40 text-[#101E10]"
                              : prod.family === "Industrial Biocides"
                              ? "bg-[#5AB900]/15 text-[#101E10]"
                              : "bg-[#101E10]/10 text-[#101E10]"
                          }`}
                        >
                          {prod.family}
                        </span>
                      </td>

                      {/* Application */}
                      <td className="py-5 px-6 text-black/80 font-normal max-w-md leading-relaxed">
                        {prod.targetApplication}
                      </td>

                      {/* Action */}
                      <td className="py-5 px-6 text-right">
                        <Link
                          href="#inquiry"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#101E10] group-hover:text-[#5AB900] bg-neutral-100 group-hover:bg-[#C6F19D]/40 px-3.5 py-1.5 rounded-lg transition-all"
                        >
                          Request Spec
                          <ArrowUpRight size={14} />
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-black/50">
                      No matching product grades found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
