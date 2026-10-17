"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  Monitor,
  FlaskConical,
  ShieldCheck,
  FileText,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Monitor,
    title: "Technical Consultation",
    description:
      "One-on-one guidance from chemists who understand your formulation, process and constraints.",
    isFirst: true,
  },
  {
    icon: FlaskConical,
    title: "Product Recommendation",
    description:
      "The right grade and dosage for your system, climate and target shelf life.",
    isFirst: false,
  },
  {
    icon: ShieldCheck,
    title: "Application Support",
    description:
      "Trial protocols, compatibility checks and on-ground troubleshooting at your plant.",
    isFirst: false,
  },
  {
    icon: FileText,
    title: "Regulatory Guidance",
    description:
      "Complete documentation — TDS, SDS and COA — for domestic and export compliance.",
    isFirst: false,
  },
];

export default function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="w-full bg-white py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="text-[14px] font-semibold tracking-wider uppercase text-[#5AB900]">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#101E10] leading-tight">
              Support that starts before the sale and continues after it
            </h2>
            <p className="text-base text-black/80 font-normal leading-relaxed max-w-2xl">
              Comprehensive technical and microbial diagnostic support throughout your product development
              cycle.
            </p>
          </div>

          <Link
            href="#inquiry"
            className="hidden sm:inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group"
          >
            View all services
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* 4 Service Cards Grid / Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto custom-scrollbar pb-4 pt-2 snap-x snap-mandatory"
        >
          {SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className={`flex-none w-[300px] sm:w-[340px] lg:flex-1 rounded-[24px] p-7 flex flex-col justify-between gap-8 snap-start transition-transform duration-300 hover:-translate-y-1 ${
                  srv.isFirst
                    ? "bg-[#C6F19D] text-[#101E10] shadow-sm"
                    : "bg-[#EAF8DC] text-[#101E10] border-0 shadow-none"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {/* White line icon inside black square */}
                  <div className="w-12 h-12 rounded-xl bg-[#101E10] flex items-center justify-center text-white flex-none">
                    <Icon size={22} className="text-white" strokeWidth={2} />
                  </div>

                  <h4 className="text-xl sm:text-[22px] font-bold text-[#101E10] leading-snug">
                    {srv.title}
                  </h4>

                  <p className="text-sm text-black/80 font-normal leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <Link
                  href="#inquiry"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#101E10] hover:text-[#5AB900] group pt-2"
                >
                  View details
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Carousel arrows moved to bottom-right below the cards as filled dark circles matching Figma */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full bg-[#101E10] hover:bg-[#1c331c] text-white flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer"
            aria-label="Previous service"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={scrollRight}
            className="w-11 h-11 rounded-full bg-[#101E10] hover:bg-[#1c331c] text-white flex items-center justify-center shadow-md active:scale-95 transition-all cursor-pointer"
            aria-label="Next service"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
