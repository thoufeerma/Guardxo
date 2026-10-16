"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  FlaskConical,
  Sparkles,
  Wrench,
  FileCheck2,
  Headphones,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: FlaskConical,
    title: "Technical Consultation",
    description:
      "One-on-one guidance from chemists who understand your formulation, process and constraints.",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Product Recommendation",
    description:
      "The right grade and dosage for your system, climate and target shelf life.",
    highlight: false,
  },
  {
    icon: Wrench,
    title: "Application Support",
    description:
      "Trial protocols, compatibility checks and on-ground troubleshooting at your plant.",
    highlight: false,
  },
  {
    icon: FileCheck2,
    title: "Regulatory Guidance",
    description:
      "Complete documentation — TDS, SDS and COA — for domestic and export compliance.",
    highlight: false,
  },
  {
    icon: Headphones,
    title: "After-Sales Support",
    description:
      "Responsive follow-up on performance, reorders and every technical query.",
    highlight: false,
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
    <section id="services" className="w-full bg-[#F5F4F2] py-20 lg:py-28">
      <div className="max-w-[1520px] mx-auto px-6 lg:px-12 flex flex-col gap-12">
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

          <div className="flex items-center gap-4">
            <Link
              href="#inquiry"
              className="hidden sm:inline-flex items-center gap-2 text-base font-bold text-[#101E10] hover:text-[#5AB900] group mr-4"
            >
              View all services
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-[#101E10] shadow-sm active:scale-95 transition-all"
                aria-label="Previous service"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 flex items-center justify-center text-[#101E10] shadow-sm active:scale-95 transition-all"
                aria-label="Next service"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Carousel Track */}
        <div
          ref={scrollContainerRef}
          className="flex items-stretch gap-6 overflow-x-auto custom-scrollbar pb-6 pt-2 snap-x snap-mandatory"
        >
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.title}
                className={`flex-none w-[310px] sm:w-[350px] rounded-[24px] p-7 flex flex-col justify-between gap-10 snap-start transition-transform duration-300 hover:-translate-y-1 ${
                  srv.highlight
                    ? "bg-[#C6F19D] text-[#101E10] shadow-md"
                    : "bg-white text-[#101E10] border border-neutral-200/70 shadow-sm"
                }`}
              >
                <div className="flex flex-col gap-6">
                  {/* Icon Box */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      srv.highlight
                        ? "bg-[#101E10] text-[#C6F19D]"
                        : "bg-[#F5F4F2] text-[#101E10]"
                    }`}
                  >
                    <Icon size={24} />
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
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#101E10] hover:underline group"
                >
                  Know more
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
