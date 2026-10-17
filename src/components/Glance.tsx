import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const METRICS = [
  { value: "200+", label: "HAPPY CLIENTS" },
  { value: "30+", label: "TEAM MEMBERS" },
  { value: "15+", label: "YEARS OF EXPERIENCE" },
  { value: "12+", label: "COUNTRIES EXPORTED" },
  { value: "20+", label: "ACTIVE PRODUCTS" },
];

export default function Glance() {
  return (
    <section id="glance" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-16">
        {/* 2-Column Editorial Layout matching Figma: Visual on Left, Text on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual Frame (Factory / Technical Assay Laboratory Visual) */}
          <div className="relative w-full h-[360px] sm:h-[462px] rounded-[24px] overflow-hidden bg-[#101E10] shadow-xl order-2 lg:order-1">
            <Image
              src="/images/glance-assay.png"
              alt="GuardExo Technical Assay Laboratory Visual"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right Narrative */}
          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              GuardExo at a Glance
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight tracking-tight">
              Specialty chemistry, built on one promise chemistry that works.
            </h2>
            <p className="text-base sm:text-[16px] text-black/80 font-normal leading-relaxed">
              GuardExo is the biocides and preservatives brand of Chemtiver Speciality Pvt. Ltd., a
              Gurugram-based specialty chemicals company serving manufacturers across India and export markets.
            </p>
            <p className="text-base sm:text-[16px] text-black/80 font-normal leading-relaxed">
              From wet-state preservation to long-term dry-film protection, every grade is developed, tested
              and supported by a technically driven team that understands real production conditions — dosing,
              compatibility, climate and shelf-life targets.
            </p>
            <div className="pt-2">
              <Link
                href="#services"
                className="inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
              >
                Know more
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* 5-Metric Counter Strip */}
        <div className="pt-10 border-t border-[#F5F4F2] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {METRICS.map((m) => (
            <div key={m.label} className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-bold text-[#101E10] tracking-tight">
                {m.value}
              </span>
              <span className="text-xs sm:text-[13px] font-semibold tracking-wider uppercase text-black/80">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
