"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Check, Sparkles } from "lucide-react";

export const INCAN_PRODUCTS = [
  {
    id: "guardexo-bt-20",
    name: "GuardExo BT 20",
    isFeatured: true,
    active: "1,2-benzisothiazolin-3-one (BIT 20%)",
    cas: "2634-33-5",
    description:
      "Our flagship 20% liquid BIT preservative in a glycol/water matrix. Provides long-term stability against bacteria and yeasts in neutral to highly alkaline formulations without formaldehyde emissions.",
    dosage: "0.05% – 0.25% w/w",
    specs: ["Zero Formaldehyde", "pH 4.0 – 12.0", "Stable to 100°C", "Non-Volatile Carrier"],
    applications: "Paints & Coatings, Acrylic & VAE Emulsions, Inks, Adhesives",
    link: "/products/guardexo-bt-20",
  },
  {
    id: "guardexo-bt-10",
    name: "GuardExo BT 10",
    isFeatured: false,
    active: "1,2-benzisothiazolin-3-one (BIT 10% solution)",
    cas: "2634-33-5",
    description:
      "A ready-to-dose 10% aqueous BIT solution engineered for facilities seeking lower active concentration for simplified automatic flowmeter dosing without solvent flammability.",
    dosage: "0.10% – 0.40% w/w",
    specs: ["Aqueous Solution", "Easy Automated Dosing", "VOC-Free", "Long Shelf Life"],
    applications: "Starch & Dextrin Glues, Latex Emulsions, Paper Mill Coatings",
    link: "#inquiry",
  },
  {
    id: "guardexo-cmt-15",
    name: "GuardExo CMT 15",
    isFeatured: false,
    active: "CMIT/MIT 1.5% Aqueous Complex (3:1 Ratio)",
    cas: "55965-84-9",
    description:
      "Rapid-action isothiazolinone biocide that delivers immediate decontamination of process waters, mineral slurries, and water-based construction admixtures with very low cost-in-use.",
    dosage: "0.05% – 0.15% w/w",
    specs: ["Fast Bacterial Kill", "Broad-Spectrum Activity", "Cost-Effective", "Readily Biodegradable"],
    applications: "Concrete Admixtures, Technical Rinses, Printing Inks, Grouting Mortars",
    link: "#inquiry",
  },
  {
    id: "guardexo-cmt-14",
    name: "GuardExo CMT 14",
    isFeatured: false,
    active: "CMIT/MIT 14% High-Purity Industrial Concentrate",
    cas: "55965-84-9",
    description:
      "A concentrated 14% active blend tailored for large-scale industrial chemical synthesis, cooling water loop sanitation, and intermediate manufacturing diluters.",
    dosage: "0.005% – 0.02% w/w",
    specs: ["Industrial Concentrate", "Ultra-Low Cost-in-Use", "UN Drum & IBC Packaging"],
    applications: "Industrial Water Treatment, Pulp Slurries, Base Masterbatch Dilution",
    link: "#inquiry",
  },
  {
    id: "guardexo-dual-25",
    name: "GuardExo DUAL 25",
    isFeatured: false,
    active: "Synergistic BIT + Bronopol Dual Active Formulation",
    cas: "2634-33-5 / 52-51-7",
    description:
      "A dual-action preservative combining the long-term liquid stability of BIT with the rapid volatile-phase headspace biostatic activity of bronopol to suppress top-surface mould.",
    dosage: "0.10% – 0.25% w/w",
    specs: ["Headspace Protection", "Dual Synergy Kill", "Prevents Can Bloat", "Humid Climate Defense"],
    applications: "Tropical Exterior Paints, High-Starch Wall Glues, Organic Polymer Slurries",
    link: "#inquiry",
  },
];

export default function InCanProductRange() {
  const [productsList, setProductsList] = React.useState(INCAN_PRODUCTS);

  React.useEffect(() => {
    fetch("/api/products?category=In-Can Preservatives")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.products && data.products.length > 0) {
          const mapped = data.products.map((p: any) => {
            let parsedSpecs: string[] = [];
            if (Array.isArray(p.features)) {
              parsedSpecs = p.features;
            } else if (typeof p.features === "string") {
              try {
                parsedSpecs = JSON.parse(p.features);
              } catch {
                parsedSpecs = [p.features];
              }
            }
            if (parsedSpecs.length === 0) {
              parsedSpecs = [
                p.ph_stability || "pH 2.0 – 12.0",
                p.temperature_limit || "Stable to 100°C",
                p.dosage_guide || "0.05% – 0.25% w/w",
              ];
            }

            return {
              id: p.slug || p.id,
              name: p.grade,
              isFeatured: Boolean(p.is_featured) || p.badge === "Flagship Grade",
              active: p.active_ingredient || "Active In-Can Biocide Chemistry",
              cas: p.cas_number || "Certified Grade",
              description: p.description || p.target_application,
              dosage: p.dosage_guide || "0.05% – 0.25% w/w",
              specs: parsedSpecs.slice(0, 4),
              applications: p.target_application || "Paints, Emulsions, Adhesives",
              link: `/products/${p.slug}`,
            };
          });
          setProductsList(mapped);
        }
      })
      .catch((err) => {
        console.info("Using embedded in-can catalog:", err);
      });
  }, []);

  return (
    <section id="products-range" className="w-full bg-white py-20 lg:py-28 scroll-mt-24">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-14">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
            PRODUCT CATALOGUE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#101E10] leading-tight">
            Our in–can preservative range
          </h2>
          <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
            Tailored wet-state preservative formulations manufactured under ISO 9001:2015 controls
            at our Gurugram synthesis plant.
          </p>
        </div>

        {/* Product Cards Stack */}
        <div className="flex flex-col gap-6">
          {productsList.map((prod) => (
            <div
              key={prod.id}
              className={`rounded-[28px] p-6 sm:p-8 lg:p-10 border transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-8 ${
                prod.isFeatured
                  ? "bg-[#F5F4F2] border-[#C6F19D] shadow-md ring-1 ring-[#C6F19D]"
                  : "bg-white border-neutral-200/90 hover:bg-[#FAF9F7] shadow-xs"
              }`}
            >
              {/* Product Info */}
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-[#C6F19D] text-[#101E10] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                    IN-CAN PRESERVATIVE
                  </span>
                  <span className="text-xs font-mono font-bold text-black/60 bg-white px-3 py-1 rounded-md border border-neutral-200">
                    CAS: {prod.cas}
                  </span>
                  {prod.isFeatured && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#101E10] bg-[#C6F19D]/60 px-3 py-1 rounded-md">
                      <Sparkles size={13} />
                      Flagship Product
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#101E10]">
                    {prod.name}
                  </h3>
                  <span className="text-sm sm:text-base font-semibold text-[#5AB900]">
                    Active: {prod.active}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-black/75 font-normal leading-relaxed max-w-3xl">
                  {prod.description}
                </p>

                {/* Specs Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  {prod.specs.map((s, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white text-[#101E10] px-3 py-1 rounded-lg border border-neutral-200 shadow-2xs"
                    >
                      <Check size={12} className="text-[#5AB900]" />
                      {s}
                    </span>
                  ))}
                </div>

                <div className="text-xs text-black/70 pt-1">
                  <span className="font-bold text-[#101E10]">Recommended Applications: </span>
                  {prod.applications}
                </div>
              </div>

              {/* Dosage & Actions Card */}
              <div className="lg:w-72 bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between gap-5 flex-none shadow-2xs">
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-black/60">
                    TYPICAL IN-CAN DOSAGE
                  </span>
                  <span className="text-2xl font-extrabold text-[#101E10]">
                    {prod.dosage}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <Link
                    href={prod.link}
                    className="w-full text-center inline-flex items-center justify-center gap-2 bg-[#101E10] hover:bg-[#1c331c] text-[#C2EC9A] py-3 rounded-xl font-bold text-sm transition-all shadow-xs"
                  >
                    View Product Details
                    <ArrowRight size={15} />
                  </Link>

                  <a
                    href="#inquiry"
                    className="w-full text-center inline-flex items-center justify-center gap-1.5 bg-[#F5F4F2] hover:bg-neutral-200 text-[#101E10] py-2.5 rounded-xl font-bold text-xs transition-colors"
                  >
                    Request Sample Kit
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
