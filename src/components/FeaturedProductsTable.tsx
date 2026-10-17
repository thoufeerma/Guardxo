"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS_CATALOGUE, ProductGrade } from "@/lib/products-data";

export default function FeaturedProductsTable() {
  const [products, setProducts] = useState<ProductGrade[]>(PRODUCTS_CATALOGUE);

  useEffect(() => {
    // Attempt fetching live data from PostgreSQL API
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
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
            href="/in-can-preservatives"
            className="inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
          >
            View all products
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* Technical Catalogue Matrix Table without filters and search box matching Figma */}
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
                {products.length > 0 ? (
                  products.map((prod) => {
                    const isInCan = prod.family === "In-Can Preservatives";
                    return (
                      <tr
                        key={prod.id}
                        className="hover:bg-[#C6F19D]/10 transition-colors group"
                      >
                        {/* Number in regular font */}
                        <td className="py-5 px-6 font-sans text-xs font-semibold text-black/60">
                          {prod.num}
                        </td>

                        {/* Grade with Row indicator: black dot for In-Can, light green dot for Industrial Biocides */}
                        <td className="py-5 px-6">
                          <div className="flex items-center gap-3">
                            <span
                              className={`w-2.5 h-2.5 rounded-full flex-none ${
                                isInCan ? "bg-black" : "bg-[#C6F19D]"
                              }`}
                            />
                            <span className="font-bold text-[#101E10] text-[16px]">
                              {prod.grade}
                            </span>
                          </div>
                        </td>

                        {/* Product Family as plain text matching Figma */}
                        <td className="py-5 px-6 text-black/80 font-medium">
                          {prod.family}
                        </td>

                        {/* Application */}
                        <td className="py-5 px-6 text-black/80 font-normal max-w-md leading-relaxed">
                          {prod.targetApplication}
                        </td>

                        {/* Action Column: bold text reading "View Product" matching Figma */}
                        <td className="py-5 px-6 text-right">
                          <Link
                            href={
                              prod.slug === "guardexo-bt-20"
                                ? "/products/guardexo-bt-20"
                                : `/products/${prod.slug}`
                            }
                            className="font-bold text-[#101E10] hover:text-[#5AB900] transition-colors whitespace-nowrap"
                          >
                            View Product
                          </Link>
                        </td>
                      </tr>
                    );
                  })
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
